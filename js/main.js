// Edmonton Gallery Walk - Main JavaScript

const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');
const siteHeader = document.querySelector('header');

function setMenuState(isOpen, returnFocus = false) {
    if (!nav || !menuToggle) return;

    nav.classList.toggle('nav-open', isOpen);
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

    if (returnFocus) menuToggle.focus();
}

menuToggle?.addEventListener('click', () => {
    setMenuState(menuToggle.getAttribute('aria-expanded') !== 'true');
});

nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
        setMenuState(false, true);
    }
});

document.addEventListener('click', (event) => {
    if (
        menuToggle?.getAttribute('aria-expanded') === 'true' &&
        siteHeader &&
        !siteHeader.contains(event.target)
    ) {
        setMenuState(false);
    }
});

const desktopQuery = window.matchMedia('(min-width: 881px)');
desktopQuery.addEventListener?.('change', (event) => {
    if (event.matches) setMenuState(false);
});

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.gallery-card, .event-card').forEach((element, index) => {
        element.style.animationDelay = `${Math.min(index * 80, 420)}ms`;
        observer.observe(element);
    });
}
