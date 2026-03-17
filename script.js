document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-item, .brand');
    const sections = document.querySelectorAll('.content-section');

    // 1. Δυναμική Εμφάνιση Ενοτήτων (Scroll Reveal)
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, revealOptions);

    sections.forEach(section => revealObserver.observe(section));

    // 2. Ενημέρωση Active Class στο Μενού κατά το Scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Αφαίρεση 150px για να ενεργοποιείται το link λίγο πριν φτάσει η ενότητα στην κορυφή
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

    // 3. Μετάβαση σε Ενότητα με Κλικ (Ομαλό Scroll)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100, // Αφαίρεση ύψους fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});

window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Link copied to clipboard");
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
};