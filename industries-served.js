// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE INDUSTRIES SERVED
// ==============================================

// Variables globales pour la page Industries Served
let industriesServedAnimationsInitialized = false;
let whatWeDoMegaMenuOpen = false;

// Traductions spécifiques à la page Industries Served
const industriesServedTranslations = {
    fr: {
        // Meta et navigation
        page_title_industries: "Industries Servies - Services et Solutions Informatiques Sanitaire - MK BA",
        nav_industries_served: "Industries servies",
        
        // Breadcrumb
        breadcrumb_what_we_do: "What we do",
        breadcrumb_industries_served: "Industries served",
        breadcrumb_healthcare_solutions: "Services et solutions informatiques sanitaire",
        
        // Mega menu "What we do"
        what_we_do_mega_title: "Ce que nous faisons",
        what_we_do_mega_description: "Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est.",
        
        // Hero Section
        healthcare_hero_title: "Services et solutions informatiques sanitaire",
        
        // Section introductive
        healthcare_intro_title: "Services et solutions informatiques sanitaire",
        healthcare_intro_text: "Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l'alcôve ovoïde, où les bûches se consument dans l'âtre, ce qui lui permet de penser à la cænogenèse de l'être dont il est question dans la cause ambiguë entendue à Moy, dans un capharnaüm qui, pense-t-il, diminue ça et là la qualité de son œuvre. Prouvez, beau juge, que le fameux sandwich au yak tue. L'île exiguë Où l'obèse jury mûr Fête l'haï volupük, Âne ex æquo au whist, Ôtez ce vœu déçu. Vieux pelage que je modifie : breitschwanz ou yak ? Dès Noël où un zéphyr haï me vêt de glaçons würmiens, je dîne d'exquis rôtis de bœuf au kir à l'ay d'âge mûr & cætera ! Fougueux, j'enivre la squaw au pack de beau zythum. Ketch, yawl, jonque flambant neuve... jugez des prix ! Voyez le brick géant que j'examine près du wharf. Portez ce vieux.",
        
        // Services liés à l'industrie
        industry_services_title: "Services liés à l'industrie",
        
        // Service 1: INGÉNIERIE DES DONNÉES ET IA
        service_data_ai_title: "INGÉNIERIE DES DONNÉES ET IA",
        service_data_ai_1: "Gouvernance et gestion de la qualité des données",
        service_data_ai_2: "Intégration (ETL), analyse et visualisation des données",
        service_data_ai_3: "Stockage des données",
        service_data_ai_4: "Migration et sauvegarde des données",
        service_data_ai_5: "Big Data et Business Intelligence",
        service_data_ai_6: "Master Data Management",
        
        // Service 2: SÉCURITÉ DE L'INFORMATION
        service_security_title: "SÉCURITÉ DE L'INFORMATION",
        service_security_1: "Confidentialité et protection des données",
        service_security_2: "Cryptage et certificats",
        service_security_3: "Audits des systèmes d'information",
        service_security_4: "Gestion avancée des menaces et des vulnérabilités",
        service_security_5: "Services de sécurité managés",
        service_security_6: "Reprise après sinistre et continuité des activités",
        service_security_7: "Signature électronique",
        
        // Service 3: INGÉNIERIE RÉSEAU ET SYSTÈME, CLOUD
        service_network_cloud_title: "INGÉNIERIE RÉSEAU ET SYSTÈME, CLOUD",
        service_network_cloud_1: "Conception, déploiement, mises à niveau, dépannage et gestion de réseaux",
        service_network_cloud_2: "Déploiement d'infrastructures matérielles",
        service_network_cloud_3: "Intégration continue CI/CD / Livraison continue",
        service_network_cloud_4: "Cloud computing – AWS et Azure",
        
        // Produits liés à l'industrie
        industry_products_title: "Produits liés à l'industrie",
        
        // Produit 1: HEALTHCARE
        product_healthcare_title: "HEALTHCARE",
        product_healthcare_1: "Hospital management",
        product_healthcare_2: "Health products tracking and logistics",
        product_healthcare_3: "Laboratory management",
        
        // Produit 2: ENVIRONMENT
        product_environment_title: "ENVIRONMENT",
        product_environment_1: "Environmental Monitoring",
        product_environment_2: "Waste Management",
        
        // Produit 3: INGÉNIERIE DES DONNÉES ET IA
        product_data_ai_title: "INGÉNIERIE DES DONNÉES ET IA",
        product_data_ai_1: "Online government e-Services",
        product_data_ai_2: "e-Justice",
        product_data_ai_3: "Civil registration and vital statistics",
        product_data_ai_4: "Social protection",
        product_data_ai_5: "Projects and Programs Monitoring and Evaluation",
        product_data_ai_6: "Land Management",
        product_data_ai_7: "e-Sourcing, e-Procurement, e-",
        product_data_ai_8: "Citizen engagement",
        
        // Références liées à cette industrie
        industry_references_title: "Références liées à cette industrie",
        reference_1_description: "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at",
        reference_2_description: "Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam",
        reference_read_more: 'Lire plus <i class="fas fa-arrow-right ms-2"></i>',
    },
    
    en: {
        // Meta et navigation
        page_title_industries: "Industries Served - Healthcare IT Services and Solutions - MK BA",
        nav_industries_served: "Industries served",
        
        // Breadcrumb
        breadcrumb_what_we_do: "What we do",
        breadcrumb_industries_served: "Industries served",
        breadcrumb_healthcare_solutions: "Healthcare IT services and solutions",
        
        // Mega menu "What we do"
        what_we_do_mega_title: "What we do",
        what_we_do_mega_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
        
        // Hero Section
        healthcare_hero_title: "Healthcare IT services and solutions",
        
        // Section introductive
        healthcare_intro_title: "Healthcare IT services and solutions",
        healthcare_intro_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        
        // Services liés à l'industrie
        industry_services_title: "Industry-related services",
        
        // Service 1: DATA ENGINEERING AND AI
        service_data_ai_title: "DATA ENGINEERING AND AI",
        service_data_ai_1: "Data governance and quality management",
        service_data_ai_2: "Integration (ETL), data analysis and visualization",
        service_data_ai_3: "Data storage",
        service_data_ai_4: "Data migration and backup",
        service_data_ai_5: "Big Data and Business Intelligence",
        service_data_ai_6: "Master Data Management",
        
        // Service 2: INFORMATION SECURITY
        service_security_title: "INFORMATION SECURITY",
        service_security_1: "Data confidentiality and protection",
        service_security_2: "Encryption and certificates",
        service_security_3: "Information systems audits",
        service_security_4: "Advanced threat and vulnerability management",
        service_security_5: "Managed security services",
        service_security_6: "Disaster recovery and business continuity",
        service_security_7: "Electronic signature",
        
        // Service 3: NETWORK AND SYSTEM ENGINEERING, CLOUD
        service_network_cloud_title: "NETWORK AND SYSTEM ENGINEERING, CLOUD",
        service_network_cloud_1: "Network design, deployment, upgrades, troubleshooting and management",
        service_network_cloud_2: "Hardware infrastructure deployment",
        service_network_cloud_3: "Continuous integration CI/CD / Continuous delivery",
        service_network_cloud_4: "Cloud computing – AWS and Azure",
        
        // Produits liés à l'industrie
        industry_products_title: "Industry-related products",
        
        // Produit 1: HEALTHCARE
        product_healthcare_title: "HEALTHCARE",
        product_healthcare_1: "Hospital management",
        product_healthcare_2: "Health products tracking and logistics",
        product_healthcare_3: "Laboratory management",
        
        // Produit 2: ENVIRONMENT
        product_environment_title: "ENVIRONMENT",
        product_environment_1: "Environmental Monitoring",
        product_environment_2: "Waste Management",
        
        // Produit 3: DATA ENGINEERING AND AI
        product_data_ai_title: "DATA ENGINEERING AND AI",
        product_data_ai_1: "Online government e-Services",
        product_data_ai_2: "e-Justice",
        product_data_ai_3: "Civil registration and vital statistics",
        product_data_ai_4: "Social protection",
        product_data_ai_5: "Projects and Programs Monitoring and Evaluation",
        product_data_ai_6: "Land Management",
        product_data_ai_7: "e-Sourcing, e-Procurement, e-",
        product_data_ai_8: "Citizen engagement",
        
        // Références liées à cette industrie
        industry_references_title: "Industry-related references",
        reference_1_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore",
        reference_2_description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        reference_read_more: 'Read more <i class="fas fa-arrow-right ms-2"></i>',
    }
};

