// ==============================================
// JAVASCRIPT SPÉCIFIQUE POUR LA PAGE CONTACT
// ==============================================

// Variables globales pour la page Contact
let contactAnimationsInitialized = false;
let currentLanguageContact = 'fr';
let contactFormSubmitted = false;

// Traductions spécifiques à la page Contact
const contactTranslations = {
    fr: {
        // Meta et navigation
        page_title_contact: "Contactez-nous - MK BA",
        nav_contact: "Contact us",
        
        // Hero Section
        contact_hero_title: "Contactez-nous",
        
        // Formulaire
        contact_form_title: "Écrivez - nous",
        contact_name_label: "Nom *",
        contact_phone_label: "Téléphone *",
        contact_email_label: "Email *",
        contact_company_label: "Entreprise",
        contact_message_label: "Message *",
        contact_file_upload: "Téléverser un fichier",
        contact_submit: "Envoyer",
        
        // Validation
        contact_name_error: "Veuillez saisir votre nom",
        contact_phone_error: "Veuillez saisir votre numéro de téléphone",
        contact_email_error: "Veuillez saisir une adresse email valide",
        contact_message_error: "Veuillez saisir votre message",
        
        // Section coordonnées
        contact_info_title: "Nos coordonnées",
        contact_address: "Rue 16-Maille 18, Cité SAD Banga-Japoma, Douala Cameroun",
        contact_social_title: "Suivez nous sur",
        
        // Messages de feedback
        contact_success: "Votre message a été envoyé avec succès !",
        contact_error: "Une erreur s'est produite. Veuillez réessayer.",
        contact_file_error: "Erreur lors du téléversement du fichier.",
        contact_file_too_large: "Le fichier est trop volumineux (max 10MB).",
        contact_file_type_error: "Type de fichier non autorisé.",
        
        // Boutons
        contact_sending: "Envoi en cours...",
        contact_remove_file: "Supprimer"
    },
    
    en: {
        // Meta et navigation
        page_title_contact: "Contact us - MK BA",
        nav_contact: "Contact us",
        
        // Hero Section
        contact_hero_title: "Contact us",
        
        // Formulaire
        contact_form_title: "Write to us",
        contact_name_label: "Name *",
        contact_phone_label: "Phone *",
        contact_email_label: "Email *",
        contact_company_label: "Company",
        contact_message_label: "Message *",
        contact_file_upload: "Upload a file",
        contact_submit: "Send",
        
        // Validation
        contact_name_error: "Please enter your name",
        contact_phone_error: "Please enter your phone number",
        contact_email_error: "Please enter a valid email address",
        contact_message_error: "Please enter your message",
        
        // Section coordonnées
        contact_info_title: "Our contact details",
        contact_address: "Rue 16-Maille 18, Cité SAD Banga-Japoma, Douala Cameroon",
        contact_social_title: "Follow us on",
        
        // Messages de feedback
        contact_success: "Your message has been sent successfully!",
        contact_error: "An error occurred. Please try again.",
        contact_file_error: "Error uploading file.",
        contact_file_too_large: "File is too large (max 10MB).",
        contact_file_type_error: "File type not allowed.",
        
        // Boutons
        contact_sending: "Sending...",
        contact_remove_file: "Remove"
    }
};

// ==============================================
// VALIDATION DU FORMULAIRE
// ==============================================

function validateContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return false;
    
    let isValid = true;
    
    // Validation du nom
    const nameField = document.getElementById('contact-name');
    if (nameField) {
        const nameValue = nameField.value.trim();
        if (nameValue.length < 2) {
            setFieldError(nameField, contactTranslations[currentLanguageContact].contact_name_error);
            isValid = false;
        } else {
            clearFieldError(nameField);
        }
    }
    
    // Validation de l'email
    const emailField = document.getElementById('contact-email');
    if (emailField) {
        const emailValue = emailField.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            setFieldError(emailField, contactTranslations[currentLanguageContact].contact_email_error);
            isValid = false;
        } else {
            clearFieldError(emailField);
        }
    }
    
    // Validation du téléphone
    const phoneField = document.getElementById('contact-phone');
    if (phoneField) {
        const phoneValue = phoneField.value.trim();
        if (phoneValue.length < 6) {
            setFieldError(phoneField, contactTranslations[currentLanguageContact].contact_phone_error);
            isValid = false;
        } else {
            clearFieldError(phoneField);
        }
    }
    
    // Validation du message
    const messageField = document.getElementById('contact-message');
    if (messageField) {
        const messageValue = messageField.value.trim();
        if (messageValue.length < 10) {
            setFieldError(messageField, contactTranslations[currentLanguageContact].contact_message_error);
            isValid = false;
        } else {
            clearFieldError(messageField);
        }
    }
    
    return isValid;
}

