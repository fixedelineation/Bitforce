#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const dataDir = path.resolve(__dirname, '../data');
const districtsDir = path.resolve(__dirname, '../districts');
const templatePath = path.resolve(__dirname, '../templates/district_template.html');

function generate(){
  const legFile = path.join(dataDir, 'legislators.json');
  const template = fs.readFileSync(templatePath,'utf8');
  const legs = JSON.parse(fs.readFileSync(legFile,'utf8'));

  if(!fs.existsSync(districtsDir)) fs.mkdirSync(districtsDir);

  Object.keys(legs).forEach(slug => {
    const meta = legs[slug];
    const outDir = path.join(districtsDir, slug);
    if(!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const html = template
      .replace('{{title}}', `${meta.name} — ${slug}`)
      .replace('{{description}}', `Action page for ${meta.name}`)
      .replace('{{heading}}', `${meta.name} (${slug.toUpperCase()})`)
      .replace('{{intro}}', `Office: ${meta.office} — Phone: ${meta.phone}`);

    fs.writeFileSync(path.join(outDir,'index.html'), html, 'utf8');
    console.log('Generated', slug);
  });
}

generate();
