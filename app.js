// Configuration et variables globales
let currentLanguage = 'fr';
let translations = {};
let searchExpanded = false;
let lastScrollTop = 0;
let interactiveMap = null;
let megaMenuOpen = false;
let homeWhatWeDoMegaMenuOpen = false;
let mobileSidebarActive = false;

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

        // Navigation dropdown
        nav_we_are_mkba: "Nous sommes MK BA",
        nav_our_team: "Notre équipe",
        nav_sustainability: "Notre engagement pour la durabilité",
        nav_technologies: "Technologies",
        nav_work_with_us: "Travailler avec nous",
        dropdown_title: "Qui nous sommes",
        dropdown_description: "Découvrez notre équipe, nos valeurs et notre engagement pour l'excellence technologique en Afrique.",

        what_we_do_mega_title: "Ce que nous faisons",
        what_we_do_mega_description: "Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis imperdiet cursus, sodales vitae dui.",
        nav_industries_served: "Industries servies",
        nav_services: "Services",
        nav_solutions: "Solutions",

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
        map_legend_projects: "Projets",
        map_legend_interventions: "Intervenants",

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
        read_more_news: 'Voir plus  <i class="fas fa-arrow-right"></i>',
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

        // Navigation dropdown
        nav_we_are_mkba: "We are MK BA",
        nav_our_team: "Our team",
        nav_sustainability: "Our commitment to sustainability",
        nav_technologies: "Technologies",
        nav_work_with_us: "Work with us",
        dropdown_title: "Who we are",
        dropdown_description: "Discover our team, our values and our commitment to technological excellence in Africa.",

        what_we_do_mega_title: "What we do",
        what_we_do_mega_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        nav_industries_served: "Industries served",
        nav_services: "Services",
        nav_solutions: "Solutions",

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
        map_legend_projects: "Projects",
        map_legend_interventions: "Interventions",

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
        read_more_news: 'Read more  <i class="fas fa-arrow-right"></i>',
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
// SIDEBAR MOBILE - NOUVEAU SYSTÈME
// ==============================================

