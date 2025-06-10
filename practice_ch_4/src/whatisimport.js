import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// full path with file name start with file:///the/rest/path
console.log(import.meta.url);
// abosolute path with file name
console.log(__filename);
// absolute directory path
console.log(__dirname);
