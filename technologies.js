// ==============================================
// JAVASCRIPT SIMPLIFIÉ POUR LA PAGE TECHNOLOGIES - VERSION NETTOYÉE
// ==============================================

// Variables globales pour la page Technologies
let technologiesPageReady = false;
let dropdownsOpen = new Set();

// Traductions spécifiques à la page Technologies
const technologiesTranslations = {
    fr: {
        // Meta et navigation
        page_title_technologies: "Technologies - MK BA",
        breadcrumb_technologies: "Technologies",
        
        // Titre et sous-titre
        technologies_main_title: "Plateformes, outils, technologies mis en œuvre",
        technologies_subtitle: "We use industry leading technologies to achieve great software. We follow standards that are accepted by industry professionals.",
        
        // Sections de technologies
        tech_web_title: "Web",
        tech_backend_title: "BACK END",
        tech_frontend_title: "FRONT END",
        tech_mobile_title: "Mobile",
        tech_desktop_title: "Desktop", 
        tech_platforms_title: "Platforms",
        tech_clouds_title: "Clouds",
        tech_databases_title: "Relational databases / data storages",
        
        // Dropdowns
        tooltip_more_technologies: "Plus..."
    },
    
    en: {
        // Meta et navigation
        page_title_technologies: "Technologies - MK BA",
        breadcrumb_technologies: "Technologies",
        
        // Titre et sous-titre
        technologies_main_title: "Platforms, tools, technologies implemented",
        technologies_subtitle: "We use industry leading technologies to achieve great software. We follow standards that are accepted by industry professionals.",
        
        // Sections de technologies
        tech_web_title: "Web",
        tech_backend_title: "BACK END",
        tech_frontend_title: "FRONT END",
        tech_mobile_title: "Mobile",
        tech_desktop_title: "Desktop",
        tech_platforms_title: "Platforms", 
        tech_clouds_title: "Clouds",
        tech_databases_title: "Relational databases / data storages",
        
        // Dropdowns
        tooltip_more_technologies: "More..."
    }
};

// ==============================================
// GESTION DES RECTANGLES DROPDOWN
// ==============================================

function initDropdownRectangles() {
    const dropdownRectangles = document.querySelectorAll('.dropdown-rectangle');
    
    dropdownRectangles.forEach(dropdown => {
        // Gestion du clic
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDropdown(this);
        });
        
        // Support clavier
        dropdown.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleDropdown(this);
            }
        });
        
        // Animation au survol
        dropdown.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            if (!this.classList.contains('expanded')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
    });
}

function toggleDropdown(dropdownRect) {
    const dropdownId = dropdownRect.id;
    const contentId = dropdownId + 'Content';
    const dropdownContent = document.getElementById(contentId);
    const arrow = dropdownRect.querySelector('.dropdown-arrow');
    
    if (!dropdownContent || !arrow) return;
    
    const isExpanded = dropdownRect.classList.contains('expanded');
    
    if (isExpanded) {
        // Fermer le dropdown
        dropdownRect.classList.remove('expanded');
        dropdownContent.classList.remove('show');
        arrow.style.transform = '';
        dropdownsOpen.delete(dropdownId);
        dropdownRect.setAttribute('aria-expanded', 'false');
        
        console.log(`Dropdown ${dropdownId} fermé`);
    } else {
        // Ouvrir le dropdown
        dropdownRect.classList.add('expanded');
        dropdownContent.classList.add('show');
        arrow.style.transform = 'rotate(180deg)';
        dropdownsOpen.add(dropdownId);
        dropdownRect.setAttribute('aria-expanded', 'true');
        
        // Animer les nouveaux rectangles
        animateDropdownRectangles(dropdownContent);
        
        console.log(`Dropdown ${dropdownId} ouvert`);
    }
}

function animateDropdownRectangles(dropdownContent) {
    const rectangles = dropdownContent.querySelectorAll('.tech-rectangle');
    
    rectangles.forEach((rect, index) => {
        rect.style.opacity = '0';
        rect.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            rect.style.opacity = '1';
            rect.style.transform = 'translateY(0)';
            rect.style.transition = 'all 0.3s ease';
        }, index * 100);
    });
}

function closeAllDropdowns() {
    dropdownsOpen.forEach(dropdownId => {
        const dropdownRect = document.getElementById(dropdownId);
        if (dropdownRect && dropdownRect.classList.contains('expanded')) {
            toggleDropdown(dropdownRect);
        }
    });
}

// ==============================================
// ANIMATION PROGRESSIVE DES ÉLÉMENTS
// ==============================================

