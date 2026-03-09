/* ==========================================================================
   Main JavaScript for GrowBiz Websites
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Smooth Scrolling with Fixed Header Offset
       ========================================================================== */
    // Select all links that start with a '#' (anchor links)
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('header');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            // Check if the link is just '#' or points to a valid ID
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate the height of the fixed header to offset the scroll
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================================================
       2. Active Navigation Link on Scroll
       ========================================================================== */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = header.offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // If the scroll position is past the top of the section (minus header height)
            if (pageYOffset >= (sectionTop - headerHeight - 50)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = ''; // Reset to default CSS variable
            if (link.getAttribute('href').includes(current)) {
                // Highlight the active link using your primary orange color
                link.style.color = 'var(--primary-orange)';
            }
        });
    });

    /* ==========================================================================
       3. Testimonial Slider (Basic Interactive Dots)
       ========================================================================== */
    const dots = document.querySelectorAll('.dot');
    const testimonials = document.querySelectorAll('.testimonial-card');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            // Add active class to clicked dot
            dot.classList.add('active');

            // For mobile views: optionally show/hide or scroll to the specific testimonial
            // If viewing on a smaller screen where they stack, this can highlight the selected one
            testimonials.forEach(card => {
                card.style.transform = 'scale(1)';
                card.style.opacity = '0.5';
                card.style.borderColor = 'var(--glass-border)';
            });

            // "Highlight" the corresponding testimonial
            if (testimonials[index]) {
                testimonials[index].style.transform = 'scale(1.05)';
                testimonials[index].style.opacity = '1';
                testimonials[index].style.borderColor = 'var(--primary-orange)';
                
                // Reset it back to normal after a short delay for visual effect
                setTimeout(() => {
                    testimonials[index].style.transform = '';
                    testimonials[index].style.opacity = '';
                    testimonials[index].style.borderColor = '';
                }, 1500);
            }
        });
    });

    /* ==========================================================================
       4. Form Submission Handling
       ========================================================================== */
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the page from reloading
            
            // Grab the button inside the form to show a loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Sending...';
            submitBtn.style.opacity = '0.7';

            // Simulate a network request (e.g., sending an email or saving to database)
            setTimeout(() => {
                alert('Thank you! Your request has been successfully submitted. We will get back to you shortly.');
                
                // Reset the form and button
                form.reset();
                submitBtn.innerText = originalText;
                submitBtn.style.opacity = '1';
            }, 1000);
        });
    });

});

/* ==========================================================================
   Main JavaScript for GrowBiz Websites
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Smooth Scrolling with Fixed Header Offset ---
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('header');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Offset the scroll by the height of the fixed header so it doesn't cover content
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. Active Navigation Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const headerHeight = header.offsetHeight;

        // Determine which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            if (pageYOffset >= (sectionTop - headerHeight - 50)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Update the navigation links
        navLinks.forEach(link => {
            link.classList.remove('active-link');
            link.style.color = ''; // Reset to default
            
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.style.color = 'var(--primary-orange)'; // Apply active color
            }
        });
    });

    // --- 3. Testimonial Slider Interaction ---
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const testimonials = document.querySelectorAll('.testimonial-card');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Update active state on dots
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');

            // Apply visual focus to the corresponding testimonial card
            testimonials.forEach((card, cardIndex) => {
                if (index === cardIndex) {
                    card.style.transform = 'translateY(-10px)';
                    card.style.borderColor = 'var(--primary-orange)';
                    card.style.opacity = '1';
                } else {
                    card.style.transform = 'translateY(0)';
                    card.style.borderColor = 'var(--glass-border)';
                    card.style.opacity = '0.6';
                }
            });
        });
    });

    // Initialize the first testimonial as active
    if (testimonials.length > 0 && dots.length > 0) {
        dots[0].click();
    }

    // --- 4. Form Submission Simulation ---
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual page reload
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            // Show loading state
            submitBtn.innerText = 'Sending...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;

            // Simulate a brief network delay before showing success
            setTimeout(() => {
                alert('Thank you! Your message has been sent successfully. We will be in touch soon.');
                
                // Reset form and button state
                form.reset();
                submitBtn.innerText = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }, 1500);
        });
    });

});
