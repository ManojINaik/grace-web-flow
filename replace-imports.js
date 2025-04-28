import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, 'src', 'components');

function processFile(filePath) {
  // Skip our custom Image component
  if (filePath.includes('src/components/Image.tsx')) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Replace next/image imports
  let newContent = content.replace(
    /import\s+Image\s+from\s+["']next\/image["'];?/g,
    `import Image from '@/components/Image';`
  );

  // Save the file if changes were made
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated imports in ${filePath}`);
  }
}

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      traverseDirectory(filePath);
    } else if (stat.isFile() && (filePath.endsWith('.tsx') || filePath.endsWith('.jsx'))) {
      processFile(filePath);
    }
  }
}

traverseDirectory(componentsDir);
console.log('Import replacement complete!'); 