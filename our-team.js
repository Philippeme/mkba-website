// ==============================================
// JAVASCRIPT COMPLET POUR LA PAGE OUR TEAM - VERSION MISE À JOUR
// ==============================================

// Variables globales pour la page Our Team
let megaMenuOpen = false;
let formFiles = [];
let partnersCarousel = null;

// Traductions spécifiques à la page Our Team
const ourTeamTranslations = {
    fr: {
        // Meta et navigation
        page_title_our_team: "Notre équipe - Excellence en Solutions Technologiques",
        
        // Fil d'Ariane - CORRIGÉ
        breadcrumb_who_we_are: "Qui nous sommes",
        breadcrumb_our_team: "Our Team",
        
        // Hero section
        hero_title1: "Innovators. Collaborators. Achievers.",
        hero_description: "Chez MK BA, notre succès est guidé par les personnes exceptionnelles qui se trouvent derrière nos solutions. Nous sommes une équipe diversifiée d'experts intervenant dans nos différents domaines de compétence et unis par une passion pour l'excellence et l'impact.",
        
        // Section collective effort
        collective_effort_title: "Votre succès est notre effort collectif",
        collective_effort_description: "Nous fournissons des experts techniques, des chefs de projet et des fonctions de support pour obtenir des résultats exceptionnels. Nous fournissons des logiciels de qualité avec nos spécialistes techniques soutenus par des experts du domaine métier (santé, gouvernement, environnement, justice, etc.).",
        
        // Section expertise
        expertise_title: "Là où l'expertise rencontre la passion",
        expertise_subtitle: "Les membres de notre équipe détiennent des certifications de pointe dans l'industrie, qui confirment, avec leur expérience, leur capacité à livrer efficacement.",
        
        // Section values
        values_title: "Nos valeurs",
        value_integrity_title: "Intégrité",
        value_integrity_desc: "Nous faisons la bonne chose, de la bonne manière, au bon moment, toujours.",
        value_collaboration_title: "Collaboration",
        value_collaboration_desc: "Nous prospérons grâce au partenariat et à l'intelligence collective.",
        value_impact_title: "Impact",
        value_impact_desc: "Nous sommes motivés par des résultats qui comptent.",
        value_innovation_title: "Innovation",
        value_innovation_desc: "Nous embrassons le changement et cherchons des moyens plus intelligents de résoudre les défis.",
        
        // Section join us
        join_us_title: "Rejoignez-nous",
        join_us_description: "Rejoignez une organisation qui vous aidera à révéler le meilleur de votre potentiel et vous mènera à créer le meilleur impact",
        
        // Formulaire
        form_title: "Candidature spontanée",
        required_fields: "Les champs marqués d'un * sont obligatoires",
        special_chars_note: "Veuillez éviter d'utiliser des caractères spéciaux (par exemple des parenthèses) dans les champs de nom.",
        label_last_name: "Nom *",
        label_first_name: "Prénom *",
        label_email: "Email *",
        label_phone: "Téléphone *",
        label_whatsapp: "WhatsApp *",
        label_skype: "Compte Skype",
        label_marital_status: "Statut Matrimonial",
        label_gender: "Votre Sexe",
        label_nationality: "Quel est votre nationalité",
        label_residence: "Pays de résidence",
        marital_married: "Marié",
        marital_single: "Célibataire",
        marital_divorced: "Divorcé",
        marital_widowed: "Veuf/Veuve",
        gender_male: "Homme",
        gender_female: "Femme",
        upload_title: "Téléverser votre Cv lettre de motivation",
        upload_format: "Format : Docx, pdf",
        upload_size: "Taille : Mo Maximum",
        drop_zone_text: "Depuis l'appareil",
        uploaded_files_title: "Depuis l'appareil",
        btn_cancel: "Annuler la candidature",
        btn_submit: "Enregistrer et continuer",
        
        // Indicateurs
        indicators_title: "Quelques indicateurs clés de MK BA",
        indicator_label: "Etiam convallis"
    },
    
    en: {
        // Meta et navigation
        page_title_our_team: "Our Team - Excellence in Technology Solutions",
        
        // Fil d'Ariane - CORRIGÉ
        breadcrumb_who_we_are: "Who we are",
        breadcrumb_our_team: "Our Team",
        
        // Hero section
        hero_title1: "Innovators. Collaborators. Achievers.",
        hero_description: "At MK BA, our success is driven by the exceptional people behind our solutions. We are a diverse team of experts intervening in our different fields of competency and united by a passion for excellence and impact.",
        
        // Section collective effort
        collective_effort_title: "Your Success Is Our Collective Effort",
        collective_effort_description: "We provide tech experts, project managers and support functions to deliver outstanding results. We deliver quality software with our tech specialists that are supported by business domain experts (healthcare, government, environment, justice, etc.).",
        
        // Section expertise
        expertise_title: "Where Expertise Meets Passion",
        expertise_subtitle: "Our team members hold industry-leading certifications, that confirm, with their experience, their ability to deliver effectively.",
        
        // Section values
        values_title: "Our values",
        value_integrity_title: "Integrity",
        value_integrity_desc: "We do the right thing, the right way, at the right time, always.",
        value_collaboration_title: "Collaboration",
        value_collaboration_desc: "We thrive on partnership and collective intelligence.",
        value_impact_title: "Impact",
        value_impact_desc: "We are driven by results that matter.",
        value_innovation_title: "Innovation",
        value_innovation_desc: "We embrace change and seek smarter ways to solve challenges.",
        
        // Section join us
        join_us_title: "Join Us",
        join_us_description: "Join an organization that will help you bring out the best of your potential and lead you create the best impact",
        
        // Formulaire
        form_title: "Spontaneous application",
        required_fields: "Fields marked with * are required",
        special_chars_note: "Please avoid using special characters (e.g. parentheses) in name fields.",
        label_last_name: "Last Name *",
        label_first_name: "First Name *",
        label_email: "Email *",
        label_phone: "Phone *",
        label_whatsapp: "WhatsApp *",
        label_skype: "Skype Account",
        label_marital_status: "Marital Status",
        label_gender: "Your Gender",
        label_nationality: "What is your nationality",
        label_residence: "Country of residence",
        marital_married: "Married",
        marital_single: "Single",
        marital_divorced: "Divorced",
        marital_widowed: "Widowed",
        gender_male: "Male",
        gender_female: "Female",
        upload_title: "Upload your CV cover letter",
        upload_format: "Format: Docx, pdf",
        upload_size: "Size: Mo Maximum",
        drop_zone_text: "From device",
        uploaded_files_title: "From device",
        btn_cancel: "Cancel application",
        btn_submit: "Save and continue",
        
        // Indicateurs
        indicators_title: "Some key indicators of MK BA",
        indicator_label: "Etiam convallis"
    }
};

