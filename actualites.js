// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE ACTUALITÉS
// ==============================================

// Variables globales pour la page Actualités
let actualitesAnimationsInitialized = false;
let currentLanguageActualites = 'fr';
let currentPage = 1;
let totalPages = 4;
let actualitesFilters = {
    keywords: '',
    day: '',
    month: '',
    category: ''
};

// Traductions spécifiques à la page Actualités
const actualitesTranslations = {
    fr: {
        // Meta et navigation
        page_title_news: "Actualités - MK BA",
        nav_news: "Actualités",
        
        // Hero Section
        actualites_hero_title: "Actualités",
        
        // Section titre
        all_actualites_title: "Toutes les actualités",
        
        // Filtres et recherche
        search_keywords_placeholder: "Recherche par mots-clés",
        filter_day: "Jour",
        filter_month: "Mois",
        filter_category: "Catégorie",
        search_button: "Rechercher",
        reset_filters: "Réinitialiser",
        
        // Mois
        month_jan: "Janvier",
        month_feb: "Février",
        month_mar: "Mars",
        month_apr: "Avril",
        month_may: "Mai",
        month_jun: "Juin",
        month_jul: "Juillet",
        month_aug: "Août",
        month_sep: "Septembre",
        month_oct: "Octobre",
        month_nov: "Novembre",
        month_dec: "Décembre",
        
        // Catégories
        cat_technology: "Services liés à l'industrie",
        cat_innovation: "Technologie & Innovation",
        cat_projects: "Projets",
        cat_partnerships: "Partenariats",
        cat_events: "Événements",
        
        // Articles
        actualite_1_title: "Aliquam in bibendum mauris. Sed vitae erat vel velit blandit",
        actualite_1_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec di. Morbi mauris",
        actualite_2_title: "Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,",
        actualite_2_excerpt: "Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim",
        actualite_3_title: "Duis rhoncus dui venenatis consequat porttitor. Etiam",
        actualite_3_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris",
        see_more_link: 'Voir plus <i class="fas fa-arrow-right"></i>',
        
        // Messages
        no_results: "Aucun article ne correspond à vos critères de recherche.",
        results_found: "article(s) trouvé(s)",
        filters_applied: "Filtres appliqués",
        filters_reset: "Filtres réinitialisés"
    },
    
    en: {
        // Meta et navigation
        page_title_news: "News - MK BA",
        nav_news: "News",
        
        // Hero Section
        actualites_hero_title: "News",
        
        // Section titre
        all_actualites_title: "All news",
        
        // Filtres et recherche
        search_keywords_placeholder: "Search by keywords",
        filter_day: "Day",
        filter_month: "Month",
        filter_category: "Category",
        search_button: "Search",
        reset_filters: "Reset",
        
        // Mois
        month_jan: "January",
        month_feb: "February",
        month_mar: "March",
        month_apr: "April",
        month_may: "May",
        month_jun: "June",
        month_jul: "July",
        month_aug: "August",
        month_sep: "September",
        month_oct: "October",
        month_nov: "November",
        month_dec: "December",
        
        // Catégories
        cat_technology: "Industry Services",
        cat_innovation: "Technology and Innovation",
        cat_projects: "Projects",
        cat_partnerships: "Partnerships",
        cat_events: "Events",
        
        // Articles
        actualite_1_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        actualite_1_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec di. Morbi mauris",
        actualite_2_title: "Ut enim ad minim veniam, quis nostrud exercitation",
        actualite_2_excerpt: "Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim",
        actualite_3_title: "Duis aute irure dolor in reprehenderit in voluptate",
        actualite_3_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris",
        see_more_link: 'Read more <i class="fas fa-arrow-right"></i>',
        
        // Messages
        no_results: "No articles match your search criteria.",
        results_found: "article(s) found",
        filters_applied: "Filters applied",
        filters_reset: "Filters reset"
    }
};

// ==============================================
// SYSTÈME DE RECHERCHE ET FILTRAGE
// ==============================================

