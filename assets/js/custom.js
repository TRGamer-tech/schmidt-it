// Parallax Section Animation: Mehr Tiefe und Bewegung beim Scrollen
function setSectionParallax() {
    const sections = document.querySelectorAll('section');
    const wh = window.innerHeight;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Section ist prominent im Viewport
        if (rect.top < wh * 0.55 && rect.bottom > wh * 0.25) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
}
window.addEventListener('scroll', setSectionParallax);
window.addEventListener('DOMContentLoaded', setSectionParallax);
// Language toggle functionality
function toggleLanguage() {
    document.querySelectorAll('.en').forEach(el => el.classList.toggle('hidden'));
    document.querySelectorAll('.de').forEach(el => el.classList.toggle('hidden'));
    localStorage.setItem('language', document.querySelector('.en').classList.contains('hidden') ? 'de' : 'en');
}

// Set initial language
if (localStorage.getItem('language') === 'en') {
    toggleLanguage();
}

document.getElementById('language-toggle').addEventListener('click', toggleLanguage);
document.getElementById('mobile-language-toggle').addEventListener('click', toggleLanguage);
document.getElementById('footer-language-toggle').addEventListener('click', toggleLanguage);

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
        menu.classList.remove('hidden');
        // Schließen durch Klick auf Overlay
        menu.onclick = function(e) {
            if (e.target === menu) {
                menu.classList.remove('open');
                setTimeout(() => menu.classList.add('hidden'), 400);
            }
        };
    } else {
        setTimeout(() => menu.classList.add('hidden'), 400);
        menu.onclick = null;
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a, #mobile-menu button').forEach(link => {
    link.addEventListener('click', function(e) {
        // Schließe Menü, außer beim Klick auf Sprachumschalter
        if (!this.id.includes('language-toggle')) {
            const menu = document.getElementById('mobile-menu');
            menu.classList.remove('open');
            setTimeout(() => menu.classList.add('hidden'), 400);
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => formObject[key] = value);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert(document.querySelector('.en').classList.contains('hidden') ? 
        'Danke für deine Nachricht! Ich werde mich so schnell wie möglich bei dir melden.' : 
        'Thank you for your message! I will get back to you as soon as possible.');
    
    // Reset form
    this.reset();
});

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8) && (rect.bottom >= 0);
        
        if (isVisible && !bar.dataset.animated) {
            bar.style.width = bar.dataset.width;
            bar.dataset.animated = true;
        }
    });
}

// Animate project cards on scroll
function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8) && (rect.bottom >= 0);
        
        if (isVisible) {
            card.classList.add('visible');
        }
    });
}

// Scroll event listeners
window.addEventListener('scroll', function() {
    animateSkillBars();
    animateProjectCards();
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    animateSkillBars();
    animateProjectCards();
});

// Preloader-Animation beim Laden und Ausblenden
window.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const bar = document.querySelector('.preloader-bar');
    // Nach kurzer Zeit Bar swooshen lassen
    window.addEventListener('load', function() {
        setTimeout(() => {
            bar.classList.add('swoosh');
            setTimeout(() => {
                preloader.classList.add('hide');
                setTimeout(() => preloader.style.display = 'none', 500);
            }, 600);
        }, 400); // Optional: Ladegefühl
    });
});