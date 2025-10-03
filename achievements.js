// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE ACHIEVEMENTS
// ==============================================

// Variables globales pour la page Achievements
let achievementsAnimationsInitialized = false;
let achievementsInteractiveMap = null;
let currentLanguageAchievements = 'fr';
let achievementsSearchFilters = {
    keywords: '',
    solution: '',
    industries: '',
    services: '',
    technologies: ''
};

// Traductions spécifiques à la page Achievements
const achievementsTranslations = {
    fr: {
        // Meta et navigation
        page_title_achievements: "Réalisations - MK BA",
        nav_achievements: "Réalisations",
        
        // Breadcrumb
        breadcrumb_achievements: "Réalisations",
        
        // Hero Section
        achievements_hero_title: "Réalisations",
        
        // Section introductive
        achievements_intro_title: "Nulla eleifend pulvinar purus,",
        achievements_intro_text: "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque sagittis, massa sodales sodales finibus, felis ligula tempus lorem, eu porttitor ex lacus vel felis. Vivamus egestas scelerisque consectetur. Vestibulum faucibus enim urna, fermentum aliquet quam euismod non. Proin cursus, libero quis semper elementum, diam metus eleifend magna, in placerat sem velit vitae lacus. Vivamus tempor fringilla nisl, id condimentum felis dignissim nec.",
        
        // Accomplissement par Pays
        achievements_by_country_title: "Accomplissement par Pays",
        
        // Tous nos accomplissements
        all_achievements_title: "Tous nos accomplissements",
        search_jobs_label: "Recherche des emplois",
        search_keywords_placeholder: "Recherche par mots-clés",
        filter_solution: "Solution",
        filter_industries: "Industries",
        filter_services: "Services",
        filter_technologies: "Technologies",
        search_button: "Rechercher",
        reset_filters: "Réinitialiser",
        
        // Options des filtres
        solution_egovernance: "E-gouvernance",
        solution_healthcare: "Santé",
        solution_education: "Éducation",
        industry_public: "Secteur public",
        industry_private: "Secteur privé",
        industry_ngo: "ONG",
        service_consulting: "Conseil",
        service_development: "Développement",
        service_integration: "Intégration",
        tech_web: "Web",
        tech_mobile: "Mobile",
        tech_ai: "IA",
        
        // Cartes accomplissements
        achievement_desc_1: "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at",
        achievement_desc_2: "Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam",
        read_more_btn: 'Lire plus <i class="fas fa-arrow-right ms-2"></i>',
        
        // Témoignages
        testimonials_title: "Témoignages",
        org_undp_full: "PNUD : Programme des nations Unis pour le développement",
        org_unicef_full: "UNICEF : Fonds des Nations Unies pour l'enfance",
        org_unido_full: "UNIDO : Programme des nations Unis pour le développement",
        testimonial_text_1: "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor. Pellentesque vehicula est a lorem gravida bibendum. Proin tristique diam ut urna pharetra, ac rhoncus elit elementum. Proin vitae purus",
        client_name: "Alan Ellis",
        client_title: "Président et chef de la direction",
        learn_more: "En Savoir Plus",
        show_more_testimonials: "Afficher plus de témoignages"
    },
    
    en: {
        // Meta et navigation
        page_title_achievements: "Achievements - MK BA",
        nav_achievements: "Achievements",
        
        // Breadcrumb
        breadcrumb_achievements: "Achievements",
        
        // Hero Section
        achievements_hero_title: "Achievements",
        
        // Section introductive
        achievements_intro_title: "Nulla eleifend pulvinar purus,",
        achievements_intro_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        
        // Accomplissement par Pays
        achievements_by_country_title: "Achievements by Country",
        
        // Tous nos accomplissements
        all_achievements_title: "All our achievements",
        search_jobs_label: "Job search",
        search_keywords_placeholder: "Search by keywords",
        filter_solution: "Solution",
        filter_industries: "Industries",
        filter_services: "Services",
        filter_technologies: "Technologies",
        search_button: "Search",
        reset_filters: "Reset",
        
        // Options des filtres
        solution_egovernance: "E-governance",
        solution_healthcare: "Healthcare",
        solution_education: "Education",
        industry_public: "Public sector",
        industry_private: "Private sector",
        industry_ngo: "NGO",
        service_consulting: "Consulting",
        service_development: "Development",
        service_integration: "Integration",
        tech_web: "Web",
        tech_mobile: "Mobile",
        tech_ai: "AI",
        
        // Cartes accomplissements
        achievement_desc_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore",
        achievement_desc_2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        read_more_btn: 'Read more <i class="fas fa-arrow-right ms-2"></i>',
        
        // Témoignages
        testimonials_title: "Testimonials",
        org_undp_full: "UNDP: United Nations Development Programme",
        org_unicef_full: "UNICEF: United Nations Children's Fund",
        org_unido_full: "UNIDO: United Nations Industrial Development Organization",
        testimonial_text_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        client_name: "Alan Ellis",
        client_title: "President and Chief Executive Officer",
        learn_more: "Learn More",
        show_more_testimonials: "Show more testimonials"
    }
};