function initSearchAndFilterSystem() {
    const keywordInput = document.getElementById('actualites-keyword-search');
    const dayFilter = document.getElementById('day-filter');
    const monthFilter = document.getElementById('month-filter');
    const categoryFilter = document.getElementById('category-filter');
    const searchBtn = document.getElementById('search-btn');
    const resetBtn = document.getElementById('reset-filters-btn');

    // Initialiser les interactions des dropdowns
    initFilterDropdownInteractions();

    // Gestion de la recherche par mots-clés
    if (keywordInput) {
        keywordInput.addEventListener('input', (e) => {
            actualitesFilters.keywords = e.target.value.trim();
            updateResetButtonVisibility();
            debounceActualitesFilter();
        });

        keywordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performActualitesFilter();
            }
        });
    }

    // Gestion des filtres
    if (dayFilter) {
        dayFilter.addEventListener('change', (e) => {
            actualitesFilters.day = e.target.value;
            updateResetButtonVisibility();
            debounceActualitesFilter();
        });
    }

    if (monthFilter) {
        monthFilter.addEventListener('change', (e) => {
            actualitesFilters.month = e.target.value;
            updateResetButtonVisibility();
            debounceActualitesFilter();
        });
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            actualitesFilters.category = e.target.value;
            updateResetButtonVisibility();
            debounceActualitesFilter();
        });
    }

    // Bouton de recherche
    if (searchBtn) {
        searchBtn.addEventListener('click', performActualitesFilter);
    }

    // Bouton de réinitialisation
    if (resetBtn) {
        resetBtn.addEventListener('click', resetActualitesFilters);
    }
}

