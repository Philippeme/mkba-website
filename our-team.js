// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE OUR TEAM
// ==============================================

// Variables globales pour la page Our team
let megaMenuOpen = false;
let carouselCurrentIndex = 0;
let carouselAutoplay = null;
let carouselPaused = false;
let uploadedFiles = [];

// Traductions spécifiques à la page Our team
const ourTeamTranslations = {
    fr: {
        // Meta et navigation
        page_title_our_team: "Notre équipe - Excellence en Solutions Technologiques",
        nav_we_are_mkba: "Nous sommes MK BA",
        nav_our_team: "Notre équipe",
        nav_sustainability: "Notre engagement pour la durabilité",
        nav_technologies: "Technologies",
        nav_work_with_us: "Travailler avec nous",
        
        // Dropdown sous-menu
        dropdown_title: "Qui nous sommes",
        dropdown_description: "Découvrez notre équipe, nos valeurs et notre engagement pour l'excellence technologique en Afrique.",
        
        // Hero et fil d'Ariane
        breadcrumb_home: "Home",
        breadcrumb_our_team: "Our Team",
        hero_title1: "Innovators. Collaborators. Achievers.",
        hero_description: "At MK BA, our success is driven by the exceptional people behind our solutions. We are a diverse team of experts intervening in our different fields of competency and united by a passion for excellence and impact.",
        
        // Section "Your Success Is Our Collective Effort"
        collective_effort_title: "Your Success Is Our Collective Effort",
        collective_effort_description: "We provide tech experts, project managers and support functions to deliver outstanding results. We deliver quality software with our tech specialists that are supported by business domain experts (healthcare, government, environment, justice, etc.).",
        
        // Section "WHERE EXPERTISE MEETS PASSION"
        expertise_title: "Where Expertise Meets Passion",
        expertise_subtitle: "Our team members hold industry-leading certifications, that confirm, with their experience, their ability to deliver effectively.",
        
        // Section "OUR VALUES"
        values_title: "Our values",
        value_integrity_title: "Integrity",
        value_integrity_desc: "We do the right thing, the right way, at the right time, always.",
        value_collaboration_title: "Collaboration",
        value_collaboration_desc: "We thrive on partnership and collective intelligence.",
        value_impact_title: "Impact",
        value_impact_desc: "We are driven by results that matter.",
        value_innovation_title: "Innovation",
        value_innovation_desc: "We embrace change and seek smarter ways to solve challenges.",
        
        // Section "JOIN US"
        join_us_title: "Join Us",
        join_us_description: "Join an organization that will help you bring out the best of your potential and lead you create the best impact",
        
        // Formulaire
        form_title: "Candidature spontanée",
        required_fields: "Les champs marqués d'un * sont obligatoires",
        special_chars_note: "Veuillez éviter d'utiliser des caractères spéciaux (par exemple des parenthèses) dans les champs de nom.",
        
        // Labels du formulaire
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
        
        // Options formulaire
        marital_married: "Marié",
        marital_single: "Célibataire",
        marital_divorced: "Divorcé",
        marital_widowed: "Veuf/Veuve",
        gender_male: "Homme",
        gender_female: "Femme",
        
        // Upload section
        upload_title: "Téléverser votre Cv lettre de motivation",
        upload_format: "Format : Docx, pdf",
        upload_size: "Taille : Mo Maximum",
        drop_zone_text: "Depuis l'appareil",
        
        // Boutons
        btn_cancel: "Annuler la candidature",
        btn_submit: "Enregistrer et continuer",
        
        // Messages de validation
        validation_required: "Ce champ est obligatoire",
        validation_email: "Veuillez entrer une adresse email valide",
        validation_phone: "Veuillez entrer un numéro de téléphone valide",
        validation_file_type: "Format de fichier non supporté. Utilisez PDF ou DOCX.",
        validation_file_size: "Le fichier est trop volumineux. Maximum 1Mo.",
        
        // Messages upload
        file_uploaded: "Fichier ajouté avec succès",
        file_removed: "Fichier supprimé",
        upload_error: "Erreur lors de l'upload du fichier"
    },
    
    en: {
        // Meta et navigation
        page_title_our_team: "Our team - Excellence in Technology Solutions",
        nav_we_are_mkba: "We are MK BA",
        nav_our_team: "Our team",
        nav_sustainability: "Our commitment to sustainability",
        nav_technologies: "Technologies",
        nav_work_with_us: "Work with us",
        
        // Dropdown sous-menu
        dropdown_title: "Who we are",
        dropdown_description: "Discover our team, our values and our commitment to technological excellence in Africa.",
        
        // Hero et fil d'Ariane
        breadcrumb_home: "Home",
        breadcrumb_our_team: "Our Team",
        hero_title1: "Innovators. Collaborators. Achievers.",
        hero_description: "At MK BA, our success is driven by the exceptional people behind our solutions. We are a diverse team of experts intervening in our different fields of competency and united by a passion for excellence and impact.",
        
        // Section "Your Success Is Our Collective Effort"
        collective_effort_title: "Your Success Is Our Collective Effort",
        collective_effort_description: "We provide tech experts, project managers and support functions to deliver outstanding results. We deliver quality software with our tech specialists that are supported by business domain experts (healthcare, government, environment, justice, etc.).",
        
        // Section "WHERE EXPERTISE MEETS PASSION"
        expertise_title: "Where Expertise Meets Passion",
        expertise_subtitle: "Our team members hold industry-leading certifications, that confirm, with their experience, their ability to deliver effectively.",
        
        // Section "OUR VALUES"
        values_title: "Our values",
        value_integrity_title: "Integrity",
        value_integrity_desc: "We do the right thing, the right way, at the right time, always.",
        value_collaboration_title: "Collaboration",
        value_collaboration_desc: "We thrive on partnership and collective intelligence.",
        value_impact_title: "Impact",
        value_impact_desc: "We are driven by results that matter.",
        value_innovation_title: "Innovation",
        value_innovation_desc: "We embrace change and seek smarter ways to solve challenges.",
        
        // Section "JOIN US"
        join_us_title: "Join Us",
        join_us_description: "Join an organization that will help you bring out the best of your potential and lead you create the best impact",
        
        // Formulaire
        form_title: "Spontaneous application",
        required_fields: "Fields marked with * are required",
        special_chars_note: "Please avoid using special characters (e.g. parentheses) in name fields.",
        
        // Labels du formulaire
        label_last_name: "Last name *",
        label_first_name: "First name *",
        label_email: "Email *",
        label_phone: "Phone *",
        label_whatsapp: "WhatsApp *",
        label_skype: "Skype account",
        label_marital_status: "Marital Status",
        label_gender: "Your Gender",
        label_nationality: "What is your nationality",
        label_residence: "Country of residence",
        
        // Options formulaire
        marital_married: "Married",
        marital_single: "Single",
        marital_divorced: "Divorced",
        marital_widowed: "Widowed",
        gender_male: "Male",
        gender_female: "Female",
        
        // Upload section
        upload_title: "Upload your CV and cover letter",
        upload_format: "Format: Docx, pdf",
        upload_size: "Size: Mo Maximum",
        drop_zone_text: "From device",
        
        // Boutons
        btn_cancel: "Cancel application",
        btn_submit: "Save and continue",
        
        // Messages de validation
        validation_required: "This field is required",
        validation_email: "Please enter a valid email address",
        validation_phone: "Please enter a valid phone number",
        validation_file_type: "File format not supported. Use PDF or DOCX.",
        validation_file_size: "File is too large. Maximum 1MB.",
        
        // Messages upload
        file_uploaded: "File added successfully",
        file_removed: "File removed",
        upload_error: "Error uploading file"
    }
};

