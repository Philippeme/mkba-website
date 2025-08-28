// Configuration et variables globales
let currentLanguage = 'fr';
let translations = {};
let searchExpanded = false;
let lastScrollTop = 0;

// Translations data - Conformes aux maquettes
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
        read_more: 'Lire plus <i class="fas fa-arrow-right"></i>',
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
        all_news: 'Toutes les actualités <i class="fas fa-arrow-right ms-2"></i>',
        
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
        read_more: 'Read more <i class="fas fa-arrow-right"></i>',
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
        all_news: 'All news <i class="fas fa-arrow-right ms-2"></i>',
        
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

// ==============================================
// GESTION DE LA RECHERCHE (TOP BANNER)
// ==============================================

// Fonction de basculement de la recherche
function toggleSearch() {
    const searchInputContainer = document.getElementById('searchInputContainer');
    const searchTrigger = document.querySelector('.top-banner .search-trigger');
    
    searchExpanded = !searchExpanded;
    
    if (searchExpanded) {
        searchInputContainer.classList.add('active');
        searchTrigger.style.opacity = '0';
        const searchInput = searchInputContainer.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    } else {
        searchInputContainer.classList.remove('active');
        searchTrigger.style.opacity = '0.6';
    }
}

// Fonction pour effectuer une recherche
function performSearch(query) {
    if (query.trim().length < 2) {
        return;
    }
    
    const results = searchInContent(query);
    displaySearchResults(results);
}

// Fonction de recherche dans le contenu local
function searchInContent(query) {
    const searchableElements = document.querySelectorAll('[data-i18n]');
    const results = [];
    
    searchableElements.forEach(element => {
        const content = element.textContent.toLowerCase();
        if (content.includes(query.toLowerCase())) {
            results.push({
                element: element,
                content: content,
                section: findParentSection(element)
            });
        }
    });
    
    return results.slice(0, 5);
}

// Trouver la section parente d'un élément
function findParentSection(element) {
    let parent = element.closest('section');
    if (parent && parent.id) {
        return parent.id;
    }
    return 'content';
}

// Afficher les résultats de recherche
function displaySearchResults(results) {
    if (results.length === 0) {
        showNotification('Aucun résultat trouvé');
        return;
    }
    
    const firstResult = results[0];
    if (firstResult.section) {
        const targetElement = document.getElementById(firstResult.section);
        if (targetElement) {
            // Calculer la position avec les nouvelles hauteurs (bannière + navbar)
            const topBanner = document.querySelector('.top-banner');
            const navbar = document.querySelector('.navbar');
            const totalHeaderHeight = (topBanner ? topBanner.offsetHeight : 0) + 
                                    (navbar ? navbar.offsetHeight : 0);
            const targetPosition = targetElement.offsetTop - totalHeaderHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            showNotification(`${results.length} résultat(s) trouvé(s)`);
        }
    }
}

// Gestion du scroll pour cacher/montrer la bannière (desktop uniquement)
function handleTopBannerScroll() {
    if (window.innerWidth <= 768) return; // Pas de masquage sur mobile
    
    const topBanner = document.querySelector('.top-banner');
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (st > lastScrollTop && st > 100) {
        // Scroll vers le bas - masquer la bannière
        topBanner.classList.add('hide-on-scroll');
        navbar.classList.add('banner-hidden');
        body.classList.add('banner-hidden');
    } else {
        // Scroll vers le haut - montrer la bannière
        topBanner.classList.remove('hide-on-scroll');
        navbar.classList.remove('banner-hidden');
        body.classList.remove('banner-hidden');
    }
    
    lastScrollTop = st <= 0 ? 0 : st;
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

// Fonction pour afficher les notifications (ajustée pour la bannière)
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 70px;
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

// ==============================================
// KEY INDICATORS - Animation des compteurs optimisée
// ==============================================

function animateCountersOptimized() {
    const counters = document.querySelectorAll('.indicator-number[data-target]');
    
    counters.forEach((counter, index) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const startDelay = index * 200;
        
        counter.textContent = '0';
        
        setTimeout(() => {
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
        }, startDelay);
    });
}

// Observer pour déclencher l'animation des indicateurs
function initIndicatorsAnimation() {
    const indicatorsSection = document.getElementById('indicators');
    
    if (indicatorsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.indicator-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-in');
                        }, index * 100);
                    });
                    
                    setTimeout(() => {
                        animateCountersOptimized();
                    }, 300);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });
        
        observer.observe(indicatorsSection);
    }
}