// Initialiser les interactions des dropdowns avec animations
function initFilterDropdownInteractions() {
    const filterSelects = document.querySelectorAll('.actualites-filter-select');
    
    filterSelects.forEach(select => {
        const wrapper = select.parentElement;
        const icon = wrapper.querySelector('.filter-icon');
        
        if (!icon) return;

        // Événements pour l'animation de l'icône
        select.addEventListener('focus', () => {
            icon.style.transform = 'translateY(-50%) rotate(180deg)';
            icon.style.color = 'var(--actualites-blue)';
        });

        select.addEventListener('blur', () => {
            icon.style.transform = 'translateY(-50%) rotate(0deg)';
            icon.style.color = 'var(--actualites-border-gray)';
        });

        // Animation lors du clic
        select.addEventListener('mousedown', () => {
            icon.style.transform = 'translateY(-50%) rotate(180deg)';
            icon.style.color = 'var(--actualites-blue)';
        });

        // Feedback visuel
        select.addEventListener('click', () => {
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

    const hasFilters = Object.values(actualitesFilters).some(value => value !== '');
    
    if (hasFilters) {
        resetBtn.classList.add('show');
    } else {
        resetBtn.classList.remove('show');
    }
}

// Réinitialiser tous les filtres
function resetActualitesFilters() {
    const resetBtn = document.getElementById('reset-filters-btn');
    const keywordInput = document.getElementById('actualites-keyword-search');
    const filterSelects = document.querySelectorAll('.actualites-filter-select');

    // Animation du bouton
    if (resetBtn) {
        resetBtn.style.transform = 'scale(0.95)';
        resetBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        resetBtn.disabled = true;
    }

    setTimeout(() => {
        // Réinitialiser les valeurs
        actualitesFilters = {
            keywords: '',
            day: '',
            month: '',
            category: ''
        };

        // Réinitialiser les champs
        if (keywordInput) {
            keywordInput.value = '';
        }

        filterSelects.forEach(select => {
            select.selectedIndex = 0;
        });

        // Effectuer la recherche (afficher tous les résultats)
        performActualitesFilter();

        // Masquer le bouton de réinitialisation
        updateResetButtonVisibility();

        // Restaurer le bouton
        if (resetBtn) {
            resetBtn.style.transform = '';
            resetBtn.innerHTML = '<i class="fas fa-redo"></i>';
            resetBtn.disabled = false;
        }

        // Notification
        showActualitesNotification(actualitesTranslations[currentLanguageActualites].filters_reset);
    }, 500);
}

// Debounce pour le filtrage
let actualitesFilterTimeout;
function debounceActualitesFilter() {
    clearTimeout(actualitesFilterTimeout);
    actualitesFilterTimeout = setTimeout(performActualitesFilter, 500);
}

// Fonction principale de filtrage
function performActualitesFilter() {
    const { keywords, day, month, category } = actualitesFilters;
    
    console.log('Filtrage avec critères:', actualitesFilters);

    const cards = document.querySelectorAll('.actualite-card');
    const grid = document.getElementById('actualites-grid');
    const noResultsMsg = document.getElementById('no-results-message');
    let visibleCount = 0;

    // Animation de début de filtrage
    if (grid) {
        grid.style.opacity = '0.7';
    }

    // Appliquer les filtres à chaque carte
    cards.forEach((card, index) => {
        let shouldShow = true;

        // Filtrer par mots-clés (recherche dans titre et extrait)
        if (keywords) {
            const title = card.querySelector('.actualite-title');
            const excerpt = card.querySelector('.actualite-excerpt');
            const titleText = title ? title.textContent.toLowerCase() : '';
            const excerptText = excerpt ? excerpt.textContent.toLowerCase() : '';
            const searchTerm = keywords.toLowerCase();
            
            if (!titleText.includes(searchTerm) && !excerptText.includes(searchTerm)) {
                shouldShow = false;
            }
        }

        // Filtrer par jour
        if (day && shouldShow) {
            const dateAttr = card.getAttribute('data-date');
            if (dateAttr) {
                const cardDay = dateAttr.split('-')[2];
                if (parseInt(cardDay) !== parseInt(day)) {
                    shouldShow = false;
                }
            }
        }

        // Filtrer par mois
        if (month && shouldShow) {
            const dateAttr = card.getAttribute('data-date');
            if (dateAttr) {
                const cardMonth = dateAttr.split('-')[1];
                if (cardMonth !== month) {
                    shouldShow = false;
                }
            }
        }

        // Filtrer par catégorie
        if (category && shouldShow) {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory !== category) {
                shouldShow = false;
            }
        }

        // Appliquer les animations et l'affichage
        const cardCol = card.parentElement;
        
        if (shouldShow) {
            // Animation d'apparition
            card.classList.remove('filtering-out');
            card.classList.add('filtering-in');
            
            setTimeout(() => {
                cardCol.style.display = 'block';
                card.style.display = 'flex';
            }, 50);
            
            visibleCount++;
        } else {
            // Animation de disparition
            card.classList.add('filtering-out');
            card.classList.remove('filtering-in');
            
            setTimeout(() => {
                cardCol.style.display = 'none';
            }, 300);
        }
    });

    // Animation de fin de filtrage
    setTimeout(() => {
        if (grid) {
            grid.style.opacity = '1';
        }
    }, 400);

    // Afficher/masquer le message "Aucun résultat"
    if (noResultsMsg) {
        if (visibleCount === 0) {
            noResultsMsg.style.display = 'block';
            noResultsMsg.style.animation = 'fadeIn 0.5s ease';
        } else {
            noResultsMsg.style.display = 'none';
        }
    }

    // Afficher le nombre de résultats
    showFilterResults(visibleCount);
    
    console.log(`Résultats du filtrage: ${visibleCount} article(s) trouvé(s)`);
}

// Afficher le nombre de résultats du filtrage
function showFilterResults(count) {
    const hasActiveFilters = Object.values(actualitesFilters).some(value => value !== '');
    
    if (!hasActiveFilters) return; // Ne rien afficher si aucun filtre n'est actif
    
    const resultsText = actualitesTranslations[currentLanguageActualites].results_found;
    const message = `${count} ${resultsText}`;
    
    // Créer une notification temporaire
    showActualitesNotification(message, count === 0 ? 'warning' : 'success');
}

// ==============================================
// GESTION DE LA PAGINATION
// ==============================================

function initPagination() {
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.disabled) return;
            
            if (this.classList.contains('pagination-prev')) {
                navigateToPage(currentPage - 1);
            } else if (this.classList.contains('pagination-next')) {
                navigateToPage(currentPage + 1);
            } else {
                const pageNum = parseInt(this.textContent);
                if (!isNaN(pageNum)) {
                    navigateToPage(pageNum);
                }
            }
        });
    });
}