// Données des pays avec accomplissements
const achievementsCountries = [
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

// ==============================================
// CARTE INTERACTIVE ACHIEVEMENTS AVEC LEAFLET
// ==============================================

function initAchievementsInteractiveMap() {
    // Vérifier si Leaflet est disponible
    if (typeof L === 'undefined') {
        console.warn('Leaflet non disponible - Chargement depuis CDN...');
        loadLeafletAndInitAchievementsMap();
        return;
    }

    const mapContainer = document.getElementById('achievements-interactive-map');
    if (!mapContainer) {
        console.warn('Conteneur de carte achievements non trouvé');
        return;
    }

    try {
        // Créer la carte centrée sur l'Afrique
        achievementsInteractiveMap = L.map('achievements-interactive-map', {
            center: [0, 20], // Centré sur l'Afrique
            zoom: 2,
            minZoom: 2,
            maxZoom: 7,
            zoomControl: true,
            scrollWheelZoom: true,
            doubleClickZoom: true,
            dragging: true
        });

        // Ajouter la couche de fond avec style gris
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '',
            maxZoom: 18,
            className: 'achievements-map-tiles'
        }).addTo(achievementsInteractiveMap);

        // Style CSS pour les tuiles en gris
        const mapStyle = document.createElement('style');
        mapStyle.innerHTML = `
            .achievements-map-tiles {
                background: #F5F5F5;
            }
        `;
        document.head.appendChild(mapStyle);

        // Ajouter les marqueurs pour chaque pays
        achievementsCountries.forEach(country => {
            // Créer le marqueur avec icône personnalisée
            const marker = L.marker(country.coordinates, {
                icon: L.divIcon({
                    className: 'achievements-custom-marker',
                    html: `<div class="achievements-marker-pin" style="
                        width: 20px; 
                        height: 20px; 
                        background: #808080; 
                        border: 2px solid #666666;
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
            }).addTo(achievementsInteractiveMap);

            // Créer le contenu de l'infobulle
            const tooltipContent = `
                <div class="achievements-custom-tooltip">
                    <div class="achievements-tooltip-header">
                        <img src="${country.flagUrl}" alt="Drapeau ${country.name}" class="achievements-tooltip-flag" 
                             onerror="this.style.display='none'">
                        <span class="achievements-tooltip-country">${currentLanguageAchievements === 'fr' ? country.name : country.nameEn}</span>
                    </div>
                    <div class="achievements-tooltip-stats">
                        <div><strong>Projets :</strong> ${country.projects}</div>
                        <div><strong>Intervenants :</strong> ${country.interventions}</div>
                    </div>
                </div>
            `;

            // Ajouter l'infobulle qui apparaît au survol
            marker.bindTooltip(tooltipContent, {
                permanent: false,
                direction: 'top',
                offset: [0, -25],
                className: 'leaflet-achievements-tooltip',
                sticky: false,
                interactive: false,
                opacity: 1
            });

            // Événements de survol
            marker.on('mouseover', function(e) {
                const pin = this.getElement().querySelector('.achievements-marker-pin');
                if (pin) {
                    pin.style.transform = 'scale(1.2)';
                    pin.style.zIndex = '1000';
                    pin.style.background = '#999999';
                }
                this.openTooltip();
            });

            marker.on('mouseout', function(e) {
                const pin = this.getElement().querySelector('.achievements-marker-pin');
                if (pin) {
                    pin.style.transform = 'scale(1)';
                    pin.style.zIndex = '999';
                    pin.style.background = '#808080';
                }
                setTimeout(() => {
                    if (!this.isTooltipOpen()) return;
                    this.closeTooltip();
                }, 100);
            });

            // Événement de clic pour zoomer sur le pays
            marker.on('click', function() {
                achievementsInteractiveMap.fitBounds(country.bounds, {
                    padding: [50, 50],
                    maxZoom: 6
                });
            });
        });

        console.log('Carte interactive achievements initialisée avec succès');

    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la carte achievements:', error);
        showAchievementsStaticMapFallback();
    }
}

// Fonction pour charger Leaflet depuis CDN
function loadLeafletAndInitAchievementsMap() {
    // Le CSS Leaflet est déjà chargé dans le HTML
    
    // Charger le JS de Leaflet
    const leafletJS = document.createElement('script');
    leafletJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    leafletJS.onload = () => {
        setTimeout(initAchievementsInteractiveMap, 100);
    };
    leafletJS.onerror = () => {
        console.warn('Impossible de charger Leaflet - Utilisation de la carte statique');
        showAchievementsStaticMapFallback();
    };
    document.head.appendChild(leafletJS);
}

// Fonction de fallback vers la carte statique
function showAchievementsStaticMapFallback() {
    const mapContainer = document.getElementById('achievements-interactive-map');
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
                    <i class="fas fa-globe-africa" style="font-size: 3rem; margin-bottom: 1rem; color: #808080;"></i>
                    <div>Carte des accomplissements MK BA</div>
                    <div style="font-size: 0.9rem; margin-top: 0.5rem;">Projets dans 10 pays</div>
                </div>
            </div>
        `;
    }
}

// ==============================================
// SYSTÈME DE RECHERCHE ET FILTRAGE AMÉLIORÉ
// ==============================================

function initAchievementsSearchSystem() {
    const searchInput = document.getElementById('achievements-search');
    const solutionFilter = document.getElementById('solution-filter');
    const industriesFilter = document.getElementById('industries-filter');
    const servicesFilter = document.getElementById('services-filter');
    const technologiesFilter = document.getElementById('technologies-filter');
    const searchBtn = document.querySelector('.search-btn');
    const resetBtn = document.getElementById('reset-filters-btn');

    // Initialiser les interactions des dropdowns
    initDropdownInteractions();

    // Gestion de la saisie dans le champ de recherche
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            achievementsSearchFilters.keywords = e.target.value.trim();
            updateResetButtonVisibility();
            debounceAchievementsSearch();
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performAchievementsSearch();
            }
        });
    }

    // Gestion des filtres
    [solutionFilter, industriesFilter, servicesFilter, technologiesFilter].forEach(filter => {
        if (filter) {
            filter.addEventListener('change', (e) => {
                const filterId = e.target.id.replace('-filter', '');
                achievementsSearchFilters[filterId === 'industries' ? 'industries' : 
                                          filterId === 'services' ? 'services' :
                                          filterId === 'technologies' ? 'technologies' : 
                                          'solution'] = e.target.value;
                updateResetButtonVisibility();
                debounceAchievementsSearch();
            });
        }
    });

    // Bouton de recherche
    if (searchBtn) {
        searchBtn.addEventListener('click', performAchievementsSearch);
    }

    // Bouton de réinitialisation
    if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
    }
}

