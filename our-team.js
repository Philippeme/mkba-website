// ==============================================
// JAVASCRIPT COMPLET POUR LA PAGE OUR TEAM - UPLOAD CORRIGÉ
// ==============================================

// Variables globales pour la page Our Team
let megaMenuOpen = false;
let partnersCarousel = null;
let currentLanguageOurTeam = 'fr';

// Traductions spécifiques à la page Our Team
const ourTeamTranslations = {
    fr: {
        page_title_our_team: "Notre équipe - Excellence en Solutions Technologiques",
        breadcrumb_who_we_are: "Qui nous sommes",
        breadcrumb_our_team: "Our Team",
        hero_title1: "Innovators. Collaborators. Achievers.",
        hero_description: "Chez MK BA, notre succès est guidé par les personnes exceptionnelles qui se trouvent derrière nos solutions. Nous sommes une équipe diversifiée d'experts intervenant dans nos différents domaines de compétence et unis par une passion pour l'excellence et l'impact.",
        collective_effort_title: "Votre succès est notre effort collectif",
        collective_effort_description: "Nous fournissons des experts techniques, des chefs de projet et des fonctions de support pour obtenir des résultats exceptionnels. Nous fournissons des logiciels de qualité avec nos spécialistes techniques soutenus par des experts du domaine métier (santé, gouvernement, environnement, justice, etc.).",
        expertise_title: "Là où l'expertise rencontre la passion",
        expertise_subtitle: "Les membres de notre équipe détiennent des certifications de pointe dans l'industrie, qui confirment, avec leur expérience, leur capacité à livrer efficacement.",
        values_title: "Nos valeurs",
        value_integrity_title: "Intégrité",
        value_integrity_desc: "Nous faisons la bonne chose, de la bonne manière, au bon moment, toujours.",
        value_collaboration_title: "Collaboration",
        value_collaboration_desc: "Nous prospérons grâce au partenariat et à l'intelligence collective.",
        value_impact_title: "Impact",
        value_impact_desc: "Nous sommes motivés par des résultats qui comptent.",
        value_innovation_title: "Innovation",
        value_innovation_desc: "Nous embrassons le changement et cherchons des moyens plus intelligents de résoudre les défis.",
        join_us_title: "Rejoignez-nous",
        join_us_description: "Rejoignez une organisation qui vous aidera à révéler le meilleur de votre potentiel et vous mènera à créer le meilleur impact",
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
        upload_size: "Taille : 5 Mo Maximum",
        drop_zone_text: "Depuis l'appareil",
        uploaded_files_title: "Depuis l'appareil",
        btn_cancel: "Annuler la candidature",
        btn_submit: "Enregistrer et continuer",
        indicators_title: "Quelques indicateurs clés de MK BA",
        indicator_label: "Etiam convallis"
    },
    
    en: {
        page_title_our_team: "Our Team - Excellence in Technology Solutions",
        breadcrumb_who_we_are: "Who we are",
        breadcrumb_our_team: "Our Team",
        hero_title1: "Innovators. Collaborators. Achievers.",
        hero_description: "At MK BA, our success is driven by the exceptional people behind our solutions. We are a diverse team of experts intervening in our different fields of competency and united by a passion for excellence and impact.",
        collective_effort_title: "Your Success Is Our Collective Effort",
        collective_effort_description: "We provide tech experts, project managers and support functions to deliver outstanding results. We deliver quality software with our tech specialists that are supported by business domain experts (healthcare, government, environment, justice, etc.).",
        expertise_title: "Where Expertise Meets Passion",
        expertise_subtitle: "Our team members hold industry-leading certifications, that confirm, with their experience, their ability to deliver effectively.",
        values_title: "Our values",
        value_integrity_title: "Integrity",
        value_integrity_desc: "We do the right thing, the right way, at the right time, always.",
        value_collaboration_title: "Collaboration",
        value_collaboration_desc: "We thrive on partnership and collective intelligence.",
        value_impact_title: "Impact",
        value_impact_desc: "We are driven by results that matter.",
        value_innovation_title: "Innovation",
        value_innovation_desc: "We embrace change and seek smarter ways to solve challenges.",
        join_us_title: "Join Us",
        join_us_description: "Join an organization that will help you bring out the best of your potential and lead you create the best impact",
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
        upload_size: "Size: 5 Mo Maximum",
        drop_zone_text: "From device",
        uploaded_files_title: "From device",
        btn_cancel: "Cancel application",
        btn_submit: "Save and continue",
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
            dropdownToggle.removeAttribute('data-bs-toggle');
            
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
            
            document.addEventListener('click', function(e) {
                if (megaMenuOpen && !megaMenuDropdown.contains(e.target)) {
                    megaMenuOpen = false;
                    dropdownMenu.classList.remove('show');
                    navbar.classList.remove('mega-menu-open');
                    updateMegaMenuStyles(false);
                }
            });
            
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
// CARROUSEL BOOTSTRAP POUR LES PARTENAIRES
// ==============================================

function initPartnersCarousel() {
    const carouselElement = document.getElementById('partnersCarousel');
    if (carouselElement) {
        partnersCarousel = new bootstrap.Carousel(carouselElement, {
            interval: 4000,
            wrap: true,
            pause: 'hover',
            touch: true,
            ride: 'carousel'
        });
        
        partnersCarousel.cycle();
        
        const prevButton = carouselElement.querySelector('.carousel-control-prev');
        const nextButton = carouselElement.querySelector('.carousel-control-next');
        
        if (prevButton) {
            prevButton.addEventListener('click', function(e) {
                e.preventDefault();
                partnersCarousel.prev();
                setTimeout(() => {
                    partnersCarousel.cycle();
                }, 1000);
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault();
                partnersCarousel.next();
                setTimeout(() => {
                    partnersCarousel.cycle();
                }, 1000);
            });
        }
        
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
// GESTION DU FORMULAIRE DE CANDIDATURE 
// ==============================================

function initApplicationForm() {
    const form = document.getElementById('applicationForm');
    const fileInput = document.getElementById('fileInput');
    const dropZone = document.getElementById('dropZone');
    const uploadedFilesDisplay = document.getElementById('uploadedFilesDisplay');
    const fileList = document.getElementById('fileList');
    const cancelBtn = document.getElementById('cancelBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    console.log('Initialisation du formulaire');
    console.log('uploadedFilesDisplay:', uploadedFilesDisplay);
    console.log('fileList:', fileList);
    
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
                console.log('Fichiers sélectionnés:', this.files.length);
                handleFiles(this.files);
                // Réinitialiser l'input pour permettre la sélection du même fichier
                this.value = '';
            });
        }
        
        // Gestion des boutons
        if (cancelBtn) {
            cancelBtn.addEventListener('click', function() {
                if (confirm('Êtes-vous sûr de vouloir annuler votre candidature ?')) {
                    form.reset();
                    // Vider la liste des fichiers
                    if (fileList) {
                        fileList.innerHTML = '';
                    }
                    // Masquer la section des fichiers uploadés
                    if (uploadedFilesDisplay) {
                        uploadedFilesDisplay.classList.remove('has-files');
                        console.log('Section fichiers masquée');
                    }
                }
            });
        }
        
        // Soumission du formulaire
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
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
                        
                        // Vider la liste des fichiers
                        if (fileList) {
                            fileList.innerHTML = '';
                        }
                        // Masquer la section des fichiers uploadés
                        if (uploadedFilesDisplay) {
                            uploadedFilesDisplay.classList.remove('has-files');
                        }
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
    
    // Fonction pour gérer les fichiers 
    function handleFiles(files) {
        console.log('Traitement de', files.length, 'fichiers');
        
        Array.from(files).forEach(file => {
            console.log('Traitement du fichier:', file.name, 'Type:', file.type);
            
            // Vérifier le type de fichier - UNIQUEMENT PDF ET DOCX
            const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
            
            if (!allowedTypes.includes(file.type)) {
                alert(`Type de fichier non supporté: ${file.name}. Utilisez uniquement PDF ou DOCX.`);
                return;
            }
            
            // Vérifier la taille (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                alert(`Fichier trop volumineux: ${file.name}. Taille maximum: 5MB.`);
                return;
            }
            
            // Ajouter le fichier à la liste - STYLE CONTACT
            addFileToList(file);
        });
    }
    
    // Fonction pour ajouter un fichier à la liste - ADAPTÉE DE CONTACT
    function addFileToList(file) {
        console.log('Ajout du fichier à la liste:', file.name);
        
        if (!fileList) {
            console.error('fileList element not found!');
            return;
        }
        
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <span class="file-name">${file.name} (${formatFileSize(file.size)})</span>
            <span class="file-remove" onclick="removeFileOurTeam(this)">
                Supprimer
            </span>
        `;
        
        // Stocker le fichier dans l'élément pour la soumission
        fileItem.fileData = file;
        
        fileList.appendChild(fileItem);
        console.log('Fichier ajouté au DOM');
        
        // Afficher la section des fichiers uploadés avec la classe has-files
        if (uploadedFilesDisplay) {
            uploadedFilesDisplay.classList.add('has-files');
            console.log('Classe has-files ajoutée, display devrait être:', window.getComputedStyle(uploadedFilesDisplay).display);
        } else {
            console.error('uploadedFilesDisplay element not found!');
        }
    }
    
    // Fonction pour formater la taille du fichier
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';
        
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
        
        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
        }
        
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

// Fonction globale pour supprimer les fichiers 
window.removeFileOurTeam = function(element) {
    const fileItem = element.closest('.file-item');
    if (fileItem) {
        fileItem.remove();
        
        // Vérifier s'il reste des fichiers
        const fileList = document.getElementById('fileList');
        const uploadedFilesDisplay = document.getElementById('uploadedFilesDisplay');
        
        if (fileList && fileList.children.length === 0 && uploadedFilesDisplay) {
            // Masquer la section si plus aucun fichier
            uploadedFilesDisplay.classList.remove('has-files');
        }
    }
};

// ==============================================
// ANIMATIONS AU SCROLL
// ==============================================

function initScrollAnimations() {
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                if (entry.target.classList.contains('indicator-card')) {
                    animateCounters(entry.target);
                }
                
                animationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
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
    const duration = 2000;
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
    currentLanguageOurTeam = lang;
    const pageTranslations = ourTeamTranslations[lang];
    
    if (!pageTranslations) return;
    
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
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
        } else if (window.MKBAWebsite && window.MKBAWebsite.translationsData[lang] && window.MKBAWebsite.translationsData[lang][key]) {
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
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
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
        
        if (partnersCarousel) {
            partnersCarousel.pause();
        }
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && megaMenuOpen) {
            const megaMenuDropdown = document.querySelector('.mega-menu-dropdown');
            if (megaMenuDropdown) {
                megaMenuDropdown.dispatchEvent(new Event('mouseleave'));
            }
        }
    });
    
    const interactiveElements = document.querySelectorAll(`
        .custom-carousel-control,
        .mega-menu-item,
        .btn-cancel,
        .btn-submit,
        .file-remove
    `);
    
    interactiveElements.forEach(element => {
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
    initMegaMenuOurTeam();
    initPartnersCarousel();
    initApplicationForm();
    initScrollAnimations();
    initSmoothScroll();
    initAccessibility();
    
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageOurTeam(savedLanguage);
    } catch (e) {
        setLanguageOurTeam('fr');
    }
    
    window.addEventListener('languageChanged', (e) => {
        setLanguageOurTeam(e.detail.language);
    });
    
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            originalSetLanguage(lang);
            setLanguageOurTeam(lang);
        };
    }
    
    console.log('Page Our Team initialisée avec succès (upload corrigé style Contact)');
}

// ==============================================
// GESTION DES ERREURS ET FALLBACKS
// ==============================================

window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('partner-img')) {
        console.warn('Erreur de chargement d\'image partenaire:', e.target.src);
        e.target.style.opacity = '0.5';
        e.target.alt = 'Image non disponible';
    }
}, true);

if (typeof bootstrap === 'undefined') {
    console.warn('Bootstrap non détecté. Certaines fonctionnalités peuvent ne pas fonctionner.');
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOurTeamPage);
} else {
    initOurTeamPage();
}

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
    initApplicationForm,
    initScrollAnimations,
    ourTeamTranslations
};