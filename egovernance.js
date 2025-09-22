// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE E-GOUVERNANCE
// ==============================================

// Variables globales pour la page E-Gouvernance
let egovernanceAnimationsInitialized = false;
let whatWeDoMegaMenuOpen = false;

// Traductions spécifiques à la page E-Gouvernance
const egovernanceTranslations = {
    fr: {
        // Meta et navigation
        page_title_egovernance: "E-Gouvernance et Transformation Numérique - MK BA",
        nav_egovernance: "E-Gouvernance Et Transformation Numérique",
        
        // Breadcrumb
        breadcrumb_what_we_do: "Ce que nous faisons",
        breadcrumb_services: "Services",
        breadcrumb_egovernance: "E-Gouvernance Et Transformation Numérique Customers",
        
        // Nouveau mega menu "What we do"
        what_we_do_mega_title: "Ce que nous faisons",
        what_we_do_mega_description: "Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis imperdiet cursus, sodales vitae dui.",
        
        // Hero Section
        egovernance_hero_title: "E-GOUVERNANCE ET TRANSFORMATION NUMÉRIQUE",
        
        // Section prestations
        egovernance_prestations_title: "Nos prestations",
        egovernance_years: "06 years",
        egovernance_years_desc: "En E-Gouvernance Et Transformation Numérique",
        egovernance_projects: "200+",
        egovernance_projects_desc: "Aenean Non Accumsan Ante. Duis Et Risus Accumsan Sem Tempus Porta Nec Sit Amet Est. Sed Ut Euismod Quam. Suspendisse Potenti.",
        egovernance_customers: "06 years",
        egovernance_customers_desc: "E-Gouvernance Et Transformation Numérique Customers",
        
        // Section intro
        egovernance_intro_title: "Aenean Non Accumsan Ante.",
        egovernance_intro_text: "Aenean Non Accumsan Ante. Duis Et Risus Accumsan Sem Tempus Porta Nec Sit Amet Est. Sed Ut Euismod Quam. Suspendisse Potenti.",
        
        // Sidebar navigation
        egovernance_sidebar_title: "Aenean Non Accumsan Ante.",
        egovernance_nav_1: "Ultrices Integer",
        egovernance_nav_2: "Suspendisse Ultrices",
        egovernance_nav_3: "Neque Convallis Nullam",
        egovernance_nav_4: "Malesuada Amet Cras",
        egovernance_nav_5: "Laoreet Nec Nisl",
        
        // Contenu principal
        egovernance_content_title: "Aenean Non Accumsan Ante.",
        egovernance_content_text: "In Consequat, Quam Id Sodales Hendrerit, Eros Mi Molestie Leo, Nec Lacinia Risus Neque Tristique Augue. Proin Tempus Urna Vel Congue Elementum. Vestibulum Euismod Accumsan Dui, Ac Iaculis Sem Viverra Eu. Donec Convallis, Elit Vitae Ornare Cursus, Libero Purus.",
        egovernance_list_1: "In Consequat, Quam Id Sodales Hendrerit.",
        egovernance_list_2: "Proin Ex Ipsum, Facilisis Id Tincidunt Sed, Vulputate In Lacus. Donec",
        egovernance_list_3: "Integer At Faucibus Urna. Nullam Condimentum Leo Id Elit Sagittis Auctor. Curabitur Elementum Nunc A Leo Imperdiet, Nec Elementum Diam Elementum.",
        
        // Section vidéo
        egovernance_video_title: "In At Iaculis Lorem. Praesent Tempor",
        egovernance_video_desc: "In Consequat, Quam Id Sodales Hendrerit, Eros Mi Molestie Leo, Nec Lacinia Risus Neque Tristique Augue. Proin Tempus Urna Vel Congue Elementum. Vestibulum Euismod Accumsan Dui, Ac Iaculis Sem Viverra Eu. Donec Convallis, Elit Vitae Ornare Cursus, Libero Purus.",
        
        // Section projets
        egovernance_projects_title: "Nos meilleurs projets pour la E-Gouvernance Et Transformation Numérique",
        egovernance_project_1_title: "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at",
        egovernance_project_2_title: "Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam",
        egovernance_project_3_title: "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at",
        egovernance_project_4_title: "Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam",
        project_read_more: "Lire plus",
        
        // Section clients
        egovernance_clients_title: "Client que nous servons",
        egovernance_client_1: "Cras gravida bibendum dolor eu varius. Morbi fermentum",
        egovernance_client_2: "Duis mauris augue, efficitur eu arcu sit amet, posuere",
        egovernance_client_3: "Etiam convallis elementum sapien, a aliquam turpis",
        egovernance_client_4: "Etiam facilisis ligula nec velit posuere egestas. Nunc",
        egovernance_client_5: "In at iaculis lorem. Praesent tempor dictum tellus ut",
        egovernance_client_6: "Proin ac quam et lectus vestibulum blandit. Nunc",
        egovernance_client_7: "Fusce at nisl eget dolor rhoncus facilisis. Mauris ante",
        egovernance_client_8: "In consequat, quam id sodales hendrerit, eros mi",
        
        // Section détails
        egovernance_details_title: "Duis mauris augue, efficitur eu arcu sit amet,",
        egovernance_detail_1: "Vestibulum Blandit Viverra Convallis. Pellentesque Ligula Urna, Fermentum Ut Semper In, Tincidunt Nec Dui. Morbi Mauris Lacus, Consequat Eget Justo In, Semper Gravida Enim. Donec Ultrices Varius Ligula. Ut Non Pretium Augue. Etiam Non Rutrum Metus. In Varius Sit Amet Lorem",
        egovernance_detail_2: "Maecenas Interdum Lorem Eleifend Orci Aliquam Mollis. Aliquam Non Rhoncus Magna. Suspendisse Aliquet Tincidunt Enim, Ut Commodo Elit Feugiat Et. Maecenas Nec Enim Quis Diam Faucibus Tristique. Nam Fermentum, Ipsum In Suscipit Pharetra, Mi Odio Aliquet Neque, Non Iaculis",
        egovernance_detail_3: "Vestibulum Blandit Viverra Convallis. Pellentesque Ligula Urna, Fermentum Ut Semper In, Tincidunt Nec Dui. Morbi Mauris Lacus, Consequat Eget Justo In, Semper Gravida Enim. Donec Ultrices Varius Ligula. Ut Non Pretium Augue. Etiam Non Rutrum Metus. In Varius Sit Amet Lorem",
        
        // Section services
        egovernance_services_title: "Aenean non accumsan ante. Duis et risus accumsan",
        egovernance_service_1_title: "Aenean non accumsan ante. Duis et risus",
        egovernance_service_1_desc: "Maecenas Interdum Lorem Eleifend Orci Aliquam Mollis. Aliquam Non Rhoncus Magna. Suspendisse Aliquet Tincidunt Enim, Ut Commodo Elit Feugiat Et. Maecenas Nec Enim Quis Diam Faucibus Tristique. Nam",
        egovernance_service_2_title: "Vivamus eget aliquam dui. Integer eu arcu vel",
        egovernance_service_2_desc: "Duis Pretium Gravida Enim, Vel Maximus Ligula Fermentum A. Sed Rhoncus Eget Ex Id Egestas. Nam Nec Nisl Placerat, Tempus Erat A, Condimentum Metus. Curabitur Nulla Nisl, Lacinia At Lobortis At, Suscipit At Nibh.",
        egovernance_service_3_title: "Integer at faucibus urna. Nullam condimentum leo",
        egovernance_service_3_desc: "Vestibulum Blandit Viverra Convallis. Pellentesque Ligula Urna, Fermentum Ut Semper In, Tincidunt Nec Dui. Morbi Mauris Lacus, Consequat Eget Justo In, Semper Gravida Enim. Donec Ultrices Varius Ligula.",
        egovernance_service_4_title: "Aenean non accumsan ante. Duis et risus",
        egovernance_service_4_desc: "Maecenas Interdum Lorem Eleifend Orci Aliquam Mollis. Aliquam Non Rhoncus Magna. Suspendisse Aliquet Tincidunt Enim, Ut Commodo Elit Feugiat Et. Maecenas Nec Enim Quis Diam Faucibus Tristique. Nam",
        egovernance_service_5_title: "Vivamus eget aliquam dui. Integer eu arcu vel",
        egovernance_service_5_desc: "Duis Pretium Gravida Enim, Vel Maximus Ligula Fermentum A. Sed Rhoncus Eget Ex Id Egestas. Nam Nec Nisl Placerat, Tempus Erat A, Condimentum Metus. Curabitur Nulla Nisl, Lacinia At Lobortis At, Suscipit At Nibh.",
        egovernance_service_6_title: "Integer at faucibus urna. Nullam condimentum leo",
        egovernance_service_6_desc: "Vestibulum Blandit Viverra Convallis. Pellentesque Ligula Urna, Fermentum Ut Semper In, Tincidunt Nec Dui. Morbi Mauris Lacus, Consequat Eget Justo In, Semper Gravida Enim. Donec Ultrices Varius Ligula.",
        
        // Section solutions
        egovernance_solutions_title: "Solutions informatiques pour E gouvernance et transition numérique",
        egovernance_solution_1_title: "Lectus pulvinar",
        egovernance_solution_1_feat_1: "Etiam Convallis Elementum Sapien, A Aliquam Turpis Aliquam Vitae.",
        egovernance_solution_1_feat_2: "Donec Dapibus Mauris Id Odio Ornare Tempus. Duis Sit Amet",
        egovernance_solution_1_feat_3: "Duis Rhoncus Dui Venenatis Consequat Porttitor. Etiam Aliquet Congue",
        egovernance_solution_1_feat_4: "Cras Eu Elit Congue, Placerat Dui Ut, Tincidunt Nisl. Nulla Leo Elit,",
        egovernance_solution_1_feat_5: "Duis Vestibulum Elit Vel Neque Pharetra Vulputate. Quisque",
        egovernance_solution_1_feat_6: "Vivamus Eget Aliquam Dui. Integer Eu Arcu Vel Arcu Suscipit Ultrices",
        egovernance_solution_2_title: "Lorem ipsum",
        egovernance_solution_2_feat_1: "Vestibulum Blandit Viverra Convallis. Pellentesque Ligula Urna,",
        egovernance_solution_2_feat_2: "Duis Vestibulum Elit Vel Neque Pharetra Vulputate. Quisque",
        egovernance_solution_2_feat_3: "Proin Ac Quam Et Lectus Vestibulum Blandit. Nunc Maximus Nibh At",
        egovernance_solution_2_feat_4: "Proin Ex Ipsum, Facilisis Id Tincidunt Sed, Vulputate In Lacus. Donec",
        egovernance_solution_2_feat_5: "Integer At Faucibus Urna. Nullam Condimentum Leo Id Elit Sagittis",
        egovernance_solution_2_feat_6: "Pellentesque Tincidunt Tristique Neque, Eget Venenatis Enim Gravida",
        egovernance_solution_3_title: "Lectus pulvinar",
        egovernance_solution_3_feat_1: "Etiam Convallis Elementum Sapien, A Aliquam Turpis Aliquam Vitae.",
        egovernance_solution_3_feat_2: "Donec Dapibus Mauris Id Odio Ornare Tempus. Duis Sit Amet",
        egovernance_solution_4_title: "Lorem ipsum",
        egovernance_solution_4_feat_1: "Vestibulum Blandit Viverra Convallis. Pellentesque Ligula Urna,",
        egovernance_solution_4_feat_2: "Duis Vestibulum Elit Vel Neque Pharetra Vulputate. Quisque",
        
        // Section témoignages
        egovernance_testimonials_title: "Join Our Satisfied Clients",
        testimonial_1_name: "Jessica Baker",
        testimonial_1_title: "Nunc scelerisque tincidunt elit.",
        testimonial_1_text: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus, felis ligula tempus lorem, eu porttitor ex lacus vel felis. Vivamus egestas scelerisque consectetur. Vestibulum faucibus enim urna, fermentum aliquet quam euismod non. Proin cursus, libero quis semper elementum, diam metus eleifend magna, in placerat sem velit vitae lacus. Vivamus",
        testimonial_2_name: "Martha Ford",
        testimonial_2_title: "Nunc scelerisque tincidunt elit.",
        testimonial_2_text: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus, felis ligula tempus lorem, eu porttitor ex lacus vel felis. Vivamus egestas scelerisque consectetur. Vestibulum faucibus enim urna, fermentum aliquet quam euismod non. Proin cursus, libero quis semper elementum, diam metus eleifend magna, in placerat sem velit vitae lacus. Vivamus",
        testimonial_3_name: "Danielle",
        testimonial_3_title: "Nunc scelerisque tincidunt elit.",
        testimonial_3_text: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus, felis ligula tempus lorem, eu porttitor ex lacus vel felis.",
        
        // Footer
        footer_egovernance: "E-Gouvernance"
    },
    
    en: {
        // Meta et navigation
        page_title_egovernance: "E-Governance and Digital Transformation - MK BA",
        nav_egovernance: "E-Governance And Digital Transformation",
        
        // Breadcrumb
        breadcrumb_what_we_do: "What we do",
        breadcrumb_services: "Services",
        breadcrumb_egovernance: "E-Governance And Digital Transformation Customers",
        
        // Nouveau mega menu "What we do"
        what_we_do_mega_title: "What we do",
        what_we_do_mega_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        
        // Hero Section
        egovernance_hero_title: "E-GOVERNANCE AND DIGITAL TRANSFORMATION",
        
        // Section prestations
        egovernance_prestations_title: "Our services",
        egovernance_years: "06 years",
        egovernance_years_desc: "In E-Governance And Digital Transformation",
        egovernance_projects: "200+",
        egovernance_projects_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.",
        egovernance_customers: "06 years",
        egovernance_customers_desc: "E-Governance And Digital Transformation Customers",
        
        // Section intro
        egovernance_intro_title: "Lorem Ipsum Dolor Sit.",
        egovernance_intro_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        
        // Sidebar navigation
        egovernance_sidebar_title: "Lorem Ipsum Dolor Sit.",
        egovernance_nav_1: "Strategic Planning",
        egovernance_nav_2: "Digital Solutions",
        egovernance_nav_3: "Government Services",
        egovernance_nav_4: "Implementation",
        egovernance_nav_5: "Support & Training",
        
        // Contenu principal
        egovernance_content_title: "Lorem Ipsum Dolor Sit.",
        egovernance_content_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        egovernance_list_1: "Lorem ipsum dolor sit amet, consectetur.",
        egovernance_list_2: "Sed do eiusmod tempor incididunt ut labore et dolore.",
        egovernance_list_3: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        
        // Section vidéo
        egovernance_video_title: "Lorem Ipsum Dolor. Sit Amet",
        egovernance_video_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        
        // Section projets
        egovernance_projects_title: "Our best projects for E-Governance And Digital Transformation",
        egovernance_project_1_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
        egovernance_project_2_title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        egovernance_project_3_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
        egovernance_project_4_title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        project_read_more: "Read more",
        
        // Section clients
        egovernance_clients_title: "Clients we serve",
        egovernance_client_1: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        egovernance_client_2: "Sed do eiusmod tempor incididunt ut labore et dolore",
        egovernance_client_3: "Ut enim ad minim veniam, quis nostrud exercitation",
        egovernance_client_4: "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
        egovernance_client_5: "Duis aute irure dolor in reprehenderit in voluptate",
        egovernance_client_6: "Velit esse cillum dolore eu fugiat nulla pariatur",
        egovernance_client_7: "Excepteur sint occaecat cupidatat non proident sunt",
        egovernance_client_8: "In culpa qui officia deserunt mollit anim id est",
        
        // Section détails
        egovernance_details_title: "Lorem ipsum dolor sit amet, consectetur",
        egovernance_detail_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        egovernance_detail_2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        egovernance_detail_3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        
        // Section services
        egovernance_services_title: "Lorem ipsum dolor sit amet. Consectetur adipiscing",
        egovernance_service_1_title: "Lorem ipsum dolor sit amet. Consectetur",
        egovernance_service_1_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        egovernance_service_2_title: "Sed do eiusmod tempor. Incididunt ut labore",
        egovernance_service_2_desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
        egovernance_service_3_title: "Velit esse cillum dolore. Eu fugiat nulla",
        egovernance_service_3_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        egovernance_service_4_title: "Lorem ipsum dolor sit amet. Consectetur",
        egovernance_service_4_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        egovernance_service_5_title: "Sed do eiusmod tempor. Incididunt ut labore",
        egovernance_service_5_desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
        egovernance_service_6_title: "Velit esse cillum dolore. Eu fugiat nulla",
        egovernance_service_6_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        
        // Section solutions
        egovernance_solutions_title: "IT solutions for E-governance and digital transition",
        egovernance_solution_1_title: "Digital Platform",
        egovernance_solution_1_feat_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        egovernance_solution_1_feat_2: "Sed do eiusmod tempor incididunt ut labore et dolore",
        egovernance_solution_1_feat_3: "Ut enim ad minim veniam, quis nostrud exercitation",
        egovernance_solution_1_feat_4: "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
        egovernance_solution_1_feat_5: "Duis aute irure dolor in reprehenderit in voluptate",
        egovernance_solution_1_feat_6: "Velit esse cillum dolore eu fugiat nulla pariatur",
        egovernance_solution_2_title: "Data Management",
        egovernance_solution_2_feat_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        egovernance_solution_2_feat_2: "Sed do eiusmod tempor incididunt ut labore et dolore",
        egovernance_solution_2_feat_3: "Ut enim ad minim veniam, quis nostrud exercitation",
        egovernance_solution_2_feat_4: "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
        egovernance_solution_2_feat_5: "Duis aute irure dolor in reprehenderit in voluptate",
        egovernance_solution_2_feat_6: "Velit esse cillum dolore eu fugiat nulla pariatur",
        egovernance_solution_3_title: "Digital Platform",
        egovernance_solution_3_feat_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        egovernance_solution_3_feat_2: "Sed do eiusmod tempor incididunt ut labore et dolore",
        egovernance_solution_4_title: "Data Management",
        egovernance_solution_4_feat_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        egovernance_solution_4_feat_2: "Sed do eiusmod tempor incididunt ut labore et dolore",
        
        // Section témoignages
        egovernance_testimonials_title: "Join Our Satisfied Clients",
        testimonial_1_name: "Jessica Baker",
        testimonial_1_title: "Digital Transformation Specialist",
        testimonial_1_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        testimonial_2_name: "Martha Ford",
        testimonial_2_title: "Digital Transformation Specialist",
        testimonial_2_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        testimonial_3_name: "Danielle",
        testimonial_3_title: "Digital Transformation Specialist",
        testimonial_3_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        
        // Footer
        footer_egovernance: "E-Governance"
    }
};

