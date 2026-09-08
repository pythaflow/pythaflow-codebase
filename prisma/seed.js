const { PrismaClient } = require('./generated-client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Database...');

  // 1. Admin
  const email = 'pythaflow@gmail.com';
  const existingAdmin = await prisma.admin.findUnique({ where: { email } });
  if (!existingAdmin) {
    const hashed = await bcrypt.hash('admin123', 10);
    await prisma.admin.create({ data: { email, password: hashed } });
    console.log(`Admin user created: ${email} / admin123`);
  } else {
    console.log(`Admin user already exists: ${email}`);
  }

  // 2. Services
  const services = [
    {
      name: 'Digital Marketing',
      sorting: 1,
      description: 'Full-funnel campaigns across every channel. Strategy, creative, execution and analytics — we drive real, measurable growth.',
      tags: 'SEO / SEM, Paid Ads, Email, Analytics',
      tasks: '',
      status: true
    },
    {
      name: 'Graphics & Brand Design',
      sorting: 2,
      description: 'Visual identities that speak before you do. Brand systems, logos, print and digital — built to be distinct and durable.',
      tags: 'Brand Identity, UI/UX, Print, Social Kits',
      tasks: '',
      status: true
    },
    {
      name: 'Motion Design & Video',
      sorting: 3,
      description: 'Animated content that stops the scroll. Motion graphics, reels, commercials and brand films crafted for maximum impact.',
      tags: 'Motion Graphics, Reels, Ad Creatives, Film',
      tasks: '',
      status: true
    },
    {
      name: 'Web Design & Development',
      sorting: 4,
      description: 'Fast, conversion-focused websites that look as good as they perform. Built on modern tech, optimised for every device.',
      tags: 'React, Next.js, WordPress, E-commerce',
      tasks: '',
      status: true
    }
  ];

  const serviceMap = {};
  for (const data of services) {
    const existingService = await prisma.service.findFirst({ where: { name: data.name } });
    if (existingService) {
      console.log(`Service already exists: ${data.name}`);
      serviceMap[data.name] = existingService.id;
    } else {
      const created = await prisma.service.create({ data });
      console.log(`Service created: ${data.name}`);
      serviceMap[data.name] = created.id;
    }
  }

  // 3. Projects
  const projects = [
    {
      title: 'Brand Identity System',
      shortDescription: 'Complete visual identity for a lifestyle brand — logo, colour system, typography, brand guidelines.',
      description: '<h2>The Brief</h2><p>The client approached us to revamp their entire visual identity. They were transitioning from a local boutique to a national lifestyle brand and needed an identity that could scale while retaining their core ethos.</p><h2>The Solution</h2><p>We developed a comprehensive brand system anchored by a bespoke logo mark, a sophisticated colour palette, and strict typography rules. We delivered a 60-page brand guidelines document ensuring consistency across all touchpoints.</p>',
      imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop',
      tags: 'Logo, Brand System, Guidelines',
      liveLink: 'https://example.com',
      serviceId: serviceMap['Graphics & Brand Design'] || null,
      status: true,
      sorting: 1
    },
    {
      title: 'Social Campaign ROAS 340%',
      shortDescription: 'Multi-channel paid campaign that drove 340% ROAS in 60 days for an e-commerce client.',
      description: '<h2>The Challenge</h2><p>The client had hit a plateau with their current agency. Their customer acquisition cost (CAC) was creeping up, and they were bleeding money on broad, untargeted campaigns.</p><h2>The Execution</h2><p>We rebuilt their entire ad account structure from scratch. Implementing strict lookalike audiences, retargeting funnels, and high-converting creative video assets. Within 60 days, we stabilized the CAC and achieved a 340% Return on Ad Spend (ROAS).</p>',
      imageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop',
      tags: 'Meta Ads, Google Ads, Strategy',
      liveLink: 'https://example.com/campaign',
      serviceId: serviceMap['Digital Marketing'] || null,
      status: true,
      sorting: 2
    },
    {
      title: 'E-commerce Next.js Platform',
      shortDescription: 'Custom Next.js store — sub-2s load time, mobile-first, 89 Lighthouse score.',
      description: '<h2>The Goal</h2><p>Migrate a legacy WooCommerce store handling 10,000+ SKUs to a modern, headless architecture to vastly improve load times and user experience.</p><h2>The Build</h2><p>We architected a custom frontend using Next.js and Tailwind CSS, interfacing with their backend via GraphQL APIs. The result was a blazing fast, highly interactive shopping experience that increased mobile conversion rates by 42%.</p>',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      tags: 'Next.js, E-commerce, UI/UX, React',
      githubLink: 'https://github.com',
      liveLink: 'https://example-store.com',
      serviceId: serviceMap['Web Design & Development'] || null,
      status: true,
      sorting: 3
    }
  ];

  for (const data of projects) {
    const existingProject = await prisma.project.findFirst({ where: { title: data.title } });
    if (existingProject) {
      console.log(`Project already exists: ${data.title}`);
    } else {
      await prisma.project.create({ data });
      console.log(`Project created: ${data.title}`);
    }
  }

  // 4. Sliders
  const sliders = [
    {
      title: 'WE MAKE BRANDS\nMOVE.',
      shortDescription: 'From strategy to pixel-perfect execution, we build digital experiences that drive real revenue and connect with your audience.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      sorting: 1,
      status: true
    },
    {
      title: 'DIGITAL\nTRANSFORMATION.',
      shortDescription: 'We modernize legacy systems and create seamless workflows that empower your team to do their best work.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      sorting: 2,
      status: true
    },
    {
      title: 'GLOBAL\nREACH.',
      shortDescription: 'Operating from Dhaka to Canada, we bring world-class engineering to ambitious brands everywhere.',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      sorting: 3,
      status: true
    }
  ];

  for (const data of sliders) {
    const existingSlider = await prisma.sliderContent.findFirst({ where: { title: data.title } });
    if (existingSlider) {
      console.log(`Slider already exists: ${data.title.replace(/\n/g, ' ')}`);
    } else {
      await prisma.sliderContent.create({ data });
      console.log(`Slider created: ${data.title.replace(/\n/g, ' ')}`);
    }
  }

  console.log('Database Seeding Completed Successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