function setFieldError(field, message) {
    field.classList.add('is-invalid');
    const feedback = field.parentNode.querySelector('.invalid-feedback');
    if (feedback) {
        feedback.textContent = message;
    }
}

function clearFieldError(field) {
    field.classList.remove('is-invalid');
}

// ==============================================
// GESTION DES FICHIERS
// ==============================================

function initFileUpload() {
    const fileInput = document.getElementById('file-upload');
    const fileList = document.getElementById('fileList');
    
    if (!fileInput || !fileList) return;
    
    fileInput.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        
        files.forEach(file => {
            if (validateFile(file)) {
                addFileToList(file, fileList);
            }
        });
        
        // Réinitialiser l'input pour permettre la sélection du même fichier
        e.target.value = '';
    });
}

function validateFile(file) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'image/jpeg',
        'image/jpg',
        'image/png'
    ];
    
    if (file.size > maxSize) {
        showContactNotification(contactTranslations[currentLanguageContact].contact_file_too_large, 'error');
        return false;
    }
    
    if (!allowedTypes.includes(file.type)) {
        showContactNotification(contactTranslations[currentLanguageContact].contact_file_type_error, 'error');
        return false;
    }
    
    return true;
}

function addFileToList(file, container) {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    fileItem.innerHTML = `
        <span class="file-name">${file.name} (${formatFileSize(file.size)})</span>
        <span class="file-remove" onclick="removeFile(this)" data-i18n="contact_remove_file">
            ${contactTranslations[currentLanguageContact].contact_remove_file}
        </span>
    `;
    
    // Stocker le fichier dans l'élément pour la soumission
    fileItem.fileData = file;
    
    container.appendChild(fileItem);
}

function removeFile(element) {
    const fileItem = element.closest('.file-item');
    if (fileItem) {
        fileItem.remove();
    }
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// ==============================================
// SOUMISSION DU FORMULAIRE
// ==============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (contactFormSubmitted) return;
        
        if (validateContactForm()) {
            submitContactForm();
        }
    });
    
    // Validation en temps réel
    const fields = form.querySelectorAll('input, textarea');
    fields.forEach(field => {
        field.addEventListener('blur', function() {
            if (this.value.trim()) {
                validateFieldRealTime(this);
            }
        });
        
        field.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                validateFieldRealTime(this);
            }
        });
    });
}

function validateFieldRealTime(field) {
    const fieldId = field.id;
    
    switch(fieldId) {
        case 'contact-name':
            if (field.value.trim().length >= 2) {
                clearFieldError(field);
            }
            break;
        case 'contact-email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(field.value.trim())) {
                clearFieldError(field);
            }
            break;
        case 'contact-phone':
            if (field.value.trim().length >= 6) {
                clearFieldError(field);
            }
            break;
        case 'contact-message':
            if (field.value.trim().length >= 10) {
                clearFieldError(field);
            }
            break;
    }
}

async function submitContactForm() {
    const submitBtn = document.querySelector('.btn-submit');
    const form = document.getElementById('contactForm');
    
    // État de chargement
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    contactFormSubmitted = true;
    
    try {
        // Collecter les données du formulaire
        const formData = new FormData();
        formData.append('name', document.getElementById('contact-name').value.trim());
        formData.append('email', document.getElementById('contact-email').value.trim());
        formData.append('phone', document.getElementById('country-code').value + document.getElementById('contact-phone').value.trim());
        formData.append('company', document.getElementById('contact-company').value.trim());
        formData.append('message', document.getElementById('contact-message').value.trim());
        formData.append('language', currentLanguageContact);
        
        // Ajouter les fichiers
        const fileItems = document.querySelectorAll('.file-item');
        fileItems.forEach((item, index) => {
            if (item.fileData) {
                formData.append(`file_${index}`, item.fileData);
            }
        });
        
        // Simuler l'envoi (remplacer par l'API réelle)
        await simulateFormSubmission(formData);
        
        // Succès
        showContactSuccess();
        form.reset();
        document.getElementById('fileList').innerHTML = '';
        
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        showContactError();
    } finally {
        // Restaurer le bouton
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        contactFormSubmitted = false;
    }
}

async function simulateFormSubmission(formData) {
    // Simulation d'un délai d'envoi
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 90% de chance de succès pour la démo
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject(new Error('Erreur de simulation'));
            }
        }, 2000);
    });
}