// ==============================================
// GESTION DU MEGA MENU "WHO WE ARE"
// ==============================================

function initMegaMenuOurTeam() {
    const megaMenuDropdown = document.querySelector('.mega-menu-dropdown');
    const navbar = document.querySelector('.navbar');
    
    if (megaMenuDropdown) {
        const dropdownToggle = megaMenuDropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = megaMenuDropdown.querySelector('.who-we-are-mega-menu');
        
        if (dropdownToggle && dropdownMenu) {
            // Supprimer l'attribut data-bs-toggle pour désactiver Bootstrap par défaut
            dropdownToggle.removeAttribute('data-bs-toggle');
            
            // Système hover personnalisé
            megaMenuDropdown.addEventListener('mouseenter', function() {
                megaMenuOpen = true;
                dropdownMenu.classList.add('show');
                navbar.classList.add('mega-menu-open');
                updateMegaMenuStyles(true);
            });
            
            megaMenuDropdown.addEventListener('mouseleave', function() {
                megaMenuOpen = false;
                dropdownMenu.classList.remove('show');
                navbar.classList.remove('mega-menu-open');
                updateMegaMenuStyles(false);
            });
            
            // Fermer en cliquant à l'extérieur
            document.addEventListener('click', function(e) {
                if (megaMenuOpen && !megaMenuDropdown.contains(e.target)) {
                    megaMenuOpen = false;
                    dropdownMenu.classList.remove('show');
                    navbar.classList.remove('mega-menu-open');
                    updateMegaMenuStyles(false);
                }
            });
            
            // Empêcher la fermeture lors du clic dans le menu
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
}

function updateMegaMenuStyles(isOpen) {
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
// CARROUSEL BOOTSTRAP POUR LES PARTENAIRES - NOUVEAU
// ==============================================

function initPartnersCarousel() {
    const carouselElement = document.getElementById('partnersCarousel');
    if (carouselElement) {
        // Initialiser le carrousel Bootstrap avec auto-scroll
        partnersCarousel = new bootstrap.Carousel(carouselElement, {
            interval: 700000, // Change de slide toutes les 3 secondes
            wrap: true, // Boucle infinie
            pause: 'hover', // Pause au hover
            touch: true, // Support tactile
            ride: 'carousel' // Auto-démarrage
        });
        
        // Démarrer immédiatement l'auto-scroll
        partnersCarousel.cycle();
        
        // Gestion des boutons avec priorité sur l'auto-scroll
        const prevButton = carouselElement.querySelector('.carousel-control-prev');
        const nextButton = carouselElement.querySelector('.carousel-control-next');
        
        if (prevButton) {
            prevButton.addEventListener('click', function(e) {
                e.preventDefault();
                partnersCarousel.prev();
                // Redémarrer l'auto-scroll après interaction manuelle
                setTimeout(() => {
                    partnersCarousel.cycle();
                }, 1000);
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault();
                partnersCarousel.next();
                // Redémarrer l'auto-scroll après interaction manuelle
                setTimeout(() => {
                    partnersCarousel.cycle();
                }, 1000);
            });
        }
        
        // Gestion des événements du carrousel
        carouselElement.addEventListener('slide.bs.carousel', function (e) {
            console.log('Slide transition vers:', e.to);
        });
        
        carouselElement.addEventListener('slid.bs.carousel', function (e) {
            console.log('Transition terminée vers:', e.to);
        });
        
        // Support du clavier
        carouselElement.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                partnersCarousel.prev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                partnersCarousel.next();
            }
        });
        
        console.log('Carrousel Bootstrap initialisé avec succès');
    }
}

