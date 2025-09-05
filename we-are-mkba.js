// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE WE ARE MK BA
// ==============================================

// Variables globales pour la page We are MK BA
let megaMenuOpen = false;
let accordionAnimating = false;

// Traductions spécifiques à la page We are MK BA
const weAreMKBATranslations = {
    fr: {
        // Meta et navigation
        page_title_who_we_are: "Nous sommes MK BA - Excellence en Solutions Technologiques",
        nav_we_are_mkba: "Nous sommes MK BA",
        nav_our_team: "Notre équipe",
        nav_sustainability: "Notre engagement pour la durabilité",
        nav_technologies: "Technologies",
        nav_work_with_us: "Travailler avec nous",
        
        // Dropdown sous-menu
        dropdown_title: "Qui nous sommes",
        dropdown_description: "Découvrez notre équipe, nos valeurs et notre engagement pour l'excellence technologique en Afrique.",
        
        // Hero et fil d'Ariane
        we_are_hero_title: "We are MK BA",
        breadcrumb_home: "Accueil",
        breadcrumb_we_are: "Nous sommes MK BA",
        
        // Section Titre & Who we are
        section_title: "Titre",
        title_description: "Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l'alcôve ovoïde, où les bûches se consument dans l'âtre.",
        who_we_are_title_section: "Who we are",
        who_we_are_description_section: "Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île.",
        discover_more: "Discover more",
        
        // Section Why MK BA
        why_mkba_title: "Why MK BA",
        why_mkba_description: "Voyez ce jeu exquis wallon, de graphie en kit mais",
        why_card_1_title: "Voyez ce jeu exquis wallon, de graphie en kit mais bref.",
        why_card_1_description: "Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent",
        why_card_2_title: "Aenean sed lorem est. Sed quis neque ut nibh suscipit",
        why_card_2_description: "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit",
        why_card_3_title: "Etiam facilisis ligula nec velit posuere egestas. Nunc dictum",
        why_card_3_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non",
        
        // Section Accordéon
        so_you_can_title: "So you can...",
        accordion_item_1: "Phasellus finibus enim nulla, quis ornare",
        accordion_content_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus enim nulla, quis ornare lorem cursus in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        accordion_item_2: "Duis mauris augue, efficitur eu arcu sit amet",
        accordion_content_2: "Duis mauris augue, efficitur eu arcu sit amet, tempus dignissim mauris. Sed consectetur blandit ex, at tincidunt nulla facilisis vel.",
        accordion_item_3: "Mauris neque nisi, faucibus non elementum",
        accordion_content_3: "Mauris neque nisi, faucibus non elementum in, cursus vel magna. Donec volutpat consectetur ante, et facilisis nulla.",
        accordion_item_4: "Aenean non accumsan ante. Duis et risus",
        accordion_content_4: "Aenean non accumsan ante. Duis et risus consectetur, tempor lorem vel, rutrum magna. Pellentesque habitant morbi tristique.",
        
        // Section Nos clients
        our_clients_title: "Nos clients",
        client_card_1_title: "Prestataires de services",
        client_card_1_description: "In at iaculis lorem. Praesent",
        client_card_2_title: "Entreprises",
        client_card_2_description: "Duis pretium gravida enim, vel maximus ligula",
        client_card_3_title: "Gouvernements",
        client_card_3_description: "Integer ac interdum lacus. Nunc porta",
        client_card_4_title: "Hyperscalers",
        client_card_4_description: "Aliquam faucibus, odio nec commodo aliquam, neque",
        client_card_5_title: "Défense",
        client_card_5_description: "Sed a magna semper, porta purus eu,",
        client_card_6_title: "Titulaire de license de technologie",
        client_card_6_description: "Etiam convallis"
    },
    
    en: {
        // Meta et navigation
        page_title_who_we_are: "We are MK BA - Excellence in Technology Solutions",
        nav_we_are_mkba: "We are MK BA",
        nav_our_team: "Our team",
        nav_sustainability: "Our commitment to sustainability", 
        nav_technologies: "Technologies",
        nav_work_with_us: "Work with us",
        
        // Dropdown sous-menu
        dropdown_title: "Who we are",
        dropdown_description: "Discover our team, our values and our commitment to technological excellence in Africa.",
        
        // Hero et fil d'Ariane
        we_are_hero_title: "We are MK BA",
        breadcrumb_home: "Home",
        breadcrumb_we_are: "We are MK BA",
        
        // Section Titre & Who we are
        section_title: "Title",
        title_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        who_we_are_title_section: "Who we are",
        who_we_are_description_section: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        discover_more: "Discover more",
        
        // Section Why MK BA
        why_mkba_title: "Why MK BA",
        why_mkba_description: "Lorem ipsum dolor sit amet, consectetur",
        why_card_1_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        why_card_1_description: "Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent",
        why_card_2_title: "Aenean sed lorem est. Sed quis neque ut nibh suscipit",
        why_card_2_description: "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit",
        why_card_3_title: "Etiam facilisis ligula nec velit posuere egestas. Nunc dictum",
        why_card_3_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non",
        
        // Section Accordéon
        so_you_can_title: "So you can...",
        accordion_item_1: "Phasellus finibus enim nulla, quis ornare",
        accordion_content_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus enim nulla, quis ornare lorem cursus in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        accordion_item_2: "Duis mauris augue, efficitur eu arcu sit amet",
        accordion_content_2: "Duis mauris augue, efficitur eu arcu sit amet, tempus dignissim mauris. Sed consectetur blandit ex, at tincidunt nulla facilisis vel.",
        accordion_item_3: "Mauris neque nisi, faucibus non elementum",
        accordion_content_3: "Mauris neque nisi, faucibus non elementum in, cursus vel magna. Donec volutpat consectetur ante, et facilisis nulla.",
        accordion_item_4: "Aenean non accumsan ante. Duis et risus",
        accordion_content_4: "Aenean non accumsan ante. Duis et risus consectetur, tempor lorem vel, rutrum magna. Pellentesque habitant morbi tristique.",
        
        // Section Nos clients
        our_clients_title: "Our clients",
        client_card_1_title: "Service providers",
        client_card_1_description: "In at iaculis lorem. Praesent",
        client_card_2_title: "Enterprises",
        client_card_2_description: "Duis pretium gravida enim, vel maximus ligula",
        client_card_3_title: "Governments",
        client_card_3_description: "Integer ac interdum lacus. Nunc porta",
        client_card_4_title: "Hyperscalers",
        client_card_4_description: "Aliquam faucibus, odio nec commodo aliquam, neque",
        client_card_5_title: "Defense",
        client_card_5_description: "Sed a magna semper, porta purus eu,",
        client_card_6_title: "Technology license holder",
        client_card_6_description: "Etiam convallis"
    }
};