// ==============================================
// GESTION DU MEGA MENU "WHO WE ARE"
// ==============================================

function initMegaMenuOurTeamPage() {
    const megaMenuDropdown = document.querySelector('.mega-menu-dropdown');
    const navbar = document.querySelector('.navbar');
    
    if (megaMenuDropdown) {
        const dropdownToggle = megaMenuDropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = megaMenuDropdown.querySelector('.who-we-are-mega-menu');
        
        if (dropdownToggle && dropdownMenu) {
            // Supprimer l'attribut data-bs-toggle pour désactiver Bootstrap
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
            
            // Fermer seulement en cliquant à l'extérieur
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
        // Styles quand le mega menu est ouvert
        document.body.classList.add('mega-menu-open');
        if (topBanner) {
            topBanner.classList.add('mega-menu-open');
        }
    } else {
        // Styles par défaut
        document.body.classList.remove('mega-menu-open');
        if (topBanner) {
            topBanner.classList.remove('mega-menu-open');
        }
    }
}

// ==============================================
// CARROUSEL DE LOGOS PARTENAIRES
// ==============================================

function initPartnersCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const partnersCarousel = document.getElementById('partnersCarousel');
    
    if (!carouselTrack || !prevBtn || !nextBtn) return;
    
    const logos = carouselTrack.querySelectorAll('.partner-logo');
    const totalLogos = logos.length;
    
    // Configuration responsive
    function getVisibleLogos() {
        if (window.innerWidth <= 576) return 1; // Mobile
        if (window.innerWidth <= 992) return 3; // Tablette
        return 5; // Desktop
    }
    
    let visibleLogos = getVisibleLogos();
    let maxIndex = Math.max(0, totalLogos - visibleLogos);
    
    // Fonction pour mettre à jour la position du carrousel
    function updateCarouselPosition() {
        const logoWidth = 100 / visibleLogos;
        const translateX = -(carouselCurrentIndex * logoWidth);
        carouselTrack.style.transform = `translateX(${translateX}%)`;
        
        // Mettre à jour l'état des boutons
        prevBtn.disabled = carouselCurrentIndex <= 0;
        nextBtn.disabled = carouselCurrentIndex >= maxIndex;
        
        prevBtn.style.opacity = carouselCurrentIndex <= 0 ? '0.5' : '1';
        nextBtn.style.opacity = carouselCurrentIndex >= maxIndex ? '0.5' : '1';
    }
    
    // Navigation précédent
    prevBtn.addEventListener('click', function() {
        if (carouselCurrentIndex > 0) {
            carouselCurrentIndex--;
            updateCarouselPosition();
        }
    });
    
    // Navigation suivant
    nextBtn.addEventListener('click', function() {
        if (carouselCurrentIndex < maxIndex) {
            carouselCurrentIndex++;
            updateCarouselPosition();
        }
    });
    
    // Auto-scroll toutes les 3 secondes
    function startAutoplay() {
        if (carouselAutoplay) clearInterval(carouselAutoplay);
        
        carouselAutoplay = setInterval(() => {
            if (!carouselPaused) {
                if (carouselCurrentIndex >= maxIndex) {
                    carouselCurrentIndex = 0;
                } else {
                    carouselCurrentIndex++;
                }
                updateCarouselPosition();
            }
        }, 3000);
    }
    
    // Pause au hover
    partnersCarousel.addEventListener('mouseenter', function() {
        carouselPaused = true;
    });
    
    partnersCarousel.addEventListener('mouseleave', function() {
        carouselPaused = false;
    });
    
    // Responsive: recalculer lors du redimensionnement
    window.addEventListener('resize', function() {
        const newVisibleLogos = getVisibleLogos();
        if (newVisibleLogos !== visibleLogos) {
            visibleLogos = newVisibleLogos;
            maxIndex = Math.max(0, totalLogos - visibleLogos);
            carouselCurrentIndex = Math.min(carouselCurrentIndex, maxIndex);
            updateCarouselPosition();
        }
    });
    
    // Support clavier
    prevBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
    
    nextBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
    
    // Initialiser
    updateCarouselPosition();
    startAutoplay();
    
    console.log('Carrousel de partenaires initialisé');
}

