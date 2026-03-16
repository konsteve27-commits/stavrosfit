document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-item, .brand');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            // Απόκρυψη όλων των ενοτήτων
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Αφαίρεση active class από όλα τα links
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });

            // Εμφάνιση της επιλεγμένης ενότητας
            const activeSection = document.getElementById(targetId);
            if (activeSection) {
                activeSection.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // Προσθήκη active class στο επιλεγμένο link (εκτός του logo)
            if(link.classList.contains('nav-item')) {
                link.classList.add('active');
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