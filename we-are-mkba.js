// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE WE ARE MK BA - MIS À JOUR
// ==============================================

// Variables globales pour la page We are MK BA
let megaMenuOpen = false;
let accordionAnimating = false;

// Traductions spécifiques à la page We are MK BA - MISES À JOUR
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
        
        // Hero et fil d'Ariane - CORRIGÉ
        we_are_hero_title: "We are MK BA",
        breadcrumb_we_are: "Qui nous sommes",
        breadcrumb_current_page: "Qui nous sommes",
        
        // Section Titre & Who we are
        section_title: "Titre",
        title_description: "Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l'alcôve ovoïde, où les bûches se consument dans l'âtre.",
        who_we_are_title_section: "Who we are",
        who_we_are_description_section: "Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île.",
        discover_more: "Discover more",
        
        // Section Why MK BA - NOUVELLES TRADUCTIONS
        why_mkba_subtitle: "Why MK BA",
        why_mkba_main_title: "Voyez ce jeu exquis wallon, de graphie en kit mais",
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
        
        // Section Nos clients - NOUVELLES TRADUCTIONS
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
        
        // Hero et fil d'Ariane - CORRIGÉ
        we_are_hero_title: "We are MK BA",
        breadcrumb_we_are: "Who we are",
        breadcrumb_current_page: "Who we are",
        
        // Section Titre & Who we are
        section_title: "Title",
        title_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        who_we_are_title_section: "Who we are",
        who_we_are_description_section: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        discover_more: "Discover more",
        
        // Section Why MK BA - NOUVELLES TRADUCTIONS
        why_mkba_subtitle: "Why MK BA",
        why_mkba_main_title: "Lorem ipsum dolor sit amet, consectetur",
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
        
        // Section Nos clients - NOUVELLES TRADUCTIONS
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
// EFFETS HOVER POUR LES NOUVELLES CARTES - MIS À JOUR
// ==============================================

function initCardHoverEffects() {
    // Nouvelles cartes "Why MK BA"
    const whyCardsNew = document.querySelectorAll('.why-card-new');
    whyCardsNew.forEach(card => {
        const visual = card.querySelector('.why-card-visual');
        
        if (visual) {
            visual.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
                this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
            });
            
            visual.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
            
            // Support clavier
            visual.addEventListener('focus', function() {
                this.style.transform = 'translateY(-3px) scale(1.01)';
            });
            
            visual.addEventListener('blur', function() {
                this.style.transform = '';
            });
            
            // Rendre les cartes focusables
            visual.setAttribute('tabindex', '0');
            visual.setAttribute('role', 'button');
            visual.setAttribute('aria-label', `Carte Why MK BA: ${card.querySelector('.why-card-title')?.textContent || ''}`);
        }
    });
    
    // Nouvelles cartes "Nos clients" - liens cliquables
    const clientCardsNew = document.querySelectorAll('.client-card-new');
    clientCardsNew.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const visual = this.querySelector('.client-card-visual');
            const arrow = this.querySelector('.client-arrow');
            
            if (visual) {
                visual.style.transform = 'translateY(-3px)';
                visual.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
            }
            
            if (arrow) {
                arrow.style.transform = 'translateX(5px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const visual = this.querySelector('.client-card-visual');
            const arrow = this.querySelector('.client-arrow');
            
            if (visual) {
                visual.style.transform = '';
                visual.style.boxShadow = '';
            }
            
            if (arrow) {
                arrow.style.transform = '';
            }
        });
        
        // Click handler avec effet visuel
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animation de clic
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
                // Ici on pourrait rediriger vers une page spécifique
                console.log(`Navigation vers: ${this.querySelector('.client-card-title')?.textContent || 'Section client'}`);
                
                // Pour l'instant, on peut faire défiler vers une section
                // ou rediriger vers une page dédiée
                // window.location.href = '#notre-approche-' + this.dataset.clientType;
            }, 150);
        });
        
        // Support clavier
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Améliorer l'accessibilité
        const title = card.querySelector('.client-card-title');
        if (title) {
            card.setAttribute('aria-label', `En savoir plus sur nos services pour: ${title.textContent}`);
        }
    });
}

// ==============================================
// ANIMATIONS AU SCROLL - MIS À JOUR
// ==============================================

