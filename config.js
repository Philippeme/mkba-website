/**
 * Configuration avancée du site MK BA
 * Centralise tous les paramètres et constantes
 */

const MKBAConfig = {
    
    // Configuration générale
    app: {
        name: 'MK BA Website',
        version: '1.0.0',
        description: 'Site web professionnel MK Business Analysis',
        author: 'MK BA Development Team',
        defaultLanguage: 'fr',
        supportedLanguages: ['fr', 'en'],
        debug: false // Passer à true en développement
    },

    // URLs et API endpoints
    api: {
        baseUrl: '/api',
        endpoints: {
            news: '/news',
            services: '/services',
            achievements: '/achievements',
            contact: '/contact',
            search: '/search'
        }
    },

    // Configuration de la carte interactive
    map: {
        // Coordonnées pour centrer sur l'Afrique/Cameroun
        center: {
            lat: 6.2518,  // Douala, Cameroun
            lng: 10.1449
        },
        zoom: 5,
        countries: {
            cameroon: {
                name: 'Cameroun',
                coordinates: [6.2518, 10.1449],
                projects: 20,
                interventions: 70,
                color: '#FF6B35'
            },
            benin: {
                name: 'Bénin', 
                coordinates: [9.3077, 2.3158],
                projects: 8,
                interventions: 25,
                color: '#FF6B35'
            },
            madagascar: {
                name: 'Madagascar',
                coordinates: [-18.7669, 46.8691],
                projects: 12,
                interventions: 40,
                color: '#FF6B35'
            }
            // Ajouter d'autres pays selon les besoins
        }
    },

    // Configuration des animations
    animations: {
        enabled: true,
        duration: {
            fast: 200,
            normal: 400,
            slow: 600
        },
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        observer: {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    },

    // Configuration des médias
    media: {
        breakpoints: {
            xs: '0px',
            sm: '576px', 
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1400px'
        },
        lazyLoading: {
            enabled: true,
            placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+'
        }
    },

    // Configuration des services
    services: [
        {
            id: 'egovernance',
            icon: 'fas fa-digital-tachograph',
            category: 'digital'
        },
        {
            id: 'development',
            icon: 'fas fa-code',
            category: 'technical'
        },
        {
            id: 'erp',
            icon: 'fas fa-cogs',
            category: 'business'
        },
        {
            id: 'data',
            icon: 'fas fa-brain',
            category: 'technical'
        },
        {
            id: 'security',
            icon: 'fas fa-shield-alt',
            category: 'security'
        },
        {
            id: 'network',
            icon: 'fas fa-network-wired',
            category: 'infrastructure'
        },
        {
            id: 'support',
            icon: 'fas fa-headset',
            category: 'support'
        },
        {
            id: 'outsourcing',
            icon: 'fas fa-hands-helping',
            category: 'business'
        },
        {
            id: 'financial',
            icon: 'fas fa-chart-line',
            category: 'business'
        }
    ],

    // Configuration des produits
    products: [
        {
            id: 'data_ai',
            icon: 'fas fa-brain',
            category: 'technology',
            featured: false
        },
        {
            id: 'healthcare',
            icon: 'fas fa-heartbeat',
            category: 'industry',
            featured: true // Produit mis en avant
        },
        {
            id: 'education',
            icon: 'fas fa-graduation-cap',
            category: 'industry',
            featured: false
        },
        {
            id: 'environment',
            icon: 'fas fa-leaf',
            category: 'industry',
            featured: false
        },
        {
            id: 'business',
            icon: 'fas fa-briefcase',
            category: 'management',
            featured: false
        },
        {
            id: 'finance',
            icon: 'fas fa-chart-line',
            category: 'management',
            featured: false
        }
    ],

    // Configuration des indicateurs
    indicators: [
        {
            value: '999+',
            label: 'indicator_label',
            icon: 'fas fa-users',
            color: '#FF6B35',
            animationType: 'countUp'
        },
        {
            value: '999+', 
            label: 'indicator_label',
            icon: 'fas fa-project-diagram',
            color: '#0066CC',
            animationType: 'countUp'
        },
        {
            value: '999+',
            label: 'indicator_label', 
            icon: 'fas fa-globe-africa',
            color: '#FF6B35',
            animationType: 'countUp'
        },
        {
            value: '999+',
            label: 'indicator_label',
            icon: 'fas fa-award',
            color: '#0066CC',
            animationType: 'countUp'
        },
        {
            value: '999+',
            label: 'indicator_label',
            icon: 'fas fa-handshake',
            color: '#FF6B35',
            animationType: 'countUp'
        },
        {
            value: '999+',
            label: 'indicator_label',
            icon: 'fas fa-rocket',
            color: '#0066CC', 
            animationType: 'countUp'
        }
    ],

    // Configuration des actualités
    news: {
        itemsPerPage: 3,
        autoRotate: false,
        rotationInterval: 5000, // ms
        categories: ['technology', 'business', 'partnership', 'innovation']
    },

    // Configuration des réalisations
    achievements: {
        itemsPerPage: 3,
        showFilters: true,
        filterBy: ['country', 'category', 'year'],
        partners: {
            undp: {
                name: 'UNDP',
                logo: '/assets/images/partners/undp-logo.png',
                website: 'https://www.undp.org'
            }
        }
    },

    // Configuration de la recherche
    search: {
        enabled: true,
        minChars: 3,
        debounceDelay: 300,
        highlightResults: true,
        searchIn: ['title', 'content', 'tags'],
        placeholder: {
            fr: 'Rechercher dans MK BA...',
            en: 'Search in MK BA...'
        }
    },

    // Configuration de performance
    performance: {
        lazyLoadOffset: 100,
        imageOptimization: true,
        cacheTimeout: 86400000, // 24h en ms
        prefetchLinks: true,
        criticalCSS: true
    },

    // Configuration de l'accessibilité
    accessibility: {
        highContrast: false,
        reducedMotion: false,
        screenReader: true,
        keyboardNavigation: true,
        focusVisible: true
    },

    // Configuration des réseaux sociaux
    social: {
        enabled: true,
        platforms: {
            linkedin: 'https://linkedin.com/company/mk-ba',
            twitter: 'https://twitter.com/mkba_official', 
            facebook: 'https://facebook.com/mkba.official',
            youtube: 'https://youtube.com/c/mkba'
        },
        sharing: {
            enabled: true,
            platforms: ['linkedin', 'twitter', 'facebook', 'email']
        }
    },

    // Configuration des cookies et RGPD
    privacy: {
        cookieConsent: true,
        analytics: {
            enabled: false, // À activer selon les besoins
            service: 'google-analytics',
            trackingId: 'GA_MEASUREMENT_ID'
        },
        externalServices: [
            'google-fonts',
            'bootstrap-cdn',
            'fontawesome-cdn'
        ]
    },

    // Configuration du contact
    contact: {
        address: {
            street: 'Rue 16-Maille 18, Cité SAD Banga-Japoma',
            city: 'Douala',
            country: 'Cameroun',
            coordinates: [4.0511, 9.7679]
        },
        phone: '+237 695 478 987',
        email: 'info@mk-ba.com',
        workingHours: {
            monday: '07:30-18:00',
            tuesday: '07:30-18:00', 
            wednesday: '07:30-18:00',
            thursday: '07:30-18:00',
            friday: '07:30-18:00',
            saturday: '09:00-14:00',
            sunday: 'Fermé'
        }
    },

    // Thèmes et personnalisation
    themes: {
        default: {
            primaryOrange: '#FF6B35',
            primaryBlue: '#0066CC',
            darkBlue: '#003366',
            lightBlue: '#E3F2FD',
            textDark: '#333333',
            textMedium: '#666666',
            textLight: '#999999',
            backgroundLight: '#F8F9FA',
            white: '#FFFFFF',
            borderLight: '#E9ECEF'
        },
        dark: {
            // Configuration pour thème sombre si nécessaire
            primaryOrange: '#FF6B35',
            primaryBlue: '#4A90E2',
            darkBlue: '#1A1A1A',
            lightBlue: '#2A2A2A',
            textDark: '#FFFFFF',
            textMedium: '#CCCCCC',
            textLight: '#999999',
            backgroundLight: '#1A1A1A',
            white: '#2A2A2A',
            borderLight: '#444444'
        }
    },

    // Messages d'erreur et notifications
    messages: {
        fr: {
            loading: 'Chargement...',
            error: 'Une erreur est survenue',
            noResults: 'Aucun résultat trouvé',
            networkError: 'Erreur de connexion',
            success: 'Opération réussie'
        },
        en: {
            loading: 'Loading...',
            error: 'An error occurred',
            noResults: 'No results found',
            networkError: 'Network error',
            success: 'Operation successful'
        }
    }
};

// Export pour utilisation globale
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MKBAConfig;
} else {
    window.MKBAConfig = MKBAConfig;
}

