document.addEventListener('DOMContentLoaded', () => {
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.classList.add('rough-overlay');
    document.querySelector('.header').appendChild(canvas);
    
    // Initialize RoughJS
    const rc = rough.canvas(canvas);
    
    // Set canvas size
    const header = document.querySelector('.header');
    canvas.width = header.offsetWidth;
    canvas.height = header.offsetHeight;
    
    // Draw sketchy border
    rc.rectangle(10, 10, canvas.width - 20, canvas.height - 20, {
        stroke: '#000000',
        strokeWidth: 2,
        roughness: 2
    });
});