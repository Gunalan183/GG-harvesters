import fs from 'fs';
import path from 'path';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.jsx')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace old green colors with premium dark theme classes (emerald/teal mix)
  content = content.replace(/bg-green-900/g, 'bg-emerald-950');
  content = content.replace(/bg-green-800/g, 'bg-emerald-900');
  content = content.replace(/bg-green-700/g, 'bg-emerald-800');
  content = content.replace(/bg-[#1a5c2e]/g, 'bg-emerald-900');
  content = content.replace(/bg-\[\#0a2d16\]/g, 'bg-emerald-950');
  content = content.replace(/text-[#d4a017]/g, 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200');
  content = content.replace(/text-[#f0cc5a]/g, 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100');
  
  // Transform inline style backgrounds
  content = content.replace(/style={{[^}]*background:\s*['"]#1a5c2e['"][^}]*}}/g, 'className="bg-emerald-900/90 backdrop-blur-xl border border-emerald-700/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]"');
  content = content.replace(/style={{[^}]*background:\s*['"]linear-gradient[^"']*['"][^}]*}}/g, 'className="bg-gradient-to-br from-emerald-900 to-emerald-950 border border-emerald-800"');
  
  // Upgrade buttons to glassmorphic or neon
  content = content.replace(/className="([^"]*)btn-primary([^"]*)"/g, 'className="$1 relative overflow-hidden group bg-gradient-to-br from-amber-500 to-yellow-500 text-emerald-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 rounded-xl $2"');
  content = content.replace(/className="([^"]*)btn-secondary([^"]*)"/g, 'className="$1 relative overflow-hidden group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl $2"');
  
  // Modernize cards (wherever bg-white is used inside a block)
  content = content.replace(/className="([^"]*)bg-white([^"]*)shadow-md([^"]*)"/g, 'className="$1 bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] hover:-translate-y-2 transition-all duration-500 $2 $3"');
  content = content.replace(/className="([^"]*)bg-white([^"]*)shadow-sm([^"]*)"/g, 'className="$1 bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-lg hover:-translate-y-1 transition-all duration-300 $2 $3"');
  content = content.replace(/className="([^"]*)bg-gray-50([^"]*)"/g, 'className="$1 bg-slate-950 $2"');
  
  // Transform text colors for dark mode globally
  content = content.replace(/text-gray-900/g, 'text-gray-50');
  content = content.replace(/text-gray-800/g, 'text-gray-100');
  content = content.replace(/text-gray-700/g, 'text-gray-300');
  content = content.replace(/text-gray-600/g, 'text-gray-400');
  content = content.replace(/text-gray-500/g, 'text-gray-500');
  
  // Modernize header & footer explicitly (glassmorphism)
  if (file.includes('Header.jsx')) {
    content = content.replace(/bg-white/g, 'bg-slate-950/80 backdrop-blur-2xl border-b border-white/10');
    content = content.replace(/shadow-sm/g, 'shadow-[0_4px_30px_rgba(0,0,0,0.3)]');
  }

  // Update layout wrapper for full dark theme
  if (file.includes('Layout.jsx')) {
    content = content.replace(/className="flex flex-col min-h-screen"/, 'className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/30 font-sans"');
  }
  
  // Update section to have dynamic entrances
  content = content.replace(/<section className="([^"]*)"/g, '<section className="$1 animate-fade-in-up"');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Transform complete!');