function navigateToPage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages || pageNum === currentPage) return;
    
    currentPage = pageNum;
    
    // Mettre à jour l'URL
    const url = new URL(window.location);
    url.searchParams.set('page', pageNum);
    window.history.pushState({page: pageNum}, '', url);
    
    // Mettre à jour les boutons de pagination
    updatePaginationButtons();
    
    // Scroll vers le haut de la section
    scrollToTop();
    
    // Simuler le chargement des nouveaux articles
    loadArticles(pageNum);
}

function updatePaginationButtons() {
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    
    paginationBtns.forEach(btn => {
        btn.classList.remove('active');
        
        if (btn.classList.contains('pagination-prev')) {
            btn.disabled = currentPage === 1;
        } else if (btn.classList.contains('pagination-next')) {
            btn.disabled = currentPage === totalPages;
        } else {
            const pageNum = parseInt(btn.textContent);
            if (pageNum === currentPage) {
                btn.classList.add('active');
                btn.setAttribute('aria-current', 'page');
            } else {
                btn.removeAttribute('aria-current');
            }
        }
    });
}

function scrollToTop() {
    const headerHeight = getComputedStyle(document.documentElement).getPropertyValue('--total-header-height');
    const headerHeightPx = parseInt(headerHeight) || 130;
    const allActualitesSection = document.getElementById('all-actualites');
    
    if (allActualitesSection) {
        const targetPosition = allActualitesSection.offsetTop - headerHeightPx - 20;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

function loadArticles(pageNum) {
    const actualitesGrid = document.querySelector('.actualites-grid');
    if (!actualitesGrid) return;
    
    // Animation de chargement
    actualitesGrid.style.opacity = '0.5';
    actualitesGrid.style.pointerEvents = 'none';
    
    // Simuler un délai de chargement
    setTimeout(() => {
        actualitesGrid.style.opacity = '1';
        actualitesGrid.style.pointerEvents = '';
        
        // Réinitialiser les animations
        const cards = document.querySelectorAll('.actualite-card');
        cards.forEach((card) => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = '';
            }, 10);
        });
    }, 300);
}

// ==============================================
// INTERACTIONS DES CARTES ACTUALITÉS
// ==============================================

function initActualiteCardsInteractions() {
    const actualiteCards = document.querySelectorAll('.actualite-card');
    
    actualiteCards.forEach((card, index) => {
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

        // Interactions avec les liens
        const actualiteLink = card.querySelector('.actualite-link');
        if (actualiteLink) {
            actualiteLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log(`Clic sur article ${index + 1}`);
                
                // Animation du lien
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        }

        // Accessibilité
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        
        const title = card.querySelector('.actualite-title');
        if (title) {
            card.setAttribute('aria-label', `Article: ${title.textContent.substring(0, 50)}...`);
        }
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('.actualite-link');
                if (link) {
                    link.click();
                }
            }
        });
    });
}

// ==============================================
// ANIMATIONS PROGRESSIVES AU SCROLL
// ==============================================

function initActualitesScrollAnimations() {
    if (actualitesAnimationsInitialized) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0.1, 0.3, 0.6]
    };
    
    // Animation du titre hero
    const heroTitle = document.querySelector('.actualites-hero-title');
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
    
    // Animation du titre de section
    const sectionTitle = document.querySelector('.section-title-simple');
    if (sectionTitle) {
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
        
        sectionTitle.style.opacity = '0';
        sectionTitle.style.transform = 'translateX(-30px)';
        sectionTitle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        titleObserver.observe(sectionTitle);
    }
    
    // Animation de l'interface de filtrage
    const filterWrapper = document.querySelector('.actualites-filter-wrapper');
    if (filterWrapper) {
        const filterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, 300);
                    filterObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        filterWrapper.style.opacity = '0';
        filterWrapper.style.transform = 'translateX(30px)';
        filterWrapper.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        filterObserver.observe(filterWrapper);
    }
    
    actualitesAnimationsInitialized = true;
}

