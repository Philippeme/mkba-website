// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE SOLUTIONS
// ==============================================

// Variables globales pour la page Solutions
let whatWeDoMegaMenuOpen = false;
let solutionsAnimationsInitialized = false;
let currentSelectedFeature = 'simplicity';

// Traductions spécifiques à la page Solutions
const solutionsTranslations = {
    fr: {
        // Meta et navigation
        page_title_solutions: "Solutions - MK BA Excellence en Solutions Technologiques",
        nav_industries_served: "Industries servies",
        nav_services: "Services",
        nav_solutions: "Solutions",
        
        // Breadcrumb
        breadcrumb_what_we_do: "What we do",
        breadcrumb_solutions: "Solutions",
        
        // Nouveau mega menu "What we do"
        what_we_do_mega_title: "Ce que nous faisons",
        what_we_do_mega_description: "Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis imperdiet cursus, sodales vitae dui.",
        
        // Hero Section
        solutions_hero_title: "Solutions",
        solutions_hero_description: "Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus. Fusce tristique erat nulla, vel viverra mi auctor non. Integer ante lorem, dictum at felis at, bibendum egestas augue. Aenean vestibulum lacus dolor, id tincidunt arcu pellentesque ut. Mauris sed venenatis diam, quis aliquam odio. Mauris lobortis augue placerat elit ultrices, non laoreet nunc semper. Phasellus",
        
        // Section introductive
        solutions_intro_text: "Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus. Fusce tristique erat nulla, vel viverra mi auctor non. Integer ante lorem, dictum at felis at, bibendum egestas augue. Aenean vestibulum lacus dolor, id tincidunt arcu pellentesque ut. Mauris sed venenatis diam, quis aliquam odio. Mauris lobortis augue placerat elit ultrices, non laoreet nunc semper. Phasellus dolor sapien, molestie at ante id, porta interdum nisl. Duis sit amet ante feugiat enim viverra sagittis. Sed vitae pulvinar augue. Donec sit amet dolor non velit tincidunt commodo.",
        
        // Section titre
        solutions_section_title: "Liste de produits par industrie",
        
        // Industries - INGÉNIERIE DES DONNÉES ET IA
        industry_data_ai_title: "INGÉNIERIE DES DONNÉES ET IA",
        industry_data_ai_1: "Online government e-Services",
        industry_data_ai_2: "e-Justice",
        industry_data_ai_3: "Civil registration and vital statistics",
        industry_data_ai_4: "Social protection",
        industry_data_ai_5: "Projects and Programs Monitoring and Evaluation",
        industry_data_ai_6: "Land Management",
        industry_data_ai_7: "e-Sourcing, e-Procurement, e-",
        industry_data_ai_8: "Citizen engagement",
        
        // Industries - HEALTHCARE
        industry_healthcare_title: "HEALTHCARE",
        industry_healthcare_1: "Hospital management",
        industry_healthcare_2: "Health products tracking and logistics",
        industry_healthcare_3: "Laboratory management",
        
        // Industries - EDUCATION
        industry_education_title: "EDUCATION",
        industry_education_1: "e-Learning platform",
        industry_education_2: "School management",
        
        // Industries - BUSINESS MANAGEMENT
        industry_business_title: "BUSINESS MANAGEMENT",
        industry_business_1: "Document Management System",
        industry_business_2: "Enterprise Resource Planning",
        industry_business_3: "Project Management Software",
        industry_business_4: "HR Management",
        industry_business_5: "Customer Relationship Management",
        industry_business_6: "e-Sourcing, e-Procurement, e-",
        industry_business_7: "AI profiling and selection in HR",
        industry_business_8: "Business Intelligence",
        industry_business_9: "Networking",
        
        // Industries - ENVIRONMENT
        industry_environment_title: "ENVIRONMENT",
        industry_environment_1: "Environmental Monitoring",
        industry_environment_2: "Waste Management",
        
        // Industries - FINANCE
        industry_finance_title: "FINANCE",
        industry_finance_1: "Mobile payment",
        industry_finance_2: "Rating and scoring",
        
        // Modèles de déploiement
        deployment_models_title: "MODÈLES DE DÉPLOIEMENT & LICENCES",
        cloud_saas_title: "Cloud SaaS",
        cloud_saas_1: "Aucune installation",
        cloud_saas_2: "Adaptation automatique à la charge",
        cloud_saas_3: "Licence annuelle",
        on_premises_title: "Sur site (on-premises)",
        on_premises_1: "Sur votre infrastructure physique",
        on_premises_2: "Gestion assurée par le client",
        on_premises_3: "Licence perpétuelle",
        
        // Notre approche
        our_approach_title: "NOTRE APPROCHE",
        approach_1: "Implication du client dans le recueil des attentes, les études et la conception",
        approach_2: "Mise à contribution d'une expertise de qualité et des meilleurs outils de l'industrie",
        approach_3: "Documentation des résultats",
        approach_4: "Renforcement de capacités et accompagnement du changement",
        approach_5: "Support et maintenance pour les logiciels",
        approach_6: "Nos solutions logicielles vérifient les caractéristiques des solutions modernes et sécurisées pour l'amélioration des performances de nos clients",
        
        // Tableau comparatif - Fonctionnalités
        feature_simplicity: "Simplicité d'utilisation",
        feature_multilingual: "Multilingue",
        feature_security: "Sécurité",
        feature_integration: "Integration aisée",
        feature_responsive: "Responsive design",
        feature_admin: "Espace d'administration",
        
        // Tableau comparatif - Avantages
        benefit_simplicity_1: "Courbe d'apprentissage réduite",
        benefit_simplicity_2: "Interfaces utilisateur intuitives",
        benefit_simplicity_3: "Documentation complète",
        
        benefit_multilingual_1: "Support de multiples langues",
        benefit_multilingual_2: "Interface adaptable par région",
        benefit_multilingual_3: "Gestion centralisée des traductions",
        
        benefit_security_1: "Cryptage de bout en bout",
        benefit_security_2: "Authentification multi-facteurs",
        benefit_security_3: "Audits de sécurité réguliers",
        
        benefit_integration_1: "APIs standardisées",
        benefit_integration_2: "Connecteurs pré-configurés",
        benefit_integration_3: "Migration facilitée",
        
        benefit_responsive_1: "Optimisé mobile",
        benefit_responsive_2: "Interface adaptive",
        benefit_responsive_3: "Performance sur tous appareils",
        
        benefit_admin_1: "Tableau de bord centralisé",
        benefit_admin_2: "Gestion des droits granulaire",
        benefit_admin_3: "Rapports automatisés"
    },
    
    en: {
        // Meta et navigation
        page_title_solutions: "Solutions - MK BA Excellence in Technology Solutions",
        nav_industries_served: "Industries served",
        nav_services: "Services",
        nav_solutions: "Solutions",
        
        // Breadcrumb
        breadcrumb_what_we_do: "What we do",
        breadcrumb_solutions: "Solutions",
        
        // Nouveau mega menu "What we do"
        what_we_do_mega_title: "What we do",
        what_we_do_mega_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        
        // Hero Section
        solutions_hero_title: "Solutions",
        solutions_hero_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        
        // Section introductive
        solutions_intro_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
        // Section titre
        solutions_section_title: "Product list by industry",
        
        // Industries - DATA ENGINEERING AND AI
        industry_data_ai_title: "DATA ENGINEERING AND AI",
        industry_data_ai_1: "Online government e-Services",
        industry_data_ai_2: "e-Justice",
        industry_data_ai_3: "Civil registration and vital statistics",
        industry_data_ai_4: "Social protection",
        industry_data_ai_5: "Projects and Programs Monitoring and Evaluation",
        industry_data_ai_6: "Land Management",
        industry_data_ai_7: "e-Sourcing, e-Procurement, e-",
        industry_data_ai_8: "Citizen engagement",
        
        // Industries - HEALTHCARE
        industry_healthcare_title: "HEALTHCARE",
        industry_healthcare_1: "Hospital management",
        industry_healthcare_2: "Health products tracking and logistics",
        industry_healthcare_3: "Laboratory management",
        
        // Industries - EDUCATION
        industry_education_title: "EDUCATION",
        industry_education_1: "e-Learning platform",
        industry_education_2: "School management",
        
        // Industries - BUSINESS MANAGEMENT
        industry_business_title: "BUSINESS MANAGEMENT",
        industry_business_1: "Document Management System",
        industry_business_2: "Enterprise Resource Planning",
        industry_business_3: "Project Management Software",
        industry_business_4: "HR Management",
        industry_business_5: "Customer Relationship Management",
        industry_business_6: "e-Sourcing, e-Procurement, e-",
        industry_business_7: "AI profiling and selection in HR",
        industry_business_8: "Business Intelligence",
        industry_business_9: "Networking",
        
        // Industries - ENVIRONMENT
        industry_environment_title: "ENVIRONMENT",
        industry_environment_1: "Environmental Monitoring",
        industry_environment_2: "Waste Management",
        
        // Industries - FINANCE
        industry_finance_title: "FINANCE",
        industry_finance_1: "Mobile payment",
        industry_finance_2: "Rating and scoring",
        
        // Modèles de déploiement
        deployment_models_title: "DEPLOYMENT MODELS & LICENSES",
        cloud_saas_title: "Cloud SaaS",
        cloud_saas_1: "No installation required",
        cloud_saas_2: "Automatic load scaling",
        cloud_saas_3: "Annual license",
        on_premises_title: "On-premises",
        on_premises_1: "On your physical infrastructure",
        on_premises_2: "Client-managed",
        on_premises_3: "Perpetual license",
        
        // Notre approche
        our_approach_title: "OUR APPROACH",
        approach_1: "Client involvement in requirements gathering, studies and design",
        approach_2: "Leveraging quality expertise and industry-leading tools",
        approach_3: "Results documentation",
        approach_4: "Capacity building and change management",
        approach_5: "Software support and maintenance",
        approach_6: "Our software solutions meet the characteristics of modern and secure solutions for improving our clients' performance",
        
        // Tableau comparatif - Fonctionnalités
        feature_simplicity: "Ease of use",
        feature_multilingual: "Multilingual",
        feature_security: "Security",
        feature_integration: "Easy integration",
        feature_responsive: "Responsive design",
        feature_admin: "Administration space",
        
        // Tableau comparatif - Avantages
        benefit_simplicity_1: "Reduced learning curve",
        benefit_simplicity_2: "Intuitive user interfaces",
        benefit_simplicity_3: "Complete documentation",
        
        benefit_multilingual_1: "Multiple language support",
        benefit_multilingual_2: "Region-adaptable interface",
        benefit_multilingual_3: "Centralized translation management",
        
        benefit_security_1: "End-to-end encryption",
        benefit_security_2: "Multi-factor authentication",
        benefit_security_3: "Regular security audits",
        
        benefit_integration_1: "Standardized APIs",
        benefit_integration_2: "Pre-configured connectors",
        benefit_integration_3: "Facilitated migration",
        
        benefit_responsive_1: "Mobile optimized",
        benefit_responsive_2: "Adaptive interface",
        benefit_responsive_3: "Performance on all devices",
        
        benefit_admin_1: "Centralized dashboard",
        benefit_admin_2: "Granular rights management",
        benefit_admin_3: "Automated reports"
    }
};