// ==============================================
// FORMULAIRE DE CANDIDATURE - VALIDATION
// ==============================================

function initApplicationForm() {
    const form = document.getElementById('applicationForm');
    const fileInput = document.getElementById('fileInput');
    const dropZone = document.getElementById('dropZone');
    const uploadedFilesContainer = document.getElementById('uploadedFiles');
    const submitBtn = document.getElementById('submitBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    
    if (!form) return;
    
    // Configuration de validation
    const validationRules = {
        lastName: { required: true, pattern: /^[a-zA-ZÀ-ÿ\s-]+$/ },
        firstName: { required: true, pattern: /^[a-zA-ZÀ-ÿ\s-]+$/ },
        email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        phone: { required: true, pattern: /^[0-9+\s-()]+$/ },
        whatsapp: { required: true, pattern: /^[0-9+\s-()]+$/ }
    };
    
    // Validation en temps réel
    Object.keys(validationRules).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            field.addEventListener('blur', () => validateField(field));
            field.addEventListener('input', () => clearFieldError(field));
        }
    });
    
    // Fonction de validation d'un champ
    function validateField(field) {
        const rule = validationRules[field.name];
        const value = field.value.trim();
        
        // Vérifier si requis
        if (rule.required && !value) {
            showFieldError(field, getTranslation('validation_required'));
            return false;
        }
        
        // Vérifier le pattern
        if (value && rule.pattern && !rule.pattern.test(value)) {
            let errorMessage = getTranslation('validation_required');
            
            if (field.type === 'email') {
                errorMessage = getTranslation('validation_email');
            } else if (field.type === 'tel' || field.name.includes('phone')) {
                errorMessage = getTranslation('validation_phone');
            }
            
            showFieldError(field, errorMessage);
            return false;
        }
        
        clearFieldError(field);
        return true;
    }
    
    // Afficher une erreur sur un champ
    function showFieldError(field, message) {
        field.classList.add('is-invalid');
        const feedback = field.parentElement.querySelector('.invalid-feedback');
        if (feedback) {
            feedback.textContent = message;
        }
    }
    
    // Effacer l'erreur d'un champ
    function clearFieldError(field) {
        field.classList.remove('is-invalid');
        const feedback = field.parentElement.querySelector('.invalid-feedback');
        if (feedback) {
            feedback.textContent = '';
        }
    }
    
    // Validation complète du formulaire
    function validateForm() {
        let isValid = true;
        
        Object.keys(validationRules).forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (field && !validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    // Soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Simuler la soumission
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
            
            setTimeout(() => {
                showNotification(getTranslation('file_uploaded'));
                submitBtn.disabled = false;
                submitBtn.textContent = getTranslation('btn_submit');
            }, 2000);
        }
    });
    
    // Bouton annuler
    cancelBtn.addEventListener('click', function() {
        if (confirm('Êtes-vous sûr de vouloir annuler votre candidature ?')) {
            form.reset();
            uploadedFiles = [];
            updateUploadedFilesList();
        }
    });
    
    console.log('Formulaire de candidature initialisé');
}

