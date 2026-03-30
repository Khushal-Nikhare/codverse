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

    // Enquiry Form Submission Handler (Google Sheets Integration)
    const enquiryForm = document.getElementById('enquiry-form');
    const formMessage = document.getElementById('form-message');
    const submitBtn = document.getElementById('submit-btn');

    // Your Google Apps Script Web App URL
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbync6BsZi1QX1zNr21LtpQFGRyoo5pPbuyxGJTP5eiGknNdYkLGClVZF4O9UVdGNCX0qg/exec';

    const isValidScriptUrl = (url) => {
        return /^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test((url || '').trim());
    };

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (!isValidScriptUrl(scriptUrl)) {
                formMessage.textContent = 'Form is not configured yet. Add your Google Apps Script Web App URL in js/script.js.';
                formMessage.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
                formMessage.style.color = '#ef4444';
                formMessage.style.display = 'block';
                return;
            }

            // Show Loading State
            formMessage.style.display = 'none';
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            const formData = new FormData(enquiryForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'), // Optional field
                message: formData.get('message')
            };

            try {
                const response = await fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'no-cors', // Essential for Google Apps Script Web App
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                // Display Success Message
                formMessage.textContent = 'Thank you! Your enquiry has been sent and recorded.';
                formMessage.style.backgroundColor = 'rgba(74, 222, 128, 0.2)';
                formMessage.style.color = '#22c55e';
                formMessage.style.display = 'block';
                enquiryForm.reset();

            } catch (error) {
                console.error('Submission Error:', error);
                formMessage.textContent = 'Oops! Something went wrong. Please try again soon.';
                formMessage.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
                formMessage.style.color = '#ef4444';
                formMessage.style.display = 'block';
            } finally {
                submitBtn.disabled = false;
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

        // Close on clicking outside the modal content
        ctaModal.addEventListener('click', (e) => {
            if (e.target === ctaModal) {
                ctaModal.classList.remove('active');
            }
        });
    }
});
