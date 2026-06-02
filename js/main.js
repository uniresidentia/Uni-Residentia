/* ============================================
   UNI RESIDENTIA - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    // ---------- Navbar Scroll Effect ----------
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar--scrolled');
            } else {
                navbar.classList.remove('navbar--scrolled');
            }
        });

        // Set initial state
        if (window.scrollY > 50) {
            navbar.classList.add('navbar--scrolled');
        }
    }

    // ---------- Mobile Menu ----------
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        // Create mobile menu element
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.id = 'mobileMenu';

        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu__overlay';
        overlay.id = 'mobileOverlay';

        // Clone nav links into mobile menu
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            const mobileLink = document.createElement('a');
            mobileLink.href = link.getAttribute('href');
            mobileLink.className = 'mobile-menu__link';
            mobileLink.textContent = link.textContent;
            mobileMenu.appendChild(mobileLink);
        });

        document.body.appendChild(mobileMenu);
        document.body.appendChild(overlay);

        function openMobileMenu() {
            mobileMenu.classList.add('mobile-menu--open');
            overlay.classList.add('mobile-menu__overlay--active');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            mobileMenu.classList.remove('mobile-menu--open');
            overlay.classList.remove('mobile-menu__overlay--active');
            document.body.style.overflow = '';
        }

        mobileToggle.addEventListener('click', function() {
            if (mobileMenu.classList.contains('mobile-menu--open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        overlay.addEventListener('click', closeMobileMenu);

        // Close on mobile link click
        mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // ---------- FAQ Accordion ----------
    const faqItems = document.querySelectorAll('.faq-item__question');

    faqItems.forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = this.getAttribute('aria-expanded') === 'true';

            // Close all other answers
            faqItems.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.setAttribute('aria-expanded', 'false');
                    otherButton.nextElementSibling.classList.remove('faq-item__answer--open');
                }
            });

            // Toggle current answer
            if (isOpen) {
                this.setAttribute('aria-expanded', 'false');
                answer.classList.remove('faq-item__answer--open');
            } else {
                this.setAttribute('aria-expanded', 'true');
                answer.classList.add('faq-item__answer--open');
            }
        });
    });

    // ---------- Smooth Scroll for Anchor Links ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ---------- Application Form ----------
    const applicationForm = document.getElementById('applicationForm');

    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const requiredFields = applicationForm.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#7B0F10';
                } else {
                    field.style.borderColor = '';
                }
            });

            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }

            // Simulate submission
            const submitBtn = applicationForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = 'Application Submitted!';
                submitBtn.style.backgroundColor = '#2D6A4F';
                submitBtn.style.borderColor = '#2D6A4F';

                // Reset after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.borderColor = '';
                    applicationForm.reset();
                }, 3000);
            }, 1500);
        });
    }

    // ---------- Contact Form ----------
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.backgroundColor = '#2D6A4F';
                submitBtn.style.borderColor = '#2D6A4F';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.borderColor = '';
                    contactForm.reset();
                }, 3000);
            }, 1500);
        });
    }

    // ---------- Student Portal Login ----------
    const loginForm = document.getElementById('loginForm');
    const portalLogin = document.getElementById('portalLogin');
    const portalDashboard = document.getElementById('portalDashboard');

    if (loginForm && portalLogin && portalDashboard) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('portalEmail').value;
            const password = document.getElementById('portalPassword').value;

            if (email && password) {
                // Simulate login
                portalLogin.style.display = 'none';
                portalDashboard.style.display = 'grid';

                // Extract first name from email for demo
                const firstName = email.split('@')[0];
                const welcomeHeading = portalDashboard.querySelector('h2');
                if (welcomeHeading) {
                    welcomeHeading.textContent = `Welcome back, ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}`;
                }
            } else {
                alert('Please enter your email and password.');
            }
        });
    }

    // ---------- Portal Sidebar Navigation ----------
    const portalNavLinks = document.querySelectorAll('.portal__nav-link');

    portalNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links
            portalNavLinks.forEach(l => l.classList.remove('portal__nav-link--active'));

            // Add active class to clicked link
            this.classList.add('portal__nav-link--active');

            // Handle logout
            if (this.classList.contains('portal__nav-link--logout')) {
                if (portalLogin && portalDashboard) {
                    portalDashboard.style.display = 'none';
                    portalLogin.style.display = 'block';
                    if (loginForm) loginForm.reset();
                }
            }
        });
    });

    // ---------- Intersection Observer for Animations ----------
    const animateElements = document.querySelectorAll(
        '.feature-card, .residence-card, .room-card, .testimonial-card, .amenity-card, .value-card, .pricing-card, .blog-card'
    );

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        animateElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }

    // ---------- Current Year for Footer ----------
    const yearElements = document.querySelectorAll('.footer__bottom p');
    yearElements.forEach(el => {
        if (el.textContent.includes('2025')) {
            // Keep as 2025 (EST. MMXXV) - brand established date
        }
    });

});
