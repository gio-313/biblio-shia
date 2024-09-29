document.addEventListener('DOMContentLoaded', function() {
    // Animation du titre de la section hero
    const heroTitle = document.querySelector('.hero h1');
    heroTitle.style.opacity = '0';
    setTimeout(() => {
        heroTitle.style.transition = 'opacity 1s ease-in-out';
        heroTitle.style.opacity = '1';
    }, 500);

    // Ajout d'un effet de survol sur les cartes de livres
    const bookCards = document.querySelectorAll('.card');
    bookCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease-in-out';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Validation simple du formulaire de contact
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        if (name && email && message) {
            alert('Merci pour votre message ! Nous vous contacterons bientôt.');
            contactForm.reset();
        } else {
            alert('Veuillez remplir tous les champs du formulaire.');
        }
    });
});
