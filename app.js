// Configuration et variables globales
let currentLanguage = 'fr';
let translations = {};
let searchExpanded = false;

// Translations data
const translationsData = {
    fr: {
        // Navigation
        page_title: "MK BA - Excellence en Solutions Technologiques",
        nav_who_we_are: "Qui nous sommes",
        nav_what_we_do: "Ce que nous faisons",
        nav_achievements: "Réalisations",
        nav_news: "Actualités",
        nav_contact: "Nous contacter",
        search_placeholder: "Recherche dans MK BA",
        
        // Hero Section
        hero_title: "Cras gravida bibendum dolor eu varius.",
        hero_subtitle_1: "Cras gravida",
        hero_subtitle_2: "Duis mauris",
        hero_subtitle_3: "Convallis tempor",
        
        // Who We Are Section
        who_we_are_title: "Qui sommes-nous MK BA",
        who_we_are_description: "Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae nec ante. Cras at est augue. Cras ut interdum elit. Ut malesuada a urna sit amet blandit. Nullam nunc lorem, aliquam at eros laoreet, feugiat bibendum ligula. Aenean congue.",
        value_integrity_title: "Intégrité",
        value_integrity_desc: "Nous faisons la bonne chose, de la bonne manière, au bon moment, toujours.",
        value_collaboration_title: "Collaboration",
        value_collaboration_desc: "Nous prospérons grâce au partenariat et à l'intelligence collective.",
        value_impact_title: "Impact",
        value_impact_desc: "Nous sommes motivés par des résultats qui comptent.",
        read_more: "Lire plus",
        video_title: "Laoreet Nec Nisl",
        
        // Where We Operate
        where_we_operate_title: "Où nous intervenons",
        where_we_operate_subtitle: "Nous intervenons dans 10 pays d'Afrique et de l'Océan Indien",
        map_legend_cameroon: "Cameroun",
        map_legend_projects: "Projet : 20",
        map_legend_interventions: "Intervenants : 70",
        
        // Services Section
        services_title: "Les services offerts par MK BA",
        services_description: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis ultrices eros. Curabitur sit amet eros eu arcu consectetur pulvinar. Aliquam sodales, turpis eget tristique tempor, sapien lacus facilisis diam, molestie efficitur sapien velit nec magna. Maecenas interdum efficitur tempor. Quisque scelerisque id odio nec dictum. Donec sed pulvinar tortor. Duis ut dolor consectetur, mollis lorem et, mattis est. Nullam mattis mauris quis massa consectetur dapibus. Nam ac iaculis magna. Sed eget diam mi. Sed id quam et purus luctus pretium.",
        service_egovernance_title: "E-gouvernance et transformation numérique",
        service_egovernance_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_development_title: "Développement logiciel, web et mobile",
        service_development_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_erp_title: "ERP et intégration",
        service_erp_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_data_title: "Ingénierie des données et IA",
        service_data_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_security_title: "Sécurité de l'information",
        service_security_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_network_title: "Ingénierie réseau et système, cloud",
        service_network_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_support_title: "Support informatique",
        service_support_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_outsourcing_title: "Externalisation informatique",
        service_outsourcing_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_financial_title: "Services financiers",
        service_financial_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        
        // Products Section
        products_title: "Produits",
        products_description: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis ultrices eros. Curabitur sit amet eros eu arcu consectetur pulvinar. Aliquam sodales, turpis eget tristique tempor, sapien lacus facilisis diam, molestie efficitur sapien velit nec magna. Maecenas interdum efficitur tempor. Quisque scelerisque id odio nec dictum. Donec sed pulvinar tortor. Duis ut dolor consectetur, mollis lorem et, mattis est. Nullam mattis mauris quis massa consectetur dapibus. Nam ac iaculis magna. Sed eget diam mi. Sed id quam et purus luctus pretium.",
        product_data_ai: "Ingénierie des données et IA",
        product_healthcare: "Santé",
        product_education: "Éducation",
        product_environment: "Environnement",
        product_business: "Gestion d'entreprise",
        product_finance: "Finance",
        
        // Indicators Section
        indicators_title: "Quelques indicateurs clés de MK BA",
        indicator_label: "Etiam convallis",
        
        // Achievements Section
        achievements_title: "Réalisations",
        achievement_beneficiary: "Nom du bénéficiaire",
        achievement_subtitle: "Nunc scelerisque tincidunt elit.",
        achievement_description: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus, felis ligula tempus lorem, eu porttitor ex lacus vel felis. Vivamus egestas scelerisque consectetur. Vestibulum faucibus enim urna, fermentum aliquet quam",
        see_project: "Voir le projet",
        
        // News Section
        news_title: "Actualités",
        news_1_title: "Aliquam in bibendum mauris. Sed vitae erat vel velit blandit",
        news_1_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec di. Morbi mauris",
        news_2_title: "Fusce at nisl eget dolor rhoncus facilisis. Mauris ante nisl,",
        news_2_excerpt: "Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim",
        news_3_title: "Duis rhoncus dui venenatis consequat porttitor. Etiam",
        news_3_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris",
        read_more_news: "Voir plus",
        all_news: "Toutes les actualités",
        
        // Footer
        footer_who_we_are: "Qui nous sommes",
        footer_who_are_mkba: "Qui sommes-nous MK BA",
        footer_our_team: "Notre équipe",
        footer_sustainability: "Notre engagement pour la durabilité",
        footer_technologies: "Technologies",
        footer_work_with_us: "Travailler avec nous",
        footer_what_we_do: "Ce que nous faisons",
        footer_industries: "Industries servies",
        footer_services: "Services",
        footer_solutions: "Solutions",
        footer_achievements: "Réalisations",
        footer_achievements_link: "Nos réalisations",
        footer_contacts: "Contacts",
        footer_address: "Rue 16-Maille 18, Cité SAD Banga-Japoma, Douala Cameroun",
        footer_legal_mentions: "Mentions légales",
        footer_privacy: "Politique de Confidentialité",
        footer_terms: "Termes et conditions",
        footer_copyright: "Copyright © 2025. Tous droits réservés",
        footer_powered: "Powered by MK BA"
    },
    
    en: {
        // Navigation
        page_title: "MK BA - Excellence in Technology Solutions",
        nav_who_we_are: "Who we are",
        nav_what_we_do: "What we do",
        nav_achievements: "Achievements",
        nav_news: "News",
        nav_contact: "Contact us",
        search_placeholder: "Search in MK BA",
        
        // Hero Section
        hero_title: "Cras gravida bibendum dolor eu varius.",
        hero_subtitle_1: "Cras gravida",
        hero_subtitle_2: "Duis mauris",
        hero_subtitle_3: "Convallis tempor",
        
        // Who We Are Section
        who_we_are_title: "Who are MK BA",
        who_we_are_description: "Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae nec ante. Cras at est augue. Cras ut interdum elit. Ut malesuada a urna sit amet blandit. Nullam nunc lorem, aliquam at eros laoreet, feugiat bibendum ligula. Aenean congue.",
        value_integrity_title: "Integrity",
        value_integrity_desc: "We do the right thing, the right way, at the right time, always.",
        value_collaboration_title: "Collaboration",
        value_collaboration_desc: "We thrive on partnership and collective intelligence.",
        value_impact_title: "Impact",
        value_impact_desc: "We are driven by results that matter.",
        read_more: "Read more",
        video_title: "Laoreet Nec Nisl",
        
        // Where We Operate
        where_we_operate_title: "Where we operate",
        where_we_operate_subtitle: "We operate in 10 countries in Africa and the Indian Ocean",
        map_legend_cameroon: "Cameroon",
        map_legend_projects: "Projects: 20",
        map_legend_interventions: "Interventions: 70",
        
        // Services Section
        services_title: "Services offered by MK BA",
        services_description: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis ultrices eros. Curabitur sit amet eros eu arcu consectetur pulvinar. Aliquam sodales, turpis eget tristique tempor, sapien lacus facilisis diam, molestie efficitur sapien velit nec magna. Maecenas interdum efficitur tempor. Quisque scelerisque id odio nec dictum. Donec sed pulvinar tortor. Duis ut dolor consectetur, mollis lorem et, mattis est. Nullam mattis mauris quis massa consectetur dapibus. Nam ac iaculis magna. Sed eget diam mi. Sed id quam et purus luctus pretium.",
        service_egovernance_title: "E-governance and digital transformation",
        service_egovernance_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_development_title: "Software, web and mobile development",
        service_development_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_erp_title: "ERP and integration",
        service_erp_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_data_title: "Data engineering and AI",
        service_data_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_security_title: "Information security",
        service_security_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_network_title: "Network and system engineering, cloud",
        service_network_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_support_title: "IT support",
        service_support_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_outsourcing_title: "IT outsourcing",
        service_outsourcing_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        service_financial_title: "Financial services",
        service_financial_desc: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis",
        
        // Products Section
        products_title: "Products",
        products_description: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque. Sed quis ultrices eros. Curabitur sit amet eros eu arcu consectetur pulvinar. Aliquam sodales, turpis eget tristique tempor, sapien lacus facilisis diam, molestie efficitur sapien velit nec magna. Maecenas interdum efficitur tempor. Quisque scelerisque id odio nec dictum. Donec sed pulvinar tortor. Duis ut dolor consectetur, mollis lorem et, mattis est. Nullam mattis mauris quis massa consectetur dapibus. Nam ac iaculis magna. Sed eget diam mi. Sed id quam et purus luctus pretium.",
        product_data_ai: "Data engineering and AI",
        product_healthcare: "Healthcare",
        product_education: "Education",
        product_environment: "Environment",
        product_business: "Business management",
        product_finance: "Finance",
        
        // Indicators Section
        indicators_title: "Some key indicators of MK BA",
        indicator_label: "Etiam convallis",
        
        // Achievements Section
        achievements_title: "Achievements",
        achievement_beneficiary: "Beneficiary name",
        achievement_subtitle: "Nunc scelerisque tincidunt elit.",
        achievement_description: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus, felis ligula tempus lorem, eu porttitor ex lacus vel felis. Vivamus egestas scelerisque consectetur. Vestibulum faucibus enim urna, fermentum aliquet quam",
        see_project: "See project",
        
        // News Section
        news_title: "News",
        news_1_title: "Aliquam in bibendum mauris. Sed vitae erat vel velit blandit",
        news_1_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec di. Morbi mauris",
        news_2_title: "Fusce at nisl eget dolor rhoncus facilisis. Mauris ante nisl,",
        news_2_excerpt: "Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim",
        news_3_title: "Duis rhoncus dui venenatis consequat porttitor. Etiam",
        news_3_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris",
        read_more_news: "Read more",
        all_news: "All news",
        
        // Footer
        footer_who_we_are: "Who we are",
        footer_who_are_mkba: "Who are MK BA",
        footer_our_team: "Our Team",
        footer_sustainability: "Our commitment to sustainability",
        footer_technologies: "Technologies",
        footer_work_with_us: "Work with us",
        footer_what_we_do: "What we do",
        footer_industries: "Industries served",
        footer_services: "Services",
        footer_solutions: "Solutions",
        footer_achievements: "Achievements",
        footer_achievements_link: "Our achievements",
        footer_contacts: "Contacts",
        footer_address: "Rue 16-Maille 18, Cité SAD Banga-Japoma, Douala Cameroon",
        footer_legal_mentions: "Legal mentions",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms and conditions",
        footer_copyright: "Copyright © 2025. All rights reserved",
        footer_powered: "Powered by MK BA"
    }
};

