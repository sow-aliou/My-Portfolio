document.addEventListener('DOMContentLoaded', () => {
    // S'assurer que les éléments visibles au chargement apparaissent immédiatement
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        // Déclenchement manuel immédiat pour les éléments déjà dans la vue
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        } else {
            revealObserver.observe(el);
        }
    });

    // Gestion du Formulaire avec AJAX (Formspree)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button');
            const originalContent = submitBtn.innerHTML;

            // État de chargement
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch(contactForm.getAttribute('action'), {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Cacher le formulaire et afficher le message de succès
                    const successMessage = document.getElementById('contact-success');
                    contactForm.classList.add('hidden');
                    successMessage.classList.remove('hidden');

                    // Réinitialiser le bouton après délai (au cas où il reviendrait au formulaire)
                    setTimeout(() => {
                        submitBtn.innerHTML = originalContent;
                        submitBtn.style.background = '';
                        submitBtn.disabled = false;
                        contactForm.reset();
                    }, 1000);
                } else if (response.status === 403) {
                    const errorData = await response.json();
                    console.error('Erreur Formspree (reCAPTCHA/Key):', errorData);
                    submitBtn.innerHTML = '<i class="fas fa-shield-alt"></i> Erreur Paramètres';
                    alert("Formspree : Désactivez le 'reCAPTCHA' ou utilisez une 'Custom Key' dans vos paramètres Formspree pour autoriser l'envoi via AJAX.");
                    throw new Error("Configuration Formspree requise");
                } else {
                    const errorData = await response.json();
                    console.error('Erreur Formspree:', errorData);
                    throw new Error(errorData.error || 'Erreur lors de l\'envoi');
                }
            } catch (error) {
                console.error('Erreur de soumission:', error);
                submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Erreur d\'envoi';
                submitBtn.style.background = '#ef4444';

                // Message plus détaillé en console pour aider le développeur
                if (!navigator.onLine) {
                    alert("Vérifiez votre connexion internet.");
                }

                setTimeout(() => {
                    submitBtn.innerHTML = originalContent;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 4000);
            }
        });
    }

    // Dynamic Visual Card Animation
    const visualCard = document.querySelector('.profile-photo-container');
    if (visualCard) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 30;
            const y = (window.innerHeight / 2 - e.clientY) / 30;
            visualCard.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });
    }

    // ScrollSpy - Détection de la section active
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const scrollSpyOptions = {
        threshold: 0.4,
        rootMargin: '0px'
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, scrollSpyOptions);

    sections.forEach(section => scrollSpyObserver.observe(section));

    // Défilement doux avec correction d'offset pour le menu fixe
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = 100; // Offset pour la nav en haut
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Gestion du bouton "Envoyer un autre message"
    const sendAnotherBtn = document.getElementById('send-another');
    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', () => {
            const successMessage = document.getElementById('contact-success');
            const contactForm = document.getElementById('contact-form');

            successMessage.classList.add('hidden');
            contactForm.classList.remove('hidden');

            // Scroll léger pour recentrer si besoin
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});