// Fonctions utilitaires pour la configuration
const ConfigUtils = {
    
    // Obtenir une valeur de configuration par chemin
    get(path, defaultValue = null) {
        return path.split('.').reduce((obj, key) => 
            obj && obj[key] !== undefined ? obj[key] : defaultValue, MKBAConfig);
    },

    // Vérifier si une fonctionnalité est activée
    isEnabled(feature) {
        return this.get(feature + '.enabled', false);
    },

    // Obtenir la configuration pour la langue actuelle
    getForLanguage(key, lang = 'fr') {
        const config = this.get(key);
        if (config && config[lang]) {
            return config[lang];
        }
        return config;
    },

    // Obtenir les breakpoints média
    getBreakpoint(size) {
        return this.get(`media.breakpoints.${size}`, '0px');
    },

    // Obtenir la configuration de service par ID
    getService(serviceId) {
        return MKBAConfig.services.find(service => service.id === serviceId);
    },

    // Obtenir la configuration de produit par ID
    getProduct(productId) {
        return MKBAConfig.products.find(product => product.id === productId);
    },

    // Obtenir les produits par catégorie
    getProductsByCategory(category) {
        return MKBAConfig.products.filter(product => product.category === category);
    },

    // Obtenir les produits mis en avant
    getFeaturedProducts() {
        return MKBAConfig.products.filter(product => product.featured);
    },

    // Valider la configuration
    validate() {
        const required = [
            'app.name',
            'app.defaultLanguage',
            'app.supportedLanguages'
        ];

        const missing = required.filter(path => !this.get(path));
        
        if (missing.length > 0) {
            console.warn('Configuration incomplète:', missing);
            return false;
        }
        
        return true;
    },

    // Mode debug
    enableDebug() {
        MKBAConfig.app.debug = true;
        console.log('Mode debug activé pour MK BA');
    },

    // Initialiser la configuration
    init() {
        if (!this.validate()) {
            console.error('Erreur de configuration MK BA');
            return false;
        }

        // Appliquer les variables CSS du thème
        this.applyTheme(MKBAConfig.themes.default);
        
        // Initialiser les fonctionnalités basées sur la configuration
        if (this.isEnabled('accessibility')) {
            this.initAccessibility();
        }

        if (this.isEnabled('performance')) {
            this.initPerformanceOptimizations();
        }

        console.log('Configuration MK BA initialisée');
        return true;
    },

    // Appliquer un thème
    applyTheme(theme) {
        const root = document.documentElement;
        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
        });
    },

    // Initialiser l'accessibilité
    initAccessibility() {
        if (window.matchMedia('(prefers-contrast: high)').matches) {
            MKBAConfig.accessibility.highContrast = true;
            document.body.classList.add('high-contrast');
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            MKBAConfig.accessibility.reducedMotion = true;
            document.body.classList.add('reduced-motion');
        }
    },

    // Initialiser les optimisations de performance
    initPerformanceOptimizations() {
        // Preconnect vers les domaines externes
        const externalDomains = [
            'https://cdnjs.cloudflare.com',
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com'
        ];

        externalDomains.forEach(domain => {
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = domain;
            document.head.appendChild(link);
        });
    }
};

// Export des utilitaires
if (typeof module !== 'undefined' && module.exports) {
    module.exports.ConfigUtils = ConfigUtils;
} else {
    window.ConfigUtils = ConfigUtils;
}