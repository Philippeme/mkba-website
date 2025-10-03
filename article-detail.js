// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE DÉTAIL ARTICLE MK BA
// ==============================================

// Variables globales pour la page détail article
let articleDetailAnimationsInitialized = false;
let currentLanguageArticle = 'fr';

// Traductions spécifiques à la page détail article
const articleDetailTranslations = {
    fr: {
        // Meta et navigation
        page_title_article: "Détail Actualité - MK BA",
        
        // Fil d'Ariane
        breadcrumb_news: "Actualités",
        breadcrumb_category: "Industries served",
        
        // Hero Section
        article_hero_title: "Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt.",
        
        // Contenu principal
        article_main_title: "Proin ac quam et lectus vestibulum blandit",
        
        article_text_1: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        
        article_text_2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
        
        article_text_3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        
        article_text_4: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
        
        // Section avec titre décoratif
        section_title_1: "Voyez ce jeu exquis wallon, de graphie en.",
        
        bullet_item_1: "Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim, ut commodo elit feugiat et. Maecenas nec enim quis diam faucibus tristique. Nam",
        
        bullet_item_2: "Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel tristique neque. Praesent purus eros,",
        
        bullet_item_3: "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam. Vestibulum at neque hendrerit, mollis dolor at, blandit justo. Integer ac interdum purus. In placerat lorem non quam pulvinar molestie ac eget",
        
        // Sous-sections
        subsection_title_1: "Aliquam faucibus, odio",
        subsection_text_1: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        
        subsection_text_2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
        
        subsection_title_2: "Aliquam in bibendum",
        subsection_text_3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        
        subsection_text_4: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
        
        // Sidebar partage
        share_title: "Partagez cette page",
        
        // Section actualités connexes
        related_news_title: "Actualités connexes",
        
        related_article_1_title: "Aliquam in bibendum mauris. Sed vitae erat vel velit blandit",
        related_article_1_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec di. Morbi mauris",
        
        related_article_2_title: "Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,",
        related_article_2_excerpt: "Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim",
        
        related_article_3_title: "Duis rhoncus dui venenatis consequat porttitor. Etiam",
        related_article_3_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris",
        
        see_more_link: 'Voir plus <i class="fas fa-arrow-right"></i>'
    },
    
    en: {
        // Meta et navigation
        page_title_article: "Project Detail - MK BA",
        
        // Fil d'Ariane
        breadcrumb_news: "News",
        breadcrumb_category: "Industries served",
        
        // Hero Section
        article_hero_title: "Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt.",
        
        // Contenu principal
        article_main_title: "Proin ac quam et lectus vestibulum blandit",
        
        article_text_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
        article_text_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
        
        article_text_3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
        article_text_4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
        
        // Section avec titre décoratif
        section_title_1: "See this exquisite Walloon game, with kit graphics.",
        
        bullet_item_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        
        bullet_item_2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        
        bullet_item_3: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        
        // Sous-sections
        subsection_title_1: "Aliquam faucibus, odio",
        subsection_text_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        
        subsection_text_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
        
        subsection_title_2: "Aliquam in bibendum",
        subsection_text_3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        
        subsection_text_4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
        
        // Sidebar partage
        share_title: "Share this page",
        
        // Section actualités connexes
        related_news_title: "Related news",
        
        related_article_1_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        related_article_1_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec di. Morbi mauris",
        
        related_article_2_title: "Ut enim ad minim veniam, quis nostrud exercitation",
        related_article_2_excerpt: "Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim",
        
        related_article_3_title: "Duis aute irure dolor in reprehenderit in voluptate",
        related_article_3_excerpt: "Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris",
        
        see_more_link: 'Read more <i class="fas fa-arrow-right"></i>'
    }
};

// ==============================================
// SYSTÈME DE PARTAGE SOCIAL
// ==============================================