function createMobileSidebar() {
    // Vérifier si la sidebar existe déjà
    if (document.querySelector('.mobile-sidebar')) {
        return;
    }

    // Créer l'overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-sidebar-overlay';
    overlay.addEventListener('click', closeMobileSidebar);

    // Créer la sidebar
    const sidebar = document.createElement('div');
    sidebar.className = 'mobile-sidebar';
    sidebar.innerHTML = `
        <div class="mobile-sidebar-header">
            <img src="./assets/images/Groupe 1@2x.png" alt="Logo MK BA" style="height: 30px;">
            <button class="mobile-sidebar-close" aria-label="Fermer le menu">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="mobile-sidebar-content">
            <div class="mobile-nav-item">
                <a href="#" class="mobile-nav-link has-submenu" data-submenu="who-we-are">
                    <span data-i18n="nav_who_we_are">Qui nous sommes</span>
                </a>
                <div class="mobile-submenu" id="submenu-who-we-are">
                    <div class="mobile-submenu-item">
                        <a href="we-are-mkba.html" class="mobile-submenu-link" data-i18n="nav_we_are_mkba">Nous sommes MK BA</a>
                    </div>
                    <div class="mobile-submenu-item">
                        <a href="our-team.html" class="mobile-submenu-link" data-i18n="nav_our_team">Notre équipe</a>
                    </div>
                    <div class="mobile-submenu-item">
                        <a href="our-commitment-to-sustainability.html" class="mobile-submenu-link" data-i18n="nav_sustainability">Notre engagement pour la durabilité</a>
                    </div>
                    <div class="mobile-submenu-item">
                        <a href="technologies.html" class="mobile-submenu-link" data-i18n="nav_technologies">Technologies</a>
                    </div>
                    <div class="mobile-submenu-item">
                        <a href="#" class="mobile-submenu-link" data-i18n="nav_work_with_us">Travailler avec nous</a>
                    </div>
                </div>
            </div>
            <div class="mobile-nav-item">
                <a href="#" class="mobile-nav-link has-submenu" data-submenu="what-we-do">
                    <span data-i18n="nav_what_we_do">Ce que nous faisons</span>
                </a>
                <div class="mobile-submenu" id="submenu-what-we-do">
                    <div class="mobile-submenu-item">
                        <a href="industries-served.html" class="mobile-submenu-link" data-i18n="nav_industries_served">Industries servies</a>
                    </div>
                    <div class="mobile-submenu-item">
                        <a href="services.html" class="mobile-submenu-link" data-i18n="nav_services">Services</a>
                    </div>
                    <div class="mobile-submenu-item">
                        <a href="solutions.html" class="mobile-submenu-link" data-i18n="nav_solutions">Solutions</a>
                    </div>
                </div>
            </div>
            <div class="mobile-nav-item">
                <a href="achievements.html" class="mobile-nav-link" data-i18n="nav_achievements">Réalisations</a>
            </div>
            <div class="mobile-nav-item">
                <a href="actualites.html" class="mobile-nav-link" data-i18n="nav_news">Actualités</a>
            </div>
            <div class="mobile-nav-item">
                <a href="contact.html" class="mobile-nav-link" data-i18n="nav_contact">Nous contacter</a>
            </div>
            <div class="mobile-language-selector">
                <div class="mobile-language-title">Langue / Language</div>
                <div class="mobile-language-buttons">
                    <button class="mobile-language-btn ${currentLanguage === 'fr' ? 'active' : ''}" data-lang="fr">Français</button>
                    <button class="mobile-language-btn ${currentLanguage === 'en' ? 'active' : ''}" data-lang="en">English</button>
                </div>
            </div>
        </div>
    `;

    // Ajouter au DOM
    document.body.appendChild(overlay);
    document.body.appendChild(sidebar);

    // Event listeners
    sidebar.querySelector('.mobile-sidebar-close').addEventListener('click', closeMobileSidebar);

    // Gestion des sous-menus
    const submenuLinks = sidebar.querySelectorAll('.mobile-nav-link.has-submenu');
    submenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const submenuId = 'submenu-' + this.getAttribute('data-submenu');
            const submenu = document.getElementById(submenuId);
            
            // Fermer l'autre sous-menu s'il est ouvert
            const allSubmenus = sidebar.querySelectorAll('.mobile-submenu');
            const allLinks = sidebar.querySelectorAll('.mobile-nav-link.has-submenu');
            
            allSubmenus.forEach(otherSubmenu => {
                if (otherSubmenu.id !== submenuId && otherSubmenu.classList.contains('active')) {
                    otherSubmenu.classList.remove('active');
                }
            });
            
            allLinks.forEach(otherLink => {
                if (otherLink !== this && otherLink.classList.contains('active')) {
                    otherLink.classList.remove('active');
                }
            });
            
            // Toggle le sous-menu actuel
            this.classList.toggle('active');
            submenu.classList.toggle('active');
        });
    });

    // Gestion du sélecteur de langue mobile
    const langButtons = sidebar.querySelectorAll('.mobile-language-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // Mettre à jour les boutons actifs
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Appliquer les traductions
    applyTranslationsToSidebar();
}

