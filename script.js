// Herencia & Evolución - Static Site Logic

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.initIcons();
    }

    const sections = document.querySelectorAll('.view-section');
    const navButtons = document.querySelectorAll('[data-view]');

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    function initAnimations(container) {
        // Find all animate elements in the view and observe them
        const elements = container.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            el.classList.remove('is-visible'); // reset on view switch
            // small delay for staggered effect
            setTimeout(() => {
                animateObserver.observe(el);
            }, 50);
        });
    }

    // Navigation Switcher
    function switchView(viewId) {
        if (!viewId) return;

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetId = `${viewId}-view`;
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'instant' });
            
            // Trigger scroll animations for this view
            initAnimations(targetSection);

            // Update Active State in Navbar
            updateActiveNav(viewId);
        }
    }

    function updateActiveNav(viewId) {
        navButtons.forEach(btn => {
            // Only update top navbar buttons
            if (btn.closest('nav')) {
                if (btn.getAttribute('data-view') === viewId) {
                    btn.classList.add('active', 'text-secondary');
                    btn.classList.remove('text-outline');
                } else {
                    btn.classList.remove('active', 'text-secondary');
                    btn.classList.add('text-outline');
                }
            }
        });
    }

    // Event Listeners
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const view = button.getAttribute('data-view');
            switchView(view);
        });
    });

    // Logo Click (Home)
    const logo = document.querySelector('.cursor-pointer[data-view="home"]');
    if (logo) {
        logo.addEventListener('click', (e) => {
             e.preventDefault();
             switchView('home');
        });
    }

    // Advanced Forms Handling with Toast system
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);

    window.showToast = (message) => {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 shrink-0"></i> <span>${message}</span>`;
        toastContainer.appendChild(toast);
        
        if (window.lucide) window.lucide.initIcons();

        setTimeout(() => {
            toast.classList.add('hiding');
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    };

    const forms = document.querySelectorAll('.custom-form, form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Show custom toast notification instead of alert
            showToast('Autorización Confirmada. Procesando Solicitud.');
            form.reset();
        });
    });

    // 3D Tilt Effect for cards feeling alive
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPct = x / rect.width - 0.5;
            const yPct = y / rect.height - 0.5;
            
            // Moderate rotation
            card.style.transform = `perspective(1000px) rotateX(${-yPct * 8}deg) rotateY(${xPct * 8}deg) scale3d(1.01, 1.01, 1.01)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // Elegant Lightbox Setup
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close"><i data-lucide="x" class="w-8 h-8"></i></button>
        <img src="" alt="Vista Detallada">
    `;
    document.body.appendChild(lightbox);
    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('active');
    });

    // Applying lightbox to all view images excluding layout elements
    const zoomableImages = document.querySelectorAll('.view-section img:not(.no-lightbox)');
    zoomableImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
            if (window.lucide) window.lucide.initIcons(); // ensure close icon is rendering
        });
    });

    // Initial State
    switchView('home');

    // Back to Top Logic
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
        } else {
            backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Brand Logo Hover Animation refinement
    const brandLogos = document.querySelectorAll('[data-view="home"]');
    brandLogos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.letterSpacing = '0.05em';
            logo.style.transition = 'letter-spacing 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.letterSpacing = 'normal';
        });
    });
});
