document.addEventListener('DOMContentLoaded', () => {
    // Initialize rough.js effects for Edmonton Gallery Walk
    
    // 1. Header sketchy border (your existing effect, enhanced)
    addHeaderBorder();
    
    // 2. Add gallery frames around images
    addGalleryFrames();
    
    // 3. Add simple section dividers
    addSectionDividers();
    
    // 4. Add footer decoration
    addFooterDecoration();
    
    // Handle responsive resizing
    window.addEventListener('resize', debounce(refreshCanvases, 300));
});

function addHeaderBorder() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    const canvas = document.createElement('canvas');
    canvas.classList.add('rough-overlay');
    canvas.id = 'header-canvas';
    header.appendChild(canvas);
    
    const rc = rough.canvas(canvas);
    
    // Set canvas size
    canvas.width = header.offsetWidth;
    canvas.height = header.offsetHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    header.style.position = 'relative';
    
    // Draw enhanced sketchy border
    rc.rectangle(10, 10, canvas.width - 20, canvas.height - 20, {
        stroke: '#000000',
        strokeWidth: 3,
        roughness: 2,
        strokeLineDash: [5, 5],
        strokeLineDashOffset: 3
    });
    
    // Add corner decorations
    const cornerSize = 20;
    const corners = [
        [20, 20], [canvas.width - 20, 20], 
        [20, canvas.height - 20], [canvas.width - 20, canvas.height - 20]
    ];
    
    corners.forEach(([x, y]) => {
        rc.circle(x, y, cornerSize, {
            fill: '#4ECDC4',
            fillStyle: 'solid',
            stroke: '#000',
            strokeWidth: 2,
            roughness: 1.5
        });
    });
    
    // Add decorative stars
    if (canvas.width > 400) {
        addStar(rc, canvas.width / 2, 30, 15);
    }
}

function addGalleryFrames() {
    const galleryImages = document.querySelectorAll('wired-card img');
    
    galleryImages.forEach((img, index) => {
        const container = img.parentElement;
        container.style.position = 'relative';
        
        const canvas = document.createElement('canvas');
        canvas.classList.add('gallery-frame');
        canvas.id = `gallery-frame-${index}`;
        canvas.width = img.offsetWidth || 300;
        canvas.height = (img.offsetHeight || 200) + 40; // Extra space for frame
        canvas.style.position = 'absolute';
        canvas.style.top = '-20px';
        canvas.style.left = '50%';
        canvas.style.transform = 'translateX(-50%)';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '1';
        
        container.insertBefore(canvas, img);
        
        const rc = rough.canvas(canvas);
        
        // Create sketchy frame
        rc.rectangle(10, 20, canvas.width - 20, canvas.height - 40, {
            stroke: '#8B4513',
            strokeWidth: 6,
            roughness: 2,
            fill: '#F5DEB3',
            fillStyle: 'hachure',
            hachureGap: 8
        });
        
        // Inner frame
        rc.rectangle(20, 30, canvas.width - 40, canvas.height - 60, {
            stroke: '#654321',
            strokeWidth: 2,
            roughness: 1.5
        });
    });
}

function addSectionDividers() {
    const sections = document.querySelectorAll('.about-section');
    
    sections.forEach((section, index) => {
        if (index < sections.length - 1) { // Don't add after last section
            const canvas = document.createElement('canvas');
            canvas.classList.add('section-divider');
            canvas.id = `divider-${index}`;
            canvas.width = Math.min(600, section.offsetWidth);
            canvas.height = 40;
            canvas.style.display = 'block';
            canvas.style.margin = '2rem auto';
            
            section.insertAdjacentElement('afterend', canvas);
            
            const rc = rough.canvas(canvas);
            
            // Create wavy line
            const points = [];
            for (let i = 0; i <= canvas.width; i += 20) {
                points.push([i, 20 + Math.sin(i / 30) * 10]);
            }
            
            rc.curve(points, {
                stroke: '#FF6B6B',
                strokeWidth: 3,
                roughness: 1.2
            });
            
            // Add small decorative circles
            for (let i = 0; i < 3; i++) {
                rc.circle(
                    (canvas.width / 4) * (i + 1),
                    15 + Math.random() * 10,
                    5,
                    {
                        fill: '#4ECDC4',
                        fillStyle: 'solid',
                        roughness: 2
                    }
                );
            }
        }
    });
}

function addFooterDecoration() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    
    const canvas = document.createElement('canvas');
    canvas.classList.add('footer-decoration');
    canvas.id = 'footer-canvas';
    canvas.width = Math.min(500, footer.offsetWidth - 40);
    canvas.height = 60;
    canvas.style.display = 'block';
    canvas.style.margin = '0 auto 1rem';
    
    footer.insertBefore(canvas, footer.firstChild);
    
    const rc = rough.canvas(canvas);
    
    // Create decorative banner
    rc.rectangle(20, 15, canvas.width - 40, 30, {
        fill: '#FF6B6B',
        fillStyle: 'cross-hatch',
        stroke: '#000',
        strokeWidth: 2,
        roughness: 1.5
    });
    
    // Add "Est. 1981" in center
    rc.ellipse(canvas.width / 2, 30, 100, 25, {
        fill: 'white',
        stroke: '#000',
        strokeWidth: 2,
        roughness: 1
    });
}

function addStar(rc, x, y, size) {
    const starPoints = [];
    for (let i = 0; i < 10; i++) {
        const angle = (i * Math.PI) / 5;
        const radius = i % 2 === 0 ? size : size / 2;
        starPoints.push([
            x + Math.cos(angle) * radius,
            y + Math.sin(angle) * radius
        ]);
    }
    
    rc.polygon(starPoints, {
        fill: '#FFFF00',
        fillStyle: 'solid',
        stroke: '#000',
        strokeWidth: 2,
        roughness: 1.5
    });
}

function refreshCanvases() {
    // Remove existing canvases
    document.querySelectorAll('.rough-overlay, .gallery-frame, .section-divider, .footer-decoration').forEach(canvas => {
        canvas.remove();
    });
    
    // Recreate effects
    addHeaderBorder();
    addGalleryFrames();
    addSectionDividers();
    addFooterDecoration();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}