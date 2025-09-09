// Edmonton Gallery Walk - Main JavaScript

// Mobile menu toggle
function toggleMenu() {
    const nav = document.getElementById('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!nav || !menuToggle) return;
    
    nav.classList.toggle('nav-open');
    menuToggle.classList.toggle('active');
}

// Close mobile menu when clicking nav links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.getElementById('nav');
            if (nav && nav.classList.contains('nav-open')) {
                nav.classList.remove('nav-open');
            }
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('nav').classList.remove('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe gallery cards and event cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-card, .event-card').forEach(el => {
        observer.observe(el);
    });
});