// Initialiser les interactions des dropdowns avec icônes
function initDropdownInteractions() {
    const filterSelects = document.querySelectorAll('.filter-select');
    
    filterSelects.forEach(select => {
        const wrapper = select.parentElement;
        const icon = wrapper.querySelector('.filter-dropdown-icon');
        
        if (!icon) return;

        // Événements pour l'animation de l'icône
        select.addEventListener('focus', () => {
            icon.style.transform = 'rotate(180deg)';
            icon.style.color = 'var(--achievements-blue)';
        });

        select.addEventListener('blur', () => {
            icon.style.transform = 'rotate(0deg)';
            icon.style.color = '#707070';
        });

        // Animation lors du clic
        select.addEventListener('mousedown', () => {
            icon.style.transform = 'rotate(180deg)';
            icon.style.color = 'var(--achievements-blue)';
        });

        // Gérer l'état ouvert/fermé pour les navigateurs modernes
        select.addEventListener('click', (e) => {
            // Petite animation pour feedback visuel
            wrapper.style.transform = 'scale(0.98)';
            setTimeout(() => {
                wrapper.style.transform = '';
            }, 100);
        });
    });
}

// Mettre à jour la visibilité du bouton de réinitialisation
function updateResetButtonVisibility() {
    const resetBtn = document.getElementById('reset-filters-btn');
    if (!resetBtn) return;

    const hasFilters = Object.values(achievementsSearchFilters).some(value => value !== '');
    
    if (hasFilters) {
        resetBtn.classList.add('show');
        resetBtn.style.display = 'block';
    } else {
        resetBtn.classList.remove('show');
        resetBtn.style.display = 'none';
    }
}