function initProgressiveLoading() {
    const sections = document.querySelectorAll('.tech-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rectangles = entry.target.querySelectorAll('.tech-rectangle');
                
                rectangles.forEach((rect, index) => {
                    setTimeout(() => {
                        rect.style.opacity = '1';
                        rect.style.transform = 'translateY(0)';
                    }, index * 50);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(section => {
        const rectangles = section.querySelectorAll('.tech-rectangle');
        rectangles.forEach(rect => {
            rect.style.opacity = '0';
            rect.style.transform = 'translateY(20px)';
            rect.style.transition = 'all 0.4s ease';
        });
        
        observer.observe(section);
    });
}

// ==============================================
// GESTION DES TRADUCTIONS
// ==============================================

function setLanguageTechnologiesPage(lang) {
    const pageTranslations = technologiesTranslations[lang];
    
    if (!pageTranslations) return;
    
    // Mettre à jour les traductions spécifiques à cette page
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (pageTranslations[key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = pageTranslations[key];
            } else if (element.hasAttribute('title')) {
                element.title = pageTranslations[key];
            } else if (key === 'technologies_main_title') {
                // Gestion spéciale pour le titre principal avec HTML
                const translation = pageTranslations[key];
                const firstWord = translation.split(' ')[0];
                const restOfTitle = translation.substring(firstWord.length);
                element.innerHTML = `<span class="title-highlight">${firstWord}</span>${restOfTitle}`;
            } else {
                element.textContent = pageTranslations[key];
            }
        }
        // Utiliser les traductions générales si disponibles
        else if (window.MKBAWebsite && window.MKBAWebsite.translationsData[lang] && window.MKBAWebsite.translationsData[lang][key]) {
            const generalTranslation = window.MKBAWebsite.translationsData[lang][key];
            if (element.tagName === 'INPUT') {
                element.placeholder = generalTranslation;
            } else if (element.hasAttribute('title')) {
                element.title = generalTranslation;
            } else {
                element.textContent = generalTranslation;
            }
        }
    });
    
    // Mettre à jour le titre de la page
    if (pageTranslations.page_title_technologies) {
        document.title = pageTranslations.page_title_technologies;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page Technologies`);
}

// ==============================================
// ACCESSIBILITÉ DE BASE
// ==============================================

function initTechAccessibility() {
    // Améliorer les rôles ARIA
    const sections = document.querySelectorAll('.tech-section');
    sections.forEach((section, index) => {
        section.setAttribute('role', 'region');
        const title = section.querySelector('.tech-section-title');
        if (title) {
            const titleId = `tech-section-${index}`;
            title.id = titleId;
            section.setAttribute('aria-labelledby', titleId);
        }
    });
    
    // Support des préférences d'accessibilité
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
    
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
}

// ==============================================
// GESTION DES ERREURS
// ==============================================

function handleTechPageError(error, context = 'unknown') {
    console.error(`Erreur page Technologies (${context}):`, error);
    
    // Afficher un message d'erreur discret à l'utilisateur
    const errorNotification = document.createElement('div');
    errorNotification.className = 'tech-error-notification';
    errorNotification.textContent = 'Une erreur temporaire s\'est produite. Veuillez actualiser la page.';
    errorNotification.style.cssText = `
        position: fixed;
        top: calc(var(--total-header-height) + 10px);
        right: 20px;
        background: #dc3545;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 9999;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(errorNotification);
    
    setTimeout(() => {
        if (errorNotification.parentNode) {
            errorNotification.remove();
        }
    }, 5000);
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initTechnologiesPage() {
    if (technologiesPageReady) return;
    
    try {
        // Initialiser les fonctionnalités de base
        initProgressiveLoading();
        initDropdownRectangles();
        initTechAccessibility();
        
        // Charger la langue sauvegardée ou française par défaut
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageTechnologiesPage(savedLanguage);
        
        // Écouter les changements de langue
        window.addEventListener('languageChanged', (e) => {
            setLanguageTechnologiesPage(e.detail.language);
        });
        
        // Fermer les dropdowns en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown-rectangle') && !e.target.closest('.tech-dropdown-content')) {
                closeAllDropdowns();
            }
        });
        
        // Fermer les dropdowns avec Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeAllDropdowns();
            }
        });
        
        // Intégrer avec le système de traduction principal
        if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
            const originalSetLanguage = window.MKBAWebsite.setLanguage;
            window.setLanguage = function(lang) {
                originalSetLanguage(lang);
                setLanguageTechnologiesPage(lang);
            };
        }
        
        technologiesPageReady = true;
        console.log('Page Technologies initialisée avec succès');
        
    } catch (error) {
        handleTechPageError(error, 'initialization');
    }
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initTechnologiesPage();
    });
} else {
    initTechnologiesPage();
}

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    if (e.filename && e.filename.includes('technologies')) {
        handleTechPageError(e.error, 'global');
    }
});

// Export des fonctions pour utilisation externe
window.TechnologiesPage = {
    initTechnologiesPage,
    setLanguageTechnologiesPage,
    technologiesTranslations
};