// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE DÉVELOPPEMENT LOGICIEL
// ==============================================

// Variables globales pour la page Développement Logiciel
let developmentAnimationsInitialized = false;
let whatWeDoMegaMenuOpenDev = false;

// Traductions spécifiques à la page Développement Logiciel
const developmentTranslations = {
    fr: {
        // Meta et navigation
        page_title_development: "Développement Logiciel, Web et Mobile - MK BA",
        nav_development: "Développement Logiciel, Web et Mobile",
        
        // Breadcrumb
        breadcrumb_what_we_do: "Ce que nous faisons",
        breadcrumb_services: "Services",
        breadcrumb_development: "Développement logiciel, web et mobile",
        breadcrumb_development_full: "Conception, développement, tests, déploiement et support d'applications web et mobiles",
        
        // Nouveau mega menu "What we do"
        what_we_do_mega_title: "Ce que nous faisons",
        what_we_do_mega_description: "Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis imperdiet cursus, sodales vitae dui.",
        
        // Hero Section
        development_hero_title: "Conception, développement, tests, déploiement et support d'applications web et mobiles",
        
        // Section introduction
        development_intro_highlight: "La Conception, Développement, Tests, Déploiement Et Support D'applications Web Et Mobiles",
        development_intro_description: " Phasellus Risus Turpis, Pretium Sit Amet Magna Non, Molestie Ultricies Enim. Nullam Pulvinar Felis At Metus Malesuada, Nec Convallis Lacus Commodo. Duis Blandit Neque Purus, Nec Auctor Mi Sollicitudin Nec. Duis Urna Ipsum, Tincidunt At Euismod Ut, Placerat Eget Urna. Curabitur Nec Faucibus Leo, Et Laoreet Nibh. Pellentesque Euismod Quam At Eros Efficitur, Vitae Venenatis Sem Consectetur.",
        development_description: "Integer Ac Interdum Lacus. Nunc Porta Semper Lacus A Varius. Pellentesque Habitant Morbi Tristique Senectus Et Netus Et Malesuada Fames Ac Turpis Egestas. Nunc Sagittis Consectetur Velit, Ac Gravida Nunc Gravida Et. Vestibulum At Eros Imperdiet, Volutpat Nunc Vitae, Ornare Erat. Proin Interdum Aliquet Porta. Fusce Ut Semper Ligula.",
        development_list_1: "Integer At Faucibus Urna. Nullam Condimentum Leo Id Elit Sagittis Auctor. Curabitur Elementum Nunc A Leo Imperdiet, Nec Elementum Diam Elementum. Etiam Elementum Euismod Commodo. Proin Eleifend Eget Quam Ut Efficitur. Mauris A Accumsan Mauris. Phasellus Egestas Et Risus Sit Amet Hendrerit. Nulla",
        development_list_2: "Fusce At Nisl Eget Dolor Rhoncus Facilisis. Mauris Ante Nisl, Consectetur Et Luctus Et, Porta Ut Dolor. Curabitur Ultrices Ultrices Nulla. Morbi Blandit Nec Est Vitae Dictum. Etiam Vel Consectetur Diam. Maecenas Vitae Egestas Dolor. Fusce Tempor Magna At Tortor Aliquet Finibus. Sed Eu Nunc Sit Amet Elit Euismod",
        
        // Section pourquoi choisir
        development_why_choose_title: "Pourquoi choisir MK BA pour un projet Conception, Développement, Tests, Déploiement Et Support D'applications Web Et Mobiles",
        development_why_1: "Maecenas Interdum Lorem Eleifend Orci Aliquam Mollis. Aliquam Non Rhoncus Magna. Suspendisse Aliquet Tincidunt Enim, Ut Commodo Elit Feugiat Et. Maecenas Nec Enim Quis Diam Faucibus Tristique. Nam Fermentum, Ipsum In Suscipit Pharetra, Mi Odio Aliquet Neque, Non Iaculis",
        development_why_2: "Mauris Neque Nisl, Faucibus Non Elementum In, Convallis Et Eros. Sed Pretium Sem Libero, Vel Pellentesque Purus Ultrices Ut. In Quis Leo Id Massa Pulvinar Euismod Cursus Non Justo. Sed Sagittis Et Urna Non Efficitur. Nulla Nec Lacus Tincidunt, Rutrum Arcu In, Euismod Diam. Donec",
        development_why_3: "Duis Rhoncus Dui Venenatis Consequat Porttitor. Etiam Aliquet Congue Consequat. In Posuere, Nunc Sit Amet Laoreet Blandit, Urna Sapien Imperdiet Lectus, Et Molestie Sem Tortor Quis Dui. Donec Molestie Nisl Iaculis Sodales Mollis. Nullam Non Tellus Sed Elit Pulvinar Dignissim Ut",
        
        // Section services
        development_services_title: "Duis pretium gravida enim, vel maximus.",
        development_service_1_title: "Aenean non accumsan ante. Duis et risus",
        development_service_1_desc: "Maecenas Interdum Lorem Eleifend Orci Aliquam Mollis. Aliquam Non Rhoncus Magna. Suspendisse Aliquet Tincidunt Enim, Ut Commodo Elit Feugiat Et. Maecenas Nec Enim Quis Diam Faucibus Tristique. Nam",
        development_service_2_title: "Vivamus eget aliquam dui. Integer eu arcu vel",
        development_service_2_desc: "Duis Pretium Gravida Enim, Vel Maximus Ligula Fermentum A. Sed Rhoncus Eget Ex Id Egestas. Nam Nec Nisl Placerat, Tempus Erat A, Condimentum Metus. Curabitur Nulla Nisl, Lacinia At Lobortis At, Suscipit At Nibh.",
        development_service_3_title: "Integer at faucibus urna. Nullam condimentum leo",
        development_service_3_desc: "Vestibulum Blandit Viverra Convallis. Pellentesque Ligula Urna, Fermentum Ut Semper In, Tincidunt Nec Dui. Morbi Mauris Lacus, Consequat Eget Justo In, Semper Gravida Enim. Donec Ultrices Varius Ligula.",
        development_service_4_title: "Aenean non accumsan ante. Duis et risus",
        development_service_4_desc: "Maecenas Interdum Lorem Eleifend Orci Aliquam Mollis. Aliquam Non Rhoncus Magna. Suspendisse Aliquet Tincidunt Enim, Ut Commodo Elit Feugiat Et. Maecenas Nec Enim Quis Diam Faucibus Tristique. Nam",
        
        // Section contenu additionnel
        development_additional_title: "Duis pretium gravida enim, vel maximus.",
        development_additional_text: "Integer Ac Interdum Lacus. Nunc Porta Semper Lacus A Varius. Pellentesque Habitant Morbi Tristique Senectus Et Netus Et Malesuada Fames Ac Turpis Egestas. Nunc Sagittis Consectetur Velit, Ac Gravida Nunc Gravida Et. Vestibulum At Eros Imperdiet, Volutpat Nunc Vitae, Ornare Erat. Proin Interdum Aliquet Porta. Fusce Ut Semper Ligula.",
        development_additional_1: "Integer At Faucibus Urna. Nullam Condimentum Leo Id Elit Sagittis Auctor. Curabitur Elementum Nunc A Leo Imperdiet, Nec Elementum Diam Elementum. Etiam Elementum Euismod Commodo. Proin Eleifend Eget Quam Ut Efficitur. Mauris A Accumsan Mauris. Phasellus Egestas Et Risus Sit Amet Hendrerit. Nulla",
        development_additional_2: "Duis Mauris Augue, Efficitur Eu Arcu Sit Amet, Posuere Dignissim Neque. Aenean Enim Sem, Pharetra Et Magna Sit Amet, Luctus Aliquet Nibh. Curabitur Auctor Leo Et Libero Consectetur Gravida. Morbi Gravida Et Sem Dictum Varius. Proin Eget Viverra Sem, Non Euismod Est. Maecenas Facilisis Urna In Lectus Aliquet",
        development_additional_3: "Praesent Eu Dolor Eu Orci Vehicula Euismod. Vivamus Sed Sollicitudin Libero, Vel Malesuada Velit. Nullam Et Maximus Lorem. Suspendisse Maximus Dolor Quis Consequat Volutpat. Donec Vehicula Elit Eu Erat Pulvinar, Vel Congue Ex Egestas. Praesent Egestas Purus Dolor, A Porta Arcu Pharetra Quis. Sed Vestibulum",
        development_additional_4: "In Consequat, Quam Id Sodales Hendrerit, Eros Mi Molestie Leo, Nec Lacinia Risus Neque Tristique Augue. Proin Tempus Urna Vel Congue Elementum. Vestibulum Euismod Accumsan Dui, Ac Iaculis Sem Viverra Eu. Donec Convallis, Elit Vitae Ornare Cursus, Libero Purus Facilisis Felis, A Volutpat Metus Tortor",
        
        // Section références
        development_references_title: "Références liés à ce service",
        development_reference_1_desc: "In Consequat, Quam Id Sodales Hendrerit, Eros Mi Molestie Leo, Nec Lacinia Risus Neque Tristique Augue. Proin Tempus Urna Vel Congue Elementum. Vestibulum Euismod Accumsan Dui, Ac Iaculis Sem Viverra Eu. Donec Convallis, Elit Vitae Ornare Cursus, Libero Purus Facilisis Felis, A Volutpat Metus Tortor Bibendum Elit. Integer Nec Mi Eleifend, Fermentum Lorem Vitae, Finibus Neque. Cras Accumsan Pretium",
        development_reference_2_desc: "In Consequat, Quam Id Sodales Hendrerit, Eros Mi Molestie Leo, Nec Lacinia Risus Neque Tristique Augue. Proin Tempus Urna Vel Congue Elementum. Vestibulum Euismod Accumsan Dui, Ac Iaculis Sem Viverra Eu. Donec Convallis, Elit Vitae Ornare Cursus, Libero Purus Facilisis Felis, A Volutpat Metus Tortor Bibendum Elit. Integer Nec Mi Eleifend, Fermentum Lorem Vitae, Finibus Neque. Cras Accumsan Pretium Lorem Vitae, Finibus Neque.",
        development_reference_3_desc: "In Consequat, Quam Id Sodales Hendrerit, Eros Mi Molestie Leo, Nec Lacinia Risus Neque Tristique Augue. Proin Tempus Urna Vel Congue Elementum. Vestibulum Euismod Accumsan Dui, Ac Iaculis Sem Viverra Eu. Donec Convallis, Elit Vitae Ornare Cursus, Libero Purus Facilisis Felis, A Volutpat Metus Tortor Bibendum Elit. Integer Nec Mi Eleifend, Fermentum Lorem Vitae, Finibus Neque. Cras Accumsan Pretium",
        reference_read_more: 'Lire plus <i class="fas fa-arrow-right ms-2">',
        
        // Section témoignages
        development_testimonials_title: "Join Our Satisfied Clients",
        development_testimonial_1_name: "Jessica Baker",
        development_testimonial_1_title: "Nunc scelerisque tincidunt elit.",
        development_testimonial_1_text: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus, felis ligula tempus lorem, eu porttitor ex lacus vel felis. Vivamus egestas scelerisque consectetur. Vestibulum faucibus enim urna, fermentum aliquet quam euismod non. Proin cursus, libero quis semper elementum, diam metus eleifend magna, in placerat sem velit vitae lacus. Vivamus",
        development_testimonial_2_name: "Martha Ford",
        development_testimonial_2_title: "Nunc scelerisque tincidunt elit.",
        development_testimonial_2_text: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus, felis ligula tempus lorem, eu porttitor ex lacus vel felis. Vivamus egestas scelerisque consectetur. Vestibulum faucibus enim urna, fermentum aliquet quam euismod non. Proin cursus, libero quis semper elementum, diam metus eleifend magna, in placerat sem velit vitae lacus. Vivamus",
        development_testimonial_3_name: "Danielle",
        development_testimonial_3_title: "Nunc scelerisque tincidunt elit.",
        development_testimonial_3_text: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus, felis ligula tempus lorem, eu porttitor ex lacus vel felis."
    },
    
    en: {
        // Meta et navigation
        page_title_development: "Software, Web and Mobile Development - MK BA",
        nav_development: "Software, Web and Mobile Development",
        
        // Breadcrumb
        breadcrumb_what_we_do: "What we do",
        breadcrumb_services: "Services",
        breadcrumb_development: "Software, web and mobile development",
        breadcrumb_development_full: "Design, development, testing, deployment and support of web and mobile applications",
        
        // Nouveau mega menu "What we do"
        what_we_do_mega_title: "What we do",
        what_we_do_mega_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        
        // Hero Section
        development_hero_title: "Design, development, testing, deployment and support of web and mobile applications",
        
        // Section introduction
        development_intro_highlight: "Design, Development, Testing, Deployment And Support Of Web And Mobile Applications",
        development_intro_description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        development_description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        development_list_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        development_list_2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
        // Section pourquoi choisir
        development_why_choose_title: "Why choose MK BA for a Design, Development, Testing, Deployment And Support Of Web And Mobile Applications project",
        development_why_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
        development_why_2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        development_why_3: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        
        // Section services
        development_services_title: "Lorem ipsum dolor sit, vel maximus.",
        development_service_1_title: "Lorem ipsum dolor sit amet. Consectetur",
        development_service_1_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        development_service_2_title: "Sed do eiusmod tempor. Incididunt ut labore",
        development_service_2_desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
        development_service_3_title: "Velit esse cillum dolore. Eu fugiat nulla",
        development_service_3_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        development_service_4_title: "Lorem ipsum dolor sit amet. Consectetur",
        development_service_4_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        
        // Section contenu additionnel
        development_additional_title: "Lorem ipsum dolor sit, vel maximus.",
        development_additional_text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        development_additional_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        development_additional_2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        development_additional_3: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        development_additional_4: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.",
        
        // Section références
        development_references_title: "References related to this service",
        development_reference_1_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
        development_reference_2_desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
        development_reference_3_desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.",
        reference_read_more: 'Read more  <i class="fas fa-arrow-right ms-2"></i>',
        
        // Section témoignages
        development_testimonials_title: "Join Our Satisfied Clients",
        development_testimonial_1_name: "Jessica Baker",
        development_testimonial_1_title: "Software Development Specialist",
        development_testimonial_1_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        development_testimonial_2_name: "Martha Ford",
        development_testimonial_2_title: "Software Development Specialist",
        development_testimonial_2_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        development_testimonial_3_name: "Danielle",
        development_testimonial_3_title: "Software Development Specialist",
        development_testimonial_3_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    }
};