// ==============================================
// GESTION DU MEGA MENU "WHAT WE DO" POUR E-GOUVERNANCE
// ==============================================

function initWhatWeDoMegaMenuEgovernance() {
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
                updateWhatWeDoMegaMenuStylesEgovernance(true);
            });
            
            megaMenuDropdown.addEventListener('mouseleave', function() {
                whatWeDoMegaMenuOpen = false;
                dropdownMenu.classList.remove('show');
                navbar.classList.remove('mega-menu-open');
                updateWhatWeDoMegaMenuStylesEgovernance(false);
            });
            
            // Fermer seulement en cliquant à l'extérieur
            document.addEventListener('click', function(e) {
                if (whatWeDoMegaMenuOpen && !megaMenuDropdown.contains(e.target)) {
                    whatWeDoMegaMenuOpen = false;
                    dropdownMenu.classList.remove('show');
                    navbar.classList.remove('mega-menu-open');
                    updateWhatWeDoMegaMenuStylesEgovernance(false);
                }
            });
            
            // Empêcher la fermeture lors du clic dans le menu
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
}

function updateWhatWeDoMegaMenuStylesEgovernance(isOpen) {
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
// ANIMATIONS DES SECTIONS
// ==============================================

function initEgovernanceAnimations() {
    if (egovernanceAnimationsInitialized) return;
    
    // Animation des cartes de prestations
    const prestationCards = document.querySelectorAll('.prestation-card');
    prestationCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease';
        observer.observe(card);
    });
    
    // Animation des cartes de projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    // Animation des cartes de clients
    const clientCards = document.querySelectorAll('.client-card');
    clientCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
    
    // Animation des cartes de services détaillés
    const serviceDetailCards = document.querySelectorAll('.service-detail-card');
    serviceDetailCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    // Animation des cartes de solutions
    const solutionCards = document.querySelectorAll('.solution-card');
    solutionCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    // Animation des témoignages
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease';
        observer.observe(card);
    });
    
    egovernanceAnimationsInitialized = true;
}

