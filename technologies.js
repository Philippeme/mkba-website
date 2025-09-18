// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE TECHNOLOGIES - VERSION AMÉLIORÉE
// ==============================================

// Variables globales pour la page Technologies
let technologiesPageReady = false;
let dropdownsOpen = new Set();
let currentTooltip = null;

// Base de données des technologies avec informations détaillées
const technologiesData = {
    'PHP': {
        icon: './assets/icons/technologies/php.png',
        description: 'PHP est un langage de programmation web puissant qui permet de créer des applications robustes et évolutives. Avec PHP, votre organisation bénéficiera de développements rapides, de coûts réduits et d\'une maintenance simplifiée grâce à sa large communauté et ses frameworks matures.',
        projects: [
            'Système de gestion des ressources humaines pour une entreprise de 500+ employés',
            'Plateforme e-commerce avec intégration de paiement mobile money',
            'Système de gestion des stocks et facturation pour PME',
            'Portal web gouvernemental avec authentification sécurisée'
        ]
    },
    'Node.js': {
        icon: './assets/icons/technologies/nodejs.png',
        description: 'Node.js révolutionne le développement d\'applications en temps réel. Idéal pour les applications collaboratives, les systèmes de messagerie instantanée et les APIs haute performance. Votre entreprise gagnera en réactivité avec des applications ultra-rapides et scalables.',
        projects: [
            'API REST pour application mobile de transport avec géolocalisation',
            'Système de chat en temps réel pour plateforme éducative',
            'Microservices pour architecture cloud native',
            'Dashboard analytics en temps réel pour IoT industriel'
        ]
    },
    'Python': {
        icon: './assets/icons/technologies/python.png',
        description: 'Python excelle dans l\'analyse de données, l\'intelligence artificielle et l\'automatisation. Cette technologie permettra à votre organisation d\'exploiter ses données pour des insights précieux, d\'automatiser les tâches répétitives et de développer des solutions IA innovantes.',
        projects: [
            'Système de prédiction de demande pour optimisation des stocks',
            'Automation des processus comptables et reporting financier',
            'Plateforme d\'analyse sentiment client sur réseaux sociaux',
            'Système de détection de fraude pour institution financière'
        ]
    },
    'Java': {
        icon: './assets/icons/technologies/java.png',
        description: 'Java garantit la fiabilité et la sécurité pour vos applications d\'entreprise critiques. Avec Java, votre organisation dispose d\'un écosystème mature pour développer des applications bancaires, ERP et systèmes de gestion robustes qui résistent au temps.',
        projects: [
            'Core banking system pour institution microfinance',
            'ERP intégré avec modules RH, comptabilité et inventory',
            'Système de gestion des patients pour hôpital de référence',
            'Plateforme de trading et gestion de portefeuille'
        ]
    },
    '.NET': {
        icon: './assets/icons/technologies/dotnet.png',
        description: 'La plateforme .NET de Microsoft offre une intégration parfaite avec l\'écosystème Windows et Office. Idéale pour moderniser vos processus métier existants tout en conservant la familiarité de vos outils actuels.',
        projects: [
            'Modernisation système legacy vers architecture cloud Azure',
            'Intégration ERP avec suite Office 365 et SharePoint',
            'Système de gestion documentaire avec authentification AD',
            'Application desktop de caisse pour réseau de distribution'
        ]
    },
    'Laravel': {
        icon: './assets/icons/technologies/laravel.png',
        description: 'Laravel accélère le développement d\'applications web sophistiquées avec une architecture élégante. Parfait pour créer rapidement des prototypes viables et des applications complètes avec des fonctionnalités avancées de sécurité.',
        projects: [
            'Plateforme de formation en ligne avec certifications',
            'Système de réservation multi-ressources pour hôtellerie',
            'CRM sur mesure avec automation marketing',
            'Portail client avec gestion des contrats et facturation'
        ]
    },
    'Go': {
        icon: './assets/icons/technologies/go.png',
        description: 'Go (Golang) excelle dans la création de services haute performance et microservices. Cette technologie moderne permettra à votre organisation de construire des systèmes distribués rapides et fiables, particulièrement adaptés aux architectures cloud.',
        projects: [
            'API gateway haute performance pour architecture microservices',
            'Système de monitoring et logging distribué',
            'Service de traitement de paiements en temps réel',
            'Infrastructure de streaming de données IoT'
        ]
    },
    'React': {
        icon: './assets/icons/technologies/react.png',
        description: 'React crée des interfaces utilisateur modernes et interactives qui améliorent l\'expérience de vos utilisateurs. Vos applications web seront plus rapides, plus intuitives et offriront une expérience comparable aux applications mobiles natives.',
        projects: [
            'Dashboard administratif pour plateforme e-learning',
            'Interface de gestion pour système de surveillance IP',
            'Application web progressive pour service client',
            'Plateforme de visualisation de données business intelligence'
        ]
    },
    'Vue.js': {
        icon: './assets/icons/technologies/vue.png',
        description: 'Vue.js combine simplicité et puissance pour créer des interfaces web évolutives. Cette technologie permet de moderniser progressivement vos applications existantes sans refonte complète, réduisant les risques et les coûts.',
        projects: [
            'Migration progressive d\'interface legacy vers SPA moderne',
            'Tableau de bord de supervision industrielle temps réel',
            'Application de gestion des tournées commerciales',
            'Interface de configuration pour équipements IoT'
        ]
    },
    'Angular': {
        icon: './assets/icons/technologies/angular.jpg',
        description: 'Angular offre un framework complet pour développer des applications web d\'entreprise robustes et maintenables. Idéal pour les grandes équipes et les projets complexes nécessitant une architecture structurée et testable.',
        projects: [
            'Application de gestion des ressources d\'entreprise (ERP)',
            'Système de workflow et validation documentaire',
            'Plateforme de formation avec tracking de progression',
            'Interface de gestion pour infrastructure réseau'
        ]
    },
    'JavaScript': {
        icon: './assets/icons/technologies/javascript.png',
        description: 'JavaScript est le langage universel du web moderne. Il permet de créer des expériences interactives riches, d\'automatiser les processus côté client et d\'améliorer significativement l\'ergonomie de vos applications web.',
        projects: [
            'Calculateurs financiers interactifs pour site bancaire',
            'Système de signature électronique avec validation temps réel',
            'Interface de configuration dynamique pour équipements',
            'Outils de visualisation de données avec graphiques interactifs'
        ]
    },
    'TypeScript': {
        icon: './assets/icons/technologies/typescript.png',
        description: 'TypeScript apporte la robustesse du typage statique à JavaScript, réduisant les erreurs et améliorant la maintenabilité. Parfait pour les projets d\'envergure où la qualité du code et la productivité des équipes sont critiques.',
        projects: [
            'Architecture frontend complexe avec modules interconnectés',
            'API wrapper typé pour intégration de services tiers',
            'Bibliothèque de composants UI pour cohérence visuelle',
            'Application de trading avec calculs financiers précis'
        ]
    },
    'React Native': {
        icon: './assets/icons/technologies/react-native.png',
        description: 'React Native permet de créer des applications mobiles natives pour iOS et Android avec un seul code base. Votre organisation économise temps et budget tout en offrant une expérience mobile optimale à vos utilisateurs.',
        projects: [
            'Application mobile banking avec Touch/Face ID',
            'App de géolocalisation et tracking pour logistique',
            'Application de formation mobile avec mode offline',
            'App de gestion de maintenance avec codes QR'
        ]
    },
    'Flutter': {
        icon: './assets/icons/technologies/flutter.png',
        description: 'Flutter de Google crée des applications mobiles avec des performances natives et un design moderne. Cette technologie garantit une interface utilisateur fluide et cohérente sur toutes les plateformes, améliorant la satisfaction client.',
        projects: [
            'Application e-commerce avec paiement mobile money intégré',
            'App de téléconsultation médicale avec visioconférence',
            'Application de gestion de flotte avec GPS intégré',
            'App éducative interactive avec contenu multimédia'
        ]
    },
    'Swift': {
        icon: './assets/icons/technologies/swift.png',
        description: 'Swift est le langage natif d\'Apple pour créer des applications iOS de haute qualité. Exploitez pleinement l\'écosystème Apple pour offrir à vos utilisateurs iPhone et iPad une expérience premium et intégrée.',
        projects: [
            'Application bancaire iOS avec Apple Pay intégration',
            'App de réalité augmentée pour catalogue produits',
            'Application santé avec intégration HealthKit',
            'App de productivité avec synchronisation iCloud'
        ]
    },
    'Kotlin': {
        icon: './assets/icons/technologies/kotlin.png',
        description: 'Kotlin modernise le développement Android avec un code plus concis et sûr. Cette technologie améliore la productivité de développement tout en créant des applications Android robustes et performantes.',
        projects: [
            'Application Android de gestion des ventes terrain',
            'App de contrôle d\'accès avec NFC et biométrie',
            'Application de suivi patient pour personnel médical',
            'App de maintenance industrielle avec scan de codes-barres'
        ]
    },
    'Xamarin': {
        icon: './assets/icons/technologies/xamarin.png',
        description: 'Xamarin permet de développer des applications natives iOS et Android avec C# et .NET. Idéal pour les organisations déjà investies dans l\'écosystème Microsoft, offrant une intégration naturelle avec vos systèmes existants.',
        projects: [
            'Application mobile pour force de vente avec sync ERP',
            'App de gestion d\'inventaire avec lecteur code-barres',
            'Application de reporting mobile pour managers',
            'App de validation workflow avec authentification AD'
        ]
    },
    'Ionic': {
        icon: './assets/icons/technologies/ionic.png',
        description: 'Ionic crée des applications mobiles hybrides avec des technologies web. Cette approche réduit les coûts de développement et de maintenance tout en permettant un déploiement rapide sur toutes les plateformes.',
        projects: [
            'Application de services citoyens pour collectivité locale',
            'App de gestion de congés et notes de frais',
            'Application de catalogue produits pour commerciaux',
            'App de sondages et enquêtes terrain'
        ]
    },
    'Electron': {
        icon: './assets/icons/technologies/electron.png',
        description: 'Electron transforme vos applications web en applications desktop multiplateformes. Parfait pour créer des outils de productivité, des tableaux de bord et des applications métier qui fonctionnent offline sur Windows, Mac et Linux.',
        projects: [
            'Application desktop de gestion comptable avec impression',
            'Outil de monitoring réseau avec alertes temps réel',
            'Application de CAO/DAO légère pour bureau d\'études',
            'Logiciel de gestion de stock avec lecteur code-barres USB'
        ]
    },
    'Qt': {
        icon: './assets/icons/technologies/qt.png',
        description: 'Qt développe des applications desktop natives haute performance avec des interfaces utilisateur sophistiquées. Idéal pour les applications métier complexes nécessitant des performances optimales et une intégration système profonde.',
        projects: [
            'Logiciel de supervision industrielle temps réel',
            'Application de CAD/CAM pour secteur manufacturier',
            'Système de contrôle qualité avec vision artificielle',
            'Interface utilisateur pour équipements médicaux'
        ]
    },
    'Docker': {
        icon: './assets/icons/technologies/docker.png',
        description: 'Docker révolutionne le déploiement et la gestion des applications. Cette technologie garantit que vos applications fonctionnent de manière identique en développement et en production, réduisant les erreurs et accélérant les mises en œuvre.',
        projects: [
            'Containerisation d\'applications legacy pour migration cloud',
            'Pipeline CI/CD automatisé avec déploiement zero-downtime',
            'Architecture microservices avec orchestration automatique',
            'Environnements de développement standardisés pour équipes'
        ]
    },
    'AWS': {
        icon: './assets/icons/technologies/aws.png',
        description: 'Amazon Web Services offre une infrastructure cloud scalable et sécurisée. Votre organisation bénéficiera de coûts optimisés, d\'une haute disponibilité et de la possibilité de faire évoluer vos ressources selon vos besoins réels.',
        projects: [
            'Migration d\'infrastructure on-premise vers cloud AWS',
            'Architecture serverless pour application web scalable',
            'Data lake pour analytics et business intelligence',
            'Sauvegarde et disaster recovery automatisés'
        ]
    },
    'MySQL': {
        icon: './assets/icons/technologies/mysql.png',
        description: 'MySQL est une base de données relationnelle fiable et performante. Elle garantit l\'intégrité de vos données critiques tout en offrant des performances élevées pour vos applications web et mobiles, avec des coûts de licence réduits.',
        projects: [
            'Base de données centrale pour ERP manufacturier',
            'Système de gestion clients avec historique transactions',
            'Database e-commerce avec gestion des stocks temps réel',
            'Système de reporting financier avec agrégation de données'
        ]
    }
};

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
        tooltip_click_to_collapse: "Cliquer pour réduire",
        
        // Tooltip détaillé
        tooltip_projects_title: "Nos réalisations avec cette technologie",
        tooltip_cta_title: "Intéressé par cette technologie ?",
        tooltip_contact_email: "Contactez-nous",
        tooltip_contact_phone: "Appelez-nous",
        tooltip_more_info: "En savoir plus"
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
        tooltip_click_to_collapse: "Click to collapse",
        
        // Tooltip détaillé
        tooltip_projects_title: "Our achievements with this technology",
        tooltip_cta_title: "Interested in this technology?",
        tooltip_contact_email: "Contact us",
        tooltip_contact_phone: "Call us",
        tooltip_more_info: "Learn more"
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
            if (!this.classList.contains('dropdown-rectangle')) {
                this.style.transform = 'translateY(-2px) scale(1.02)';
                this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }
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
                
                // Afficher le tooltip détaillé pour la technologie
                const techName = this.getAttribute('data-tech');
                showDetailedTooltip(techName);
                
                // Logger la technologie cliquée (pour analytics)
                console.log(`Technologie sélectionnée: ${techName}`);
                trackTechnologyClick(techName, findTechSection(this));
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
// SYSTÈME DE TOOLTIPS DÉTAILLÉS
// ==============================================

