async function main() {
  console.log('Seeding demo sliders via API...');

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
    const res = await fetch('http://localhost:3000/api/sliders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      console.error('Failed to insert slider:', data.title);
    }
  }

  console.log('Sliders seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