// Fonction de basculement de la recherche
function toggleSearch() {
    const searchInputContainer = document.getElementById('searchInputContainer');
    const searchTrigger = document.querySelector('.search-trigger');
    
    searchExpanded = !searchExpanded;
    
    if (searchExpanded) {
        searchInputContainer.classList.add('active');
        searchTrigger.style.opacity = '0';
        searchInputContainer.querySelector('.search-input').focus();
    } else {
        searchInputContainer.classList.remove('active');
        searchTrigger.style.opacity = '1';
    }
}

// Fonction pour copier le lien de la vidéo
function copyVideoLink() {
    const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(videoUrl).then(() => {
            showNotification('Lien copié avec succès!');
        }).catch(() => {
            fallbackCopyText(videoUrl);
        });
    } else {
        fallbackCopyText(videoUrl);
    }
}

// Fonction de sauvegarde pour copier le texte
function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Lien copié avec succès!');
    } catch (err) {
        showNotification('Erreur lors de la copie');
    }
    
    document.body.removeChild(textArea);
}

// Fonction pour afficher les notifications
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-orange);
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 9999;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Animation du compteur pour les indicateurs
function animateCounters() {
    const counters = document.querySelectorAll('.indicator-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Observer pour déclencher l'animation des indicateurs
function initCounterAnimation() {
    const indicatorsSection = document.getElementById('indicators');
    
    if (indicatorsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(indicatorsSection);
    }
}
function setLanguage(lang) {
    currentLanguage = lang;
    translations = translationsData[lang];
    
    // Mettre à jour tous les éléments avec data-i18n
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            // Gérer différents types d'éléments
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = translations[key];
            } else if (element.hasAttribute('title')) {
                element.title = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });
    
    // Mettre à jour le sélecteur de langue
    document.getElementById('languageSelect').value = lang;
    
    // Mettre à jour l'attribut lang du document
    document.documentElement.lang = lang;
    
    // Optionnel: Sauvegarder la préférence de langue
    try {
        localStorage.setItem('mkba-language', lang);
    } catch (e) {
        // Ignore si localStorage n'est pas disponible
    }
}

