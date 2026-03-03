import fs from 'fs';
const rawInfo = fs.readFileSync('../Slides Design Coda.html', 'utf8');
const firstIndex = rawInfo.search(/const categories =/); const lastIndex = rawInfo.search(/function generatePrompts/); fs.writeFileSync('data.js', rawInfo.substring(firstIndex, lastIndex));
