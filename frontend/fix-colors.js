const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/text-white/g, 'text-foreground');
  content = content.replace(/hover:text-white/g, 'hover:text-primary');
  content = content.replace(/text-gray-300/g, 'text-muted');
  content = content.replace(/hover:text-primary/g, 'hover:text-primary'); 
  content = content.replace(/color=\"#3b82f6\"/g, 'color=\"#0284c7\"');
  content = content.replace(/border-white\/20/g, 'border-foreground\/20');
  content = content.replace(/hover:border-white\/50/g, 'hover:border-foreground\/50');
  
  fs.writeFileSync(filePath, content);
}

const dirs = ['components/Navbar', 'components/Hero', 'components/Footer', 'components/ThreeScene'];
dirs.forEach(dir => {
  const indexFile = path.join(process.cwd(), dir, 'index.tsx');
  if (fs.existsSync(indexFile)) {
    replaceInFile(indexFile);
    console.log('Updated ' + indexFile);
  }
});