function showContactSuccess() {
    const message = createFormMessage(
        contactTranslations[currentLanguageContact].contact_success, 
        'success'
    );
    insertFormMessage(message);
    
    // Scroll vers le message
    message.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showContactError() {
    const message = createFormMessage(
        contactTranslations[currentLanguageContact].contact_error, 
        'error'
    );
    insertFormMessage(message);
    
    // Scroll vers le message
    message.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function createFormMessage(text, type) {
    const message = document.createElement('div');
    message.className = `form-message ${type}`;
    message.textContent = text;
    message.style.opacity = '0';
    message.style.transform = 'translateY(-20px)';
    message.style.transition = 'all 0.3s ease';
    
    return message;
}

function insertFormMessage(message) {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Supprimer les anciens messages
    const existingMessages = form.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Insérer le nouveau message
    form.insertBefore(message, form.firstChild);
    
    // Animation d'apparition
    requestAnimationFrame(() => {
        message.style.opacity = '1';
        message.style.transform = 'translateY(0)';
    });
    
    // Supprimer automatiquement après 5 secondes
    setTimeout(() => {
        if (message.parentNode) {
            message.style.opacity = '0';
            message.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (message.parentNode) {
                    message.remove();
                }
            }, 300);
        }
    }, 5000);
}

// ==============================================
// ANIMATIONS HERO
// ==============================================

function initContactHeroAnimations() {
    const heroImage = document.querySelector('.hero-image');
    const heroTitle = document.querySelector('.contact-hero-title');
    
    if (!heroImage || !heroTitle) return;
    
    // Observer pour déclencher les animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animation de l'image
                heroImage.style.transform = 'scale(1.02)';
                
                // Animation du titre avec délai
                setTimeout(() => {
                    heroTitle.style.opacity = '1';
                    heroTitle.style.transform = 'translateX(0)';
                }, 300);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Initialiser les styles
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateX(-50px)';
    heroTitle.style.transition = 'all 1s ease-out';
    
    observer.observe(heroImage);
}

// ==============================================
// INTERACTIONS SÉLECTEUR PAYS
// ==============================================

function initCountrySelector() {
    const countrySelect = document.getElementById('country-code');
    if (!countrySelect) return;
    
    countrySelect.addEventListener('change', function() {
        // Animation du changement
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Gestion du focus
    countrySelect.addEventListener('focus', function() {
        this.parentNode.style.borderColor = 'var(--contact-blue)';
    });
    
    countrySelect.addEventListener('blur', function() {
        this.parentNode.style.borderColor = '';
    });
}

// ==============================================
// ICÔNE DICTÉE VOCALE
// ==============================================

function initVoiceInput() {
    const voiceIcon = document.querySelector('.voice-icon');
    const messageTextarea = document.getElementById('contact-message');
    
    if (!voiceIcon || !messageTextarea) return;
    
    // Vérifier le support de l'API Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        voiceIcon.style.opacity = '0.5';
        voiceIcon.style.cursor = 'not-allowed';
        voiceIcon.title = 'Dictée vocale non supportée sur ce navigateur';
        return;
    }
    
    let recognition = null;
    let isListening = false;
    
    voiceIcon.addEventListener('click', function() {
        if (isListening) {
            stopListening();
        } else {
            startListening();
        }
    });
    
    function startListening() {
        recognition = new SpeechRecognition();
        recognition.lang = currentLanguageContact === 'fr' ? 'fr-FR' : 'en-US';
        recognition.continuous = true;
        recognition.interimResults = true;
        
        recognition.onstart = function() {
            isListening = true;
            voiceIcon.style.color = '#FF0000';
            voiceIcon.classList.add('recording');
            voiceIcon.title = 'Arrêter la dictée';
        };
        
        recognition.onresult = function(event) {
            let finalTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                }
            }
            
            if (finalTranscript) {
                const currentText = messageTextarea.value;
                messageTextarea.value = currentText + (currentText ? ' ' : '') + finalTranscript;
                messageTextarea.dispatchEvent(new Event('input', { bubbles: true }));
            }
        };
        
        recognition.onerror = function(event) {
            console.error('Erreur de reconnaissance vocale:', event.error);
            stopListening();
        };
        
        recognition.onend = function() {
            stopListening();
        };
        
        recognition.start();
    }
    
    function stopListening() {
        if (recognition) {
            recognition.stop();
            recognition = null;
        }
        
        isListening = false;
        voiceIcon.style.color = '';
        voiceIcon.classList.remove('recording');
        voiceIcon.title = 'Dictée vocale';
    }
}

// ==============================================
// ANIMATIONS AU SCROLL
// ==============================================

function initContactScrollAnimations() {
    if (contactAnimationsInitialized) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0.1, 0.3]
    };
    
    // Animation des sections principales
    const sections = document.querySelectorAll('.contact-form-section, .contact-info-section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = `all 0.8s ease ${index * 0.2}s`;
        sectionObserver.observe(section);
    });
    
    contactAnimationsInitialized = true;
}

// ==============================================
// GESTION DES TRADUCTIONS
// ==============================================