function initSocialSharing() {
    const socialBtns = document.querySelectorAll('.social-share-btn');
    const articleTitle = document.querySelector('.article-hero-title')?.textContent || 'Article MK BA';
    const articleUrl = window.location.href;
    
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.classList.contains('facebook') ? 'facebook' :
                           this.classList.contains('twitter') ? 'twitter' :
                           this.classList.contains('linkedin') ? 'linkedin' : '';
            
            // Animation de clic
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            shareArticle(platform, articleTitle, articleUrl);
        });
        
        // Accessibilité
        btn.setAttribute('tabindex', '0');
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

function shareArticle(platform, title, url) {
    let shareUrl = '';
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
            break;
        default:
            console.log(`Partage ${platform} non configuré`);
            return;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
        showArticleNotification(`Partage sur ${platform.charAt(0).toUpperCase() + platform.slice(1)}`);
    }
}

// ==============================================
// INTERACTIONS DES CARTES ACTUALITÉS CONNEXES
// ==============================================

function initRelatedArticlesInteractions() {
    const articleCards = document.querySelectorAll('.actualite-card');
    
    articleCards.forEach((card, index) => {
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
        const articleLink = card.querySelector('.actualite-link');
        if (articleLink) {
            articleLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log(`Clic sur article connexe ${index + 1}`);
                
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
            card.setAttribute('aria-label', `Article connexe: ${title.textContent.substring(0, 50)}...`);
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
// ANIMATIONS AU SCROLL
// ==============================================

function initArticleDetailScrollAnimations() {
    if (articleDetailAnimationsInitialized) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0.1, 0.3, 0.6]
    };
    
    // Animation du titre hero
    const heroTitle = document.querySelector('.article-hero-title');
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
    
    articleDetailAnimationsInitialized = true;
}

// ==============================================
// GESTION DES TRADUCTIONS
// ==============================================

function setLanguageArticleDetail(lang) {
    currentLanguageArticle = lang;
    const pageTranslations = articleDetailTranslations[lang];
    
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
    if (pageTranslations.page_title_article) {
        document.title = pageTranslations.page_title_article;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page détail article`);
}

// ==============================================
// SMOOTH SCROLL ADAPTÉ
// ==============================================

function initArticleDetailSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
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

// ==============================================
// NOTIFICATIONS
// ==============================================

function showArticleNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'article-notification';
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

function initArticleDetailAccessibility() {
    // Support du mode contraste élevé
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Support du mode mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Désactiver les animations
        const animatedElements = document.querySelectorAll(`
            .article-hero-title,
            .article-main-title,
            .section-title-decorated,
            .social-share-sidebar,
            .actualite-card
        `);
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

function initArticleDetailErrorHandling() {
    // Gestion des erreurs d'images
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Erreur de chargement d\'image article:', e.target.src);
            
            if (e.target.closest('.actualite-image')) {
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
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initArticleDetailPage() {
    // Initialiser toutes les fonctionnalités
    initSocialSharing();
    initRelatedArticlesInteractions();
    initArticleDetailScrollAnimations();
    initArticleDetailSmoothScroll();
    initArticleDetailAccessibility();
    initArticleDetailErrorHandling();
    
    // Charger la langue sauvegardée
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageArticleDetail(savedLanguage);
    } catch (e) {
        setLanguageArticleDetail('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageArticleDetail(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            originalSetLanguage(lang);
            setLanguageArticleDetail(lang);
        };
    }
    
    console.log('Page détail article initialisée avec succès');
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArticleDetailPage);
} else {
    initArticleDetailPage();
}

// Optimisation des performances au redimensionnement
let articleDetailResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(articleDetailResizeTimeout);
    articleDetailResizeTimeout = setTimeout(() => {
        console.log('Fenêtre redimensionnée - Page détail article');
    }, 250);
});

// Export des fonctions pour utilisation externe
window.ArticleDetailPage = {
    initArticleDetailPage,
    setLanguageArticleDetail,
    initSocialSharing,
    initRelatedArticlesInteractions,
    shareArticle,
    showArticleNotification,
    articleDetailTranslations
};