// Réinitialiser tous les filtres
function resetAllFilters() {
    const resetBtn = document.getElementById('reset-filters-btn');
    const searchInput = document.getElementById('achievements-search');
    const filterSelects = document.querySelectorAll('.filter-select');

    // Animation du bouton de réinitialisation
    if (resetBtn) {
        resetBtn.style.transform = 'scale(0.95)';
        resetBtn.innerHTML = 'Réinitialisation...';
        resetBtn.disabled = true;
    }

    setTimeout(() => {
        // Réinitialiser les valeurs
        achievementsSearchFilters = {
            keywords: '',
            solution: '',
            industries: '',
            services: '',
            technologies: ''
        };

        // Réinitialiser les champs
        if (searchInput) {
            searchInput.value = '';
        }

        filterSelects.forEach(select => {
            select.selectedIndex = 0;
        });

        // Effectuer une nouvelle recherche (afficher tous les résultats)
        performAchievementsSearch();

        // Masquer le bouton de réinitialisation
        updateResetButtonVisibility();

        // Restaurer le bouton
        if (resetBtn) {
            resetBtn.style.transform = '';
            resetBtn.innerHTML = achievementsTranslations[currentLanguageAchievements].reset_filters;
            resetBtn.disabled = false;
        }

        // Notification
        showAchievementsNotification('Filtres réinitialisés');
    }, 500);
}

// Debounce pour la recherche
let achievementsSearchTimeout;
function debounceAchievementsSearch() {
    clearTimeout(achievementsSearchTimeout);
    achievementsSearchTimeout = setTimeout(performAchievementsSearch, 500);
}

// Fonction de recherche
function performAchievementsSearch() {
    const { keywords, solution, industries, services, technologies } = achievementsSearchFilters;
    
    console.log('Recherche avec filtres:', {
        keywords,
        solution,
        industries,
        services,
        technologies
    });

    // Simuler la recherche
    const cards = document.querySelectorAll('.achievement-project-card');
    let visibleCount = 0;

    cards.forEach(card => {
        let shouldShow = true;

        // Filtrer par mots-clés (rechercher dans la description)
        if (keywords) {
            const description = card.querySelector('.achievement-description');
            if (description && !description.innerHTML.toLowerCase().includes(keywords.toLowerCase())) {
                shouldShow = false;
            }
        }

        // Appliquer les autres filtres selon la logique métier
        // (Dans un vrai projet, cela serait basé sur les données des cartes)

        if (shouldShow) {
            card.style.display = 'block';
            card.parentElement.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.parentElement.style.display = 'none';
        }
    });

    // Afficher le nombre de résultats
    showAchievementsSearchResults(visibleCount);
}

