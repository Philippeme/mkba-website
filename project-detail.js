// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE DÉTAIL PROJET MK BA
// ==============================================

// Variables globales pour la page détail projet
let projectDetailAnimationsInitialized = false;
let partnersCarousel = null;
let currentLanguageProjectDetail = 'fr';

// Traductions spécifiques à la page détail projet
const projectDetailTranslations = {
    fr: {
        // Meta et navigation
        page_title_project_detail: "Détail Projet - MK BA",
        
        // Fil d'Ariane
        breadcrumb_achievements: "Achievements",
        breadcrumb_project_title: "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.",
        
        // Hero Section
        project_hero_title: "Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l'alcôve.",
        industry_label: "Industrie :",
        industry_value: "Environnement et changement climatique",
        partner_name: "UNICEF Cameroun",
        duration_label: "Durée :",
        duration_value: "20 MOIS",
        download_label: "Télécharger le rapport",
        download_size: "111 KB pdf",
        
        // Contenu textuel
        content_text_initial: "Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien lobortis ipsum, in volutpat sem ex in ligula. Nunc purus est, consequat condimentum faucibus sed, iaculis sit amet massa. Fusce ac condimentum turpis. Ut consequat lacinia augue, vitae aliquam sapien ullamcorper at. Donec efficitur, ligula ut lacinia viverra, lorem lacus condimentum leo, eu luctus dolor ex at quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua.",
        
        secondary_content_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua.",
        
        // Sections décoratives
        decorated_title_1: "Lorem ipsum dolor sit amet",
        decorated_text_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        
        decorated_title_2: "Lorem ipsum dolor sit amet",
        decorated_text_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        
        // Puces
        bullet_text_1: "Implication du client dans le recueil des attentes, les études et la conception",
        bullet_text_2: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui. Morbi purus mauris, vulputate quis felis nec, fermentum aliquam orci. Quisque ornare iaculis placerat.",
        bullet_text_3: "Implication du client dans le recueil des attentes, les études et la conception",
        bullet_text_4: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui. Morbi purus mauris, vulputate quis felis nec, fermentum aliquam orci. Quisque ornare iaculis placerat.",
        bullet_text_5: "Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non",
        bullet_text_6: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed,",
        
        // Section bicolonne
        bicolumn_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        
        // Paragraphe final
        final_paragraph_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.",
        
        // Sections
        partners_title: "Partenaires",
        similar_projects_title: "Projets similaires",
        
        // Projets similaires
        similar_project_desc_1: "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at",
        similar_project_desc_2: "Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam",
        read_more_btn: 'Lire plus <i class="fas fa-arrow-right ms-2"></i>',
        
        // Alt texts
        tech_interface_alt: "Interface technologique - main et écran tactile",
        office_workspace_alt: "Environnement de bureau moderne avec multiples postes de travail"
    },
    
    en: {
        // Meta et navigation
        page_title_project_detail: "Project Detail - MK BA",
        
        // Fil d'Ariane
        breadcrumb_achievements: "Achievements",
        breadcrumb_project_title: "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.",
        
        // Hero Section
        project_hero_title: "See this exquisite Walloon game, with kit graphics but brief. Bring this old whisky to the blonde judge who smokes on his inner island, next to the alcove.",
        industry_label: "Industry:",
        industry_value: "Environment and climate change",
        partner_name: "UNICEF Cameroon",
        duration_label: "Duration:",
        duration_value: "20 MONTHS",
        download_label: "Download report",
        download_size: "111 KB pdf",
        
        // Contenu textuel
        content_text_initial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua.",
        
        secondary_content_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        
        // Sections décoratives
        decorated_title_1: "Lorem ipsum dolor sit amet",
        decorated_text_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        
        decorated_title_2: "Lorem ipsum dolor sit amet",
        decorated_text_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        
        // Puces
        bullet_text_1: "Customer involvement in gathering requirements, studies and design",
        bullet_text_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        bullet_text_3: "Customer involvement in gathering requirements, studies and design",
        bullet_text_4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        bullet_text_5: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        bullet_text_6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        
        // Section bicolonne
        bicolumn_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        
        // Paragraphe final
        final_paragraph_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
        // Sections
        partners_title: "Partners",
        similar_projects_title: "Similar projects",
        
        // Projets similaires
        similar_project_desc_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore",
        similar_project_desc_2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        read_more_btn: 'Read more <i class="fas fa-arrow-right ms-2"></i>',
        
        // Alt texts
        tech_interface_alt: "Technology interface - hand and touch screen",
        office_workspace_alt: "Modern office environment with multiple workstations"
    }
};

