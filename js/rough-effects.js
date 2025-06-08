document.addEventListener('DOMContentLoaded', () => {
    // Check if RoughJS is loaded
    if (typeof rough === 'undefined') {
        console.warn('RoughJS not loaded');
        return;
    }

    try {
        const header = document.querySelector('.header');
        if (!header) return;

        const canvas = document.createElement('canvas');
        canvas.classList.add('rough-overlay');
        header.appendChild(canvas);

        const rc = rough.canvas(canvas);
        
        // Set dimensions
        const rect = header.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Draw border
        rc.rectangle(10, 10, canvas.width - 20, canvas.height - 20, {
            stroke: '#000000',
            strokeWidth: 1,
            roughness: 1.5
        });
    } catch (error) {
        console.warn('RoughJS decoration failed:', error);
    }
});