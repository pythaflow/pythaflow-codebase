import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import * as cheerio from 'cheerio';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, website, instagram, facebook, linkedin, other, industry, budget, struggle } = data;

    if (!email || (!website && !industry && !instagram)) {
      return NextResponse.json({ error: 'Missing required fields (email and at least one context link/industry)' }, { status: 400 });
    }

    // Define fallback data locally
    const mockResult = {
      intro: "Based on the industry averages and your provided links, we've identified several areas for growth.",
      scores: { website: 3, seo: 2, social: 3, content: 3, ads: 1, strategy: 2 },
      notes: {
        website: "Decent structure but lacks clear conversion pathways.",
        seo: "Missing fundamental meta tags and local SEO signals.",
        social: "Inconsistent posting schedule and low engagement rates.",
        content: "Good baseline, but needs more video and interactive formats.",
        ads: "No tracking pixels detected, likely missing out on retargeting.",
        strategy: "Currently operating without a cohesive full-funnel approach."
      },
      topRedFlag: "No Facebook/Meta pixel installed. You cannot retarget website visitors.",
      topWin: "You have an established brand presence that just needs optimization."
    };

    if (!process.env.OPENROUTER_API_KEY) {
      console.warn("OPENROUTER_API_KEY not set. Using fallback mock data.");
      await prisma.auditRequest.create({
        data: { name: name || "Anonymous User", email: email || "Not provided", website: website || instagram || "N/A", report: JSON.stringify(mockResult) }
      });
      return NextResponse.json(mockResult);
    }

    // Scrape website if provided
    let scrapedTitle = '';
    let scrapedDesc = '';
    let scrapedText = '';

    if (website && website.startsWith('http')) {
      try {
        const scrapeRes = await fetch(website, { 
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
          signal: AbortSignal.timeout(4000)
        });
        if (scrapeRes.ok) {
          const html = await scrapeRes.text();
          const $ = cheerio.load(html);
          scrapedTitle = $('title').text().trim();
          scrapedDesc = $('meta[name="description"]').attr('content') || '';
          
          $('script, style, noscript, iframe, nav, footer, header').remove();
          
          // Extract text from important elements instead of dumping raw body
          const texts = [];
          $('h1, h2, h3, p, li').each((_, el) => {
            const t = $(el).text().trim();
            if (t.length > 20) texts.push(t);
          });
          
          scrapedText = texts.join('\n').replace(/\s+/g, ' ').trim().substring(0, 3000);
        }
      } catch (err) {
        console.warn('Failed to scrape website:', err.message);
      }
    }

    // Prepare prompt for AI
    const prompt = `
You are an expert digital marketing auditor for a premium creative agency.
Evaluate the following brand's digital presence based on this info:
Industry: ${industry}
Website: ${website}
Instagram: ${instagram}
Facebook: ${facebook}
LinkedIn: ${linkedin}
Other Links: ${other}
Monthly Budget: ${budget}
Biggest Struggle: ${struggle}

${scrapedTitle ? `--- START OF SCRAPED WEBSITE DATA ---\nTitle: ${scrapedTitle}\nMeta Description: ${scrapedDesc}\nHomepage Content Extract:\n${scrapedText}\n--- END OF SCRAPED DATA ---\n\n(Use the scraped website data above to write highly accurate, specific, and realistic notes about their actual website structure, SEO, and content.)` : ''}

Analyze this specific data deeply. Generate a highly personalized, realistic, professional, and slightly critical audit report.
Return your response in STRICT JSON format. Do not use markdown blocks, just raw JSON.
The JSON must have this exact structure (all scores MUST be integers between 1 and 5):
{
  "intro": "A 2-sentence professional summary of their specific situation.",
  "scores": { "website": 3, "seo": 2, "social": 4, "content": 3, "ads": 1, "strategy": 2 },
  "notes": { "website": "1-sentence note", "seo": "1-sentence note", "social": "1-sentence note", "content": "1-sentence note", "ads": "1-sentence note", "strategy": "1-sentence note" },
  "topRedFlag": "1-2 sentences on their most critical issue based on their struggle and industry.",
  "topWin": "1-2 sentences on their biggest strength or opportunity."
}
`;

    let resultJson = mockResult;

    try {
      const freeModels = [
        "google/gemini-2.0-flash-lite-preview-02-05:free",
        "google/gemini-2.0-pro-exp-02-05:free",
        "qwen/qwen-2.5-72b-instruct:free",
        "meta-llama/llama-3.3-70b-instruct:free"
      ];
      
      let aiRes = null;
      let aiData = null;

      for (const model of freeModels) {
        try {
          aiRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
              'Content-Type': 'application/json',
              'HTTP-Referer': 'https://pythaflow.com',
              'X-Title': 'Pythaflow'
            },
            body: JSON.stringify({
              model: model, 
              temperature: 0.7,
              response_format: { type: "json_object" },
              messages: [{ role: "user", content: prompt }]
            })
          });

          if (aiRes.ok) {
            aiData = await aiRes.json();
            break;
          }
        } catch (e) {
          console.warn(`Model ${model} failed:`, e.message);
        }
      }

      if (!aiData || !aiData.choices) {
        throw new Error(`All OpenRouter models failed or returned invalid response.`);
      }

      let resultText = aiData.choices[0].message.content;
      
      // Robust JSON extraction
      const jsonMatch = resultText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Could not find JSON in AI response');
      }
      
      const parsed = JSON.parse(jsonMatch[0]);

      if (parsed && parsed.scores && typeof parsed.scores === 'object') {
        const requiredKeys = ['website', 'seo', 'social', 'content', 'ads', 'strategy'];
        for (const key of requiredKeys) {
          if (!parsed.scores[key] || typeof parsed.scores[key] !== 'number') {
            parsed.scores[key] = 3;
          }
        }
        resultJson = parsed;
      } else {
        throw new Error('AI returned invalid JSON structure.');
      }
    } catch (aiErr) {
      console.error('AI generation failed completely:', aiErr.message);
      return NextResponse.json({ error: 'AI analysis failed due to high load. Please try again later.' }, { status: 503 });
    }

    // Save to database
    await prisma.auditRequest.create({
      data: {
        name: name || "Anonymous User",
        email: email || "Not provided",
        website: website || instagram || "N/A",
        report: JSON.stringify(resultJson),
      }
    });

    return NextResponse.json(resultJson);

  } catch (error) {
    console.error('Audit API Error:', error);
    return NextResponse.json({ error: 'Failed to generate audit. Please try again later.' }, { status: 500 });
  }
}
