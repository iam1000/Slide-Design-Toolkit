import fs from 'fs';
const ext = JSON.stringify(exports.default); fs.writeFileSync('test.js', ext);