// Gestion du scroll navbar
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}

// Smooth scroll pour les liens d'ancrage
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animation des éléments au scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    const elementsToAnimate = document.querySelectorAll('.service-card, .product-card, .achievement-card, .news-card, .indicator-card');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Gestion des cards produits
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            // Retirer la classe active de toutes les cartes
            productCards.forEach(c => c.classList.remove('active'));
            // Ajouter la classe active à la carte cliquée
            card.classList.add('active');
        });
    });
}

// Carrousel des actualités (si nécessaire)
function initNewsCarousel() {
    // Implémentation d'un carrousel simple si plus de 3 actualités
    const newsContainer = document.querySelector('#news .row');
    const newsCards = document.querySelectorAll('.news-card');
    
    if (newsCards.length > 3) {
        // Logique de carrousel ici si nécessaire
        console.log('Carrousel d\'actualités activé');
    }
}

// Gestion de la recherche
function initSearch() {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.addEventListener('click', () => {
            // Implementer la logique de recherche
            const searchQuery = prompt(translations.search_placeholder || 'Recherche dans MK BA');
            if (searchQuery) {
                console.log('Recherche pour:', searchQuery);
                // Ici, vous pourriez implémenter la logique de recherche réelle
                // Par exemple, rediriger vers une page de résultats ou filtrer le contenu
            }
        });
    }
}