function showAchievementsSearchResults(count) {
    // Créer ou mettre à jour un indicateur de résultats
    let resultsIndicator = document.querySelector('.achievements-search-results');
    if (!resultsIndicator) {
        resultsIndicator = document.createElement('div');
        resultsIndicator.className = 'achievements-search-results';
        resultsIndicator.style.cssText = `
            margin: 1rem 0;
            padding: 0.5rem 1rem;
            background: #e3f2fd;
            border-left: 4px solid #005FAC;
            font-size: 0.9rem;
            color: #333;
            transition: opacity 0.3s ease;
        `;
        
        const achievementsGrid = document.querySelector('.achievements-grid');
        if (achievementsGrid) {
            achievementsGrid.parentNode.insertBefore(resultsIndicator, achievementsGrid);
        }
    }
    
    // Afficher le message
    resultsIndicator.style.opacity = '1';
    resultsIndicator.style.display = 'block';
    resultsIndicator.innerHTML = `${count} accomplissement(s) trouvé(s)`;
    
    if (count === 0) {
        resultsIndicator.innerHTML = 'Aucun accomplissement ne correspond à vos critères de recherche.';
        resultsIndicator.style.background = '#fff3cd';
        resultsIndicator.style.borderLeftColor = '#ffc107';
    } else {
        resultsIndicator.style.background = '#e3f2fd';
        resultsIndicator.style.borderLeftColor = '#005FAC';
    }
    
    // Faire disparaître le message après 4 secondes
    setTimeout(() => {
        if (resultsIndicator) {
            resultsIndicator.style.opacity = '0';
            setTimeout(() => {
                if (resultsIndicator) {
                    resultsIndicator.style.display = 'none';
                }
            }, 300); // Attendre la fin de la transition d'opacité
        }
    }, 4000);
}

// ==============================================
// GESTION DES TÉMOIGNAGES AMÉLIORÉE
// ==============================================

function initTestimonialsInteractions() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const showMoreBtn = document.querySelector('.show-more-btn');

    // Ajouter les interactions pour les cartes témoignages
    testimonialCards.forEach((card, index) => {
        // Animation au scroll
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

        // Interactions avec les liens "En Savoir Plus"
        const testimonialLink = card.querySelector('.testimonial-link');
        if (testimonialLink) {
            testimonialLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log(`Clic sur témoignage ${index + 1}`);
                
                // Animation du lien
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        }

        // Amélioration de la structure des témoignages
        optimizeTestimonialStructure(card);

        // Accessibilité
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        
        const orgName = card.querySelector('.org-name');
        if (orgName) {
            card.setAttribute('aria-label', `Témoignage de ${orgName.innerHTML}`);
        }
    });

    // Bouton "Afficher plus de témoignages"
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            console.log('Chargement de témoignages supplémentaires...');
            
            // Animation du bouton
            this.style.transform = 'scale(0.95)';
            this.innerHTML = 'Chargement...';
            this.disabled = true;
            
            // Simuler le chargement
            setTimeout(() => {
                this.style.transform = '';
                this.innerHTML = achievementsTranslations[currentLanguageAchievements].show_more_testimonials;
                this.disabled = false;
                
                // Ici, on pourrait charger plus de témoignages via AJAX
                showAchievementsNotification('Témoignages supplémentaires chargés');
            }, 1500);
        });
    }
}

// Optimiser la structure des témoignages selon les spécifications
function optimizeTestimonialStructure(card) {
    const quoteSection = card.querySelector('.testimonial-quote-section');
    const quoteContent = card.querySelector('.quote-content');
    const testimonialText = card.querySelector('.testimonial-text');
    const quoteMarks = card.querySelector('.quote-marks');

    if (quoteContent && testimonialText && quoteMarks) {
        // S'assurer que les guillemets sont bien positionnés
        quoteMarks.style.cssText = `
            color: var(--quote-blue);
            font-size: 2rem;
            font-weight: bold;
            line-height: 1;
            margin-right: 0.25rem;
            flex-shrink: 0;
            margin-top: -0.25rem;
        `;

        // S'assurer que le texte commence bien après les guillemets
        testimonialText.style.cssText = `
            font-family: 'Open Sans', sans-serif;
            font-size: 1.125rem;
            font-weight: 400;
            color: #232323;
            line-height: 1.5;
            margin: 0;
            flex: 1;
        `;

        // Améliorer la structure flex du contenu des guillemets
        quoteContent.style.cssText = `
            flex: 1;
            position: relative;
            display: flex;
            align-items: flex-start;
        `;
    }
}