// ==============================================
// GESTION DU MEGA MENU "WHAT WE DO"
// ==============================================

function initWhatWeDoMegaMenuIndustries() {
    const megaMenuDropdown = document.querySelector('.what-we-do-dropdown');
    const navbar = document.querySelector('.navbar');
    
    if (megaMenuDropdown) {
        const dropdownToggle = megaMenuDropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = megaMenuDropdown.querySelector('.what-we-do-mega-menu');
        
        if (dropdownToggle && dropdownMenu) {
            // Supprimer l'attribut data-bs-toggle pour désactiver Bootstrap
            dropdownToggle.removeAttribute('data-bs-toggle');
            
            // Système hover personnalisé
            megaMenuDropdown.addEventListener('mouseenter', function() {
                whatWeDoMegaMenuOpen = true;
                dropdownMenu.classList.add('show');
                navbar.classList.add('mega-menu-open');
                updateWhatWeDoMegaMenuStylesIndustries(true);
            });
            
            megaMenuDropdown.addEventListener('mouseleave', function() {
                whatWeDoMegaMenuOpen = false;
                dropdownMenu.classList.remove('show');
                navbar.classList.remove('mega-menu-open');
                updateWhatWeDoMegaMenuStylesIndustries(false);
            });
            
            // Fermer seulement en cliquant à l'extérieur
            document.addEventListener('click', function(e) {
                if (whatWeDoMegaMenuOpen && !megaMenuDropdown.contains(e.target)) {
                    whatWeDoMegaMenuOpen = false;
                    dropdownMenu.classList.remove('show');
                    navbar.classList.remove('mega-menu-open');
                    updateWhatWeDoMegaMenuStylesIndustries(false);
                }
            });
            
            // Empêcher la fermeture lors du clic dans le menu
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
}

function updateWhatWeDoMegaMenuStylesIndustries(isOpen) {
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
// ANIMATIONS PROGRESSIVES AU SCROLL
// ==============================================

function initProgressiveScrollAnimations() {
    if (industriesServedAnimationsInitialized) return;
    
    // Configuration de l'Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0.1, 0.3, 0.6]
    };
    
    // Animation du hero titre
    const heroTitle = document.querySelector('.healthcare-hero-title');
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
    
    industriesServedAnimationsInitialized = true;
}

// ==============================================
// INTERACTIONS AVEC LES CARTES
// ==============================================

function initIndustriesCardsInteractions() {
    // Interaction avec les cartes de services
    const serviceCards = document.querySelectorAll('.service-card2');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            
            // Animer les icônes de validation
            const checkIcons = this.querySelectorAll('.check-icon');
            checkIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            
            // Remettre les icônes à l'état normal
            const checkIcons = this.querySelectorAll('.check-icon');
            checkIcons.forEach(icon => {
                icon.style.transform = '';
            });
        });
        
        // Support clavier et clic
        card.addEventListener('click', function() {
            const serviceTitle = this.querySelector('.service-card-title')?.innerHTML;
            console.log(`Clic sur service: ${serviceTitle}`);
            
            // Animation de clic
            this.style.transform = 'translateY(-3px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Accessibilité
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        const serviceTitle = card.querySelector('.service-card-title');
        if (serviceTitle) {
            card.setAttribute('aria-label', `Service: ${serviceTitle.innerHTML}`);
        }
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Interaction avec les cartes de produits
    const productCards = document.querySelectorAll('.product-card1');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.01)';
            
            // Effet sur les icônes
            const checkIcons = this.querySelectorAll('.check-icon');
            checkIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.style.transform = 'scale(1.15)';
                }, index * 40);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            
            const checkIcons = this.querySelectorAll('.check-icon');
            checkIcons.forEach(icon => {
                icon.style.transform = '';
            });
        });
        
        card.addEventListener('click', function() {
            const productTitle = this.querySelector('.product-card-title')?.innerHTML;
            console.log(`Clic sur produit: ${productTitle}`);
        });
        
        // Accessibilité
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        const productTitle = card.querySelector('.product-card-title');
        if (productTitle) {
            card.setAttribute('aria-label', `Produit: ${productTitle.innerHTML}`);
        }
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Interaction avec les cartes de références
    const referenceCards = document.querySelectorAll('.reference-card');
    referenceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            
            // Effet sur le drapeau
            const flag = this.querySelector('.reference-flag');
            if (flag) {
                flag.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            
            const flag = this.querySelector('.reference-flag');
            if (flag) {
                flag.style.transform = '';
            }
        });
        
        // Gestion des liens "Lire plus"
        const referenceLink = card.querySelector('.reference-link');
        if (referenceLink) {
            referenceLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Navigation vers la référence');
                
                // Animation du lien
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        }
        
        // Accessibilité
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        const referenceDesc = card.querySelector('.reference-description');
        if (referenceDesc) {
            card.setAttribute('aria-label', `Référence: ${referenceDesc.innerHTML.substring(0, 50)}...`);
        }
    });
}

