document.addEventListener('DOMContentLoaded', () => {
    // Simple header decoration
    const canvas = document.createElement('canvas');
    canvas.classList.add('rough-overlay');
    document.querySelector('.header').appendChild(canvas);
    
    const rc = rough.canvas(canvas);
    const header = document.querySelector('.header');
    
    canvas.width = header.offsetWidth;
    canvas.height = header.offsetHeight;
    
    // Clean, minimal border
    rc.rectangle(10, 10, canvas.width - 20, canvas.height - 20, {
        stroke: '#000000',
        strokeWidth: 1,
        roughness: 1.5
    });
});