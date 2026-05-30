/**
 * Input validation & sanitisation for the assessment API route
 * Prevents XSS, prompt injection, and spam submissions
 */

const MAX_LEN = 200;

function strip(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .slice(0, MAX_LEN)
    // Remove characters that could break JSON or inject prompts
    .replace(/[<>{}[\]\\]/g, '')
    .replace(/(\bignore\b|\bforget\b|\bsystem\b|\bprompt\b)/gi, '');
}

function isValidUrl(str) {
  if (!str) return true; // optional field
  try {
    const url = new URL(str.startsWith('http') ? str : `https://${str}`);
    return ['http:', 'https:'].includes(url.protocol);
  } catch {
    return false;
  }
}

/**
 * Validates and sanitises assessment form inputs
 * @returns {{ valid: boolean, data: object, error: string|null }}
 */
export function validateAssessmentInput(body) {
  const { website, instagram, facebook, linkedin, other, industry, budget, struggle } = body || {};

  const cleanWebsite = strip(website);
  const cleanIndustry = strip(industry);

  // At least one input must be provided
  if (!cleanWebsite && !cleanIndustry && !strip(instagram)) {
    return { valid: false, data: null, error: 'Please provide at least your website or industry.' };
  }

  if (cleanWebsite && !isValidUrl(cleanWebsite)) {
    return { valid: false, data: null, error: 'Please enter a valid website URL.' };
  }

  const ALLOWED_BUDGETS = [
    '', 'Under $500/mo', '$500 – $2,000/mo', '$2,000 – $5,000/mo',
    '$5,000 – $15,000/mo', '$15,000+/mo',
  ];
  const ALLOWED_STRUGGLES = [
    '', 'Not enough leads / sales', 'Low social media engagement',
    'Poor website traffic', 'Weak brand presence',
    'Content creation bandwidth', 'No clear strategy',
  ];

  const cleanBudget = ALLOWED_BUDGETS.includes(budget) ? budget : '';
  const cleanStruggle = ALLOWED_STRUGGLES.includes(struggle) ? struggle : '';

  return {
    valid: true,
    error: null,
    data: {
      website: cleanWebsite,
      instagram: strip(instagram),
      facebook: strip(facebook),
      linkedin: strip(linkedin),
      other: strip(other),
      industry: cleanIndustry,
      budget: cleanBudget,
      struggle: cleanStruggle,
    },
  };
}
