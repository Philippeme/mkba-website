// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE SERVICES
// ==============================================

// Variables globales pour la page Services
let whatWeDoMegaMenuOpen = false;
let servicesAnimationsInitialized = false;

// Traductions spécifiques à la page Services - MIS À JOUR AVEC NOUVEAU MEGA MENU
const servicesTranslations = {
    fr: {
        // Meta et navigation
        page_title_services: "Nos Services - MK BA Excellence en Solutions Technologiques",
        nav_industries_served: "Industries servies",
        nav_services: "Services",
        nav_solutions: "Solutions",
        
        // Breadcrumb
        breadcrumb_what_we_do: "Ce que nous faisons",
        breadcrumb_services: "Services",
        
        // Nouveau mega menu "What we do"
        what_we_do_mega_title: "Ce que nous faisons",
        what_we_do_mega_description: "Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis imperdiet cursus, sodales vitae dui.",
        
        // Hero Section
        services_hero_title: "Nos Services",
        services_hero_description: "Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus. Fusce tristique erat nulla, vel viverra mi auctor non. Integer ante lorem, dictum at felis at, bibendum egestas augue. Aenean vestibulum lacus dolor, id tincidunt arcu pellentesque ut. Mauris sed venenatis diam, quis aliquam odio. Mauris lobortis augue placerat elit ultrices, non laoreet nunc semper. Phasellus dolor sapien, molestie at ante id, porta interdum nisl. Duis sit amet ante feugiat enim viverra sagittis. Sed vitae pulvinar augue. Donec sit amet dolor non velit tincidunt commodo.",
        
        // Section introductive
        services_intro_text: "Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus. Fusce tristique erat nulla, vel viverra mi auctor non. Integer ante lorem, dictum at felis at, bibendum egestas augue. Aenean vestibulum lacus dolor, id tincidunt arcu pellentesque ut. Mauris sed venenatis diam, quis aliquam odio. Mauris lobortis augue placerat elit ultrices, non laoreet nunc semper. Phasellus dolor sapien, molestie at ante id, porta interdum nisl. Duis sit amet ante feugiat enim viverra sagittis. Sed vitae pulvinar augue. Donec sit amet dolor non velit tincidunt commodo.",
        
        // Section titre
        services_section_title: "Nos prestations",
        
        // Services - E-gouvernance et transformation numérique
        service_egovernance_title: "E-GOUVERNANCE ET TRANSFORMATION NUMÉRIQUE",
        service_egovernance_1: "Élaboration de stratégies informatiques régionales, nationales et locales",
        service_egovernance_2: "Solutions logicielles d'e-gouvernement",
        service_egovernance_3: "Accompagnement à la planification stratégique des entreprises privées",
        service_egovernance_4: "Gestion de projets",
        
        // Services - Développement logiciel, web et mobile
        service_development_title: "DÉVELOPPEMENT LOGICIEL, WEB ET MOBILE",
        service_development_1: "Études de faisabilité",
        service_development_2: "Rédaction du cahier des charges",
        service_development_3: "Conception, développement, tests, déploiement et support d'applications web et mobiles",
        
        // Services - ERP et intégration
        service_erp_title: "ERP ET INTÉGRATION",
        service_erp_1: "Comptabilité, RH, gestion des stocks – Odoo",
        service_erp_2: "CRM et collaboration – Bitrix24",
        service_erp_3: "Système de gestion documentaire",
        
        // Services - Ingénierie des données et IA
        service_data_ia_title: "INGÉNIERIE DES DONNÉES ET IA",
        service_data_ia_1: "Gouvernance et gestion de la qualité des données",
        service_data_ia_2: "Intégration (ETL), analyse et visualisation des données",
        service_data_ia_3: "Stockage des données",
        service_data_ia_4: "Migration et sauvegarde des données",
        service_data_ia_5: "Big Data et Business Intelligence",
        service_data_ia_6: "Master Data Management",
        
        // Services - Sécurité de l'information
        service_security_title: "SÉCURITÉ DE L'INFORMATION",
        service_security_1: "Confidentialité et protection des données",
        service_security_2: "Cryptage et certificats",
        service_security_3: "Audits des systèmes d'information",
        service_security_4: "Gestion avancée des menaces et des vulnérabilités",
        service_security_5: "Services de sécurité managés",
        service_security_6: "Reprise après sinistre et continuité des activités",
        service_security_7: "Signature électronique",
        
        // Services - Ingénierie réseau et système, cloud
        service_network_cloud_title: "INGÉNIERIE RÉSEAU ET SYSTÈME, CLOUD",
        service_network_cloud_1: "Conception, déploiement, mises à niveau, dépannage et gestion de réseaux",
        service_network_cloud_2: "Déploiement d'infrastructures matérielles",
        service_network_cloud_3: "Intégration continue CI/CD / Livraison continue",
        service_network_cloud_4: "Cloud computing – AWS et Azure",
        
        // Services - Support informatique
        service_support_title: "SUPPORT INFORMATIQUE",
        service_support_1: "Maintenance logicielle et matérielle",
        service_support_2: "Services informatiques gérés",
        service_support_3: "Helpdesk",
        service_support_4: "Chat bot IA",
        service_support_5: "Renforcement des capacités",
        
        // Services - Externalisation informatique
        service_outsourcing_title: "EXTERNALISATION INFORMATIQUE",
        service_outsourcing_1: "Équipes de développement dédiées, à distance et sur site",
        service_outsourcing_2: "Augmentation des effectifs",
        service_outsourcing_3: "Gestion de l'infrastructure réseau et matérielle, à distance et sur site",
        service_outsourcing_4: "Stockage et sauvegarde des données",
        
        // Services - Services financiers
        service_financial_title: "SERVICES FINANCIERS",
        service_financial_1: "Paiement numérique",
        service_financial_2: "Finance inclusive et finance verte",
        service_financial_3: "Intermédiation",
        service_financial_4: "Analyse de marché",
        service_financial_5: "Prévisions sectorielles",
        service_financial_6: "Notation"
    },
    
    en: {
        // Meta et navigation
        page_title_services: "Our Services - MK BA Excellence in Technology Solutions",
        nav_industries_served: "Industries served",
        nav_services: "Services",
        nav_solutions: "Solutions",
        
        // Breadcrumb
        breadcrumb_what_we_do: "What we do",
        breadcrumb_services: "Services",
        
        // Nouveau mega menu "What we do"
        what_we_do_mega_title: "What we do",
        what_we_do_mega_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        
        // Hero Section
        services_hero_title: "Our Services",
        services_hero_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        
        // Section introductive
        services_intro_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        
        // Section titre
        services_section_title: "Our services",
        
        // Services - E-governance and digital transformation
        service_egovernance_title: "E-GOVERNANCE AND DIGITAL TRANSFORMATION",
        service_egovernance_1: "Development of regional, national and local IT strategies",
        service_egovernance_2: "E-government software solutions",
        service_egovernance_3: "Support for strategic planning of private companies",
        service_egovernance_4: "Project management",
        
        // Services - Software, web and mobile development
        service_development_title: "SOFTWARE, WEB AND MOBILE DEVELOPMENT",
        service_development_1: "Feasibility studies",
        service_development_2: "Requirements specification writing",
        service_development_3: "Design, development, testing, deployment and support of web and mobile applications",
        
        // Services - ERP and integration
        service_erp_title: "ERP AND INTEGRATION",
        service_erp_1: "Accounting, HR, inventory management – Odoo",
        service_erp_2: "CRM and collaboration – Bitrix24",
        service_erp_3: "Document management system",
        
        // Services - Data engineering and AI
        service_data_ia_title: "DATA ENGINEERING AND AI",
        service_data_ia_1: "Data governance and quality management",
        service_data_ia_2: "Integration (ETL), data analysis and visualization",
        service_data_ia_3: "Data storage",
        service_data_ia_4: "Data migration and backup",
        service_data_ia_5: "Big Data and Business Intelligence",
        service_data_ia_6: "Master Data Management",
        
        // Services - Information security
        service_security_title: "INFORMATION SECURITY",
        service_security_1: "Data confidentiality and protection",
        service_security_2: "Encryption and certificates",
        service_security_3: "Information systems audits",
        service_security_4: "Advanced threat and vulnerability management",
        service_security_5: "Managed security services",
        service_security_6: "Disaster recovery and business continuity",
        service_security_7: "Electronic signature",
        
        // Services - Network and system engineering, cloud
        service_network_cloud_title: "NETWORK AND SYSTEM ENGINEERING, CLOUD",
        service_network_cloud_1: "Design, deployment, upgrades, troubleshooting and network management",
        service_network_cloud_2: "Hardware infrastructure deployment",
        service_network_cloud_3: "Continuous Integration CI/CD / Continuous Delivery",
        service_network_cloud_4: "Cloud computing – AWS and Azure",
        
        // Services - IT support
        service_support_title: "IT SUPPORT",
        service_support_1: "Software and hardware maintenance",
        service_support_2: "Managed IT services",
        service_support_3: "Helpdesk",
        service_support_4: "AI chatbot",
        service_support_5: "Capacity building",
        
        // Services - IT outsourcing
        service_outsourcing_title: "IT OUTSOURCING",
        service_outsourcing_1: "Dedicated development teams, remote and on-site",
        service_outsourcing_2: "Staff augmentation",
        service_outsourcing_3: "Network and hardware infrastructure management, remote and on-site",
        service_outsourcing_4: "Data storage and backup",
        
        // Services - Financial services
        service_financial_title: "FINANCIAL SERVICES",
        service_financial_1: "Digital payment",
        service_financial_2: "Inclusive finance and green finance",
        service_financial_3: "Intermediation",
        service_financial_4: "Market analysis",
        service_financial_5: "Sector forecasts",
        service_financial_6: "Rating"
    }
};

