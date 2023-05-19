const fs = require('fs');
const path = require('path');

const dirPaths = ["./components", "./pages", "./functions"];
const outputFile = "./components.txt";
const skipFiles = {
  "./pages/login.js": true,
  "./pages/register.js": true,
};

// Read firebase.js in the current directory
const firebaseFilePath = "./firebase.js";
const firebaseContent = fs.readFileSync(firebaseFilePath, 'utf8');
const firebaseLine = `- ./firebase.js: ${firebaseContent.replace(/\n/g, '')}\n`;
fs.appendFileSync(outputFile, firebaseLine);

// Read files in specified directories
dirPaths.forEach(dirPath => {
  fs.readdirSync(dirPath, { withFileTypes: true }).forEach(file => {
    if (file.isFile() && !skipFiles[path.join(dirPath, file.name)]) {
      const filePath = path.join(dirPath, file.name);
      const content = fs.readFileSync(filePath, 'utf8');
      const line = `- ${filePath}: "${content.replace(/\n/g, '')}"\n`;
      fs.appendFileSync(outputFile, line);
    }
  });
});