// ==============================================
// GESTION DU MEGA MENU "WHAT WE DO" - IDENTIQUE AU SERVICES
// ==============================================

function initWhatWeDoMegaMenuSolutions() {
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
                updateWhatWeDoMegaMenuStylesSolutions(true);
            });
            
            megaMenuDropdown.addEventListener('mouseleave', function() {
                whatWeDoMegaMenuOpen = false;
                dropdownMenu.classList.remove('show');
                navbar.classList.remove('mega-menu-open');
                updateWhatWeDoMegaMenuStylesSolutions(false);
            });
            
            // Fermer seulement en cliquant à l'extérieur
            document.addEventListener('click', function(e) {
                if (whatWeDoMegaMenuOpen && !megaMenuDropdown.contains(e.target)) {
                    whatWeDoMegaMenuOpen = false;
                    dropdownMenu.classList.remove('show');
                    navbar.classList.remove('mega-menu-open');
                    updateWhatWeDoMegaMenuStylesSolutions(false);
                }
            });
            
            // Empêcher la fermeture lors du clic dans le menu
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
}

function updateWhatWeDoMegaMenuStylesSolutions(isOpen) {
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
// TABLEAU COMPARATIF INTERACTIF - FONCTIONNALITÉ PRINCIPALE
// ==============================================

function initFeaturesComparisonTable() {
    const featureItems = document.querySelectorAll('.feature-item');
    const benefitSections = document.querySelectorAll('.benefit-section');
    
    if (featureItems.length === 0 || benefitSections.length === 0) {
        console.warn('Éléments du tableau comparatif non trouvés');
        return;
    }
    
    // Initialiser avec le premier élément actif
    showBenefitContent('simplicity');
    
    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            const featureType = this.getAttribute('data-feature');
            
            if (featureType && featureType !== currentSelectedFeature) {
                // Mettre à jour l'état actif
                featureItems.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                
                // Changer le contenu avec animation
                showBenefitContent(featureType);
                currentSelectedFeature = featureType;
                
                // Analytics
                console.log(`Analytics: Clic sur fonctionnalité "${featureType}"`);
            }
        });
        
        // Support clavier
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.background = '';
            }
        });
        
        // Rendre focusable pour l'accessibilité
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        
        const featureText = item.querySelector('span')?.textContent;
        if (featureText) {
            item.setAttribute('aria-label', `Sélectionner fonctionnalité: ${featureText}`);
        }
    });
}