function showDetailedTooltip(techName) {
    // Fermer le tooltip existant s'il y en a un
    closeDetailedTooltip();
    
    const techData = technologiesData[techName];
    if (!techData) {
        console.warn(`Pas de données trouvées pour la technologie: ${techName}`);
        return;
    }
    
    // Obtenir les traductions actuelles
    const currentLang = window.currentLanguage || 'fr';
    const translations = technologiesTranslations[currentLang] || technologiesTranslations['fr'];
    
    // Créer l'overlay
    const overlay = document.createElement('div');
    overlay.className = 'tooltip-overlay';
    overlay.addEventListener('click', closeDetailedTooltip);
    
    // Créer le tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tech-detailed-tooltip';
    
    tooltip.innerHTML = `
        <div class="tooltip-header">
            <img src="${techData.icon}" alt="${techName}" class="tooltip-tech-icon">
            <h3 class="tooltip-tech-name">${techName}</h3>
            <button class="tooltip-close-btn" aria-label="Fermer" onclick="closeDetailedTooltip()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="tooltip-content">
            <p class="tooltip-description">${techData.description}</p>
            
            <div class="tooltip-projects">
                <h4 class="tooltip-projects-title">
                    <i class="fas fa-project-diagram"></i>
                    ${translations.tooltip_projects_title}
                </h4>
                <ul class="tooltip-projects-list">
                    ${techData.projects.map(project => `<li>${project}</li>`).join('')}
                </ul>
            </div>
            
            <div class="tooltip-cta">
                <h4 class="tooltip-cta-title">${translations.tooltip_cta_title}</h4>
                <div class="tooltip-cta-buttons">
                    <a href="mailto:info@mk-ba.com?subject=Demande d'information - ${techName}" 
                       class="tooltip-cta-btn primary">
                        <i class="fas fa-envelope"></i>
                        ${translations.tooltip_contact_email}
                    </a>
                    <a href="tel:+237695478987" class="tooltip-cta-btn secondary">
                        <i class="fas fa-phone"></i>
                        ${translations.tooltip_contact_phone}
                    </a>
                    <a href="index.html#contact" class="tooltip-cta-btn secondary">
                        <i class="fas fa-info-circle"></i>
                        ${translations.tooltip_more_info}
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Ajouter au DOM
    document.body.appendChild(overlay);
    document.body.appendChild(tooltip);
    
    // Stocker la référence
    currentTooltip = { overlay, tooltip };
    
    // Animer l'apparition
    setTimeout(() => {
        overlay.classList.add('show');
        tooltip.classList.add('show');
    }, 10);
    
    // Gérer l'échappement
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeDetailedTooltip();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Stocker le gestionnaire d'événement pour le nettoyer
    currentTooltip.escapeHandler = handleEscape;
    
    console.log(`Tooltip détaillé affiché pour: ${techName}`);
}

function closeDetailedTooltip() {
    if (!currentTooltip) return;
    
    const { overlay, tooltip, escapeHandler } = currentTooltip;
    
    // Animer la fermeture
    overlay.classList.remove('show');
    tooltip.classList.remove('show');
    
    // Nettoyer les event listeners
    if (escapeHandler) {
        document.removeEventListener('keydown', escapeHandler);
    }
    
    // Supprimer du DOM après l'animation
    setTimeout(() => {
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
        if (tooltip && tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
        }
    }, 300);
    
    currentTooltip = null;
    console.log('Tooltip détaillé fermé');
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
        dropdownRect.setAttribute('aria-expanded', 'false');
        
        // Mettre à jour le tooltip
        updateTooltipText(dropdownRect, 'tooltip_click_to_expand');
        
        console.log(`Dropdown ${dropdownId} fermé`);
    } else {
        // Ouvrir le dropdown
        dropdownRect.classList.add('expanded');
        dropdownContent.classList.add('show');
        arrow.style.transform = 'rotate(180deg)';
        dropdownsOpen.add(dropdownId);
        dropdownRect.setAttribute('aria-expanded', 'true');
        
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
// EFFETS VISUELS ET UTILITAIRES
// ==============================================

function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.cssText += `
        position: absolute;
        width: 20px;
        height: 20px;
        background: rgba(23, 48, 238, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

function findTechSection(techRect) {
    const section = techRect.closest('.tech-section');
    if (section) {
        const title = section.querySelector('.tech-section-title');
        return title ? title.textContent.trim() : 'unknown';
    }
    return 'unknown';
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
    const allRectangles = Array.from(document.querySelectorAll('.tech-rectangle:not(.loading)'));
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
    
    // Mettre à jour les tooltips des dropdowns
    updateDropdownTooltips(lang);
    
    // Si un tooltip détaillé est ouvert, le fermer pour éviter les incohérences de langue
    if (currentTooltip) {
        closeDetailedTooltip();
    }
    
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
    // gtag('event', 'technology_detail_view', {
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
    const rectangles = document.querySelectorAll('.tech-rectangle:not(.dropdown-rectangle)');
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
                // Animation de hover effectuée dans le CSS
            }, 50);
        });
    });
    
    // Précharger les icônes des technologies fréquemment consultées
    const popularTechs = ['PHP', 'React', 'Node.js', 'MySQL', 'Docker'];
    popularTechs.forEach(tech => {
        if (technologiesData[tech]) {
            const img = new Image();
            img.src = technologiesData[tech].icon;
        }
    });
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
            rect.setAttribute('aria-label', `Technologie: ${techName}. Cliquer pour voir les détails.`);
        }
        
        // Ajouter des descriptions pour les dropdowns
        if (rect.classList.contains('dropdown-rectangle')) {
            rect.setAttribute('aria-expanded', 'false');
            rect.setAttribute('aria-haspopup', 'true');
            rect.setAttribute('aria-label', 'Afficher plus de technologies dans cette catégorie');
        }
    });
    
    // Support des préférences d'accessibilité
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
    
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Gestion de la navigation au clavier pour les tooltips
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && currentTooltip) {
            // Assurer que le focus reste dans le tooltip
            const tooltip = currentTooltip.tooltip;
            const focusableElements = tooltip.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
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
        initTechAccessibility();
        optimizeTechPagePerformance();
        
        // Charger la langue sauvegardée ou française par défaut
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageTechnologiesPage(savedLanguage);
        
        // Écouter les changements de langue
        window.addEventListener('languageChanged', (e) => {
            setLanguageTechnologiesPage(e.detail.language);
        });
        
        // Fermer les tooltips/dropdowns en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            // Gérer la fermeture des dropdowns
            if (!e.target.closest('.dropdown-rectangle') && !e.target.closest('.tech-dropdown-content')) {
                closeAllDropdowns();
            }
        });
        
        // Fermer les dropdowns avec Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeAllDropdowns();
                // Ne pas fermer le tooltip détaillé ici car il a son propre gestionnaire
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
        
        // Ajouter les styles CSS pour l'animation ripple
        if (!document.querySelector('#ripple-styles')) {
            const rippleStyles = document.createElement('style');
            rippleStyles.id = 'ripple-styles';
            rippleStyles.textContent = `
                @keyframes ripple {
                    to {
                        transform: translate(-50%, -50%) scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(rippleStyles);
        }
        
        technologiesPageReady = true;
        console.log('Page Technologies initialisée avec succès avec tooltips interactifs');
        
    } catch (error) {
        handleTechPageError(error, 'initialization');
    }
}

// ==============================================
// FONCTIONS GLOBALES EXPOSÉES
// ==============================================

// Rendre la fonction closeDetailedTooltip accessible globalement
window.closeDetailedTooltip = closeDetailedTooltip;

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
    toggleDropdown,
    showDetailedTooltip,
    closeDetailedTooltip,
    trackTechnologyClick,
    closeAllDropdowns,
    technologiesTranslations,
    technologiesData
};