// ==============================================
// GESTION DES DRAPEAUX DANS LES SELECTS - NOUVEAU
// ==============================================

function initFlagSelects() {
    // Fonction pour mettre à jour le drapeau affiché
    function updateSelectedFlag(selectElement, flagElement) {
        const selectedOption = selectElement.selectedOptions[0];
        const flagSrc = selectedOption.getAttribute('data-flag');
        const flagAlt = selectedOption.textContent;
        
        if (flagSrc && flagElement) {
            flagElement.src = flagSrc;
            flagElement.alt = `Drapeau ${flagAlt}`;
            flagElement.style.display = 'block';
        }
    }
    
    // Gestion du select nationalité
    const nationalitySelect = document.getElementById('nationality');
    const nationalityFlag = document.getElementById('nationalityFlag');
    
    if (nationalitySelect && nationalityFlag) {
        nationalitySelect.addEventListener('change', function() {
            updateSelectedFlag(this, nationalityFlag);
        });
        
        // Initialiser au chargement
        updateSelectedFlag(nationalitySelect, nationalityFlag);
        
        console.log('Select nationalité avec drapeau initialisé');
    }
    
    // Gestion du select résidence
    const residenceSelect = document.getElementById('residence');
    const residenceFlag = document.getElementById('residenceFlag');
    
    if (residenceSelect && residenceFlag) {
        residenceSelect.addEventListener('change', function() {
            updateSelectedFlag(this, residenceFlag);
        });
        
        // Initialiser au chargement
        updateSelectedFlag(residenceSelect, residenceFlag);
        
        console.log('Select résidence avec drapeau initialisé');
    }
    
    // Gestion d'erreur pour les images de drapeaux
    const flagImages = document.querySelectorAll('.selected-flag');
    flagImages.forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Image de drapeau non trouvée: ${this.src}`);
            // Fallback: masquer l'image ou utiliser une image par défaut
            this.style.display = 'none';
        });
        
        img.addEventListener('load', function() {
            this.style.display = 'block';
        });
    });
}

// ==============================================
// GESTION DU FORMULAIRE DE CANDIDATURE
// ==============================================

function initApplicationForm() {
    const form = document.getElementById('applicationForm');
    const fileInput = document.getElementById('fileInput');
    const dropZone = document.getElementById('dropZone');
    const uploadedFilesDisplay = document.getElementById('uploadedFilesDisplay');
    const uploadedFilesList = document.getElementById('uploadedFilesList');
    const cancelBtn = document.getElementById('cancelBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    if (form) {
        // Gestion du drag & drop
        if (dropZone && fileInput) {
            dropZone.addEventListener('click', () => fileInput.click());
            
            dropZone.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.classList.add('drag-over');
            });
            
            dropZone.addEventListener('dragleave', function(e) {
                e.preventDefault();
                this.classList.remove('drag-over');
            });
            
            dropZone.addEventListener('drop', function(e) {
                e.preventDefault();
                this.classList.remove('drag-over');
                const files = e.dataTransfer.files;
                handleFiles(files);
            });
            
            fileInput.addEventListener('change', function(e) {
                handleFiles(this.files);
            });
        }
        
        // Gestion des boutons
        if (cancelBtn) {
            cancelBtn.addEventListener('click', function() {
                if (confirm('Êtes-vous sûr de vouloir annuler votre candidature ?')) {
                    form.reset();
                    formFiles = [];
                    updateFilesList();
                }
            });
        }
        
        // Soumission du formulaire
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Animation de soumission
                if (submitBtn) {
                    const originalText = submitBtn.textContent;
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
                    
                    // Simuler l'envoi
                    setTimeout(() => {
                        alert('Candidature soumise avec succès !');
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                        form.reset();
                        formFiles = [];
                        updateFilesList();
                    }, 2000);
                }
            }
        });
        
        // Validation en temps réel
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('input', function() {
                if (this.classList.contains('is-invalid')) {
                    validateField(this);
                }
            });
        });
    }
    
    function handleFiles(files) {
        Array.from(files).forEach(file => {
            // Vérifier le type de fichier
            const allowedTypes = ['.pdf', '.docx', '.doc'];
            const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
            
            if (!allowedTypes.includes(fileExtension)) {
                alert(`Type de fichier non supporté: ${file.name}. Utilisez PDF, DOC ou DOCX.`);
                return;
            }
            
            // Vérifier la taille (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                alert(`Fichier trop volumineux: ${file.name}. Taille maximum: 5MB.`);
                return;
            }
            
            // Éviter les doublons
            if (!formFiles.find(f => f.name === file.name && f.size === file.size)) {
                formFiles.push(file);
                updateFilesList();
            }
        });
    }
    
    function updateFilesList() {
        if (!uploadedFilesList || !uploadedFilesDisplay) return;
        
        uploadedFilesList.innerHTML = '';
        
        if (formFiles.length === 0) {
            uploadedFilesDisplay.classList.remove('has-files');
            return;
        }
        
        uploadedFilesDisplay.classList.add('has-files');
        
        formFiles.forEach((file, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'uploaded-file-item';
            
            const fileExtension = file.name.split('.').pop().toLowerCase();
            let icon = 'fas fa-file';
            if (fileExtension === 'pdf') {
                icon = 'fas fa-file-pdf';
            } else if (['doc', 'docx'].includes(fileExtension)) {
                icon = 'fas fa-file-word';
            }
            
            fileItem.innerHTML = `
                <div class="uploaded-file-info">
                    <i class="${icon} uploaded-file-icon"></i>
                    <div class="uploaded-file-details">
                        <div class="uploaded-file-name">${file.name}</div>
                    </div>
                </div>
                <button type="button" class="uploaded-file-remove" onclick="removeFile(${index})" 
                        aria-label="Supprimer ${file.name}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            uploadedFilesList.appendChild(fileItem);
        });
    }
    
    // Fonction globale pour supprimer les fichiers
    window.removeFile = function(index) {
        formFiles.splice(index, 1);
        updateFilesList();
    };
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';
        
        // Validation selon le type de champ
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'Ce champ est obligatoire';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Format d\'email invalide';
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[0-9+\s\-\(\)]{8,20}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                message = 'Format de téléphone invalide';
            }
        }
        
        // Appliquer les styles de validation
        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
        }
        
        // Afficher le message d'erreur
        const feedback = field.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = message;
        }
        
        return isValid;
    }
    
    function validateForm() {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
}

