// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE TECHNOLOGIES
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
        
        // Tooltips et messages
        tooltip_more_technologies: "Plus de technologies",
        tooltip_click_to_expand: "Cliquer pour voir plus",
        tooltip_click_to_collapse: "Cliquer pour réduire"
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
        
        // Tooltips et messages
        tooltip_more_technologies: "More technologies",
        tooltip_click_to_expand: "Click to see more",
        tooltip_click_to_collapse: "Click to collapse"
    }
};

// ==============================================
// GESTION DES RECTANGLES DE TECHNOLOGIES
// ==============================================

function initTechRectangles() {
    const techRectangles = document.querySelectorAll('.tech-rectangle');
    
    techRectangles.forEach(rectangle => {
        // Animation au survol
        rectangle.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });
        
        rectangle.addEventListener('mouseleave', function() {
            if (!this.classList.contains('dropdown-rectangle') || !this.classList.contains('expanded')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
        
        // Gestion du focus clavier
        rectangle.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            this.style.outlineOffset = '2px';
        });
        
        rectangle.addEventListener('blur', function() {
            if (!this.classList.contains('dropdown-rectangle') || !this.classList.contains('expanded')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
        
        // Gestion du clic avec effet ripple
        rectangle.addEventListener('click', function(e) {
            // Créer effet ripple
            createRippleEffect(this, e);
            
            // Si c'est un rectangle dropdown, gérer l'expansion
            if (this.classList.contains('dropdown-rectangle')) {
                toggleDropdown(this);
            } else {
                // Animation de clic pour les rectangles normaux
                this.style.transform = 'translateY(-1px) scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Logger la technologie cliquée (pour analytics)
                const techName = this.getAttribute('data-tech');
                console.log(`Technologie sélectionnée: ${techName}`);
                
                // Ici on pourrait ajouter une action spécifique
                showTechDetails(techName);
            }
        });
        
        // Support clavier
        rectangle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
            
            // Navigation avec les flèches
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || 
                e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                navigateTechRectangles(this, e.key);
            }
        });
    });
}

// ==============================================
// GESTION DES DROPDOWNS
// ==============================================

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
        
        // Mettre à jour le tooltip
        updateTooltipText(dropdownRect, 'tooltip_click_to_expand');
        
        console.log(`Dropdown ${dropdownId} fermé`);
    } else {
        // Ouvrir le dropdown
        dropdownRect.classList.add('expanded');
        dropdownContent.classList.add('show');
        arrow.style.transform = 'rotate(180deg)';
        dropdownsOpen.add(dropdownId);
        
        // Mettre à jour le tooltip
        updateTooltipText(dropdownRect, 'tooltip_click_to_collapse');
        
        // Animer les nouveaux rectangles
        animateDropdownRectangles(dropdownContent);
        
        console.log(`Dropdown ${dropdownId} ouvert`);
    }
    
    // Analytics
    trackDropdownInteraction(dropdownId, !isExpanded);
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
// EFFETS VISUELS
// ==============================================

function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

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
// NAVIGATION AU CLAVIER
// ==============================================

function navigateTechRectangles(currentRect, direction) {
    const allRectangles = Array.from(document.querySelectorAll('.tech-rectangle'));
    const currentIndex = allRectangles.indexOf(currentRect);
    
    let nextIndex = currentIndex;
    
    switch (direction) {
        case 'ArrowRight':
            nextIndex = Math.min(currentIndex + 1, allRectangles.length - 1);
            break;
        case 'ArrowLeft':
            nextIndex = Math.max(currentIndex - 1, 0);
            break;
        case 'ArrowDown':
            // Naviguer vers la ligne suivante (approximation)
            nextIndex = Math.min(currentIndex + 5, allRectangles.length - 1);
            break;
        case 'ArrowUp':
            // Naviguer vers la ligne précédente (approximation)
            nextIndex = Math.max(currentIndex - 5, 0);
            break;
    }
    
    if (nextIndex !== currentIndex && allRectangles[nextIndex]) {
        allRectangles[nextIndex].focus();
    }
}

// ==============================================
// INTERACTIONS SPÉCIFIQUES
// ==============================================