// ==============================================
// CARROUSEL BOOTSTRAP POUR LES PARTENAIRES - EXACTEMENT COMME OUR TEAM
// ==============================================

function initProjectPartnersCarousel() {
    const carouselElement = document.getElementById('partnersCarousel');
    if (carouselElement) {
        // Initialiser le carrousel Bootstrap avec auto-scroll
        partnersCarousel = new bootstrap.Carousel(carouselElement, {
            interval: 4000, // Change de slide toutes les 4 secondes
            wrap: true, // Boucle infinie
            pause: 'hover', // Pause au hover
            touch: true, // Support tactile
            ride: 'carousel' // Auto-démarrage
        });
        
        // Démarrer immédiatement l'auto-scroll
        partnersCarousel.cycle();
        
        // Gestion des boutons avec priorité sur l'auto-scroll
        const prevButton = carouselElement.querySelector('.carousel-control-prev');
        const nextButton = carouselElement.querySelector('.carousel-control-next');
        
        if (prevButton) {
            prevButton.addEventListener('click', function(e) {
                e.preventDefault();
                partnersCarousel.prev();
                // Redémarrer l'auto-scroll après interaction manuelle
                setTimeout(() => {
                    partnersCarousel.cycle();
                }, 1000);
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault();
                partnersCarousel.next();
                // Redémarrer l'auto-scroll après interaction manuelle
                setTimeout(() => {
                    partnersCarousel.cycle();
                }, 1000);
            });
        }
        
        // Gestion des événements du carrousel
        carouselElement.addEventListener('slide.bs.carousel', function (e) {
            console.log('Slide transition vers:', e.to);
        });
        
        carouselElement.addEventListener('slid.bs.carousel', function (e) {
            console.log('Transition terminée vers:', e.to);
        });
        
        // Support du clavier
        carouselElement.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                partnersCarousel.prev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                partnersCarousel.next();
            }
        });
        
        console.log('Carrousel Bootstrap initialisé avec succès');
    }
}

// ==============================================
// INTERACTIONS DES CARTES PROJETS SIMILAIRES
// ==============================================

function initSimilarProjectsInteractions() {
    const projectCards = document.querySelectorAll('.similar-project-card');
    
    projectCards.forEach((card, index) => {
        // Animation au hover
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.02)';
            
            // Effet sur le drapeau
            const flag = this.querySelector('.project-flag');
            if (flag) {
                flag.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            
            const flag = this.querySelector('.project-flag');
            if (flag) {
                flag.style.transform = '';
            }
        });
        
        // Gestion des liens "Lire plus"
        const readMoreLink = card.querySelector('.project-read-more');
        if (readMoreLink) {
            readMoreLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log(`Navigation vers le projet similaire ${index + 1}`);
                
                // Animation du lien
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Ici on pourrait naviguer vers la page détail du projet
                showProjectDetailNotification('Chargement du projet...');
            });
        }
        
        // Clic sur toute la carte
        card.addEventListener('click', function(e) {
            // Éviter le double clic si on clique sur le bouton
            if (!e.target.closest('.project-read-more')) {
                const readMoreLink = this.querySelector('.project-read-more');
                if (readMoreLink) {
                    readMoreLink.click();
                }
            }
        });
        
        // Accessibilité
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        const description = card.querySelector('.project-description');
        if (description) {
            card.setAttribute('aria-label', `Projet: ${description.innerHTML.substring(0, 50)}...`);
        }
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const readMoreLink = this.querySelector('.project-read-more');
                if (readMoreLink) {
                    readMoreLink.click();
                }
            }
        });
    });
}

// ==============================================
// SYSTÈME DE PARTAGE SOCIAL
// ==============================================

function initSocialSharing() {
    const socialIcons = document.querySelectorAll('.social-icon');
    const projectTitle = document.querySelector('.project-hero-title')?.innerHTML || 'Projet MK BA';
    const projectUrl = window.location.href;
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.classList.contains('linkedin') ? 'linkedin' : 
                           this.classList.contains('youtube') ? 'youtube' :
                           this.classList.contains('twitter') ? 'twitter' : '';
            
            // Animation de clic
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            shareTo(platform, projectTitle, projectUrl);
        });
        
        // Accessibilité
        icon.setAttribute('tabindex', '0');
        icon.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

