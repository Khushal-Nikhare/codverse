document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle hamburger icon (optional: change from ☰ to ✕)
            if (navLinks.classList.contains('active')) {
                hamburger.innerHTML = '&#10005;'; // X mark
            } else {
                hamburger.innerHTML = '&#9776;'; // Hamburger mark
            }
        });
    }

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme');

    const updateThemeIcon = (theme) => {
        if (theme === 'dark') {
            themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>'; // Sun icon using explicit tags for stroke support
        } else {
            themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'; // Moon icon
        }
    };

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (themeIcon) updateThemeIcon(currentTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) updateThemeIcon('dark');
    }

    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    // Active Link Highlight
    const currentLocation = location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentLocation || (currentLocation === '/' && linkPath.endsWith('index.html'))) {
            link.classList.add('active');
        }
    });

    // Fade-up Animation Observer
    const fadeElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Enquiry Form Submission Handler (Optimized)
    const enquiryForm = document.getElementById('enquiry-form');
    const formMessage = document.getElementById('form-message');
    const submitBtn = document.getElementById('submit-btn');

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbync6BsZi1QX1zNr21LtpQFGRyoo5pPbuyxGJTP5eiGknNdYkLGClVZF4O9UVdGNCX0qg/exec';

    if (enquiryForm) {
        let isSubmitting = false;

        enquiryForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Prevent multiple submissions (Debounce)
            if (isSubmitting) return;

            // Show Loading State
            isSubmitting = true;
            submitBtn.disabled = true;
            submitBtn.classList.add('btn-loading');
            submitBtn.innerHTML = '<span class="spinner"></span>Sending...';
            
            // Hide previous message if any
            formMessage.classList.remove('visible');
            formMessage.style.display = 'none';

            const formData = new FormData(enquiryForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone') || '',
                message: formData.get('message')
            };

            try {
                // Use a controller for timeout if needed, but for now focus on immediate feedback
                const response = await fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                // Since no-cors gives an opaque response, we assume success if no error is thrown
                formMessage.textContent = 'Success! Your message has been sent.';
                formMessage.style.backgroundColor = 'rgba(74, 222, 128, 0.2)';
                formMessage.style.color = '#22c55e';
                formMessage.style.display = 'block';
                
                // Trigger transition
                setTimeout(() => formMessage.classList.add('visible'), 10);
                
                enquiryForm.reset();

            } catch (error) {
                console.error('Submission Error:', error);
                formMessage.textContent = 'Error! Please try again later.';
                formMessage.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
                formMessage.style.color = '#ef4444';
                formMessage.style.display = 'block';
                setTimeout(() => formMessage.classList.add('visible'), 10);
            } finally {
                isSubmitting = false;
                submitBtn.disabled = false;
                submitBtn.classList.remove('btn-loading');
                submitBtn.textContent = 'Send Message';
            }
        });
    }

    // Popup Modal Logic
    const ctaModal = document.getElementById('cta-modal');
    const closeModalBtn = document.getElementById('close-modal');

    if (ctaModal) {
        // Show modal after 2 seconds
        setTimeout(() => {
            ctaModal.classList.add('active');
        }, 2000);

        // Close on button click
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                ctaModal.classList.remove('active');
            });
        }

        const closeModalX = document.getElementById('close-modal-x');
        if (closeModalX) {
            closeModalX.addEventListener('click', () => {
                ctaModal.classList.remove('active');
            });
        }

        // Close on clicking outside the modal content
        ctaModal.addEventListener('click', (e) => {
            if (e.target === ctaModal) {
                ctaModal.classList.remove('active');
            }
        });
    }
});
