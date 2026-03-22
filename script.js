document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-item, .brand');
    const sections = document.querySelectorAll('.content-section');
    const animateItems = document.querySelectorAll('.animate-item');
    const heroItems = document.querySelectorAll('#home .animate-item');

    if (typeof particlesJS !== 'undefined') {
        const particleCount = window.innerWidth <= 768 ? 40 : 80;

        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": particleCount, 
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "value": "circle"
                },
                "opacity": {
                    "value": 0.4, 
                    "random": true, 
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3, 
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff", 
                    "opacity": 0.2, 
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2, 
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab" 
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                },
                "modes": {
                    "grab": {
                        "distance": 200,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    heroItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.4}s`;
    });

    animateItems.forEach(item => revealObserver.observe(item));

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-item').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-target') === current) {
                link.classList.add('active');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const privacyBtn = document.getElementById('open-privacy');
    const termsBtn = document.getElementById('open-terms');
    const privacyModal = document.getElementById('privacy-modal');
    const termsModal = document.getElementById('terms-modal');
    const closeBtns = document.querySelectorAll('.close-modal');

    
    if (privacyBtn && privacyModal) {
        privacyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            privacyModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; 
        });
    }

    if (termsBtn && termsModal) {
        termsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            termsModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            privacyModal.style.display = 'none';
            termsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            privacyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === termsModal) {
            termsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
const copyEmailBtn = document.getElementById('copy-email-btn');
if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = 'stavrosfit.web@gmail.com';
        
        navigator.clipboard.writeText(email).then(() => {
            const originalText = copyEmailBtn.innerText;
            copyEmailBtn.innerText = 'COPIED!';
            copyEmailBtn.style.backgroundColor = 'var(--text)'; 
            
            setTimeout(() => {
                copyEmailBtn.innerText = originalText;
                copyEmailBtn.style.backgroundColor = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            copyEmailBtn.innerText = 'FAILED TO COPY';
        });
    });
}