function shareTo(platform, title, url) {
    let shareUrl = '';
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    
    switch (platform) {
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
            break;
        case 'youtube':
            // Pour YouTube, on pourrait rediriger vers la chaîne MK BA
            console.log('Redirection vers la chaîne YouTube MK BA');
            showProjectDetailNotification('Redirection vers YouTube...');
            return;
        default:
            console.log(`Partage ${platform} non configuré`);
            return;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
        showProjectDetailNotification(`Partage sur ${platform.charAt(0).toUpperCase() + platform.slice(1)}`);
    }
}

// ==============================================
// GESTION DU TÉLÉCHARGEMENT DE RAPPORT
// ==============================================

function initReportDownload() {
    const downloadContainer = document.querySelector('.download-container');
    
    if (downloadContainer) {
        downloadContainer.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animation de clic
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Simuler le téléchargement
            downloadReport();
        });
        
        // Accessibilité
        downloadContainer.setAttribute('tabindex', '0');
        downloadContainer.setAttribute('role', 'button');
        downloadContainer.setAttribute('aria-label', 'Télécharger le rapport du projet');
        
        downloadContainer.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
}

function downloadReport() {
    // Animation de l'icône de téléchargement
    const downloadIcon = document.querySelector('.download-icon-circle i');
    if (downloadIcon) {
        downloadIcon.className = 'fas fa-spinner fa-spin';
        
        setTimeout(() => {
            downloadIcon.className = 'fas fa-check';
            showProjectDetailNotification('Rapport téléchargé avec succès');
            
            // Ici on pourrait déclencher le vrai téléchargement
            const link = document.createElement('a');
            link.href = './assets/reports/project-report.pdf';
            link.download = 'MK-BA-Project-Report.pdf';
            link.click();
            
            setTimeout(() => {
                downloadIcon.className = 'fas fa-download';
            }, 2000);
        }, 1500);
    }
}

// ==============================================
// ANIMATIONS AU SCROLL
// ==============================================

function initProjectDetailScrollAnimations() {
    if (projectDetailAnimationsInitialized) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0.1, 0.3, 0.6]
    };
    
    // Animation du titre hero
    const heroTitle = document.querySelector('.project-hero-title');
    if (heroTitle) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    heroObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(40px)';
        heroTitle.style.transition = 'all 1s ease-out';
        heroObserver.observe(heroTitle);
    }
    
    projectDetailAnimationsInitialized = true;
}

// ==============================================
// GESTION DES TRADUCTIONS
// ==============================================

