// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Fechar todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle do item atual
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
});

// Animações on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos com animações
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll([
        '.animate-fade-in',
        '.animate-fade-in-up',
        '.animate-fade-in-down',
        '.animate-fade-in-left',
        '.animate-fade-in-right',
        '.animate-slide-in-bottom',
        '.animate-slide-in-top',
        '.animate-zoom-in',
        '.animate-bounce-in',
        '.animate-rotate-in',
        '.animate-flip-in'
    ].join(','));

    animatedElements.forEach(el => {
        // Inicialmente oculto
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(el);
    });
});

// Parallax effect para o phone
document.addEventListener('mousemove', function(e) {
    const phone = document.querySelector('.phone-wrapper');
    if (phone) {
        const rect = phone.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / 50;
        const deltaY = (e.clientY - centerY) / 50;
        
        phone.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
    }
});

// Reset phone position when mouse leaves
document.addEventListener('mouseleave', function() {
    const phone = document.querySelector('.phone-wrapper');
    if (phone) {
        phone.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    }
});

// Contador animado para estatísticas
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Observar contadores quando entram na tela
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const text = element.textContent;
            
            // Extrair número do texto
            const match = text.match(/(\d+)/);
            if (match) {
                const number = parseInt(match[1]);
                element.textContent = '0' + text.replace(/\d+/, '');
                animateCounter(element, number);
            }
            
            counterObserver.unobserve(element);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-number, .problem-stat-number, .testimonial-stat-number');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

// Efeito de typing para títulos
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Loading screen (opcional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Lazy loading para imagens
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Scroll to top button
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: linear-gradient(45deg, #ff00d6, #6605ff);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(255, 0, 214, 0.3);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
}

// Inicializar scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// Performance optimization: debounce scroll events
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

// Aplicar debounce aos eventos de scroll
const debouncedScrollHandler = debounce(() => {
    // Scroll handlers aqui
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical images
function preloadImages() {
    const criticalImages = [
        '/imgs/fundo.png',
        '/imgs/7.png',
        '/imgs/8.png',
        '/imgs/9.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

document.addEventListener('DOMContentLoaded', preloadImages);