// Gestion des formulaires (pour une extension future)
function initForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Logique de soumission de formulaire
            console.log('Formulaire soumis');
        });
    });
}

// Fonction pour charger les images de manière lazy
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
    });
}

// Gestion responsive du menu mobile
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Fermer le menu mobile quand on clique sur un lien
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        hide: true
                    });
                }
            });
        });
    }
}

// Fonction d'initialisation globale
function initWebsite() {
    // Charger la langue préférée
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguage(savedLanguage);
    } catch (e) {
        setLanguage('fr');
    }
    
    // Initialiser les fonctionnalités
    initSmoothScroll();
    initScrollAnimations();
    initProductCards();
    initNewsCarousel();
    initSearch();
    initForms();
    initLazyLoading();
    initMobileMenu();
    initCounterAnimation(); // Nouvelle fonction
    
    // Event listeners
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Fermer la recherche en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
        const searchContainer = document.getElementById('searchContainer');
        if (searchExpanded && !searchContainer.contains(e.target)) {
            toggleSearch();
        }
    });
    
    // Gérer l'échappement pour fermer la recherche
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchExpanded) {
            toggleSearch();
        }
    });
    
    // Gestion du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        // Fermer la recherche en mode mobile
        if (window.innerWidth < 768 && searchExpanded) {
            toggleSearch();
        }
    });
    
    console.log('Site web MK BA initialisé avec succès');
}

// Utilitaires pour l'accessibilité
function initAccessibility() {
    // Gestion du focus clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Améliorer le contraste pour les utilisateurs qui en ont besoin
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Respecter les préférences de mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
}

// Performance et optimisation
function initPerformanceOptimizations() {
    // Prefetch des liens importants
    const importantLinks = document.querySelectorAll('a[href*="contact"], a[href*="services"]');
    importantLinks.forEach(link => {
        link.setAttribute('rel', 'prefetch');
    });
    
    // Optimisation des images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// Événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initWebsite();
    initAccessibility();
    initPerformanceOptimizations();
});

// Export des fonctions principales pour une utilisation externe si nécessaire
window.MKBAWebsite = {
    setLanguage,
    initWebsite,
    translationsData
};