function showBenefitContent(featureType) {
    const benefitSections = document.querySelectorAll('.benefit-section');
    
    // Animation de sortie
    benefitSections.forEach(section => {
        if (section.classList.contains('active')) {
            section.style.opacity = '0';
            setTimeout(() => {
                section.classList.remove('active');
                section.style.display = 'none';
            }, 150);
        }
    });
    
    // Animation d'entrée
    setTimeout(() => {
        const targetSection = document.querySelector(`.benefit-section[data-content="${featureType}"]`);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
            
            // Forcer le reflow pour l'animation
            targetSection.offsetHeight;
            
            targetSection.style.opacity = '1';
        }
    }, 200);
}

// ==============================================
// INTERACTIONS AVEC LES CARTES D'INDUSTRIES - MISE À JOUR CSS GRID
// ==============================================

function initSolutionCardsInteractions() {
    const solutionCards = document.querySelectorAll('.solution-card-industry');
    
    solutionCards.forEach((card, index) => {
        // Observer pour l'animation d'entrée adaptée au CSS Grid
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Délai basé sur la position dans la grille plutôt que l'index séquentiel
                    const delay = calculateGridDelay(index);
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, delay);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        cardObserver.observe(card);
        
        // Effets d'interaction au survol adaptés
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.01)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
            
            // Animer les icônes de validation
            const checkIcons = this.querySelectorAll('.check-icon');
            checkIcons.forEach((icon, iconIndex) => {
                setTimeout(() => {
                    icon.style.transform = 'scale(1.1)';
                }, iconIndex * 30);
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
        
        // Support clavier et interactions existantes
        card.addEventListener('focus', function() {
            this.style.outlineOffset = '2px';
        });
        
        card.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
        
        card.addEventListener('click', function() {
            const industryTitle = this.querySelector('.solution-card-title')?.textContent;
            
            // Animation de clic
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            console.log(`Clic sur industrie: ${industryTitle}`);
        });
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Accessibilité
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        const industryTitle = card.querySelector('.solution-card-title');
        if (industryTitle) {
            card.setAttribute('aria-label', `Industrie: ${industryTitle.textContent}`);
        }
    });
}