// ==============================================
// ANIMATIONS PROGRESSIVES AU SCROLL
// ==============================================

function initAchievementsScrollAnimations() {
    if (achievementsAnimationsInitialized) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0.1, 0.3, 0.6]
    };
    
    // Animation du titre hero
    const heroTitle = document.querySelector('.achievements-hero-title');
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
    
    // Animation des titres de section (avec et sans carré beige)
    const sectionTitles = document.querySelectorAll('.section-title-with-highlight, .section-title-no-highlight');
    sectionTitles.forEach((title, index) => {
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                        entry.target.classList.add('animate-in');
                    }, 200);
                    titleObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        title.style.opacity = '0';
        title.style.transform = 'translateX(-30px)';
        title.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        titleObserver.observe(title);
    });
    
    // Animation des cartes accomplissements
    const achievementCards = document.querySelectorAll('.achievement-project-card');
    achievementCards.forEach((card, index) => {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                        entry.target.classList.add('animate-in');
                    }, index * 200);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { ...observerOptions, threshold: 0.2 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.95)';
        card.style.transition = 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        cardObserver.observe(card);
    });
    
    // Animation de la section de recherche
    const searchContainer = document.querySelector('.achievements-search-container');
    if (searchContainer) {
        const searchObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    searchObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        searchContainer.style.opacity = '0';
        searchContainer.style.transform = 'translateY(30px)';
        searchContainer.style.transition = 'all 0.6s ease-out';
        searchObserver.observe(searchContainer);
    }
    
    achievementsAnimationsInitialized = true;
}

// ==============================================
// GESTION DES TRADUCTIONS
// ==============================================

function setLanguageAchievementsPage(lang) {
    currentLanguageAchievements = lang;
    const pageTranslations = achievementsTranslations[lang];
    
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
    if (pageTranslations.page_title_achievements) {
        document.title = pageTranslations.page_title_achievements;
    }
    
    // Mettre à jour les tooltips de la carte si elle existe
    if (achievementsInteractiveMap) {
        updateAchievementsMapTranslations();
    }
    
    console.log(`Langue changée vers: ${lang} pour la page Achievements`);
}

function updateAchievementsMapTranslations() {
    if (!achievementsInteractiveMap) return;

    achievementsInteractiveMap.eachLayer(layer => {
        if (layer.getTooltip) {
            const tooltip = layer.getTooltip();
            if (tooltip) {
                const countryData = achievementsCountries.find(c => 
                    tooltip._content.includes(c.name) || tooltip._content.includes(c.nameEn)
                );
                
                if (countryData) {
                    const newContent = `
                        <div class="achievements-custom-tooltip">
                            <div class="achievements-tooltip-header">
                                <img src="${countryData.flagUrl}" alt="Drapeau ${countryData.name}" class="achievements-tooltip-flag" 
                                     onerror="this.style.display='none'">
                                <span class="achievements-tooltip-country">${currentLanguageAchievements === 'fr' ? countryData.name : countryData.nameEn}</span>
                            </div>
                            <div class="achievements-tooltip-stats">
                                <div><strong>Projets :</strong> ${countryData.projects}</div>
                                <div><strong>Intervenants :</strong> ${countryData.interventions}</div>
                            </div>
                        </div>
                    `;
                    layer.setTooltipContent(newContent);
                }
            }
        }
    });
}

// ==============================================
// INTERACTIONS DES CARTES ACCOMPLISSEMENTS
// ==============================================

