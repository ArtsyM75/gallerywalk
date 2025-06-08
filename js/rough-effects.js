document.addEventListener('DOMContentLoaded', () => {
    // Wait for custom elements to be defined
    setTimeout(() => {
        try {
            const header = document.querySelector('.header');
            if (!header) return;

            // Create canvas
            const canvas = document.createElement('canvas');
            canvas.classList.add('rough-overlay');
            header.appendChild(canvas);

            // Initialize RoughJS
            const rc = rough.canvas(canvas);
            if (!rc) return;

            // Set dimensions
            const rect = header.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            // Draw border
            rc.rectangle(10, 10, canvas.width - 20, canvas.height - 20, {
                stroke: '#000000',
                strokeWidth: 1,
                roughness: 1.5,
                fill: 'none'
            });
        } catch (error) {
            console.warn('RoughJS decoration failed:', error);
        }
    }, 100);
});