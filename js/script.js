document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Success message
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset(); // Clear the form
                } else {
                    // Error handling
                    alert('Oops! There was a problem submitting your form. Please try again.');
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                alert('An error occurred. Please try again later.');
            });
        });
    }

    // Optional: Dynamic Year in Footer
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${currentYear} Blaise Mibeck. All Rights Reserved.`;
    }
});