// ==============================================
// GESTION DU MEGA MENU "WHAT WE DO" POUR DÉVELOPPEMENT LOGICIEL
// ==============================================

function initWhatWeDoMegaMenuDevelopment() {
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
                whatWeDoMegaMenuOpenDev = true;
                dropdownMenu.classList.add('show');
                navbar.classList.add('mega-menu-open');
                updateWhatWeDoMegaMenuStylesDevelopment(true);
            });
            
            megaMenuDropdown.addEventListener('mouseleave', function() {
                whatWeDoMegaMenuOpenDev = false;
                dropdownMenu.classList.remove('show');
                navbar.classList.remove('mega-menu-open');
                updateWhatWeDoMegaMenuStylesDevelopment(false);
            });
            
            // Fermer seulement en cliquant à l'extérieur
            document.addEventListener('click', function(e) {
                if (whatWeDoMegaMenuOpenDev && !megaMenuDropdown.contains(e.target)) {
                    whatWeDoMegaMenuOpenDev = false;
                    dropdownMenu.classList.remove('show');
                    navbar.classList.remove('mega-menu-open');
                    updateWhatWeDoMegaMenuStylesDevelopment(false);
                }
            });
            
            // Empêcher la fermeture lors du clic dans le menu
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
}

function updateWhatWeDoMegaMenuStylesDevelopment(isOpen) {
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
// INTERACTIONS AVEC LES ÉLÉMENTS
// ==============================================

function initDevelopmentInteractions() {
    // Interaction avec les cartes de services
    const serviceCards = document.querySelectorAll('.service-card1');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
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
    
    // Interaction avec les boutons de références
    const referenceButtons = document.querySelectorAll('.reference-btn');
    referenceButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animation de clic
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                // Ici on pourrait ajouter la navigation vers la référence complète
                console.log('Navigation vers la référence complète');
            }, 150);
        });
        
        // Support clavier
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Interaction avec les images de référence
    const referenceImages = document.querySelectorAll('.reference-img');
    referenceImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
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
// GESTION DES TRADUCTIONS POUR LA PAGE DÉVELOPPEMENT LOGICIEL
// ==============================================