function setLanguageContactPage(lang) {
    currentLanguageContact = lang;
    const pageTranslations = contactTranslations[lang];
    
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
                element.innerHTML = pageTranslations[key];
            }
        }
    });
    
    // Mettre à jour les placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (pageTranslations[key]) {
            element.placeholder = pageTranslations[key];
        }
    });
    
    // Mettre à jour le titre de la page
    if (pageTranslations.page_title_contact) {
        document.title = pageTranslations.page_title_contact;
    }
    
    console.log(`Langue changée vers: ${lang} pour la page Contact`);
}

// ==============================================
// NOTIFICATIONS
// ==============================================

function showContactNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `contact-notification ${type}`;
    notification.innerHTML = message;
    notification.style.cssText = `
        position: fixed;
        top: calc(var(--total-header-height) + 1rem);
        right: 1.25rem;
        background: ${type === 'error' ? '#dc3545' : type === 'success' ? '#28a745' : 'var(--contact-blue)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.3125rem;
        z-index: 9999;
        box-shadow: 0 0.3125rem 0.9375rem rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateX(100%);
        max-width: calc(100% - 2.5rem);
        word-wrap: break-word;
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
    }, 4000);
}

// ==============================================
// ACCESSIBILITÉ
// ==============================================

function initContactAccessibility() {
    // Support du mode contraste élevé
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Support du mode mouvement réduit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Désactiver les animations
        const animatedElements = document.querySelectorAll('.contact-form-section, .contact-info-section, .hero-image');
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
    
    // Gestion de l'accessibilité du formulaire
    const form = document.getElementById('contactForm');
    if (form) {
        // Associer les labels aux champs
        const labels = form.querySelectorAll('label');
        labels.forEach(label => {
            const forAttr = label.getAttribute('for');
            if (forAttr) {
                const field = document.getElementById(forAttr);
                if (field) {
                    field.setAttribute('aria-describedby', forAttr + '-error');
                }
            }
        });
        
        // Améliorer les messages d'erreur pour les lecteurs d'écran
        const errorElements = form.querySelectorAll('.invalid-feedback');
        errorElements.forEach((error, index) => {
            error.setAttribute('role', 'alert');
            error.setAttribute('aria-live', 'polite');
        });
    }
}

// ==============================================
// GESTION DES ERREURS
// ==============================================

function initContactErrorHandling() {
    // Gestion des erreurs d'images
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Erreur de chargement d\'image contact:', e.target.src);
            
            if (e.target.classList.contains('hero-image')) {
                // Fallback pour l'image hero
                e.target.style.display = 'none';
                const heroSection = document.querySelector('.contact-hero-section');
                if (heroSection) {
                    heroSection.style.background = 'linear-gradient(135deg, #005FAC 0%, #004080 100%)';
                }
            }
        }
    }, true);
    
    // Gestion des erreurs JavaScript
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Erreur non gérée dans contact.js:', e.reason);
        showContactNotification('Une erreur inattendue s\'est produite.', 'error');
    });
}

// ==============================================
// FONCTION D'INITIALISATION PRINCIPALE
// ==============================================

function initContactPage() {
    // Initialiser toutes les fonctionnalités
    initContactForm();
    initFileUpload();
    initContactHeroAnimations();
    initContactScrollAnimations();
    initCountrySelector();
    initVoiceInput();
    initContactAccessibility();
    initContactErrorHandling();
    
    // Charger la langue sauvegardée
    try {
        const savedLanguage = localStorage.getItem('mkba-language') || 'fr';
        setLanguageContactPage(savedLanguage);
    } catch (e) {
        setLanguageContactPage('fr');
    }
    
    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        setLanguageContactPage(e.detail.language);
    });
    
    // Intégrer avec le système de traduction principal
    if (window.MKBAWebsite && window.MKBAWebsite.setLanguage) {
        const originalSetLanguage = window.MKBAWebsite.setLanguage;
        window.setLanguage = function(lang) {
            originalSetLanguage(lang);
            setLanguageContactPage(lang);
        };
    }
    
    console.log('Page Contact initialisée avec succès');
}

// ==============================================
// INITIALISATION AU CHARGEMENT
// ==============================================

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactPage);
} else {
    initContactPage();
}

// Optimisation des performances au redimensionnement
let contactResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(contactResizeTimeout);
    contactResizeTimeout = setTimeout(() => {
        // Réajuster les animations si nécessaire
        const heroImage = document.querySelector('.hero-image');
        if (heroImage && window.innerWidth < 768) {
            heroImage.style.animation = 'none';
        } else if (heroImage) {
            heroImage.style.animation = '';
        }
    }, 250);
});

// Export des fonctions pour utilisation externe
window.ContactPage = {
    initContactPage,
    setLanguageContactPage,
    validateContactForm,
    submitContactForm,
    showContactNotification,
    contactTranslations
};