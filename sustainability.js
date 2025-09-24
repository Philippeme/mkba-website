// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE SUSTAINABILITY
// ==============================================

// Variables globales pour la page sustainability
let megaMenuOpen = false;
let cardAnimationsTriggered = false;

// Traductions spécifiques à la page sustainability
const sustainabilityTranslations = {
    fr: {
        // Meta et navigation
        page_title_sustainability: "Notre engagement pour la durabilité - MK BA",
        breadcrumb_who_we_are: "Qui nous sommes",
        breadcrumb_sustainability: "Notre engagement pour la durabilité",
        
        // Hero section
        sustainability_hero_title: "Notre engagement pour la durabilité",
        
        // Contenu principal
        content_main_title: "Ultrices magna ultrices",
        content_subtitle: "In at iaculis lorem. Praesent",
        content_description: "Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim, ut commodo elit feugiat et. Maecenas nec enim quis diam faucibus tristique. Nam fermentum, ipsum in suscipit pharetra, mi odio aliquet neque, non iaculis augue elit et libero. Phasellus tempor faucibus faucibus. Sed eu mauris sem. Etiam et varius felis. Donec et libero vitae mauris consectetur egestas. Fusce aliquet, augue non efficitur sodales, turpis nisl consectetur sem, at rutrum lectus libero quis elit. Suspendisse cursus laoreet sapien, in lobortis justo posuere vitae. Aliquam commodo posuere tellus in lacinia.",
        
        // Sidebar
        policies_title: "Politiques et déclarations",
        document_1_title: "Nulla eleifend pulvinar purus.",
        document_2_title: "Vestibulum commodo sapien non",
        document_3_title: "Praesent eu dolor eu orci",
        document_type_pdf: "Pdf",
        document_type_word: "Word",
        
        // Cartes colorées
        card_title_1: "Ultrices magna ultrices",
        card_subtitle_1: "In at iaculis lorem.",
        card_title_2: "Ultrices magna ultrices", 
        card_subtitle_2: "In at iaculis lorem.",
        card_title_3: "Ultrices magna ultrices",
        card_subtitle_3: "In at iaculis lorem.",
        cards_description: "Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim, ut commodo elit feugiat et. Maecenas nec enim quis diam faucibus tristique. Nam fermentum, ipsum in suscipit pharetra.",
        
        // Contenu additionnel
        additional_title_1: "In at iaculis lorem. Praesent",
        additional_title_2: "In at iaculis lorem. Praesent",
        list_item_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius.",
        list_item_2: "Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis. Fusce at egestas libero. Cras convallis egestas ullamcorper. Suspendisse sed ultricies nisl, pharetra rutrum mauris. Vestibulum at massa dui. Morbi et purus velit. Etiam tristique, justo eu condimentum efficitur, purus velit facilisis.",
        list_item_3: "Cras eu elit congue, placerat dui ut, tincidunt nisl. Nulla leo elit, pharetra bibendum justo quis, cursus consectetur erat. Sed nec posuere turpis. Maecenas nec bibendum purus. Nulla fringilla, lorem iaculis iaculis fermentum, ligula nibh mollis ipsum, et scelerisque risus ante eu sem. Phasellus ac sagittis nisl.",
        additional_paragraph: "Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim, ut commodo elit feugiat et. Maecenas nec enim quis diam faucibus tristique. Nam fermentum, ipsum in suscipit pharetra, mi odio aliquet neque, non iaculis augue elit et libero. Phasellus tempor faucibus faucibus. Sed eu mauris sem. Etiam et varius felis. Donec et libero vitae mauris consectetur egestas."
    },
    
    en: {
        // Meta et navigation
        page_title_sustainability: "Our commitment to sustainability - MK BA",
        breadcrumb_who_we_are: "Who we are",
        breadcrumb_sustainability: "Our commitment to sustainability",
        
        // Hero section
        sustainability_hero_title: "Our commitment to sustainability",
        
        // Contenu principal
        content_main_title: "Ultrices magna ultrices",
        content_subtitle: "In at iaculis lorem. Praesent",
        content_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        
        // Sidebar
        policies_title: "Policies and statements",
        document_1_title: "Nulla eleifend pulvinar purus.",
        document_2_title: "Vestibulum commodo sapien non",
        document_3_title: "Praesent eu dolor eu orci",
        document_type_pdf: "Pdf",
        document_type_word: "Word",
        
        // Cartes colorées
        card_title_1: "Ultrices magna ultrices",
        card_subtitle_1: "In at iaculis lorem.",
        card_title_2: "Ultrices magna ultrices",
        card_subtitle_2: "In at iaculis lorem.",
        card_title_3: "Ultrices magna ultrices", 
        card_subtitle_3: "In at iaculis lorem.",
        cards_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        
        // Contenu additionnel
        additional_title_1: "In at iaculis lorem. Praesent",
        additional_title_2: "In at iaculis lorem. Praesent",
        list_item_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius.",
        list_item_2: "Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis. Fusce at egestas libero. Cras convallis egestas ullamcorper. Suspendisse sed ultricies nisl, pharetra rutrum mauris. Vestibulum at massa dui. Morbi et purus velit. Etiam tristique, justo eu condimentum efficitur, purus velit facilisis.",
        list_item_3: "Cras eu elit congue, placerat dui ut, tincidunt nisl. Nulla leo elit, pharetra bibendum justo quis, cursus consectetur erat. Sed nec posuere turpis. Maecenas nec bibendum purus. Nulla fringilla, lorem iaculis iaculis fermentum, ligula nibh mollis ipsum, et scelerisque risus ante eu sem. Phasellus ac sagittis nisl.",
        additional_paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    }
};