// ==============================================
// GESTION DU MEGA MENU "WHO WE ARE"
// ==============================================

function initMegaMenuWeArePage() {
    const megaMenuDropdown = document.querySelector('.mega-menu-dropdown');
    const navbar = document.querySelector('.navbar');
    
    if (megaMenuDropdown) {
        const dropdownToggle = megaMenuDropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = megaMenuDropdown.querySelector('.who-we-are-mega-menu');
        
        if (dropdownToggle && dropdownMenu) {
            // Supprimer l'attribut data-bs-toggle pour désactiver Bootstrap
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
            
            // Fermer seulement en cliquant à l'extérieur
            document.addEventListener('click', function(e) {
                if (megaMenuOpen && !megaMenuDropdown.contains(e.target)) {
                    megaMenuOpen = false;
                    dropdownMenu.classList.remove('show');
                    navbar.classList.remove('mega-menu-open');
                    updateMegaMenuStyles(false);
                }
            });
            
            // Empêcher la fermeture lors du clic dans le menu
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
}

function updateMegaMenuStyles(isOpen) {
    const topBanner = document.querySelector('.top-banner');
    
    if (isOpen) {
        // Styles quand le mega menu est ouvert
        document.body.classList.add('mega-menu-open');
        if (topBanner) {
            topBanner.classList.add('mega-menu-open');
        }
    } else {
        // Styles par défaut
        document.body.classList.remove('mega-menu-open');
        if (topBanner) {
            topBanner.classList.remove('mega-menu-open');
        }
    }
}

// ==============================================
// GESTION DE L'ACCORDÉON "SO YOU CAN..." - CORRIGÉ
// ==============================================

function initAccordionInteractions() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        // Enlever l'icône par défaut et ajouter notre classe personnalisée
        const existingIcon = button.querySelector('.accordion-icon');
        if (!existingIcon) {
            const icon = document.createElement('i');
            icon.className = 'fas accordion-icon';
            button.appendChild(icon);
        }

        button.addEventListener('click', function(e) {
            if (accordionAnimating) {
                e.preventDefault();
                return;
            }
            
            accordionAnimating = true;
            
            // Animer l'icône - gestion des états + et ×
            const icon = this.querySelector('.accordion-icon');
            if (icon) {
                // Déterminer l'état après le clic
                const willBeOpen = this.classList.contains('collapsed');
                
                if (willBeOpen) {
                    // Va s'ouvrir : changer vers ×
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-times');
                } else {
                    // Va se fermer : changer vers +
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-plus');
                }
            }
            
            // Délai pour éviter les animations multiples
            setTimeout(() => {
                accordionAnimating = false;
            }, 350);
        });

        // Initialiser l'état des icônes au chargement
        const icon = button.querySelector('.accordion-icon');
        if (icon) {
            if (button.classList.contains('collapsed')) {
                icon.classList.add('fa-plus');
            } else {
                icon.classList.add('fa-times');
            }
        }
        
        // Support du clavier
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Animation des éléments de l'accordéon au scroll
    const accordionItems = document.querySelectorAll('.accordion-item');
    const accordionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    accordionItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        accordionObserver.observe(item);
    });
}

// ==============================================
// EFFETS HOVER POUR LES CARTES
// ==============================================

