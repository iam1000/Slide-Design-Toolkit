import fs from 'fs';
let data = fs.readFileSync('../Slides Design Coda.html', 'utf8');
let first = data.indexOf('const DESIGN');
let last = data.indexOf('function generatePrompts');
fs.writeFileSync('output.js', data.substring(first, last));