// ==============================================
// ACHIEVEMENTS - Interactions optimisées
// ==============================================

function initAchievementsInteractions() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(card);
        
        card.addEventListener('focusin', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('focusout', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        card.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                const link = this.querySelector('.achievement-link');
                if (link) {
                    this.style.transform = 'translateY(-1px) scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = '';
                        link.click();
                    }, 150);
                }
            }
        });
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('.achievement-link');
                if (link) {
                    link.click();
                }
            }
        });
        
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        
        const link = card.querySelector('.achievement-link');
        if (link) {
            const title = card.querySelector('h3');
            if (title) {
                card.setAttribute('aria-label', `Voir le projet: ${title.textContent}`);
            }
        }
    });
}

// ==============================================
// NEWS - Interactions et effets optimisés
// ==============================================

function initNewsInteractions() {
    const newsCards = document.querySelectorAll('.news-card');
    
    newsCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(card);
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * 2;
            const rotateY = (centerX - x) / centerX * 2;
            
            const image = this.querySelector('.news-image img');
            if (image) {
                image.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const image = this.querySelector('.news-image img');
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
        
        card.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                const link = this.querySelector('.news-link');
                if (link) {
                    this.style.transform = 'translateY(-2px) scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = '';
                        link.click();
                    }, 150);
                }
            }
        });
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('.news-link');
                if (link) {
                    link.click();
                }
            }
        });
        
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        
        const link = card.querySelector('.news-link');
        if (link) {
            const title = card.querySelector('.news-title');
            if (title) {
                card.setAttribute('aria-label', `Lire l'article: ${title.textContent}`);
            }
        }
    });
}

// ==============================================
// LAZY LOADING amélioré pour les images
// ==============================================

function initLazyLoadingOptimized() {
    const images = document.querySelectorAll('#achievements img, #news img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                const tempImg = new Image();
                tempImg.onload = () => {
                    img.src = tempImg.src;
                    img.classList.add('loaded');
                };
                
                if (img.dataset.src) {
                    tempImg.src = img.dataset.src;
                } else if (img.src) {
                    tempImg.src = img.src;
                }
                
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '100px 0px',
        threshold: 0.1
    });
    
    images.forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
    });
}

// ==============================================
// FONCTION D'INITIALISATION OPTIMISÉE
// ==============================================

function initOptimizedSections() {
    initIndicatorsAnimation();
    initAchievementsInteractions();
    initNewsInteractions();
    initLazyLoadingOptimized();
    addDynamicStyles();
    
    console.log('Sections optimisées initialisées avec succès');
}

// ==============================================
// STYLES DYNAMIQUES pour les animations
// ==============================================

function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .indicator-card,
        .achievement-card,
        .news-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .indicator-card.animate-in,
        .achievement-card.animate-in,
        .news-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .news-image img.loading {
            opacity: 0.7;
            filter: blur(5px);
            transition: all 0.3s ease;
        }
        
        .news-image img.loaded {
            opacity: 1;
            filter: blur(0);
        }
        
        @media (prefers-reduced-motion: reduce) {
            .indicator-card,
            .achievement-card,
            .news-card {
                opacity: 1;
                transform: none;
                transition: none;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// ==============================================
// GESTION DE LA LANGUE - SYSTÈME BOOTSTRAP DROPDOWN
// ==============================================

// Fonction de traduction mise à jour
function setLanguage(lang) {
    currentLanguage = lang;
    translations = translationsData[lang];
    
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[key];
            } else if (element.hasAttribute('title')) {
                element.title = translations[key];
            } else {
                if (translations[key].includes('<i class=')) {
                    element.innerHTML = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        }
    });
    
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
            element.placeholder = translations[key];
        }
    });
    
    document.documentElement.lang = lang;
    
    try {
        localStorage.setItem('mkba-language', lang);
    } catch (e) {
        // Ignore si localStorage n'est pas disponible
    }
    
    // Fermer le dropdown après sélection
    const dropdowns = document.querySelectorAll('.dropdown-menu.show');
    dropdowns.forEach(dropdown => {
        const bsDropdown = bootstrap.Dropdown.getInstance(dropdown.previousElementSibling);
        if (bsDropdown) {
            bsDropdown.hide();
        }
    });
    
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    
    console.log(`Langue changée vers : ${lang}`);
}