function setLanguageDevelopmentPage(lang) {
    const pageTranslations = developmentTranslations[lang];
    
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
    if (pageTranslations.page_title_development) {
        document.title = pageTranslations.page_title_development;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page Développement Logiciel`);
}

// ==============================================
// GESTION DU BREADCRUMB NAVIGATION
// ==============================================

function initBreadcrumbNavigationDevelopment() {
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
                } else if (this.getAttribute('data-i18n') === 'breadcrumb_development') {
                    // Page actuelle - pas de navigation
                    return;
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
// SMOOTH SCROLL ADAPTÉ POUR LA PAGE DÉVELOPPEMENT LOGICIEL
// ==============================================

function initSmoothScrollDevelopmentPage() {
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

function initAccessibilityDevelopmentPage() {
    // Améliorer l'accessibilité des éléments interactifs
    const interactiveElements = document.querySelectorAll('.service-card1, .reference-item, .testimonial-card');
    interactiveElements.forEach((element, index) => {
        if (!element.getAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
        
        if (!element.getAttribute('role')) {
            element.setAttribute('role', 'button');
        }
        
        // Ajouter aria-label si nécessaire
        const title = element.querySelector('h3, .service-title, .reference-description, .testimonial-text');
        if (title && !element.getAttribute('aria-label')) {
            element.setAttribute('aria-label', title.innerHTML.substring(0, 50) + '...');
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
        const animatedElements = document.querySelectorAll('.service-card1, .reference-item, .testimonial-card');
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

function initDevelopmentPage() {
    // Initialiser toutes les fonctionnalités spécifiques
    initWhatWeDoMegaMenuDevelopment();
    initDevelopmentInteractions();
    initBreadcrumbNavigationDevelopment();
    initSmoothScrollDevelopmentPage();
    initAccessibilityDevelopmentPage();
    
    // Charger la langue sauvegardée ou française par défaut
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageDevelopmentPage(savedLanguage);
    } catch (e) {
        setLanguageDevelopmentPage('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageDevelopmentPage(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        // Surcharger la fonction setLanguage pour inclure nos traductions
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            // Appeler la fonction originale
            originalSetLanguage(lang);
            // Appliquer nos traductions spécifiques
            setLanguageDevelopmentPage(lang);
        };
    }
    
    console.log('Page Développement Logiciel initialisée avec succès');
}

// ==============================================
// GESTION DES ERREURS ET PERFORMANCE
// ==============================================

function initErrorHandlingAndPerformanceDevelopment() {
    // Gestion des erreurs d'images
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Erreur de chargement d\'image:', e.target.src);
            
            if (e.target.classList.contains('reference-img')) {
                // Fallback pour les images de référence
                e.target.style.display = 'none';
                const parent = e.target.closest('.reference-image');
                if (parent) {
                    parent.style.background = '#f0f0f0';
                    parent.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666;"><i class="fas fa-image" style="font-size: 3rem;"></i></div>';
                }
            } else if (e.target.classList.contains('project-flag')) {
                // Fallback pour les drapeaux
                e.target.style.display = 'none';
            }
        }
    }, true);
    
    // Préchargement des ressources importantes
    const importantImages = [
        './assets/images/developpement-hero-bg.png',
        './assets/images/references/developer-1.jpg',
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

function initDevelopmentAnalytics() {
    // Tracking des interactions utilisateur
    const trackableElements = document.querySelectorAll('.service-card1, .reference-btn, .testimonial-card');
    
    trackableElements.forEach((element, index) => {
        element.addEventListener('click', function() {
            const elementType = this.classList.contains('service-card1') ? 'service' :
                               this.classList.contains('reference-btn') ? 'reference' :
                               this.classList.contains('testimonial-card') ? 'testimonial' : 'unknown';
            
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
        initDevelopmentPage();
        initErrorHandlingAndPerformanceDevelopment();
        initDevelopmentAnalytics();
    });
} else {
    initDevelopmentPage();
    initErrorHandlingAndPerformanceDevelopment();
    initDevelopmentAnalytics();
}

// Optimisation des performances au redimensionnement
let resizeTimeoutDev;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeoutDev);
    resizeTimeoutDev = setTimeout(() => {
        // Réinitialiser certaines fonctionnalités si nécessaire
        if (window.innerWidth < 768 && whatWeDoMegaMenuOpenDev) {
            // Fermer le mega menu sur mobile
            const megaMenuDropdown = document.querySelector('.what-we-do-dropdown');
            const dropdownMenu = megaMenuDropdown?.querySelector('.what-we-do-mega-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('show');
                whatWeDoMegaMenuOpenDev = false;
            }
        }
    }, 250);
});

// Export des fonctions pour utilisation externe
window.DevelopmentPage = {
    initDevelopmentPage,
    setLanguageDevelopmentPage,
    initWhatWeDoMegaMenuDevelopment,
    initDevelopmentInteractions,
    developmentTranslations
};