import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace colors for a Premium Yellow/Gold Theme
    content = content.replace(/#1a5c2e/g, '#d4a017'); // Primary Dark Green to Gold
    content = content.replace(/#145224/g, '#b8870f'); // Hover Dark Green to Hover Gold
    content = content.replace(/#2d8a4e/g, '#e5b22b'); // Secondary Green to Lighter Gold
    content = content.replace(/#e8f5ec/g, '#fdf8e8'); // Light Green to Light Yellow
    content = content.replace(/#c8e6d0/g, '#f6e4a8'); // Border Green to Border Yellow

    content = content.replace(/rgba\(26, 92, 46/g, 'rgba(212, 160, 23'); // Primary Green RGB to Gold RGB
    content = content.replace(/rgba\(26,92,46/g, 'rgba(212,160,23');

    // Also replace some specific layout text colors from deep green to deep neutral/golden black
    content = content.replace(/#f7fdf9/g, '#fcfaf6'); // Body bg
    content = content.replace(/#1a2e1a/g, '#1a1814'); // Body text
    content = content.replace(/#1b5e20/g, '#f0cc5a'); // Brand earth text

    // Specific gradients referencing green
    content = content.replace(/#0f2918 0%, #1a5c2e 55%, #0a1f12/g, '#d4a017 0%, #f0cc5a 55%, #b8870f');

    // If there's any remaining green references
    content = content.replace(/--color-green-/g, '--color-primary-');

    fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.css') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            replaceInFile(fullPath);
        }
    });
}

processDirectory('./src');
console.log('Yellow Premium styling applied.');