function initScrollAnimations() {
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                if (target.classList.contains('why-card-new')) {
                    setTimeout(() => {
                        target.style.opacity = '1';
                        target.style.transform = 'translateY(0)';
                    }, parseInt(target.dataset.delay) || 0);
                }
                
                if (target.classList.contains('client-card-new')) {
                    setTimeout(() => {
                        target.style.opacity = '1';
                        target.style.transform = 'translateY(0)';
                    }, parseInt(target.dataset.delay) || 0);
                }
                
                animationObserver.unobserve(target);
            }
        });
    }, { threshold: 0.2 });
    
    // Initialiser les animations des nouvelles cartes Why MK BA
    const whyCardsNew = document.querySelectorAll('.why-card-new');
    whyCardsNew.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.6s ease';
        card.dataset.delay = (index * 200).toString();
        animationObserver.observe(card);
    });
    
    // Initialiser les animations des nouvelles cartes clients
    const clientCardsNew = document.querySelectorAll('.client-card-new');
    clientCardsNew.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.6s ease';
        card.dataset.delay = (index * 100).toString();
        animationObserver.observe(card);
    });
}

// ==============================================
// GESTION DU FIL D'ARIANE - MIS À JOUR
// ==============================================

function initBreadcrumbNavigation() {
    // Le fil d'Ariane n'a plus de liens actifs selon les nouvelles spécifications
    // Il indique seulement la position actuelle
    const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');
    
    breadcrumbItems.forEach(item => {
        // Ajouter une indication visuelle pour la page actuelle
        if (item.classList.contains('active')) {
            item.style.fontWeight = '600';
            item.style.color = 'var(--primary-blue)';
        }
    });
}

// ==============================================
// GESTION DES TRADUCTIONS POUR LA PAGE - MIS À JOUR
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
    
    console.log(`Langue changée vers: ${lang} pour la page We are MK BA`);
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
// NOUVELLES FONCTIONS POUR LES INTERACTIONS
// ==============================================

function initIconImageLoading() {
    // Gestion du chargement des images d'icônes pour Why MK BA
    const iconImages = document.querySelectorAll('.why-icon-img');
    
    iconImages.forEach(img => {
        img.addEventListener('error', function() {
            // Fallback vers une icône par défaut en cas d'erreur
            console.warn(`Icône non trouvée: ${this.src}`);
            // On pourrait ici remplacer par une icône par défaut
            this.style.display = 'none';
        });
        
        img.addEventListener('load', function() {
            // Animation d'entrée de l'icône
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        // État initial
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        img.style.transition = 'all 0.3s ease';
    });
}

function initClientCardAnalytics() {
    // Fonction pour tracker les interactions avec les cartes clients
    const clientCards = document.querySelectorAll('.client-card-new');
    
    clientCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const cardTitle = this.querySelector('.client-card-title')?.textContent;
            
            // Ici on pourrait envoyer des analytics
            console.log(`Analytics: Clic sur carte client "${cardTitle}" (position: ${index + 1})`);
            
            // Possibilité d'ajouter Google Analytics ou autre
            // gtag('event', 'click', {
            //     event_category: 'Client Cards',
            //     event_label: cardTitle,
            //     value: index + 1
            // });
        });
    });
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE - MIS À JOUR
// ==============================================

function initWeAreMKBAPage() {
    // Initialiser toutes les fonctionnalités spécifiques
    initMegaMenuWeArePage();
    initAccordionInteractions();
    initCardHoverEffects();
    initScrollAnimations();
    initBreadcrumbNavigation();
    initSmoothScrollWeArePage();
    initIconImageLoading();
    initClientCardAnalytics();
    
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
    
    console.log('Page We are MK BA initialisée avec succès (version mise à jour)');
}

// ==============================================
// UTILITAIRES D'ACCESSIBILITÉ - MIS À JOUR
// ==============================================

function initAccessibilityWeArePage() {
    // Améliorer l'accessibilité des nouvelles cartes
    const interactiveCards = document.querySelectorAll('.why-card-new, .client-card-new');
    interactiveCards.forEach(card => {
        const title = card.querySelector('.why-card-title, .client-card-title');
        if (title && !card.getAttribute('aria-label')) {
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
        
        // Désactiver les animations pour les nouvelles cartes
        const animatedElements = document.querySelectorAll('.why-card-new, .client-card-new');
        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
            element.style.transition = 'none';
        });
    }
    
    // Gestion du focus pour les éléments interactifs
    const focusableElements = document.querySelectorAll('.why-card-visual, .client-card-new');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-blue)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

// ==============================================
// INITIALISATION AU CHARGEMENT - MIS À JOUR
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

// ==============================================
// GESTION DES ERREURS ET FALLBACKS
// ==============================================

window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('why-icon-img')) {
        console.warn('Erreur de chargement d\'icône:', e.target.src);
        // Masquer l'icône défaillante
        e.target.style.display = 'none';
    }
});

// Export des fonctions pour utilisation externe - MIS À JOUR
window.WeAreMKBAPage = {
    initWeAreMKBAPage,
    setLanguageWeArePage,
    initMegaMenuWeArePage,
    initAccordionInteractions,
    initCardHoverEffects,
    initScrollAnimations,
    initIconImageLoading,
    initClientCardAnalytics,
    weAreMKBATranslations
};