// ==============================================
// GESTION DU NOUVEAU MEGA MENU "WHAT WE DO" - IDENTIQUE AU "WHO WE ARE"
// ==============================================

function initWhatWeDoMegaMenu() {
    const megaMenuDropdown = document.querySelector('.what-we-do-dropdown');
    const navbar = document.querySelector('.navbar');
    
    if (megaMenuDropdown) {
        const dropdownToggle = megaMenuDropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = megaMenuDropdown.querySelector('.what-we-do-mega-menu');
        
        if (dropdownToggle && dropdownMenu) {
            // Supprimer l'attribut data-bs-toggle pour désactiver Bootstrap
            dropdownToggle.removeAttribute('data-bs-toggle');
            
            // Système hover personnalisé - identique au mega menu "Who we are"
            megaMenuDropdown.addEventListener('mouseenter', function() {
                whatWeDoMegaMenuOpen = true;
                dropdownMenu.classList.add('show');
                navbar.classList.add('mega-menu-open');
                updateWhatWeDoMegaMenuStyles(true);
            });
            
            megaMenuDropdown.addEventListener('mouseleave', function() {
                whatWeDoMegaMenuOpen = false;
                dropdownMenu.classList.remove('show');
                navbar.classList.remove('mega-menu-open');
                updateWhatWeDoMegaMenuStyles(false);
            });
            
            // Fermer seulement en cliquant à l'extérieur
            document.addEventListener('click', function(e) {
                if (whatWeDoMegaMenuOpen && !megaMenuDropdown.contains(e.target)) {
                    whatWeDoMegaMenuOpen = false;
                    dropdownMenu.classList.remove('show');
                    navbar.classList.remove('mega-menu-open');
                    updateWhatWeDoMegaMenuStyles(false);
                }
            });
            
            // Empêcher la fermeture lors du clic dans le menu
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
}

function updateWhatWeDoMegaMenuStyles(isOpen) {
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
// INTERACTIONS AVEC LES CARTES DE SERVICES
// ==============================================

function initServiceCardsInteractions() {
    const serviceCards = document.querySelectorAll('.service-card-detailed');
    
    serviceCards.forEach((card, index) => {
        // Observer pour l'animation d'entrée
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        cardObserver.observe(card);
        
        // Effets d'interaction au survol
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
            
            // Animer les icônes de validation
            const checkIcons = this.querySelectorAll('.check-icon');
            checkIcons.forEach((icon, iconIndex) => {
                setTimeout(() => {
                    icon.style.transform = 'scale(1.1)';
                }, iconIndex * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            // Remettre les icônes à l'état normal
            const checkIcons = this.querySelectorAll('.check-icon');
            checkIcons.forEach(icon => {
                icon.style.transform = '';
            });
        });
        
        // Support clavier
        card.addEventListener('focus', function() {
            this.style.outlineOffset = '2px';
        });
        
        card.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
        
        // Click handler pour futures interactions
        card.addEventListener('click', function() {
            const serviceTitle = this.querySelector('.service-card-title')?.textContent;
            
            // Animation de clic
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            console.log(`Clic sur service: ${serviceTitle}`);
        });
        
        // Support clavier pour le clic
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Rendre les cartes focusables
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        const serviceTitle = card.querySelector('.service-card-title');
        if (serviceTitle) {
            card.setAttribute('aria-label', `Service: ${serviceTitle.textContent}`);
        }
    });
}

// ==============================================
// GESTION DES ANIMATIONS AU SCROLL
// ==============================================

function initServicesScrollAnimations() {
    if (servicesAnimationsInitialized) return;
    
    // Animation du titre de section
    const sectionTitle = document.querySelector('.services-section-title');
    if (sectionTitle) {
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    titleObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        sectionTitle.style.opacity = '0';
        sectionTitle.style.transform = 'translateY(20px)';
        sectionTitle.style.transition = 'all 0.8s ease';
        titleObserver.observe(sectionTitle);
    }
    
    // Animation des sections hero et intro
    const heroContent = document.querySelector('.services-hero-content');
    const heroIllustration = document.querySelector('.services-hero-illustration');
    
    [heroContent, heroIllustration].forEach((element, index) => {
        if (element) {
            const elementObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 200);
                        elementObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease';
            elementObserver.observe(element);
        }
    });
    
    servicesAnimationsInitialized = true;
}

// ==============================================
// GESTION DES TRADUCTIONS POUR LA PAGE SERVICES
// ==============================================

function setLanguageServicesPage(lang) {
    const pageTranslations = servicesTranslations[lang];
    
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
                element.textContent = pageTranslations[key];
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
    if (pageTranslations.page_title_services) {
        document.title = pageTranslations.page_title_services;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page Services`);
}

// ==============================================
// GESTION DU BREADCRUMB NAVIGATION
// ==============================================

function initBreadcrumbNavigation() {
    const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');
    
    breadcrumbItems.forEach(item => {
        if (item.classList.contains('active')) {
            item.style.fontWeight = '600';
            item.style.color = 'var(--text-medium)';
        }
        
        // Ajouter des event listeners pour les éléments non-actifs
        const span = item.querySelector('span');
        if (span && !item.classList.contains('active')) {
            span.addEventListener('click', function() {
                // Navigation vers "What we do" - vers index.html#what-we-do
                if (this.getAttribute('data-i18n') === 'breadcrumb_what_we_do') {
                    window.location.href = 'index.html#what-we-do';
                }
            });
        }
    });
}

// ==============================================
// SMOOTH SCROLL ADAPTÉ POUR LA PAGE SERVICES
// ==============================================

function initSmoothScrollServicesPage() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const topBanner = document.querySelector('.top-banner');
                const navbar = document.querySelector('.navbar');
                const breadcrumbBanner = document.querySelector('.breadcrumb-banner');
                
                const totalHeaderHeight = (topBanner ? topBanner.offsetHeight : 0) + 
                                        (navbar ? navbar.offsetHeight : 0) +
                                        (breadcrumbBanner ? breadcrumbBanner.offsetHeight : 0);
                
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
// GESTION DES ICÔNES DE VALIDATION
// ==============================================

function initCheckIconsHandling() {
    const checkIcons = document.querySelectorAll('.check-icon');
    
    checkIcons.forEach(icon => {
        // Fallback si l'image ne se charge pas
        icon.addEventListener('error', function() {
            console.warn(`Icône check non trouvée: ${this.src}`);
            
            // Créer une icône CSS en fallback
            this.style.display = 'none';
            const fallbackIcon = document.createElement('div');
            fallbackIcon.className = 'check-icon-fallback';
            fallbackIcon.innerHTML = '✓';
            fallbackIcon.style.cssText = `
                width: 18px;
                height: 18px;
                background: #4CAF50;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: bold;
                flex-shrink: 0;
                margin-top: 0.1rem;
            `;
            
            this.parentNode.insertBefore(fallbackIcon, this);
        });
        
        // Animation de chargement
        icon.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
    });
}

// ==============================================
// FONCTIONS D'ANALYSE ET FEEDBACK
// ==============================================

function initServicesAnalytics() {
    const serviceCards = document.querySelectorAll('.service-card-detailed');
    
    serviceCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const serviceTitle = this.querySelector('.service-card-title')?.textContent;
            console.log(`Analytics: Clic sur service "${serviceTitle}" (position: ${index + 1})`);
        });
        
        // Tracking du temps de hover (engagement)
        let hoverStartTime = null;
        
        card.addEventListener('mouseenter', function() {
            hoverStartTime = Date.now();
        });
        
        card.addEventListener('mouseleave', function() {
            if (hoverStartTime) {
                const hoverDuration = Date.now() - hoverStartTime;
                if (hoverDuration > 2000) { // Plus de 2 secondes
                    const serviceTitle = this.querySelector('.service-card-title')?.textContent;
                    console.log(`Analytics: Intérêt prolongé pour "${serviceTitle}" (${hoverDuration}ms)`);
                }
                hoverStartTime = null;
            }
        });
    });
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initServicesPage() {
    // Initialiser toutes les fonctionnalités spécifiques
    initWhatWeDoMegaMenu();
    initServiceCardsInteractions();
    initServicesScrollAnimations();
    initBreadcrumbNavigation();
    initSmoothScrollServicesPage();
    initCheckIconsHandling();
    initServicesAnalytics();
    
    // Charger la langue sauvegardée ou française par défaut
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageServicesPage(savedLanguage);
    } catch (e) {
        setLanguageServicesPage('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageServicesPage(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        // Surcharger la fonction setLanguage pour inclure nos traductions
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            // Appeler la fonction originale
            originalSetLanguage(lang);
            // Appliquer nos traductions spécifiques
            setLanguageServicesPage(lang);
        };
    }
    
    console.log('Page Services initialisée avec succès');
}

// ==============================================
// UTILITAIRES D'ACCESSIBILITÉ
// ==============================================

function initAccessibilityServicesPage() {
    // Améliorer l'accessibilité des cartes de services
    const serviceCards = document.querySelectorAll('.service-card-detailed');
    serviceCards.forEach(card => {
        const title = card.querySelector('.service-card-title');
        if (title && !card.getAttribute('aria-label')) {
            card.setAttribute('aria-label', `Service: ${title.textContent}`);
        }
        
        // Ajouter aria-describedby pour les listes de fonctionnalités
        const featuresList = card.querySelector('.service-features-list');
        if (featuresList) {
            const listId = `features-${Math.random().toString(36).substr(2, 9)}`;
            featuresList.setAttribute('id', listId);
            card.setAttribute('aria-describedby', listId);
        }
    });
    
    // Support du mode contraste élevé
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Support du mode mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Désactiver les animations pour les cartes
        const animatedElements = document.querySelectorAll('.service-card-detailed');
        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
            element.style.transition = 'none';
        });
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
}

// ==============================================
// GESTION DES ERREURS ET PERFORMANCE
// ==============================================

function initErrorHandlingAndPerformance() {
    // Gestion des erreurs d'images
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Erreur de chargement d\'image:', e.target.src);
            
            if (e.target.classList.contains('services-hero-img')) {
                // Fallback pour l'illustration hero
                e.target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'services-hero-fallback';
                fallback.textContent = 'Illustration des services MK BA';
                fallback.style.cssText = `
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 0.5rem;
                    padding: 3rem;
                    text-align: center;
                    color: white;
                    font-size: 1.2rem;
                `;
                e.target.parentNode.appendChild(fallback);
            }
        }
    }, true);
    
    // Préchargement des ressources importantes
    const importantImages = [
        './assets/images/services-illustration.png',
        './assets/icons/check-circle-green.png'
    ];
    
    importantImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initServicesPage();
        initAccessibilityServicesPage();
        initErrorHandlingAndPerformance();
    });
} else {
    initServicesPage();
    initAccessibilityServicesPage();
    initErrorHandlingAndPerformance();
}

// Optimisation des performances au redimensionnement
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Réinitialiser certaines fonctionnalités si nécessaire
        if (window.innerWidth < 768 && whatWeDoMegaMenuOpen) {
            // Fermer le mega menu sur mobile
            const megaMenuDropdown = document.querySelector('.what-we-do-dropdown');
            const dropdownMenu = megaMenuDropdown?.querySelector('.what-we-do-mega-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('show');
                whatWeDoMegaMenuOpen = false;
            }
        }
    }, 250);
});

// Export des fonctions pour utilisation externe
window.ServicesPage = {
    initServicesPage,
    setLanguageServicesPage,
    initWhatWeDoMegaMenu,
    initServiceCardsInteractions,
    initServicesScrollAnimations,
    servicesTranslations
};