// Gestion du scroll navbar (ajustée pour la bannière)
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const topBanner = document.querySelector('.top-banner');
    
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
    
    // Gérer la bannière
    handleTopBannerScroll();
}

// Smooth scroll pour les liens d'ancrage (ajusté pour la bannière)
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
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
    
    const elementsToAnimate = document.querySelectorAll('.service-card, .product-card');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Gestion des cards produits
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            productCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                productCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            }
        });
    });
}

// Gestion de la recherche (mise à jour pour la bannière)
function initSearch() {
    const searchInput = document.querySelector('.top-banner .search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length >= 2) {
                clearTimeout(searchInput.searchTimeout);
                searchInput.searchTimeout = setTimeout(() => {
                    performSearch(query);
                }, 300);
            }
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = e.target.value.trim();
                if (query.length >= 2) {
                    performSearch(query);
                    toggleSearch();
                }
            }
        });
    }
}

// Gestion responsive du menu mobile
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });
    }
}

// Animation typewriter améliorée
function initTypewriterAnimation() {
    const animatedTextElement = document.getElementById('animatedText');
    if (!animatedTextElement) return;
    
    const texts = [
        translationsData[currentLanguage]?.hero_subtitle_2 || 'Duis mauris'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;
    let deleteSpeed = 100;
    let pauseTime = 2000;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            animatedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                setTimeout(typeWriter, 500);
                return;
            }
            
            setTimeout(typeWriter, deleteSpeed);
        } else {
            animatedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeWriter, pauseTime);
                return;
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Gestion des erreurs d'images
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn(`Image non trouvée: ${this.src}`);
        });
    });
}

// Gestion de performance optimisée
function handlePerformanceOptimization() {
    if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
            initOptimizedSections();
        });
    } else {
        setTimeout(initOptimizedSections, 100);
    }
}

// Fonction d'initialisation globale mise à jour
function initWebsite() {
    // Charger la langue préférée
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguage(savedLanguage);
    } catch (e) {
        setLanguage('fr');
    }
    
    // Initialiser les fonctionnalités de base
    initSmoothScroll();
    initScrollAnimations();
    initProductCards();
    initSearch();
    initMobileMenu();
    initTypewriterAnimation();
    initImageErrorHandling();
    
    // Initialiser les sections optimisées
    handlePerformanceOptimization();
    
    // Event listeners mis à jour
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Fermer la recherche en cliquant à l'extérieur (mis à jour)
    document.addEventListener('click', (e) => {
        const searchContainer = document.getElementById('searchContainer');
        if (searchExpanded && searchContainer && !searchContainer.contains(e.target)) {
            toggleSearch();
        }
    });
    
    // Gérer l'échappement pour fermer la recherche
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchExpanded) {
            toggleSearch();
        }
    });
    
    // Support clavier pour la recherche (mis à jour)
    const searchTrigger = document.querySelector('.top-banner .search-trigger');
    if (searchTrigger) {
        searchTrigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSearch();
            }
        });
    }
    
    // Gestion du redimensionnement
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768 && searchExpanded) {
            toggleSearch();
        }
    });
    
    console.log('Site web MK BA initialisé avec succès');
}

// Utilitaires pour l'accessibilité
function initAccessibility() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
}

// Performance et optimisation
function initPerformanceOptimizations() {
    const importantLinks = document.querySelectorAll('a[href*="contact"], a[href*="services"]');
    importantLinks.forEach(link => {
        link.setAttribute('rel', 'prefetch');
    });
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// ==============================================
// EVENT LISTENERS GLOBAUX
// ==============================================

// Initialiser au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initWebsite();
        initAccessibility();
        initPerformanceOptimizations();
    });
} else {
    initWebsite();
    initAccessibility();
    initPerformanceOptimizations();
}

// Réinitialiser si la langue change
window.addEventListener('languageChanged', () => {
    const indicatorsSection = document.getElementById('indicators');
    if (indicatorsSection && indicatorsSection.classList.contains('animated')) {
        setTimeout(() => {
            animateCountersOptimized();
        }, 300);
    }
});

// Export des fonctions pour utilisation externe
window.MKBAWebsite = {
    setLanguage,
    initWebsite,
    translationsData,
    toggleSearch,
    performSearch,
    initOptimizedSections,
    animateCountersOptimized,
    initIndicatorsAnimation,
    initAchievementsInteractions,
    initNewsInteractions,
    handleTopBannerScroll
};