function initAchievementCardsInteractions() {
    const achievementCards = document.querySelectorAll('.achievement-project-card');
    
    achievementCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.02)';
            
            // Effet sur le drapeau
            const flag = this.querySelector('.achievement-flag');
            if (flag) {
                flag.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            
            const flag = this.querySelector('.achievement-flag');
            if (flag) {
                flag.style.transform = '';
            }
        });
        
        // Gestion des liens "Lire plus" - CORRECTION ICI
        const readMoreLink = card.querySelector('.achievement-read-more');
        if (readMoreLink) {
            readMoreLink.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Empêcher seulement si c'est un lien placeholder (#)
                if (href === '#' || !href) {
                    e.preventDefault();
                    console.log(`Clic sur projet ${index + 1} (lien placeholder)`);
                } else {
                    // Pour les vrais liens (project-detail.html, etc.)
                    console.log(`Navigation vers: ${href}`);
                    // Laisser le comportement par défaut (navigation)
                }
                
                // Animation du lien dans tous les cas
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        }
        
        // Clic sur toute la carte
        card.addEventListener('click', function(e) {
            // Éviter le double clic si on clique sur le bouton
            if (!e.target.closest('.achievement-read-more')) {
                const readMoreLink = this.querySelector('.achievement-read-more');
                if (readMoreLink) {
                    readMoreLink.click();
                }
            }
        });
        
        // Accessibilité
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        const description = card.querySelector('.achievement-description');
        if (description) {
            card.setAttribute('aria-label', `Projet: ${description.innerHTML.substring(0, 50)}...`);
        }
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const readMoreLink = this.querySelector('.achievement-read-more');
                if (readMoreLink) {
                    readMoreLink.click();
                }
            }
        });
    });
}

// ==============================================
// NOTIFICATIONS
// ==============================================

function showAchievementsNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'achievements-notification';
    notification.innerHTML = message;
    notification.style.cssText = `
        position: fixed;
        top: calc(var(--total-header-height) + 1rem);
        right: 1.25rem;
        background: #005FAC;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.3125rem;
        z-index: 9999;
        box-shadow: 0 0.3125rem 0.9375rem rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateX(100%);
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animation de sortie et suppression
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ==============================================
// ACCESSIBILITÉ AVANCÉE
// ==============================================

function initAchievementsAccessibility() {
    // Support du mode contraste élevé
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Support du mode mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Désactiver les animations
        const animatedElements = document.querySelectorAll('.achievement-project-card, .testimonial-card');
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
// GESTION DES ERREURS
// ==============================================

function initAchievementsErrorHandling() {
    // Gestion des erreurs d'images
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Erreur de chargement d\'image achievements:', e.target.src);
            
            if (e.target.classList.contains('achievement-flag')) {
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
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                `;
                e.target.parentNode.appendChild(fallback);
            } else if (e.target.classList.contains('testimonial-org-logo')) {
                // Fallback pour les logos d'organisation
                e.target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'placeholder-logo';
                e.target.parentNode.appendChild(fallback);
            }
        }
    }, true);
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initAchievementsPage() {
    // Initialiser toutes les fonctionnalités
    initAchievementsInteractiveMap();
    initAchievementsSearchSystem();
    initTestimonialsInteractions();
    initAchievementsScrollAnimations();
    initAchievementCardsInteractions();
    initAchievementsAccessibility();
    initAchievementsErrorHandling();
    
    // Charger la langue sauvegardée
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageAchievementsPage(savedLanguage);
    } catch (e) {
        setLanguageAchievementsPage('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageAchievementsPage(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            originalSetLanguage(lang);
            setLanguageAchievementsPage(lang);
        };
    }
    
    console.log('Page Achievements initialisée avec succès');
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAchievementsPage);
} else {
    initAchievementsPage();
}

// Optimisation des performances au redimensionnement
let achievementsResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(achievementsResizeTimeout);
    achievementsResizeTimeout = setTimeout(() => {
        // Redimensionner la carte si nécessaire
        if (achievementsInteractiveMap) {
            setTimeout(() => {
                achievementsInteractiveMap.invalidateSize();
            }, 250);
        }
    }, 250);
});

// Export des fonctions pour utilisation externe
window.AchievementsPage = {
    initAchievementsPage,
    setLanguageAchievementsPage,
    initAchievementsInteractiveMap,
    initAchievementsSearchSystem,
    initTestimonialsInteractions,
    performAchievementsSearch,
    resetAllFilters,
    achievementsTranslations,
    achievementsCountries
};