// ==============================================
// GESTION DES TRADUCTIONS
// ==============================================

function setLanguageActualitesPage(lang) {
    currentLanguageActualites = lang;
    const pageTranslations = actualitesTranslations[lang];
    
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
                element.innerHTML = generalTranslation;
            }
        }
    });
    
    // Mettre à jour les placeholders avec data-i18n-placeholder
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (pageTranslations[key]) {
            element.placeholder = pageTranslations[key];
        }
    });
    
    // Mettre à jour le titre de la page
    if (pageTranslations.page_title_news) {
        document.title = pageTranslations.page_title_news;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page Actualités`);
}

// ==============================================
// LAZY LOADING DES IMAGES
// ==============================================

function initActualitesLazyLoading() {
    const images = document.querySelectorAll('.actualite-image img');
    
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
// NOTIFICATIONS
// ==============================================

function showActualitesNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'actualites-notification';
    
    let bgColor = '#005FAC';
    let icon = 'fa-info-circle';
    
    if (type === 'success') {
        bgColor = '#28a745';
        icon = 'fa-check-circle';
    } else if (type === 'warning') {
        bgColor = '#ffc107';
        icon = 'fa-exclamation-triangle';
    }
    
    notification.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    notification.style.cssText = `
        position: fixed;
        top: calc(var(--total-header-height) + 1rem);
        right: 1.25rem;
        background: ${bgColor};
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.3125rem;
        z-index: 9999;
        box-shadow: 0 0.3125rem 0.9375rem rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateX(100%);
        display: flex;
        align-items: center;
        gap: 0.5rem;
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

function initActualitesAccessibility() {
    // Support du mode contraste élevé
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Support du mode mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Désactiver les animations
        const animatedElements = document.querySelectorAll('.actualite-card');
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

function initActualitesErrorHandling() {
    // Gestion des erreurs d'images
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Erreur de chargement d\'image actualités:', e.target.src);
            
            if (e.target.closest('.actualite-image')) {
                // Fallback pour les images d'articles
                const fallback = document.createElement('div');
                fallback.style.cssText = `
                    width: 100%;
                    height: 100%;
                    background: #f0f0f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    color: #666;
                `;
                fallback.innerHTML = 'Image non disponible';
                e.target.parentNode.appendChild(fallback);
                e.target.style.display = 'none';
            }
        }
    }, true);
}

// ==============================================
// GESTION DE L'HISTORIQUE DU NAVIGATEUR
// ==============================================

function initBrowserHistory() {
    // Gérer le bouton retour du navigateur
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.page) {
            currentPage = e.state.page;
            updatePaginationButtons();
            loadArticles(currentPage);
        }
    });
    
    // Initialiser la page depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');
    if (pageParam) {
        const pageNum = parseInt(pageParam);
        if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
            currentPage = pageNum;
            updatePaginationButtons();
        }
    }
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initActualitesPage() {
    // Initialiser toutes les fonctionnalités
    initSearchAndFilterSystem();
    initPagination();
    initActualiteCardsInteractions();
    initActualitesScrollAnimations();
    initActualitesLazyLoading();
    initActualitesAccessibility();
    initActualitesErrorHandling();
    initBrowserHistory();
    
    // Charger la langue sauvegardée
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageActualitesPage(savedLanguage);
    } catch (e) {
        setLanguageActualitesPage('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageActualitesPage(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            originalSetLanguage(lang);
            setLanguageActualitesPage(lang);
        };
    }
    
    console.log('Page Actualités initialisée avec succès');
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initActualitesPage);
} else {
    initActualitesPage();
}

// Optimisation des performances au redimensionnement
let actualitesResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(actualitesResizeTimeout);
    actualitesResizeTimeout = setTimeout(() => {
        console.log('Fenêtre redimensionnée - Page Actualités');
    }, 250);
});

// Export des fonctions pour utilisation externe
window.ActualitesPage = {
    initActualitesPage,
    setLanguageActualitesPage,
    navigateToPage,
    performActualitesFilter,
    resetActualitesFilters,
    actualitesTranslations
};