// ==============================================
// UPLOAD DE FICHIERS AVEC DRAG & DROP
// ==============================================

function initFileUpload() {
    const fileInput = document.getElementById('fileInput');
    const dropZone = document.getElementById('dropZone');
    const uploadedFilesContainer = document.getElementById('uploadedFiles');
    
    if (!fileInput || !dropZone) return;
    
    // Configuration des fichiers acceptés
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
    const maxFileSize = 1024 * 1024; // 1MB
    
    // Click sur la zone de drop
    dropZone.addEventListener('click', function() {
        fileInput.click();
    });
    
    // Drag & Drop
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
        
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    });
    
    // Sélection de fichiers
    fileInput.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        handleFiles(files);
    });
    
    // Traitement des fichiers
    function handleFiles(files) {
        files.forEach(file => {
            if (validateFile(file)) {
                addFileToList(file);
            }
        });
    }
    
    // Validation d'un fichier
    function validateFile(file) {
        // Vérifier le type
        if (!allowedTypes.includes(file.type)) {
            showNotification(getTranslation('validation_file_type'), 'error');
            return false;
        }
        
        // Vérifier la taille
        if (file.size > maxFileSize) {
            showNotification(getTranslation('validation_file_size'), 'error');
            return false;
        }
        
        // Vérifier les doublons
        if (uploadedFiles.some(f => f.name === file.name && f.size === file.size)) {
            showNotification('Ce fichier a déjà été ajouté', 'error');
            return false;
        }
        
        return true;
    }
    
    // Ajouter un fichier à la liste
    function addFileToList(file) {
        uploadedFiles.push(file);
        updateUploadedFilesList();
        showNotification(getTranslation('file_uploaded'));
    }
    
    // Mettre à jour l'affichage des fichiers
    function updateUploadedFilesList() {
        if (!uploadedFilesContainer) return;
        
        uploadedFilesContainer.innerHTML = '';
        
        uploadedFiles.forEach((file, index) => {
            const fileElement = document.createElement('div');
            fileElement.className = 'uploaded-file';
            fileElement.innerHTML = `
                <div class="file-info">
                    <i class="fas fa-file-pdf file-icon"></i>
                    <span class="file-name">${file.name}</span>
                </div>
                <button type="button" class="file-remove" onclick="removeFile(${index})" aria-label="Supprimer ${file.name}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            uploadedFilesContainer.appendChild(fileElement);
        });
    }
    
    // Supprimer un fichier (fonction globale)
    window.removeFile = function(index) {
        uploadedFiles.splice(index, 1);
        updateUploadedFilesList();
        showNotification(getTranslation('file_removed'));
    };
    
    console.log('Upload de fichiers initialisé');
}

// ==============================================
// ANIMATIONS AU SCROLL
// ==============================================

function initScrollAnimations() {
    // Animation des indicateurs (réutilise la fonction existante)
    if (window.MKBAWebsite && window.MKBAWebsite.initIndicatorsAnimation) {
        window.MKBAWebsite.initIndicatorsAnimation();
    }
    
    // Animation des valeurs
    const valueItems = document.querySelectorAll('.value-item');
    const valuesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    valueItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        valuesObserver.observe(item);
    });
    
    // Animation du formulaire
    const formSections = document.querySelectorAll('.form-header, .form-body');
    const formObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    formSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `all 0.8s ease ${index * 0.2}s`;
        formObserver.observe(section);
    });
}

// ==============================================
// GESTION DES TRADUCTIONS POUR LA PAGE
// ==============================================

function setLanguageOurTeamPage(lang) {
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
                if (pageTranslations[key].includes('<i class=')) {
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
                if (generalTranslation.includes('<i class=')) {
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
    
    // Mettre à jour les options de sélection
    updateSelectOptions(lang);
}

// Fonction utilitaire pour obtenir une traduction
function getTranslation(key) {
    const currentLang = getCurrentLanguage();
    const pageTranslations = ourTeamTranslations[currentLang];
    
    if (pageTranslations && pageTranslations[key]) {
        return pageTranslations[key];
    }
    
    // Fallback vers les traductions générales
    if (window.MKBAWebsite && window.MKBAWebsite.translationsData[currentLang] && window.MKBAWebsite.translationsData[currentLang][key]) {
        return window.MKBAWebsite.translationsData[currentLang][key];
    }
    
    return key; // Fallback vers la clé si aucune traduction trouvée
}

// Fonction pour obtenir la langue courante
function getCurrentLanguage() {
    try {
        return localStorage.getItem('mkba-language') || 'fr';
    } catch (e) {
        return 'fr';
    }
}

// Mettre à jour les options de sélection
function updateSelectOptions(lang) {
    const maritalSelect = document.getElementById('maritalStatus');
    if (maritalSelect) {
        const options = maritalSelect.querySelectorAll('option');
        options.forEach(option => {
            const key = option.getAttribute('data-i18n');
            if (key && ourTeamTranslations[lang] && ourTeamTranslations[lang][key]) {
                option.textContent = ourTeamTranslations[lang][key];
            }
        });
    }
    
    // Mettre à jour les labels des radio buttons
    const genderLabels = document.querySelectorAll('.form-check-label[data-i18n]');
    genderLabels.forEach(label => {
        const key = label.getAttribute('data-i18n');
        if (key && ourTeamTranslations[lang] && ourTeamTranslations[lang][key]) {
            label.textContent = ourTeamTranslations[lang][key];
        }
    });
}

// ==============================================
// GESTION DU FIL D'ARIANE
// ==============================================

function initBreadcrumbNavigation() {
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Animation de transition douce
            this.style.color = 'var(--primary-orange)';
            
            setTimeout(() => {
                window.location.href = href;
            }, 200);
        });
    });
}

// ==============================================
// SMOOTH SCROLL ADAPTÉ POUR LA PAGE
// ==============================================

function initSmoothScrollOurTeamPage() {
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
// NOTIFICATION SYSTÈME
// ==============================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Styles selon le type
    const styles = {
        success: { background: '#27ae60', color: 'white' },
        error: { background: '#e74c3c', color: 'white' },
        info: { background: '#3498db', color: 'white' }
    };
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: 'calc(var(--total-header-height) + 10px)',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '5px',
        zIndex: '9999',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        opacity: '0',
        transform: 'translateY(-20px)',
        ...styles[type]
    });
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Animation de sortie
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initOurTeamPage() {
    // Initialiser toutes les fonctionnalités spécifiques
    initMegaMenuOurTeamPage();
    initPartnersCarousel();
    initApplicationForm();
    initFileUpload();
    initScrollAnimations();
    initBreadcrumbNavigation();
    initSmoothScrollOurTeamPage();
    
    // Charger la langue sauvegardée ou française par défaut
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageOurTeamPage(savedLanguage);
    } catch (e) {
        setLanguageOurTeamPage('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageOurTeamPage(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        // Surcharger la fonction setLanguage pour inclure nos traductions
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            // Appeler la fonction originale
            originalSetLanguage(lang);
            // Appliquer nos traductions spécifiques
            setLanguageOurTeamPage(lang);
        };
    }
    
    console.log('Page Our Team initialisée avec succès');
}

// ==============================================
// UTILITAIRES D'ACCESSIBILITÉ
// ==============================================

function initAccessibilityOurTeamPage() {
    // Améliorer l'accessibilité du carrousel
    const carouselBtns = document.querySelectorAll('.carousel-btn');
    carouselBtns.forEach(btn => {
        btn.setAttribute('role', 'button');
        btn.setAttribute('aria-label', btn.classList.contains('carousel-prev') ? 'Précédent' : 'Suivant');
    });
    
    // Améliorer l'accessibilité du formulaire
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label && input.hasAttribute('required')) {
            input.setAttribute('aria-required', 'true');
        }
    });
    
    // Améliorer l'accessibilité de la zone de drop
    const dropZone = document.getElementById('dropZone');
    if (dropZone) {
        dropZone.setAttribute('role', 'button');
        dropZone.setAttribute('aria-label', 'Zone de téléchargement de fichiers - Cliquez pour sélectionner ou glissez des fichiers');
        dropZone.setAttribute('tabindex', '0');
        
        dropZone.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.getElementById('fileInput').click();
            }
        });
    }
    
    // Support du mode contraste élevé
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Support du mode mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        // Désactiver l'autoplay du carrousel
        if (carouselAutoplay) {
            clearInterval(carouselAutoplay);
        }
    }
}

// ==============================================
// GESTION RESPONSIVE
// ==============================================

function initResponsiveFeatures() {
    // Adaptation mobile du formulaire
    function handleFormResponsive() {
        const formActions = document.querySelector('.form-actions');
        if (formActions && window.innerWidth <= 768) {
            formActions.style.flexDirection = 'column';
            formActions.querySelectorAll('button').forEach(btn => {
                btn.style.width = '100%';
            });
        } else if (formActions) {
            formActions.style.flexDirection = 'row';
            formActions.querySelectorAll('button').forEach(btn => {
                btn.style.width = 'auto';
            });
        }
    }
    
    // Écouter les changements de taille d'écran
    window.addEventListener('resize', function() {
        handleFormResponsive();
        
        // Réinitialiser le carrousel sur changement de breakpoint
        if (window.initPartnersCarousel) {
            // Le carrousel gère déjà le responsive dans sa propre fonction
        }
    });
    
    // Initialiser
    handleFormResponsive();
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt 
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initOurTeamPage();
        initAccessibilityOurTeamPage();
        initResponsiveFeatures();
    });
} else {
    initOurTeamPage();
    initAccessibilityOurTeamPage();
    initResponsiveFeatures();
}

// Réinitialiser les animations des indicateurs si elles existent sur cette page
window.addEventListener('languageChanged', () => {
    const indicatorsSection = document.getElementById('indicators');
    if (indicatorsSection && window.MKBAWebsite && window.MKBAWebsite.animateCountersOptimized) {
        setTimeout(() => {
            window.MKBAWebsite.animateCountersOptimized();
        }, 300);
    }
});

// Export des fonctions pour utilisation externe
window.OurTeamPage = {
    initOurTeamPage,
    setLanguageOurTeamPage,
    initMegaMenuOurTeamPage,
    initPartnersCarousel,
    initApplicationForm,
    initFileUpload,
    ourTeamTranslations,
    showNotification,
    removeFile: window.removeFile
};