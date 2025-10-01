// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE ACTUALITÉS
// ==============================================

// Variables globales pour la page Actualités
let actualitesAnimationsInitialized = false;
let currentLanguageActualites = 'fr';
let currentPage = 1;
let totalPages = 4;

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
        
        // Articles
        actualite_1_title: "Aliquam in bibendum mauris. Sed vitae erat vel velit blandit",
        actualite_1_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec di. Morbi mauris",
        actualite_2_title: "Fusce at nisl eget dolor rhoncus facilisis. Mauris ante nisl,",
        actualite_2_excerpt: "Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim",
        actualite_3_title: "Duis rhoncus dui venenatis consequat porttitor. Etiam",
        actualite_3_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris",
        see_more_link: 'Voir plus <i class="fas fa-arrow-right"></i>',
    },
    
    en: {
        // Meta et navigation
        page_title_news: "News - MK BA",
        nav_news: "News",
        
        // Hero Section
        actualites_hero_title: "News",
        
        // Section titre
        all_actualites_title: "All news",
        
        // Articles
        actualite_1_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        actualite_1_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec di. Morbi mauris",
        actualite_2_title: "Ut enim ad minim veniam, quis nostrud exercitation",
        actualite_2_excerpt: "Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim",
        actualite_3_title: "Duis aute irure dolor in reprehenderit in voluptate",
        actualite_3_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris",
        see_more_link: 'Read more  <i class="fas fa-arrow-right"></i>',
    }
};

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
    
    console.log(`Navigation vers la page ${pageNum}`);
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
        
        showActualitesNotification(`Page ${pageNum} chargée`);
        
        // Réinitialiser les animations
        const cards = document.querySelectorAll('.actualite-card');
        cards.forEach((card, index) => {
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

function showActualitesNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'actualites-notification';
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
        // Réajuster les éléments si nécessaire
        console.log('Fenêtre redimensionnée - Page Actualités');
    }, 250);
});

// Export des fonctions pour utilisation externe
window.ActualitesPage = {
    initActualitesPage,
    setLanguageActualitesPage,
    navigateToPage,
    actualitesTranslations

};