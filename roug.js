fs://github/ArtsyM75/gallerywalk/js/rough-effects.js
document.addEventListener('DOMContentLoaded', () => {
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.classList.add('rough-overlay');
    document.querySelector('.header').appendChild(canvas);
    
    // Initialize RoughJS
    const rc = rough.canvas(canvas);
    
    // Match canvas size to header
    const header = document.querySelector('.header');
    canvas.width = header.offsetWidth;
    canvas.height = header.offsetHeight;
    
    // Draw header border
    rc.rectangle(10, 10, canvas.width - 20, canvas.height - 20, {
        stroke: '#000000',
        strokeWidth: 2,
        roughness: 2,
        bowing: 2
    });
    
    // Add decorative elements
    rc.circle(50, 50, 30, {
        stroke: '#FF6B6B',
        fill: 'none',
        roughness: 1.5
    });
});