// ==============================================
// GESTION DES TRADUCTIONS
// ==============================================

function setLanguageIndustriesPage(lang) {
    const pageTranslations = industriesServedTranslations[lang];
    
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
    
    // Mettre à jour le titre de la page
    if (pageTranslations.page_title_industries) {
        document.title = pageTranslations.page_title_industries;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page Industries Served`);
}

// ==============================================
// GESTION DU BREADCRUMB NAVIGATION
// ==============================================

function initBreadcrumbNavigationIndustries() {
    const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');
    
    breadcrumbItems.forEach(item => {
        if (item.classList.contains('active')) {
            item.style.fontWeight = '600';
            item.style.color = 'var(--text-medium)';
        }
        
        const span = item.querySelector('span');
        if (span && !item.classList.contains('active')) {
            span.addEventListener('click', function() {
                // Navigation
                if (this.getAttribute('data-i18n') === 'breadcrumb_what_we_do') {
                    window.location.href = 'index.html#what-we-do';
                } else if (this.getAttribute('data-i18n') === 'breadcrumb_industries_served') {
                    // Reste sur la page actuelle ou navigation vers une page générale
                    console.log('Navigation vers Industries served général');
                }
            });
            
            span.style.cursor = 'pointer';
            span.addEventListener('mouseenter', function() {
                this.style.textDecoration = 'underline';
            });
            span.addEventListener('mouseleave', function() {
                this.style.textDecoration = 'none';
            });
        }
    });
}

// ==============================================
// SMOOTH SCROLL POUR LA PAGE
// ==============================================

function initSmoothScrollIndustriesPage() {
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

function initCheckIconsHandlingIndustries() {
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
// ACCESSIBILITÉ AVANCÉE
// ==============================================

function initAccessibilityIndustriesPage() {
    // Améliorer l'accessibilité des cartes
    const allCards = document.querySelectorAll('.service-card2, .product-card1, .reference-card');
    allCards.forEach((card, index) => {
        if (!card.getAttribute('tabindex')) {
            card.setAttribute('tabindex', '0');
        }
        
        if (!card.getAttribute('role')) {
            card.setAttribute('role', 'button');
        }
    });
    
    // Support du mode contraste élevé
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Support du mode mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Désactiver les animations
        const animatedElements = document.querySelectorAll('.service-card2, .product-card1, .reference-card');
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
// ANALYTICS ET TRACKING
// ==============================================

function initIndustriesAnalytics() {
    const serviceCards = document.querySelectorAll('.service-card2');
    const productCards = document.querySelectorAll('.product-card1');
    const referenceCards = document.querySelectorAll('.reference-card');
    
    // Tracking des clics sur les services
    serviceCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const serviceTitle = this.querySelector('.service-card-title')?.innerHTML;
            console.log(`Analytics: Clic sur service "${serviceTitle}" (position: ${index + 1})`);
        });
    });
    
    // Tracking des clics sur les produits
    productCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const productTitle = this.querySelector('.product-card-title')?.innerHTML;
            console.log(`Analytics: Clic sur produit "${productTitle}" (position: ${index + 1})`);
        });
    });
    
    // Tracking des clics sur les références
    referenceCards.forEach((card, index) => {
        const referenceLink = card.querySelector('.reference-link');
        if (referenceLink) {
            referenceLink.addEventListener('click', function() {
                console.log(`Analytics: Clic sur référence ${index + 1}`);
            });
        }
    });
}

// ==============================================
// GESTION DES ERREURS ET PERFORMANCE
// ==============================================

function initErrorHandlingAndPerformanceIndustries() {
    // Gestion des erreurs d'images
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Erreur de chargement d\'image:', e.target.src);
            
            if (e.target.classList.contains('reference-flag')) {
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
                `;
                e.target.parentNode.appendChild(fallback);
            }
        }
    }, true);
    
    // Préchargement des ressources importantes
    const importantImages = [
        './assets/images/healthcare-facility-hero.jpg',
        './assets/icons/check-circle-green.png',
        './assets/images/flags/cameroon-flag.png',
        './assets/icons/undp-logo.png'
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
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initIndustriesServedPage() {
    // Initialiser toutes les fonctionnalités
    initWhatWeDoMegaMenuIndustries();
    initProgressiveScrollAnimations();
    initIndustriesCardsInteractions();
    initBreadcrumbNavigationIndustries();
    initSmoothScrollIndustriesPage();
    initCheckIconsHandlingIndustries();
    initAccessibilityIndustriesPage();
    initIndustriesAnalytics();
    initErrorHandlingAndPerformanceIndustries();
    
    // Charger la langue sauvegardée
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageIndustriesPage(savedLanguage);
    } catch (e) {
        setLanguageIndustriesPage('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageIndustriesPage(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            originalSetLanguage(lang);
            setLanguageIndustriesPage(lang);
        };
    }
    
    console.log('Page Industries Served initialisée avec succès');
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIndustriesServedPage);
} else {
    initIndustriesServedPage();
}

// Optimisation des performances au redimensionnement
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Fermer le mega menu sur mobile si ouvert
        if (window.innerWidth < 768 && whatWeDoMegaMenuOpen) {
            const megaMenuDropdown = document.querySelector('.what-we-do-dropdown');
            const dropdownMenu = megaMenuDropdown?.querySelector('.what-we-do-mega-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('show');
                whatWeDoMegaMenuOpen = false;
                updateWhatWeDoMegaMenuStylesIndustries(false);
            }
        }
    }, 250);
});

// Export des fonctions pour utilisation externe
window.IndustriesServedPage = {
    initIndustriesServedPage,
    setLanguageIndustriesPage,
    initWhatWeDoMegaMenuIndustries,
    initProgressiveScrollAnimations,
    initIndustriesCardsInteractions,
    industriesServedTranslations
};