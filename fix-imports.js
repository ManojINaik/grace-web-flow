// fix-imports.js
const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Replace next/image imports
    let newContent = content.replace(
      /import\s+Image\s+from\s+["']next\/image["'];?/g,
      `import Image from '@/components/Image';`
    );
    
    // Save the file if changes were made
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated Next.js Image import in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

function traverseDirectory(dir) {
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        traverseDirectory(filePath);
      } else if (stat.isFile() && (filePath.endsWith('.tsx') || filePath.endsWith('.jsx') || filePath.endsWith('.ts'))) {
        processFile(filePath);
      }
    }
  } catch (error) {
    console.error(`Error traversing directory ${dir}:`, error);
  }
}

console.log('Starting import replacement...');
traverseDirectory(componentsDir);
console.log('Import replacement complete!'); 