// ==============================================
// INTERACTIONS AVEC LES ÉLÉMENTS
// ==============================================

function initEgovernanceInteractions() {
    // Interaction avec la sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Supprimer la classe active de tous les liens
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Ajouter la classe active au lien cliqué
            this.classList.add('active');
            
            // Animation de clic
            this.style.transform = 'translateX(10px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Interaction avec les cartes de projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        // Gestion du clic pour navigation
        const projectLink = card.querySelector('.project-link');
        if (projectLink) {
            projectLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Animation de clic
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                    // Ici on pourrait ajouter la navigation vers la page du projet
                    console.log('Navigation vers le projet');
                }, 150);
            });
        }
    });
    
    // Interaction avec les cartes de clients
    const clientCards = document.querySelectorAll('.client-card');
    clientCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.client-icon');
            if (icon) {
                icon.style.transform = 'rotate(45deg) scale(1.1)';
                icon.style.color = '#F37C1F';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.client-icon');
            if (icon) {
                icon.style.transform = '';
                icon.style.color = '';
            }
        });
        
        // Support clavier
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Interaction avec les cartes de solutions
    const solutionCards = document.querySelectorAll('.solution-card');
    solutionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.solution-icon-img');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.solution-icon-img');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
    
    // Interaction avec les témoignages
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const stars = this.querySelectorAll('.testimonial-rating i');
            stars.forEach((star, index) => {
                setTimeout(() => {
                    star.style.transform = 'scale(1.2)';
                    star.style.color = '#FFD700';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const stars = this.querySelectorAll('.testimonial-rating i');
            stars.forEach(star => {
                star.style.transform = '';
                star.style.color = '';
            });
        });
    });
}

