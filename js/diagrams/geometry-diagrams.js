function rectangleDiagram({a, b}) {
    return `
        <svg viewBox="0 0 320 220" xmlns="https://www.w3.org/2000/svg"> 
            <rect x="70" y="50" width="180" height="110" fill="none" stroke="#102957" stroke-width="3"/> 
            <!-- labels -->
            <text x="160" y="35" text-anchor="middle" font-size="22" fill="#102957">a</text> 
            <text x="270" y="110" text-anchor="middle" font-size="22" fill="#102957">b</text>
        </svg>
    `;
} 

function equilateralTriangleDiagram({a}) {
    return `
        <svg viewBox="0 0 320 220" xmlns="https://www.w3.org/2000/svg">
            <polygon points="160,35 70,195 250,195" fill="none" stroke="#102957" stroke-width="3"/> 
            <text x="160" y="220" text-anchor="middle" font-size="22" fill="#102957">a</text>
            <text x="75" y="130" text-anchor="middle" font-size="22" fill="#102957">a</text> 
            <text x="245" y="130" text-anchor="middle" font-size="22" fill="#102957">a</text>
        </svg>
    `;
} 

function rightTriangleDiagram({a, b, c}) {
    return `
        <svg viewBox="0 0 320 220" xmlns="https://www.w3.org/2000/svg">
            <polygon points="70,195 70,55 250,195" fill="none" stroke="#102957" stroke-width="3" /> 
            <polyline points="70,175 90,175 90,195" fill="none" stroke="#102957" stroke-width="2" /> 
            <!-- labels --> 
            <text x="48" y="130" text-anchor="middle" font-size="22" fill="#102957">a</text> 
            <text x="160" y="220" text-anchor="middle" font-size="22" fill="#102957">b</text> 
            <text x="175" y="115" text-anchor="middle" font-size="22" fill="#102957">c</text> 
        </svg>
    `;
} 

function circleDiagram({r}) {
    return `
        <svg viewBox="0 0 320 220" xmlns="https://www.w3.org/2000/svg">
            <circle cx="150" cy="125" r="80" fill="none" stroke="#102957" stroke-width="3" /> 
            <line x1="150" y1="125" x2="230" y2="125" stroke="#102957" stroke-width="2" /> 
            <circle cx="150" cy="125" r="4" fill="#102957" /> 
            <!-- label --> 
            <text x="190" y="115" text-anchor="middle" font-size="22" fill="#102957">r</text> 
        </svg>
    `;
} 

function cubeDiagram({a}) {
    return `
        <svg viewBox="0 0 320 220" xmlns="https://www.w3.org/2000/svg">
            <polygon points="80,70 190,70 190,180 80,180" fill="none" stroke="#102957" stroke-width="3" /> 
            <polygon points="80,70 130,35 240,35 190,70" fill="none" stroke="#102957" stroke-width="3" /> 
            <line x1="190" y1="180" x2="240" y2="145" stroke="#102957" stroke-width="3" /> 
            <line x1="240" y1="35" x2="240" y2="145" stroke="#102957" stroke-width="3" /> 
            <text x="135" y="200" text-anchor="middle" font-size="22" fill="#102957">a</text> 
            <text x="220" y="180" text-anchor="middle" font-size="22" fill="#102957">a</text> 
            <text x="65" y="135" text-anchor="middle" font-size="22" fill="#102957">a</text>
        </svg>
    `;
} 

function rectangularPrismDiagram({length, width, height}) {
    return `
        <svg viewBox="0 0 320 220" xmlns="https://www.w3.org/2000/svg">
            <polygon points="60,80 200,80 200,175 60,175" fill="none" stroke="#102957" stroke-width="3" /> 
            <polygon points="60,80 115,40 255,40 200,80" fill="none" stroke="#102957" stroke-width="3" /> 
            <polygon points="200,80 255,40 255,135 200,175" fill="none" stroke="#102957" stroke-width="3" /> 
            <text x="130" y="200" text-anchor="middle" font-size="22" fill="#102957">a</text> 
            <text x="42" y="130" text-anchor="middle" font-size="22" fill="#102957">h</text> 
            <text x="245" y="180" text-anchor="middle" font-size="22" fill="#102957">b</text>
        </svg>
    `;
}

function cylinderDiagram({r, h}) {
    return `
        <svg viewBox="0 0 320 220" xmlns="https://www.w3.org/2000/svg">
            <ellipse cx="150" cy="50" rx="80" ry="25" fill="none" stroke="#102957" stroke-width="3" /> 
            <line x1="70" y1="50" x2="70" y2="165" stroke="#102957" stroke-width="3" /> 
            <line x1="230" y1="50" x2="230" y2="165" stroke="#102957" stroke-width="3" /> 
            <ellipse cx="150" cy="165" rx="80" ry="25" fill="none" stroke="#102957" stroke-width="3" /> 
            <line x1="150" y1="50" x2="230" y2="50" stroke="#102957" stroke-width="3" /> 
            <circle cx="150" cy="50" r="4" fill="#102957" /> 
            <text x="190" y="45" text-anchor="middle" font-size="22" fill="#102957">r</text> 
            <text x="250" y="112" text-anchor="middle" font-size="22" fill="#102957">h</text>
        </svg>
    `;
}

function unitCircleDiagram(angle) {

    const centerX = 160; 
    const centerY = 120; 
    const radius = 80; 
    const radians = angle * Math.PI / 180; 
    const pointX = centerX + radius * Math.cos(radians); 
    const pointY = centerY - radius * Math.sin(radians); 

    return `
        <svg viewBox="0 0 320 220" xmlns="https://www.w3.org/2000/svg">
            <!-- x-axis -->
            <line x1="30" y1="${centerY}" x2="290" y2="${centerY}" stroke="#102957" stroke-width="2" /> 
            <!-- y-axis -->
            <line x1="${centerX}" y1="0" x2="${centerX}" y2="260" stroke="#102957" stroke-width="2" /> 
            <!-- x-axis arrow -->
            <polygon points="290,120 278,114 278,126" fill="#102957" /> 
            <!-- y-axis arrow-->
            <polygon points="160,0 154,12 166,12" fill="#102957" /> 
            <!-- unit circle -->
            <circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="none" stroke="#102957" stroke-width="3" /> 
            <!-- unit circle center -->
            <circle cx="${centerX}" cy="${centerY}" r="4" fill="#102957" /> 
            <!-- angle radius -->
            <line x1="${centerX}" y1="${centerY}" x2="${pointX}" y2="${pointY}" stroke="#0A5C36" stroke-width="2" /> 
            <!-- point on circle --> 
            <circle cx="${pointX}" cy="${pointY}" r="5" fill="#0A5C36" /> 
            <!-- labels -->
            <text x="285" y="146" font-size="18" fill="#102957">x</text>
            <text x="170" y="15" font-size="18" fill="#102957">y</text> 
            <text x="168" y="145" font-size="18" fill="#102957">0</text>
            <text x="245" y="145" font-size="18" fill="#102957">1</text>
            <text x="145" y="35" font-size="18" fill="#102957">1</text>
            <text x="55" y="145" font-size="18" fill="#102957">-1</text>
            <text x="135" y="220" font-size="18" fill="#102957">-1</text> 
            <text x="${centerX + 25}" y="${centerY - 15}" font-size="15" fill="#0A5C36">${angle}°</text>
        </svg>
    `;
}