// ==============================================
// ANIMATIONS AU SCROLL
// ==============================================

function initScrollAnimations() {
    // Observer pour les animations d'entrée
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animation spéciale pour les indicateurs
                if (entry.target.classList.contains('indicator-card')) {
                    animateCounters(entry.target);
                }
                
                animationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Éléments à animer
    const elementsToAnimate = document.querySelectorAll(`
        .value-item,
        .indicator-card,
        .partner-logo,
        .application-form-container
    `);
    
    elementsToAnimate.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        animationObserver.observe(element);
    });
}

function animateCounters(card) {
    const numberElement = card.querySelector('.indicator-number');
    if (!numberElement) return;
    
    const target = parseInt(numberElement.getAttribute('data-target'));
    const duration = 2000; // 2 secondes
    const steps = 60;
    const stepValue = target / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
        current += stepValue;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        numberElement.textContent = Math.floor(current);
    }, stepDuration);
}

// ==============================================
// GESTION DES TRADUCTIONS POUR LA PAGE
// ==============================================

function setLanguageOurTeam(lang) {
    const pageTranslations = ourTeamTranslations[lang];
    
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
                if (pageTranslations[key].includes('<span class=')) {
                    element.innerHTML = pageTranslations[key];
                } else {
                    element.textContent = pageTranslations[key];
                }
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
                if (generalTranslation.includes('<span class=')) {
                    element.innerHTML = generalTranslation;
                } else {
                    element.textContent = generalTranslation;
                }
            }
        }
    });
    
    // Mettre à jour le titre de la page
    if (pageTranslations.page_title_our_team) {
        document.title = pageTranslations.page_title_our_team;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page Our Team`);
}

// ==============================================
// SMOOTH SCROLL ADAPTÉ POUR LA PAGE
// ==============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const topBanner = document.querySelector('.top-banner');
                const navbar = document.querySelector('.navbar');
                const totalHeaderHeight = (topBanner ? topBanner.offsetHeight : 0) + 
                                        (navbar ? navbar.offsetHeight : 0);
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
// ACCESSIBILITÉ
// ==============================================

function initAccessibility() {
    // Support du mode contraste élevé
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Support du mode mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Désactiver les animations
        const animatedElements = document.querySelectorAll(`
            .value-item,
            .indicator-card,
            .partner-logo,
            .application-form-container
        `);
        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
            element.style.transition = 'none';
        });
        
        // Désactiver l'auto-scroll du carrousel
        if (partnersCarousel) {
            partnersCarousel.pause();
        }
    }
    
    // Gestion des touches clavier
    document.addEventListener('keydown', function(e) {
        // Échap pour fermer le mega menu
        if (e.key === 'Escape' && megaMenuOpen) {
            const megaMenuDropdown = document.querySelector('.mega-menu-dropdown');
            if (megaMenuDropdown) {
                megaMenuDropdown.dispatchEvent(new Event('mouseleave'));
            }
        }
    });
    
    // Améliorer l'accessibilité des éléments interactifs
    const interactiveElements = document.querySelectorAll(`
        .custom-carousel-control,
        .mega-menu-item,
        .btn-cancel,
        .btn-submit,
        .uploaded-file-remove
    `);
    
    interactiveElements.forEach(element => {
        // Support du focus visible
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-blue)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initOurTeamPage() {
    // Initialiser toutes les fonctionnalités
    initMegaMenuOurTeam();
    initPartnersCarousel(); // NOUVEAU - Carrousel Bootstrap
    initFlagSelects(); // NOUVEAU - Gestion des drapeaux
    initApplicationForm();
    initScrollAnimations();
    initSmoothScroll();
    initAccessibility();
    
    // Charger la langue sauvegardée ou française par défaut
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageOurTeam(savedLanguage);
    } catch (e) {
        setLanguageOurTeam('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageOurTeam(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            // Appeler la fonction originale
            originalSetLanguage(lang);
            // Appliquer nos traductions spécifiques
            setLanguageOurTeam(lang);
        };
    }
    
    console.log('Page Our Team initialisée avec succès (version complète avec modifications)');
}

// ==============================================
// GESTION DES ERREURS ET FALLBACKS
// ==============================================

window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('selected-flag')) {
        console.warn('Erreur de chargement de drapeau:', e.target.src);
        e.target.style.display = 'none';
    }
    
    if (e.target.tagName === 'IMG' && e.target.classList.contains('partner-img')) {
        console.warn('Erreur de chargement d\'image partenaire:', e.target.src);
        e.target.style.opacity = '0.5';
        e.target.alt = 'Image non disponible';
    }
});

// Fallback si Bootstrap n'est pas chargé
if (typeof bootstrap === 'undefined') {
    console.warn('Bootstrap non détecté. Certaines fonctionnalités peuvent ne pas fonctionner.');
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOurTeamPage);
} else {
    initOurTeamPage();
}

// Réinitialiser les animations des indicateurs si elles existent
window.addEventListener('languageChanged', () => {
    const indicatorsSection = document.getElementById('indicators');
    if (indicatorsSection) {
        setTimeout(() => {
            const indicators = indicatorsSection.querySelectorAll('.indicator-card');
            indicators.forEach(indicator => {
                if (indicator.style.opacity === '1') {
                    animateCounters(indicator);
                }
            });
        }, 300);
    }
});

// Export des fonctions pour utilisation externe
window.OurTeamPage = {
    initOurTeamPage,
    setLanguageOurTeam,
    initMegaMenuOurTeam,
    initPartnersCarousel,
    initFlagSelects,
    initApplicationForm,
    initScrollAnimations,
    ourTeamTranslations
};