// ==============================================
// GESTION DU MEGA MENU POUR CETTE PAGE
// ==============================================

function initMegaMenuSustainability() {
    const megaMenuDropdown = document.querySelector('.mega-menu-dropdown');
    const navbar = document.querySelector('.navbar');
    
    if (megaMenuDropdown) {
        const dropdownToggle = megaMenuDropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = megaMenuDropdown.querySelector('.who-we-are-mega-menu');
        
        if (dropdownToggle && dropdownMenu) {
            // Désactiver Bootstrap pour gestion personnalisée
            dropdownToggle.removeAttribute('data-bs-toggle');
            
            // Système hover personnalisé
            megaMenuDropdown.addEventListener('mouseenter', function() {
                megaMenuOpen = true;
                dropdownMenu.classList.add('show');
                navbar.classList.add('mega-menu-open');
                updateMegaMenuStyles(true);
            });
            
            megaMenuDropdown.addEventListener('mouseleave', function() {
                megaMenuOpen = false;
                dropdownMenu.classList.remove('show');
                navbar.classList.remove('mega-menu-open');
                updateMegaMenuStyles(false);
            });
            
            // Fermer en cliquant à l'extérieur
            document.addEventListener('click', function(e) {
                if (megaMenuOpen && !megaMenuDropdown.contains(e.target)) {
                    megaMenuOpen = false;
                    dropdownMenu.classList.remove('show');
                    navbar.classList.remove('mega-menu-open');
                    updateMegaMenuStyles(false);
                }
            });
            
            // Empêcher fermeture lors du clic dans le menu
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
}

function updateMegaMenuStyles(isOpen) {
    const topBanner = document.querySelector('.top-banner');
    
    if (isOpen) {
        document.body.classList.add('mega-menu-open');
        if (topBanner) {
            topBanner.classList.add('mega-menu-open');
        }
    } else {
        document.body.classList.remove('mega-menu-open');
        if (topBanner) {
            topBanner.classList.remove('mega-menu-open');
        }
    }
}

// ==============================================
// INTERACTIONS AVEC LES CARTES COLORÉES
// ==============================================

function initColoredCardsInteractions() {
    const coloredCards = document.querySelectorAll('.colored-card');
    
    coloredCards.forEach((card, index) => {
        // Effet hover amélioré
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        // Support clavier
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Animation d'entrée au scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !cardAnimationsTriggered) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }, { threshold: 0.2 });
        
        // État initial pour animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        
        observer.observe(card);
        
        // Rendre les cartes interactives
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Carte durabilité ${index + 1}`);
    });
    
    // Marquer les animations comme déclenchées après la première fois
    setTimeout(() => {
        cardAnimationsTriggered = true;
    }, 2000);
}

// ==============================================
// INTERACTIONS AVEC LES DOCUMENTS TÉLÉCHARGEABLES
// ==============================================

function initDocumentDownloads() {
    const documentLinks = document.querySelectorAll('.document-link');
    
    documentLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const documentTitle = this.textContent.trim();
            const documentType = this.parentElement.querySelector('.document-type').textContent;
            
            // Animation de clic
            const icon = this.closest('.document-item').querySelector('.document-icon');
            if (icon) {
                icon.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    icon.style.transform = '';
                }, 150);
            }
            
            // Simulation du téléchargement
            console.log(`Téléchargement: ${documentTitle} (${documentType})`);
            
            // Ici on pourrait ajouter la logique de téléchargement réel
            window.open('/downloads/' + encodeURIComponent(documentTitle) + '.' + documentType.toLowerCase(), '_blank');
            
            // Notification utilisateur
            showNotification(`Téléchargement de "${documentTitle}" en cours...`);
            
            // Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'download', {
                    event_category: 'Documents',
                    event_label: documentTitle,
                    value: index + 1
                });
            }
        });
        
        // Améliorer l'accessibilité
        link.setAttribute('aria-label', `Télécharger ${link.textContent.trim()}`);
        
        // Animation d'entrée
        const documentItem = link.closest('.document-item');
        if (documentItem) {
            documentItem.style.opacity = '0';
            documentItem.style.transform = 'translateX(-20px)';
            documentItem.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                documentItem.style.opacity = '1';
                documentItem.style.transform = 'translateX(0)';
            }, (index + 1) * 200);
        }
    });
}

// ==============================================
// ANIMATIONS AU SCROLL
// ==============================================

function initScrollAnimations() {
    const animateOnScrollElements = document.querySelectorAll(
        '.content-section-title, .content-section-subtitle, .content-description, ' +
        '.sidebar-title, .card-title, .card-subtitle, .cards-description p, ' +
        '.section-title-with-highlight, .sustainability-list, .content-paragraph'
    );
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateOnScrollElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        scrollObserver.observe(element);
    });
}

// ==============================================
// GESTION DES TRADUCTIONS
// ==============================================

function setLanguageSustainability(lang) {
    const pageTranslations = sustainabilityTranslations[lang];
    
    if (!pageTranslations) return;
    
    // Appliquer les traductions spécifiques à cette page
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        // Vérifier les traductions spécifiques en priorité
        if (pageTranslations[key]) {
            applyTranslation(element, pageTranslations[key]);
        }
        // Sinon utiliser les traductions générales
        else if (window.MKBAWebsite?.translationsData[lang]?.[key]) {
            applyTranslation(element, window.MKBAWebsite.translationsData[lang][key]);
        }
    });
    
    // Mettre à jour le titre de la page
    if (pageTranslations.page_title_sustainability) {
        document.title = pageTranslations.page_title_sustainability;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page Sustainability`);
}

function applyTranslation(element, translation) {
    if (element.tagName === 'INPUT') {
        element.placeholder = translation;
    } else if (element.hasAttribute('title')) {
        element.title = translation;
    } else {
        if (translation.includes('<i class=') || translation.includes('<')) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    }
}

// ==============================================
// SMOOTH SCROLL ADAPTÉ
// ==============================================

function initSmoothScrollSustainability() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const topBanner = document.querySelector('.top-banner');
                const navbar = document.querySelector('.navbar');
                const totalHeaderHeight = (topBanner?.offsetHeight || 0) + 
                                        (navbar?.offsetHeight || 0);
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
// NOTIFICATIONS SYSTÈME
// ==============================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style inline pour éviter les dépendances CSS
    notification.style.cssText = `
        position: fixed;
        top: calc(var(--total-header-height) + 1rem);
        right: 1rem;
        background: ${type === 'success' ? 'var(--primary-blue)' : 'var(--primary-orange)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
        max-width: calc(100% - 2rem);
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Suppression automatique
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
// GESTION DES ERREURS ET PERFORMANCE
// ==============================================

function initPerformanceOptimizations() {
    // Lazy loading pour les images si elles existent
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Préchargement des liens importants
    const importantLinks = document.querySelectorAll('a[href*="index.html"], a[href*="we-are-mkba.html"]');
    importantLinks.forEach(link => {
        link.setAttribute('rel', 'prefetch');
    });
}

// ==============================================
// ACCESSIBILITÉ AVANCÉE
// ==============================================

function initAdvancedAccessibility() {
    // Support des préférences utilisateur
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Désactiver les animations
        const animatedElements = document.querySelectorAll('.colored-card, .document-item');
        animatedElements.forEach(element => {
            element.style.animation = 'none';
            element.style.transition = 'none';
            element.style.opacity = '1';
            element.style.transform = 'none';
        });
    }
    
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
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
    
    // Support des lecteurs d'écran
    const interactiveElements = document.querySelectorAll('.colored-card, .document-link');
    interactiveElements.forEach(element => {
        if (!element.getAttribute('aria-label')) {
            const textContent = element.textContent.trim();
            if (textContent) {
                element.setAttribute('aria-label', textContent);
            }
        }
    });
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initSustainabilityPage() {
    try {
        // Initialiser toutes les fonctionnalités
        initMegaMenuSustainability();
        initColoredCardsInteractions();
        initDocumentDownloads();
        initScrollAnimations();
        initSmoothScrollSustainability();
        initPerformanceOptimizations();
        initAdvancedAccessibility();
        
        // Charger la langue sauvegardée
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageSustainability(savedLanguage);
        
        // Écouter les changements de langue
        window.addEventListener('languageChanged', (e) => {
            setLanguageSustainability(e.detail.language);
        });
        
        // Intégrer avec le système de traduction principal
        if (window.MKBAWebsite?.setLanguage) {
            const originalSetLanguage = window.MKBAWebsite.setLanguage;
            window.setLanguage = function(lang) {
                originalSetLanguage(lang);
                setLanguageSustainability(lang);
            };
        }
        
        console.log('Page Sustainability initialisée avec succès');
        
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la page Sustainability:', error);
    }
}

// ==============================================
// GESTION DES ÉVÉNEMENTS GLOBAUX
// ==============================================

// Gestion du redimensionnement
window.addEventListener('resize', () => {
    if (window.innerWidth < 768 && megaMenuOpen) {
        const dropdownMenu = document.querySelector('.who-we-are-mega-menu');
        const navbar = document.querySelector('.navbar');
        
        if (dropdownMenu && navbar) {
            dropdownMenu.classList.remove('show');
            navbar.classList.remove('mega-menu-open');
            updateMegaMenuStyles(false);
            megaMenuOpen = false;
        }
    }
});

// Gestion des erreurs d'images
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Erreur de chargement d\'image:', e.target.src);
        e.target.style.display = 'none';
    }
}, true);

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSustainabilityPage);
} else {
    initSustainabilityPage();
}

// Support des changements de langue depuis d'autres scripts
window.addEventListener('languageChanged', () => {
    // Réanimer les compteurs s'ils existent
    if (window.MKBAWebsite?.animateCountersOptimized) {
        setTimeout(() => {
            window.MKBAWebsite.animateCountersOptimized();
        }, 300);
    }
});

// Export des fonctions pour utilisation externe
window.SustainabilityPage = {
    initSustainabilityPage,
    setLanguageSustainability,
    initMegaMenuSustainability,
    initColoredCardsInteractions,
    initDocumentDownloads,
    showNotification,
    sustainabilityTranslations
};