// ==============================================
// FONCTION UTILITAIRE - CALCUL DÉLAI ANIMATION GRILLE
// ==============================================

function calculateGridDelay(index) {
    // Calculer le délai basé sur la position dans une grille 3 colonnes
    const columnsCount = getGridColumns();
    const row = Math.floor(index / columnsCount);
    const col = index % columnsCount;
    
    // Animation en diagonale pour un effet plus naturel
    return (row * 100) + (col * 50);
}

function getGridColumns() {
    // Déterminer le nombre de colonnes selon la taille d'écran
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

// ==============================================
// FONCTION DE RÉAJUSTEMENT AU REDIMENSIONNEMENT
// ==============================================

function handleGridResize() {
    const solutionCards = document.querySelectorAll('.solution-card-industry');
    
    // Réinitialiser les styles inline qui pourraient interférer
    solutionCards.forEach(card => {
        card.style.height = '';
        card.style.minHeight = '';
    });
    
    // Forcer le recalcul de la grille CSS
    const grid = document.querySelector('.solutions-grid .row');
    if (grid) {
        grid.style.display = 'none';
        grid.offsetHeight; // Force reflow
        grid.style.display = '';
    }
}

// ==============================================
// GESTION DES ANIMATIONS AU SCROLL
// ==============================================

function initSolutionsScrollAnimations() {
    if (solutionsAnimationsInitialized) return;
    
    // Animation des titres de section
    const sectionTitles = document.querySelectorAll('.solutions-section-title, .deployment-section-title, .approach-section-title');
    sectionTitles.forEach((title, index) => {
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    titleObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'all 0.8s ease';
        titleObserver.observe(title);
    });
    
    // Animation des sections hero et intro
    const heroContent = document.querySelector('.solutions-hero-content');
    const heroIllustration = document.querySelector('.solutions-hero-illustration');
    
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
    
    // Animation du tableau comparatif
    const comparisonTable = document.querySelector('.comparison-table');
    if (comparisonTable) {
        const tableObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    tableObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        comparisonTable.style.opacity = '0';
        comparisonTable.style.transform = 'translateY(20px)';
        comparisonTable.style.transition = 'all 0.6s ease';
        tableObserver.observe(comparisonTable);
    }
    
    solutionsAnimationsInitialized = true;
}

// ==============================================
// GESTION DES TRADUCTIONS POUR LA PAGE SOLUTIONS
// ==============================================

function setLanguageSolutionsPage(lang) {
    const pageTranslations = solutionsTranslations[lang];
    
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
    if (pageTranslations.page_title_solutions) {
        document.title = pageTranslations.page_title_solutions;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page Solutions`);
}

// ==============================================
// GESTION DU BREADCRUMB NAVIGATION
// ==============================================

function initBreadcrumbNavigationSolutions() {
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
// SMOOTH SCROLL ADAPTÉ POUR LA PAGE SOLUTIONS
// ==============================================

function initSmoothScrollSolutionsPage() {
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

function initCheckIconsHandlingSolutions() {
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

function initSolutionsAnalytics() {
    const solutionCards = document.querySelectorAll('.solution-card-industry');
    const featureItems = document.querySelectorAll('.feature-item');
    
    // Analytics pour les cartes d'industries
    solutionCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const industryTitle = this.querySelector('.solution-card-title')?.textContent;
            console.log(`Analytics: Clic sur industrie "${industryTitle}" (position: ${index + 1})`);
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
                    const industryTitle = this.querySelector('.solution-card-title')?.textContent;
                    console.log(`Analytics: Intérêt prolongé pour industrie "${industryTitle}" (${hoverDuration}ms)`);
                }
                hoverStartTime = null;
            }
        });
    });
    
    // Analytics pour le tableau comparatif
    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            const featureType = this.getAttribute('data-feature');
            const featureText = this.querySelector('span')?.textContent;
            console.log(`Analytics: Sélection fonctionnalité "${featureText}" (${featureType})`);
        });
    });
}

// ==============================================
// FONCTION DE DEBUG POUR DÉVELOPPEMENT
// ==============================================

function debugGridLayout() {
    const cards = document.querySelectorAll('.solution-card-industry');
    console.log('=== DEBUG GRID LAYOUT ===');
    
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const title = card.querySelector('.solution-card-title')?.textContent || `Card ${index}`;
        const features = card.querySelectorAll('.solution-feature').length;
        
        console.log(`${title}:`, {
            index,
            height: Math.round(rect.height),
            features,
            top: Math.round(rect.top),
            left: Math.round(rect.left)
        });
    });
    
    console.log('=== END DEBUG ===');
}

// ==============================================
// FALLBACK POUR NAVIGATEURS SANS CSS GRID
// ==============================================

function applyCSSGridFallback() {
    const style = document.createElement('style');
    style.textContent = `
        .solutions-grid .row {
            display: flex !important;
            flex-wrap: wrap !important;
            margin: 0 -1rem !important;
        }
        
        .solutions-grid .row > [class*="col-"] {
            padding: 0 1rem 2rem 1rem !important;
            display: flex !important;
        }
        
        .solution-card-industry {
            height: 100% !important;
            min-height: 350px !important;
        }
    `;
    document.head.appendChild(style);
    console.log('Fallback CSS Grid appliqué');
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initSolutionsPage() {
    // Initialiser toutes les fonctionnalités spécifiques
    initWhatWeDoMegaMenuSolutions();
    initFeaturesComparisonTable();
    initSolutionCardsInteractions();
    initSolutionsScrollAnimations();
    initBreadcrumbNavigationSolutions();
    initSmoothScrollSolutionsPage();
    initCheckIconsHandlingSolutions();
    initSolutionsAnalytics();
    
    // Charger la langue sauvegardée
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageSolutionsPage(savedLanguage);
    } catch (e) {
        setLanguageSolutionsPage('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageSolutionsPage(e.detail.language);
    });
    
    // Gérer le redimensionnement pour la nouvelle grille
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            handleGridResize();
            
            // Fermer le mega menu sur mobile si ouvert
            if (window.innerWidth < 768 && whatWeDoMegaMenuOpen) {
                const megaMenuDropdown = document.querySelector('.what-we-do-dropdown');
                const dropdownMenu = megaMenuDropdown?.querySelector('.what-we-do-mega-menu');
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('show');
                    whatWeDoMegaMenuOpen = false;
                }
            }
        }, 250);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            originalSetLanguage(lang);
            setLanguageSolutionsPage(lang);
        };
    }
    
    // Debug en mode développement
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.debugGrid = debugGridLayout;
        console.log('Debug disponible avec: debugGrid()');
    }
    
    console.log('Page Solutions initialisée avec CSS Grid');
}

// ==============================================
// UTILITAIRES D'ACCESSIBILITÉ
// ==============================================

function initAccessibilitySolutionsPage() {
    // Améliorer l'accessibilité des cartes d'industries
    const solutionCards = document.querySelectorAll('.solution-card-industry');
    solutionCards.forEach(card => {
        const title = card.querySelector('.solution-card-title');
        if (title && !card.getAttribute('aria-label')) {
            card.setAttribute('aria-label', `Industrie: ${title.textContent}`);
        }
        
        // Ajouter aria-describedby pour les listes de fonctionnalités
        const featuresList = card.querySelector('.solution-features-list');
        if (featuresList) {
            const listId = `features-${Math.random().toString(36).substr(2, 9)}`;
            featuresList.setAttribute('id', listId);
            card.setAttribute('aria-describedby', listId);
        }
    });
    
    // Améliorer l'accessibilité du tableau comparatif
    const comparisonTable = document.querySelector('.comparison-table');
    if (comparisonTable) {
        comparisonTable.setAttribute('role', 'tablist');
        comparisonTable.setAttribute('aria-label', 'Tableau comparatif des fonctionnalités');
        
        const featureItems = document.querySelectorAll('.feature-item');
        const benefitSections = document.querySelectorAll('.benefit-section');
        
        featureItems.forEach((item, index) => {
            item.setAttribute('role', 'tab');
            item.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
            item.setAttribute('aria-controls', `benefit-panel-${index}`);
            item.setAttribute('id', `feature-tab-${index}`);
        });
        
        benefitSections.forEach((section, index) => {
            section.setAttribute('role', 'tabpanel');
            section.setAttribute('aria-labelledby', `feature-tab-${index}`);
            section.setAttribute('id', `benefit-panel-${index}`);
        });
    }
    
    // Support du mode contraste élevé
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Support du mode mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Désactiver les animations pour les cartes
        const animatedElements = document.querySelectorAll('.solution-card-industry, .comparison-table');
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
        
        // Navigation au clavier dans le tableau comparatif
        if (e.target.classList.contains('feature-item')) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                const currentIndex = Array.from(document.querySelectorAll('.feature-item')).indexOf(e.target);
                const items = document.querySelectorAll('.feature-item');
                let nextIndex;
                
                if (e.key === 'ArrowDown') {
                    nextIndex = (currentIndex + 1) % items.length;
                } else {
                    nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
                }
                
                items[nextIndex].focus();
                items[nextIndex].click();
            }
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// ==============================================
// GESTION DES ERREURS ET PERFORMANCE
// ==============================================

function initErrorHandlingAndPerformanceSolutions() {
    // Gestion des erreurs d'images avec fallback amélioré
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Erreur de chargement d\'image:', e.target.src);
            
            if (e.target.classList.contains('illustration-browsers')) {
                // Fallback pour l'illustration principale
                e.target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'solutions-hero-fallback';
                fallback.textContent = 'Illustration des solutions MK BA';
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
            
            // Fallback spécifique pour les icônes de validation
            if (e.target.classList.contains('check-icon')) {
                e.target.style.display = 'none';
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
                e.target.parentNode.insertBefore(fallbackIcon, e.target);
            }
        }
    }, true);
    
    // Vérification du support CSS Grid avec fallback
    if (!CSS.supports('display: grid')) {
        console.warn('CSS Grid non supporté - Application du fallback');
        applyCSSGridFallback();
    }
    
    // Préchargement optimisé
    const importantImages = [
        './assets/images/solutions/browsers-interfaces.png',
        './assets/images/solutions/world-maps.png',
        './assets/images/solutions/globe.png',
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
        initSolutionsPage();
        initAccessibilitySolutionsPage();
        initErrorHandlingAndPerformanceSolutions();
    });
} else {
    initSolutionsPage();
    initAccessibilitySolutionsPage();
    initErrorHandlingAndPerformanceSolutions();
}

// Export des fonctions pour utilisation externe
window.SolutionsPage = {
    initSolutionsPage,
    setLanguageSolutionsPage,
    initWhatWeDoMegaMenuSolutions,
    initFeaturesComparisonTable,
    initSolutionCardsInteractions,
    initSolutionsScrollAnimations,
    solutionsTranslations,
    showBenefitContent,
    handleGridResize,
    debugGridLayout,
    applyCSSGridFallback,
    calculateGridDelay,
    getGridColumns
};