function openMobileSidebar() {
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.mobile-sidebar-overlay');
    
    if (sidebar && overlay) {
        mobileSidebarActive = true;
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileSidebar() {
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.mobile-sidebar-overlay');
    
    if (sidebar && overlay) {
        mobileSidebarActive = false;
        
        // Fermer tous les sous-menus ouverts
        const activeSubmenus = sidebar.querySelectorAll('.mobile-submenu.active');
        const activeLinks = sidebar.querySelectorAll('.mobile-nav-link.has-submenu.active');
        
        activeSubmenus.forEach(submenu => submenu.classList.remove('active'));
        activeLinks.forEach(link => link.classList.remove('active'));
        
        // Fermer la sidebar
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function applyTranslationsToSidebar() {
    const sidebar = document.querySelector('.mobile-sidebar');
    if (!sidebar) return;

    const elementsToTranslate = sidebar.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

// ==============================================
// GESTION DU MEGA MENU - MISE À JOUR RESPONSIVE
// ==============================================

function initMegaMenuHomePage() {
    const megaMenuDropdown = document.querySelector('.mega-menu-dropdown');
    const navbar = document.querySelector('.navbar');

    if (megaMenuDropdown) {
        const dropdownToggle = megaMenuDropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = megaMenuDropdown.querySelector('.who-we-are-mega-menu');

        if (dropdownToggle && dropdownMenu) {
            // Vérifier la taille de l'écran
            if (window.innerWidth > 991) {
                // Desktop: survol
                dropdownToggle.removeAttribute('data-bs-toggle');

                megaMenuDropdown.addEventListener('mouseenter', function () {
                    megaMenuOpen = true;
                    dropdownMenu.classList.add('show');
                    navbar.classList.add('mega-menu-open');
                    updateMegaMenuStyles(true);
                });

                megaMenuDropdown.addEventListener('mouseleave', function () {
                    megaMenuOpen = false;
                    dropdownMenu.classList.remove('show');
                    navbar.classList.remove('mega-menu-open');
                    updateMegaMenuStyles(false);
                });

                document.addEventListener('click', function (e) {
                    if (megaMenuOpen && !megaMenuDropdown.contains(e.target)) {
                        megaMenuOpen = false;
                        dropdownMenu.classList.remove('show');
                        navbar.classList.remove('mega-menu-open');
                        updateMegaMenuStyles(false);
                    }
                });

                dropdownMenu.addEventListener('click', function (e) {
                    e.stopPropagation();
                });
            } else {
                // Mobile/Tablet: clic (géré par la sidebar)
                dropdownToggle.removeAttribute('data-bs-toggle');
            }
        }
    }
}

function initWhatWeDoMegaMenuHomePage() {
    const megaMenuDropdown = document.querySelector('.what-we-do-dropdown');
    const navbar = document.querySelector('.navbar');
    
    if (megaMenuDropdown) {
        const dropdownToggle = megaMenuDropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = megaMenuDropdown.querySelector('.what-we-do-mega-menu');
        
        if (dropdownToggle && dropdownMenu) {
            // Vérifier la taille de l'écran
            if (window.innerWidth > 991) {
                // Desktop: survol 
                dropdownToggle.removeAttribute('data-bs-toggle');
                
                megaMenuDropdown.addEventListener('mouseenter', function() {
                    homeWhatWeDoMegaMenuOpen = true;
                    dropdownMenu.classList.add('show');
                    navbar.classList.add('mega-menu-open');
                    updateMegaMenuStyles(true);
                });
                
                megaMenuDropdown.addEventListener('mouseleave', function() {
                    homeWhatWeDoMegaMenuOpen = false;
                    dropdownMenu.classList.remove('show');
                    navbar.classList.remove('mega-menu-open');
                    updateMegaMenuStyles(false);
                });
                
                document.addEventListener('click', function(e) {
                    if (homeWhatWeDoMegaMenuOpen && !megaMenuDropdown.contains(e.target)) {
                        homeWhatWeDoMegaMenuOpen = false;
                        dropdownMenu.classList.remove('show');
                        navbar.classList.remove('mega-menu-open');
                        updateMegaMenuStyles(false);
                    }
                });
                
                dropdownMenu.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            } else {
                // Mobile/Tablet: clic (géré par la sidebar)
                dropdownToggle.removeAttribute('data-bs-toggle');
            }
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
// GESTION DE LA RECHERCHE
// ==============================================

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

function performSearch(query) {
    if (query.trim().length < 2) {
        return;
    }

    const results = searchInContent(query);
    displaySearchResults(results);
}

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

function findParentSection(element) {
    let parent = element.closest('section');
    if (parent && parent.id) {
        return parent.id;
    }
    return 'content';
}

function displaySearchResults(results) {
    if (results.length === 0) {
        showNotification('Aucun résultat trouvé');
        return;
    }

    const firstResult = results[0];
    if (firstResult.section) {
        const targetElement = document.getElementById(firstResult.section);
        if (targetElement) {
            const headerHeight = getComputedStyle(document.documentElement).getPropertyValue('--total-header-height');
            const headerHeightPx = parseInt(headerHeight) || 130;
            const targetPosition = targetElement.offsetTop - headerHeightPx - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            showNotification(`${results.length} résultat(s) trouvé(s)`);
        }
    }
}

// ==============================================
// GESTION DU SCROLL SYNCHRONISÉ
// ==============================================

function handleTopBannerScroll() {
    if (window.innerWidth <= 768) return;

    const topBanner = document.querySelector('.top-banner');
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop && st > 100) {
        topBanner.classList.add('hide-on-scroll');
        navbar.classList.add('banner-hidden');
        body.classList.add('banner-hidden');
    } else {
        topBanner.classList.remove('hide-on-scroll');
        navbar.classList.remove('banner-hidden');
        body.classList.remove('banner-hidden');
    }

    lastScrollTop = st <= 0 ? 0 : st;
}

function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }

    handleTopBannerScroll();
}

// ==============================================
// CARTE INTERACTIVE
// ==============================================

const operatingCountries = [
    {
        name: "Cameroun",
        nameEn: "Cameroon",
        coordinates: [3.848, 11.5021],
        projects: 20,
        interventions: 70,
        flagUrl: "./assets/images/flags/cameroon.png",
        bounds: [[2.0, 8.0], [13.0, 16.0]]
    },
    {
        name: "Bénin",
        nameEn: "Benin",
        coordinates: [9.30769, 2.31583],
        projects: 8,
        interventions: 25,
        flagUrl: "./assets/images/flags/benin.png",
        bounds: [[6.0, 0.5], [12.5, 4.0]]
    },
    {
        name: "Madagascar",
        nameEn: "Madagascar",
        coordinates: [-18.8792, 47.5079],
        projects: 12,
        interventions: 40,
        flagUrl: "./assets/images/flags/madagascar.png",
        bounds: [[-25.5, 43.0], [-12.0, 50.5]]
    },
    {
        name: "Sénégal",
        nameEn: "Senegal",
        coordinates: [14.497, -14.452],
        projects: 6,
        interventions: 18,
        flagUrl: "./assets/images/flags/senegal.png",
        bounds: [[12.0, -17.5], [16.5, -11.0]]
    },
    {
        name: "Mali",
        nameEn: "Mali",
        coordinates: [17.570692, -3.996166],
        projects: 7,
        interventions: 20,
        flagUrl: "./assets/images/flags/mali.png",
        bounds: [[10.0, -12.0], [25.0, 4.0]]
    },
    {
        name: "Maurice",
        nameEn: "Mauritius",
        coordinates: [-20.348404, 57.552152],
        projects: 5,
        interventions: 15,
        flagUrl: "./assets/images/flags/mauritius.png",
        bounds: [[-20.5, 57.3], [-20.0, 57.8]]
    },
    {
        name: "Comores",
        nameEn: "Comoros",
        coordinates: [-11.875001, 43.872219],
        projects: 2,
        interventions: 6,
        flagUrl: "./assets/images/flags/comoros.png",
        bounds: [[-12.5, 43.0], [-11.3, 44.5]]
    }
];

function initInteractiveMap() {
    if (typeof L === 'undefined') {
        console.warn('Leaflet non disponible - Chargement depuis CDN...');
        loadLeafletAndInitMap();
        return;
    }

    const mapContainer = document.getElementById('interactive-map');
    if (!mapContainer) {
        console.warn('Conteneur de carte non trouvé');
        return;
    }

    try {
        interactiveMap = L.map('interactive-map', {
            center: [0, 20],
            zoom: 2,
            minZoom: 2,
            maxZoom: 7,
            zoomControl: true,
            scrollWheelZoom: true,
            doubleClickZoom: true,
            dragging: true
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '',
            maxZoom: 18,
            className: 'map-tiles'
        }).addTo(interactiveMap);

        operatingCountries.forEach(country => {
            const marker = L.marker(country.coordinates, {
                icon: L.divIcon({
                    className: 'custom-marker',
                    html: `<div class="marker-pin" style="
                        width: 20px; 
                        height: 20px; 
                        background: #F37C1F; 
                        border: 2px solid #E85A00;
                        border-radius: 50%; 
                        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                        cursor: pointer;
                        transition: all 0.2s ease;
                        transform-origin: center center;
                        position: relative;
                    "></div>`,
                    iconSize: [20, 20],
                    iconAnchor: [10, 10],
                    popupAnchor: [0, -10]
                })
            }).addTo(interactiveMap);

            const tooltipContent = `
                <div class="custom-tooltip">
                    <div class="tooltip-header">
                        <img src="${country.flagUrl}" alt="Drapeau ${country.name}" class="tooltip-flag" 
                             onerror="this.style.display='none'">
                        <span class="tooltip-country">${currentLanguage === 'fr' ? country.name : country.nameEn}</span>
                    </div>
                    <div class="tooltip-stats">
                        <div><strong>${translations.map_legend_projects || 'Projets'} :</strong> ${country.projects}</div>
                        <div><strong>${translations.map_legend_interventions || 'Intervenants'} :</strong> ${country.interventions}</div>
                    </div>
                </div>
            `;

            marker.bindTooltip(tooltipContent, {
                permanent: false,
                direction: 'top',
                offset: [0, -25],
                className: 'leaflet-custom-tooltip',
                sticky: false,
                interactive: false,
                opacity: 1
            });

            marker.on('mouseover', function (e) {
                const pin = this.getElement().querySelector('.marker-pin');
                if (pin) {
                    pin.style.transform = 'scale(1.2)';
                    pin.style.zIndex = '1000';
                    pin.style.background = '#FF8C42';
                }
                this.openTooltip();
            });

            marker.on('mouseout', function (e) {
                const pin = this.getElement().querySelector('.marker-pin');
                if (pin) {
                    pin.style.transform = 'scale(1)';
                    pin.style.zIndex = '999';
                    pin.style.background = '#F37C1F';
                }
                setTimeout(() => {
                    if (!this.isTooltipOpen()) return;
                    this.closeTooltip();
                }, 100);
            });

            marker.on('click', function () {
                interactiveMap.fitBounds(country.bounds, {
                    padding: [50, 50],
                    maxZoom: 6
                });
            });
        });

        const tooltipStyles = document.createElement('style');
        tooltipStyles.textContent = `
            .leaflet-custom-tooltip {
                background: transparent !important;
                border: none !important;
                box-shadow: none !important;
                padding: 0 !important;
            }
            
            .leaflet-tooltip-top:before {
                display: none !important;
            }
            
            .custom-marker:hover {
                transform: scale(1.2);
            }
        `;
        document.head.appendChild(tooltipStyles);

        console.log('Carte interactive initialisée avec succès');

    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la carte:', error);
        showStaticMapFallback();
    }
}

function loadLeafletAndInitMap() {
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
    document.head.appendChild(leafletCSS);

    const leafletJS = document.createElement('script');
    leafletJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    leafletJS.onload = () => {
        setTimeout(initInteractiveMap, 100);
    };
    leafletJS.onerror = () => {
        console.warn('Impossible de charger Leaflet - Utilisation de la carte statique');
        showStaticMapFallback();
    };
    document.head.appendChild(leafletJS);
}

function showStaticMapFallback() {
    const mapContainer = document.getElementById('interactive-map');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <div style="
                background: #f0f0f0; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                height: 100%; 
                font-size: 1.1rem; 
                color: #666;
                border-radius: 6px;
            ">
                <div style="text-align: center;">
                    <i class="fas fa-globe-africa" style="font-size: 3rem; margin-bottom: 1rem; color: #F37C1F;"></i>
                    <div>Carte des zones d'intervention MK BA</div>
                    <div style="font-size: 0.9rem; margin-top: 0.5rem;">10 pays en Afrique et Océan Indien</div>
                </div>
            </div>
        `;
    }
}

function updateMapTranslations() {
    if (!interactiveMap) return;

    interactiveMap.eachLayer(layer => {
        if (layer.getTooltip) {
            const tooltip = layer.getTooltip();
            if (tooltip) {
                const countryData = operatingCountries.find(c =>
                    tooltip._content.includes(c.name) || tooltip._content.includes(c.nameEn)
                );

                if (countryData) {
                    const newContent = `
                        <div class="custom-tooltip">
                            <div class="tooltip-header">
                                <img src="${countryData.flagUrl}" alt="Drapeau ${countryData.name}" class="tooltip-flag" 
                                     onerror="this.style.display='none'">
                                <span class="tooltip-country">${currentLanguage === 'fr' ? countryData.name : countryData.nameEn}</span>
                            </div>
                            <div class="tooltip-stats">
                                <div><strong>${translations.map_legend_projects || 'Projets'} :</strong> ${countryData.projects}</div>
                                <div><strong>${translations.map_legend_interventions || 'Intervenants'} :</strong> ${countryData.interventions}</div>
                            </div>
                        </div>
                    `;
                    layer.setTooltipContent(newContent);
                }
            }
        }
    });
}

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

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

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
// KEY INDICATORS
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
// ACHIEVEMENTS
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

        card.addEventListener('focusin', function () {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('focusout', function () {
            this.style.transform = '';
            this.style.boxShadow = '';
        });

        card.addEventListener('click', function (e) {
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

        card.addEventListener('keydown', function (e) {
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
// NEWS
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

        card.addEventListener('mousemove', function (e) {
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

        card.addEventListener('mouseleave', function () {
            const image = this.querySelector('.news-image img');
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });

        card.addEventListener('click', function (e) {
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

        card.addEventListener('keydown', function (e) {
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
// LAZY LOADING
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

function initOptimizedSections() {
    initIndicatorsAnimation();
    initAchievementsInteractions();
    initNewsInteractions();
    initLazyLoadingOptimized();

    console.log('Sections optimisées initialisées avec succès');
}

// ==============================================
// GESTION DE LA LANGUE
// ==============================================

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

    // Mettre à jour la sidebar mobile si elle existe
    applyTranslationsToSidebar();

    // Mettre à jour la carte
    updateMapTranslations();

    document.documentElement.lang = lang;

    try {
        localStorage.setItem('mkba-language', lang);
    } catch (e) {
        // Ignore
    }

    // Fermer les dropdowns SAUF si on est dans la sidebar mobile
    if (!mobileSidebarActive) {
        const dropdowns = document.querySelectorAll('.dropdown-menu.show');
        dropdowns.forEach(dropdown => {
            const bsDropdown = bootstrap.Dropdown.getInstance(dropdown.previousElementSibling);
            if (bsDropdown) {
                bsDropdown.hide();
            }
        });
    }

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));

    console.log(`Langue changée vers : ${lang}`);
}

// ==============================================
// AUTRES FONCTIONS
// ==============================================

function updateNavigationState() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (currentPage.includes('we-are-mkba.html') && link.getAttribute('data-i18n') === 'nav_who_we_are') {
            link.classList.add('active');
        } else if (currentPage.includes('index.html') || currentPage === '/') {
            if (link.getAttribute('href') === '#home' || link.getAttribute('href') === 'index.html') {
                link.classList.add('active');
            }
        }
    });

    const megaMenuItems = document.querySelectorAll('.mega-menu-item');
    megaMenuItems.forEach(item => {
        item.classList.remove('active');

        if (currentPage.includes('we-are-mkba.html') && item.getAttribute('href') === 'we-are-mkba.html') {
            item.classList.add('active');
        }

        if (currentPage.includes('our-team.html') && item.getAttribute('href') === 'our-team.html') {
            item.classList.add('active');
        }
    });
}

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = getComputedStyle(document.documentElement).getPropertyValue('--total-header-height');
                const headerHeightPx = parseInt(headerHeight) || 130;
                const targetPosition = targetElement.offsetTop - headerHeightPx - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

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

function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbarToggler) {
        navbarToggler.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (mobileSidebarActive) {
                closeMobileSidebar();
            } else {
                openMobileSidebar();
            }
        });
    }
}

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

function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function () {
            this.style.display = 'none';
            console.warn(`Image non trouvée: ${this.src}`);
        });
    });
}

function handlePerformanceOptimization() {
    if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
            initOptimizedSections();
        });
    } else {
        setTimeout(initOptimizedSections, 100);
    }
}

function initWebsite() {
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguage(savedLanguage);
    } catch (e) {
        setLanguage('fr');
    }

    // Créer la sidebar mobile
    createMobileSidebar();

    initSmoothScroll();
    initProductCards();
    initSearch();
    initMobileMenu();
    initTypewriterAnimation();
    initImageErrorHandling();

    initMegaMenuHomePage();
    initWhatWeDoMegaMenuHomePage();

    initInteractiveMap();

    handlePerformanceOptimization();

    window.addEventListener('scroll', handleNavbarScroll);

    document.addEventListener('click', (e) => {
        const searchContainer = document.getElementById('searchContainer');
        if (searchExpanded && searchContainer && !searchContainer.contains(e.target)) {
            toggleSearch();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (searchExpanded) {
                toggleSearch();
            }
            if (mobileSidebarActive) {
                closeMobileSidebar();
            }
        }
    });

    const searchTrigger = document.querySelector('.top-banner .search-trigger');
    if (searchTrigger) {
        searchTrigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSearch();
            }
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 768 && searchExpanded) {
            toggleSearch();
        }
        
        // Fermer la sidebar mobile si on passe en mode desktop
        if (window.innerWidth > 991 && mobileSidebarActive) {
            closeMobileSidebar();
        }

        // Réinitialiser les mega menus selon la taille d'écran
        initMegaMenuHomePage();
        initWhatWeDoMegaMenuHomePage();

        if (interactiveMap) {
            setTimeout(() => {
                interactiveMap.invalidateSize();
            }, 250);
        }
    });

    console.log('Site web MK BA initialisé avec succès');
}

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
    updateNavigationState,
    initIndicatorsAnimation,
    initAchievementsInteractions,
    initNewsInteractions,
    handleTopBannerScroll,
    initInteractiveMap,
    operatingCountries,
    openMobileSidebar,
    closeMobileSidebar
};