function setLanguageProjectDetail(lang) {
    currentLanguageProjectDetail = lang;
    const pageTranslations = projectDetailTranslations[lang];
    
    if (!pageTranslations) return;
    
    // Mettre à jour les traductions spécifiques à cette page
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        // Vérifier d'abord les traductions spécifiques à cette page
        if (pageTranslations[key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = pageTranslations[key];
            } else if (element.hasAttribute('title')) {
                element.title = pageTranslations[key];
            } else {
                element.innerHTML = pageTranslations[key];
            }
        }
        // Sinon utiliser les traductions générales si disponibles
        else if (window.MKBAWebsite && window.MKBAWebsite.translationsData[lang] && window.MKBAWebsite.translationsData[lang][key]) {
            const generalTranslation = window.MKBAWebsite.translationsData[lang][key];
            if (element.tagName === 'INPUT') {
                element.placeholder = generalTranslation;
            } else if (element.hasAttribute('title')) {
                element.title = generalTranslation;
            } else {
                if (generalTranslation.includes('<i class=')) {
                    element.innerHTML = generalTranslation;
                } else {
                    element.innerHTML = generalTranslation;
                }
            }
        }
    });
    
    // Mettre à jour les éléments avec data-i18n-alt
    const elementsWithAlt = document.querySelectorAll('[data-i18n-alt]');
    elementsWithAlt.forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (pageTranslations[key]) {
            element.alt = pageTranslations[key];
        }
    });
    
    // Mettre à jour le titre de la page
    if (pageTranslations.page_title_project_detail) {
        document.title = pageTranslations.page_title_project_detail;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page détail projet`);
}

// ==============================================
// SMOOTH SCROLL ADAPTÉ POUR LA PAGE
// ==============================================

function initProjectDetailSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const topBanner = document.querySelector('.top-banner');
                const navbar = document.querySelector('.navbar');
                const totalHeaderHeight = (topBanner ? topBanner.offsetHeight : 0) + 
                                        (navbar ? navbar.offsetHeight : 0);
                const targetPosition = targetElement.offsetTop - totalHeaderHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==============================================
// NOTIFICATIONS
// ==============================================

function showProjectDetailNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'project-detail-notification';
    notification.innerHTML = message;
    notification.style.cssText = `
        position: fixed;
        top: calc(var(--total-header-height) + 1rem);
        right: 1.25rem;
        background: #005FAC;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.3125rem;
        z-index: 9999;
        box-shadow: 0 0.3125rem 0.9375rem rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateX(100%);
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animation de sortie et suppression
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ==============================================
// ACCESSIBILITÉ AVANCÉE
// ==============================================

function initProjectDetailAccessibility() {
    // Support du mode contraste élevé
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Support du mode mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Désactiver les animations
        const animatedElements = document.querySelectorAll(`
            .project-hero-title,
            .project-metadata,
            .download-section,
            .similar-project-card,
            .social-icon,
            .project-image,
            .contextual-image
        `);
        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
            element.style.transition = 'none';
        });
        
        // Désactiver l'auto-scroll du carrousel
        if (partnersCarousel) {
            partnersCarousel.pause();
        }
    }
    
    // Navigation au clavier améliorée
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Améliorer l'accessibilité des éléments interactifs
    const interactiveElements = document.querySelectorAll(`
        .download-container,
        .social-icon,
        .project-read-more,
        .similar-project-card,
        .custom-carousel-control
    `);
    
    interactiveElements.forEach(element => {
        // Support du focus visible
        element.addEventListener('focus', function() {
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

// ==============================================
// GESTION DES ERREURS ET FALLBACKS
// ==============================================

function initProjectDetailErrorHandling() {
    // Gestion des erreurs d'images
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Erreur de chargement d\'image détail projet:', e.target.src);
            
            if (e.target.classList.contains('project-flag')) {
                // Fallback pour les drapeaux
                e.target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'flag-fallback';
                fallback.innerHTML = 'Flag';
                fallback.style.cssText = `
                    width: 64px;
                    height: 43px;
                    background: #f0f0f0;
                    border: 1px solid #ccc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    color: #666;
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                `;
                e.target.parentNode.appendChild(fallback);
            } else if (e.target.classList.contains('project-partner-logo')) {
                // Fallback pour les logos partenaires
                e.target.style.opacity = '0.5';
                e.target.alt = 'Logo partenaire non disponible';
            } else if (e.target.classList.contains('partner-img')) {
                // Fallback pour les images du carrousel
                e.target.style.opacity = '0.5';
                e.target.alt = 'Image partenaire non disponible';
            } else if (e.target.classList.contains('project-image') || e.target.classList.contains('contextual-image')) {
                // Fallback pour les images principales
                e.target.style.background = '#f0f0f0';
                e.target.style.display = 'flex';
                e.target.style.alignItems = 'center';
                e.target.style.justifyContent = 'center';
                e.target.alt = 'Image non disponible';
            }
        }
    }, true);
    
    // Fallback si Bootstrap n'est pas chargé
    if (typeof bootstrap === 'undefined') {
        console.warn('Bootstrap non détecté pour la page détail projet. Le carrousel peut ne pas fonctionner.');
    }
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initProjectDetailPage() {
    // Initialiser toutes les fonctionnalités
    initProjectPartnersCarousel();
    initSimilarProjectsInteractions();
    initSocialSharing();
    initReportDownload();
    initProjectDetailScrollAnimations();
    initProjectDetailSmoothScroll();
    initProjectDetailAccessibility();
    initProjectDetailErrorHandling();
    
    // Charger la langue sauvegardée
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageProjectDetail(savedLanguage);
    } catch (e) {
        setLanguageProjectDetail('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageProjectDetail(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            originalSetLanguage(lang);
            setLanguageProjectDetail(lang);
        };
    }
    
    console.log('Page détail projet initialisée avec succès');
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectDetailPage);
} else {
    initProjectDetailPage();
}

// Optimisation des performances au redimensionnement
let projectDetailResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(projectDetailResizeTimeout);
    projectDetailResizeTimeout = setTimeout(() => {
        // Réajuster les éléments si nécessaire
        console.log('Redimensionnement de la fenêtre - page détail projet');
    }, 250);
});

// Export des fonctions pour utilisation externe
window.ProjectDetailPage = {
    initProjectDetailPage,
    setLanguageProjectDetail,
    initProjectPartnersCarousel,
    initSimilarProjectsInteractions,
    initSocialSharing,
    initReportDownload,
    initProjectDetailScrollAnimations,
    shareTo,
    downloadReport,
    showProjectDetailNotification,
    projectDetailTranslations
};