function initCardHoverEffects() {
    // Cartes "Why MK BA"
    const whyCards = document.querySelectorAll('.why-card');
    whyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        // Support clavier
        card.addEventListener('focus', function() {
            this.style.transform = 'translateY(-5px) scale(1.01)';
        });
        
        card.addEventListener('blur', function() {
            this.style.transform = '';
        });
        
        // Rendre les cartes focusables
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
    });
    
    // Cartes "Nos clients"
    const clientCards = document.querySelectorAll('.client-card');
    clientCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
            
            const arrow = this.querySelector('.client-arrow');
            if (arrow) {
                arrow.style.transform = 'translateX(5px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            const arrow = this.querySelector('.client-arrow');
            if (arrow) {
                arrow.style.transform = '';
            }
        });
        
        // Click handler pour les cartes clients
        card.addEventListener('click', function() {
            // Animation de clic
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
                // Ici on pourrait rediriger vers une page spécifique
                console.log(`Clic sur la carte client: ${this.querySelector('h3').textContent}`);
            }, 150);
        });
        
        // Support clavier
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
    });
}

// ==============================================
// ANIMATIONS AU SCROLL
// ==============================================

function initScrollAnimations() {
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                if (target.classList.contains('why-card')) {
                    setTimeout(() => {
                        target.style.opacity = '1';
                        target.style.transform = 'translateY(0)';
                    }, parseInt(target.dataset.delay) || 0);
                }
                
                if (target.classList.contains('client-card')) {
                    setTimeout(() => {
                        target.style.opacity = '1';
                        target.style.transform = 'translateY(0)';
                    }, parseInt(target.dataset.delay) || 0);
                }
                
                animationObserver.unobserve(target);
            }
        });
    }, { threshold: 0.2 });
    
    // Initialiser les animations des cartes
    const whyCards = document.querySelectorAll('.why-card');
    whyCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.6s ease';
        card.dataset.delay = (index * 200).toString();
        animationObserver.observe(card);
    });
    
    const clientCards = document.querySelectorAll('.client-card');
    clientCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.6s ease';
        card.dataset.delay = (index * 100).toString();
        animationObserver.observe(card);
    });
}

// ==============================================
// GESTION DU FIL D'ARIANE
// ==============================================

function initBreadcrumbNavigation() {
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Animation de transition douce
            this.style.color = 'var(--primary-orange)';
            
            setTimeout(() => {
                window.location.href = href;
            }, 200);
        });
    });
}

// ==============================================
// GESTION DES TRADUCTIONS POUR LA PAGE
// ==============================================

function setLanguageWeArePage(lang) {
    const pageTranslations = weAreMKBATranslations[lang];
    
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
                if (pageTranslations[key].includes('<i class=')) {
                    element.innerHTML = pageTranslations[key];
                } else {
                    element.textContent = pageTranslations[key];
                }
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
                    element.textContent = generalTranslation;
                }
            }
        }
    });
    
    // Mettre à jour le titre de la page
    if (pageTranslations.page_title_who_we_are) {
        document.title = pageTranslations.page_title_who_we_are;
    }
}

// ==============================================
// SMOOTH SCROLL ADAPTÉ POUR LA PAGE
// ==============================================

function initSmoothScrollWeArePage() {
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
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initWeAreMKBAPage() {
    // Initialiser toutes les fonctionnalités spécifiques
    initMegaMenuWeArePage();
    initAccordionInteractions();
    initCardHoverEffects();
    initScrollAnimations();
    initBreadcrumbNavigation();
    initSmoothScrollWeArePage();
    
    // Charger la langue sauvegardée ou française par défaut
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageWeArePage(savedLanguage);
    } catch (e) {
        setLanguageWeArePage('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageWeArePage(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        // Surcharger la fonction setLanguage pour inclure nos traductions
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            // Appeler la fonction originale
            originalSetLanguage(lang);
            // Appliquer nos traductions spécifiques
            setLanguageWeArePage(lang);
        };
    }
    
    console.log('Page We are MK BA initialisée avec succès');
}

// ==============================================
// UTILITAIRES D'ACCESSIBILITÉ
// ==============================================

function initAccessibilityWeArePage() {
    // Améliorer l'accessibilité des cartes
    const interactiveCards = document.querySelectorAll('.why-card, .client-card');
    interactiveCards.forEach(card => {
        const title = card.querySelector('h3');
        if (title) {
            card.setAttribute('aria-label', title.textContent);
        }
    });
    
    // Support du mode contraste élevé
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Support du mode mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt 
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initWeAreMKBAPage();
        initAccessibilityWeArePage();
    });
} else {
    initWeAreMKBAPage();
    initAccessibilityWeArePage();
}

// Réinitialiser les animations des indicateurs si elles existent sur cette page
window.addEventListener('languageChanged', () => {
    const indicatorsSection = document.getElementById('indicators');
    if (indicatorsSection && window.MKBAWebsite && window.MKBAWebsite.animateCountersOptimized) {
        setTimeout(() => {
            window.MKBAWebsite.animateCountersOptimized();
        }, 300);
    }
});

// Export des fonctions pour utilisation externe
window.WeAreMKBAPage = {
    initWeAreMKBAPage,
    setLanguageWeArePage,
    initMegaMenuWeArePage,
    initAccordionInteractions,
    initCardHoverEffects,
    weAreMKBATranslations
};