// ==============================================
// GESTION DE LA VIDÉO YOUTUBE
// ==============================================

function initEgovernanceVideo() {
    const videoFrame = document.querySelector('.video-frame-egovernance iframe');
    if (!videoFrame) return;
    
    // Observer pour lazy loading de la vidéo
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // La vidéo est visible, on peut ajouter des fonctionnalités si nécessaire
                console.log('Vidéo E-gouvernance visible');
                videoObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    videoObserver.observe(videoFrame);
}

// ==============================================
// FONCTION DE COPIE DE LIEN VIDÉO
// ==============================================

function copyVideoLink() {
    const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(videoUrl).then(() => {
            showNotificationEgovernance('Lien vidéo copié avec succès!');
        }).catch(() => {
            fallbackCopyTextEgovernance(videoUrl);
        });
    } else {
        fallbackCopyTextEgovernance(videoUrl);
    }
}

function fallbackCopyTextEgovernance(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotificationEgovernance('Lien vidéo copié avec succès!');
    } catch (err) {
        showNotificationEgovernance('Erreur lors de la copie');
    }
    
    document.body.removeChild(textArea);
}

function showNotificationEgovernance(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: calc(var(--total-header-height) + 1rem);
        right: 1.25rem;
        background: #005FAC;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        word-wrap: break-word;
        max-width: calc(100% - 2.5rem);
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
// GESTION DES TRADUCTIONS POUR LA PAGE E-GOUVERNANCE
// ==============================================

function setLanguageEgovernancePage(lang) {
    const pageTranslations = egovernanceTranslations[lang];
    
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
    if (pageTranslations.page_title_egovernance) {
        document.title = pageTranslations.page_title_egovernance;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page E-Gouvernance`);
}

// ==============================================
// GESTION DU BREADCRUMB NAVIGATION
// ==============================================

function initBreadcrumbNavigationEgovernance() {
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
                } else if (this.getAttribute('data-i18n') === 'breadcrumb_services') {
                    window.location.href = 'services.html';
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
// SMOOTH SCROLL ADAPTÉ POUR LA PAGE E-GOUVERNANCE
// ==============================================

function initSmoothScrollEgovernancePage() {
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
// GESTION DES ERREURS ET ACCESSIBILITÉ
// ==============================================

function initAccessibilityEgovernancePage() {
    // Améliorer l'accessibilité des éléments interactifs
    const interactiveElements = document.querySelectorAll('.project-card, .client-card, .service-detail-card, .solution-card, .testimonial-card');
    interactiveElements.forEach((element, index) => {
        if (!element.getAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
        
        if (!element.getAttribute('role')) {
            element.setAttribute('role', 'button');
        }
        
        // Ajouter aria-label si nécessaire
        const title = element.querySelector('h3, .project-title, .client-text, .service-detail-title, .solution-title');
        if (title && !element.getAttribute('aria-label')) {
            element.setAttribute('aria-label', title.textContent);
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
        const animatedElements = document.querySelectorAll('.prestation-card, .project-card, .client-card, .service-detail-card, .solution-card, .testimonial-card');
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
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initEgovernancePage() {
    // Initialiser toutes les fonctionnalités spécifiques
    initWhatWeDoMegaMenuEgovernance();
    initEgovernanceAnimations();
    initEgovernanceInteractions();
    initEgovernanceVideo();
    initBreadcrumbNavigationEgovernance();
    initSmoothScrollEgovernancePage();
    initAccessibilityEgovernancePage();
    
    // Charger la langue sauvegardée ou française par défaut
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageEgovernancePage(savedLanguage);
    } catch (e) {
        setLanguageEgovernancePage('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageEgovernancePage(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        // Surcharger la fonction setLanguage pour inclure nos traductions
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            // Appeler la fonction originale
            originalSetLanguage(lang);
            // Appliquer nos traductions spécifiques
            setLanguageEgovernancePage(lang);
        };
    }
    
    console.log('Page E-Gouvernance initialisée avec succès');
}

// ==============================================
// GESTION DES ERREURS ET PERFORMANCE
// ==============================================

function initErrorHandlingAndPerformanceEgovernance() {
    // Gestion des erreurs d'images
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Erreur de chargement d\'image:', e.target.src);
            
            if (e.target.classList.contains('project-flag')) {
                // Fallback pour les drapeaux
                e.target.style.display = 'none';
            } else if (e.target.classList.contains('solution-icon-img')) {
                // Fallback pour les icônes de solutions
                e.target.style.backgroundColor = '#8290FF';
                e.target.alt = 'Icône solution';
            }
        }
    }, true);
    
    // Préchargement des ressources importantes
    const importantImages = [
        './assets/images/egovernance-hero-bg.jpg',
        './assets/images/flags/cameroon.png',
        './assets/icons/undp-seeklogo@2x.png'
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
// ANALYTICS ET FEEDBACK
// ==============================================

function initEgovernanceAnalytics() {
    // Tracking des interactions utilisateur
    const trackableElements = document.querySelectorAll('.project-link, .sidebar-menu a, .client-card, .solution-card');
    
    trackableElements.forEach((element, index) => {
        element.addEventListener('click', function() {
            const elementType = this.classList.contains('project-link') ? 'project' :
                               this.closest('.sidebar-menu') ? 'sidebar' :
                               this.classList.contains('client-card') ? 'client' :
                               this.classList.contains('solution-card') ? 'solution' : 'unknown';
            
            console.log(`Analytics: Clic sur ${elementType} (position: ${index + 1})`);
        });
        
        // Tracking du temps de hover pour mesurer l'engagement
        let hoverStartTime = null;
        
        element.addEventListener('mouseenter', function() {
            hoverStartTime = Date.now();
        });
        
        element.addEventListener('mouseleave', function() {
            if (hoverStartTime) {
                const hoverDuration = Date.now() - hoverStartTime;
                if (hoverDuration > 2000) { // Plus de 2 secondes
                    console.log(`Analytics: Intérêt prolongé pour élément (${hoverDuration}ms)`);
                }
                hoverStartTime = null;
            }
        });
    });
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initEgovernancePage();
        initErrorHandlingAndPerformanceEgovernance();
        initEgovernanceAnalytics();
    });
} else {
    initEgovernancePage();
    initErrorHandlingAndPerformanceEgovernance();
    initEgovernanceAnalytics();
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
window.EgovernancePage = {
    initEgovernancePage,
    setLanguageEgovernancePage,
    initWhatWeDoMegaMenuEgovernance,
    initEgovernanceAnimations,
    initEgovernanceInteractions,
    copyVideoLink,
    egovernanceTranslations
};