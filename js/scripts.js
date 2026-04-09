// Responsive Navigation Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        
        // Simple form validation
        if (!name) {
            alert('Please enter your name');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Image Lazy Loading
const lazyImages = document.querySelectorAll('img');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                // Remove opacity manipulation to ensure images are always visible
                image.style.transition = 'opacity 0.5s ease';
                
                // Load the image
                const src = image.getAttribute('src');
                if (src) {
                    // Image is already loaded from HTML, no need for additional loading
                }
                
                observer.unobserve(image);
            }
        });
    });
    
    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
}

// Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-item, .testimonial-item, .food-item, .ingredient-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial setup for animation
const setupAnimation = () => {
    const elements = document.querySelectorAll('.feature-item, .testimonial-item, .food-item, .ingredient-item');
    
    elements.forEach(element => {
        // Set initial opacity to 1 to ensure elements are visible
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
};

// Initialize animations
window.addEventListener('load', setupAnimation);
window.addEventListener('scroll', animateOnScroll);

// Call once on load to animate elements already in view
window.addEventListener('load', animateOnScroll);

// Add hover effects to buttons
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation for page transitions
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Set initial body opacity for smooth loading
document.body.style.opacity = '0';