function showTechDetails(techName) {
    // Ici on pourrait ouvrir un modal avec des détails sur la technologie
    // ou rediriger vers une page de détails
    console.log(`Affichage des détails pour: ${techName}`);
    
    // Exemple d'une notification simple
    showNotification(`Technologie sélectionnée: ${techName}`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'tech-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: calc(var(--total-header-height) + 10px);
        right: 20px;
        background: var(--primary-blue);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 9999;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        transform: translateX(100%);
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animation de sortie
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
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
    
    // Mettre à jour les tooltips des dropdowns
    updateDropdownTooltips(lang);
    
    console.log(`Langue changée vers: ${lang} pour la page Technologies`);
}

function updateTooltipText(element, translationKey) {
    const tooltip = element.querySelector('.tech-tooltip');
    const currentLang = window.currentLanguage || 'fr';
    
    if (tooltip && technologiesTranslations[currentLang] && technologiesTranslations[currentLang][translationKey]) {
        tooltip.textContent = technologiesTranslations[currentLang][translationKey];
    }
}

function updateDropdownTooltips(lang) {
    const dropdownRects = document.querySelectorAll('.dropdown-rectangle');
    
    dropdownRects.forEach(rect => {
        const tooltip = rect.querySelector('.tech-tooltip');
        const isExpanded = rect.classList.contains('expanded');
        const key = isExpanded ? 'tooltip_click_to_collapse' : 'tooltip_click_to_expand';
        
        if (tooltip && technologiesTranslations[lang] && technologiesTranslations[lang][key]) {
            tooltip.textContent = technologiesTranslations[lang][key];
        }
    });
}

// ==============================================
// ANALYTICS ET TRACKING
// ==============================================

function trackDropdownInteraction(dropdownId, isOpening) {
    const action = isOpening ? 'open' : 'close';
    console.log(`Analytics: Dropdown ${dropdownId} ${action}`);
    
    // Ici on pourrait envoyer à Google Analytics
    // gtag('event', 'dropdown_interaction', {
    //     event_category: 'Technologies',
    //     event_label: dropdownId,
    //     value: isOpening ? 1 : 0
    // });
}

function trackTechnologyClick(techName, section) {
    console.log(`Analytics: Technologie cliquée - ${techName} dans section ${section}`);
    
    // Ici on pourrait envoyer à Google Analytics
    // gtag('event', 'technology_click', {
    //     event_category: 'Technologies',
    //     event_label: `${section}:${techName}`,
    //     value: 1
    // });
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
// OPTIMISATIONS PERFORMANCE
// ==============================================

function optimizeTechPagePerformance() {
    // Lazy loading des tooltips
    const rectangles = document.querySelectorAll('.tech-rectangle');
    rectangles.forEach(rect => {
        const tooltip = rect.querySelector('.tech-tooltip');
        if (tooltip) {
            // Masquer initialement les tooltips pour améliorer les performances
            tooltip.style.display = 'none';
            
            rect.addEventListener('mouseenter', () => {
                tooltip.style.display = 'block';
            }, { once: true });
        }
    });
    
    // Debounce des animations de hover
    let hoverTimeout;
    rectangles.forEach(rect => {
        rect.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                // Animation de hover
            }, 50);
        });
    });
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initTechnologiesPage() {
    if (technologiesPageReady) return;
    
    try {
        // Initialiser toutes les fonctionnalités
        initTechRectangles();
        initProgressiveLoading();
        optimizeTechPagePerformance();
        
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
// ACCESSIBILITÉ
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
    
    // Améliorer les tooltips pour les lecteurs d'écran
    const rectangles = document.querySelectorAll('.tech-rectangle');
    rectangles.forEach(rect => {
        const techName = rect.getAttribute('data-tech');
        if (techName) {
            rect.setAttribute('aria-label', `Technologie: ${techName}`);
        }
        
        // Ajouter des descriptions pour les dropdowns
        if (rect.classList.contains('dropdown-rectangle')) {
            rect.setAttribute('aria-expanded', 'false');
            rect.setAttribute('aria-haspopup', 'true');
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
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initTechnologiesPage();
        initTechAccessibility();
    });
} else {
    initTechnologiesPage();
    initTechAccessibility();
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
    toggleDropdown,
    showTechDetails,
    trackTechnologyClick,
    closeAllDropdowns,
    technologiesTranslations
};