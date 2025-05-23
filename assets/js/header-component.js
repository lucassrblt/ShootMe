// Header Component - ShootMe
class ShootMeHeader extends HTMLElement {
  constructor() {
    super();

    // Créer un shadow DOM pour isoler les styles
    this.attachShadow({ mode: "open" });

    // Initialiser le composant
    this.render();
  }

  // Méthode de rendu du composant
  render() {
    // Récupérer les attributs personnalisés ou utiliser des valeurs par défaut
    const activePage = this.getAttribute("active-page") || "home";

    // Créer le template HTML du header
    this.shadowRoot.innerHTML = `
      <style>
        /* Styles isolés du composant */
        :host {
          display: block;
          width: 100%;
          font-family: 'Inter', 'Helvetica Neue', sans-serif;
        }
        
        /* Variables de couleurs - Design minimaliste brutal */
        :host {
          --color-primary: #7627A1;
          --color-primary-light: #9A4DC3;
          --color-primary-dark: #5B1384;
          --color-white: #ffffff;
          --color-black: #000000;
          --color-gray-light: #f2f2f2;
          --color-gray: #d1d1d1;
          --color-gray-dark: #555555;
          
          /* Tailles de police */
          --font-size-base: 1rem;
          --font-size-sm: 0.875rem;
          --font-size-lg: 1.25rem;
          --font-size-xl: 1.5rem;

          /* Variables pour les transitions */
          --transition-speed: 0.3s;
        }

        /* État pour les différentes sections */
        :host(.gallery-section) {
          --color-primary: #673AB7;
        }

        :host(.contact-section) {
          --color-primary: #BA68C8;
          background-color: rgba(255, 255, 255, 0.95);
        }

        :host(.presentation-section) {
          --color-primary: #9C27B0;
        }
        
        /* Effet de transition pour les changements de section */
        :host {
          transition: background-color var(--transition-speed) ease,
                      box-shadow var(--transition-speed) ease;
        }
        
        /* Reset et styles de base */
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        /* Styles pour l'accessibilité */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        
        /* Focus visible pour l'accessibilité au clavier */
        :focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        
        /* Layout container */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        /* Header styles - Design brutalist */
        .site-header {
          background-color: var(--color-white);
          padding: 1rem 0;
          position: relative;
          z-index: 100;
          transition: all var(--transition-speed) ease;
        }
        
        .site-header .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
        }
        
        .logo {
          display: inline-block;
          font-weight: 800;
          font-size: var(--font-size-xl);
          letter-spacing: -0.03em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--color-black);
          transition: color var(--transition-speed) ease;
        }
        
        .logo span {
          color: var(--color-primary);
          transition: color var(--transition-speed) ease;
        }
        
        /* Menu toggle pour mobile - Style brutaliste amélioré */
        .menu-toggle {
          display: none;
          background-color: var(--color-white);
          border: 2px solid var(--color-black);
          width: 44px;
          height: 44px;
          padding: 8px;
          cursor: pointer;
          position: relative;
          border-radius: 0;
          transition: all 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        
        .menu-toggle:hover {
          background-color: var(--color-gray-light);
        }
        
        .menu-toggle:active {
          transform: scale(0.95);
        }
        
        /* Amélioration de l'icône burger */
        .burger-icon {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .burger-icon::before,
        .burger-icon::after,
        .burger-icon span {
          position: absolute;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--color-black);
          transition: transform 0.25s ease-in-out, 
                      background-color 0.2s ease;
        }
        
        .burger-icon::before,
        .burger-icon::after {
          content: '';
        }
        
        .burger-icon::before {
          top: 30%;
          transform: translateY(-50%);
        }
        
        .burger-icon span {
          top: 50%;
          transform: translateY(-50%);
        }
        
        .burger-icon::after {
          bottom: 30%;
          transform: translateY(50%);
        }
        
        /* Menu ouvert - style du burger amélioré */
        .menu-toggle[aria-expanded="true"] {
          border-color: var(--color-primary);
        }
        
        .menu-toggle[aria-expanded="true"] .burger-icon span {
          background-color: transparent;
        }
        
        .menu-toggle[aria-expanded="true"] .burger-icon::before {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          background-color: var(--color-primary);
        }
        
        .menu-toggle[aria-expanded="true"] .burger-icon::after {
          bottom: 50%;
          transform: translateY(50%) rotate(-45deg);
          background-color: var(--color-primary);
        }
        
        /* Navigation principale - Style minimaliste */
        .main-nav {
          display: flex;
          align-items: center;
        }
        
        .nav-list {
          display: flex;
          list-style: none;
          gap: 1.5rem;
        }
        
        .nav-link {
          display: inline-block;
          padding: 0.5rem 0.75rem;
          color: var(--color-black);
          text-decoration: none;
          font-weight: 600;
          text-transform: uppercase;
          font-size: var(--font-size-sm);
          letter-spacing: 0.02em;
          transition: all 0.2s;
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0.75rem;
          right: 0.75rem;
          height: 2px;
          background-color: var(--color-black);
          transform: scaleX(0);
          transition: transform 0.2s;
        }
        
        .nav-link:hover,
        .nav-link:focus {
          color: var(--color-primary);
        }
        
        .nav-link:hover::after,
        .nav-link:focus::after {
          transform: scaleX(1);
        }
        
        .nav-link.active {
          color: var(--color-primary);
          font-weight: 700;
        }
        
        .nav-link.active::after {
          transform: scaleX(1);
          background-color: var(--color-primary);
        }
        
        /* Style du bouton de contact dans la navigation - Style brutaliste */
        .nav-item:last-child .nav-link {
          background-color: var(--color-black);
          color: var(--color-white);
          padding: 0.5rem 1rem;
          border: none;
          transition: all 0.2s;
        }
        
        .nav-item:last-child .nav-link:hover,
        .nav-item:last-child .nav-link:focus {
          background-color: var(--color-primary);
        }
        
        .nav-item:last-child .nav-link::after {
          display: none;
        }

        /* Styles spécifiques pour les différentes sections */
        :host(.scrolled) .site-header {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
        }

        :host(.gallery-section) .nav-item:nth-child(1) .nav-link {
          color: var(--color-primary);
        }

        :host(.photographers-section) .nav-item:nth-child(2) .nav-link {
          color: var(--color-primary);
        }

        :host(.presentation-section) .nav-item:nth-child(3) .nav-link {
          color: var(--color-primary);
        }

        :host(.contact-section) .nav-item:nth-child(4) .nav-link {
          color: var(--color-primary);
        }
        
        /* Media queries pour la responsivité */
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
            z-index: 110;
          }
          
          .main-nav {
            flex-basis: 100%;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s;
            margin-top: 1rem;
            background-color: var(--color-white);
            border-top: 1px solid var(--color-gray);
          }
          
          .main-nav.open {
            max-height: 400px;
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.05);
          }
          
          .nav-list {
            flex-direction: column;
            gap: 0;
            padding: 1rem 0;
          }
          
          .nav-link {
            padding: 0.75rem 0;
            display: block;
            width: 100%;
            border-bottom: 1px solid var(--color-gray-light);
          }
          
          .nav-link::after {
            display: none;
          }
          
          /* Réajustement du bouton de contact sur mobile */
          .nav-item:last-child .nav-link {
            margin-top: 0.5rem;
            text-align: center;
            display: block;
          }
        }
      </style>
      
      <header class="site-header">
        <div class="container">
          <div class="logo-container">
            <a href="index.html" class="logo" aria-label="Accueil ShootMe Studio">
              SHOOT<span>ME</span>
            </a>
          </div>

          <button class="menu-toggle" aria-expanded="false" aria-controls="primary-menu" aria-label="Menu principal">
            <div class="burger-icon">
              <span></span>
            </div>
            <span class="sr-only">Menu</span>
          </button>

          <nav id="primary-menu" class="main-nav" aria-label="Navigation principale">
            <ul class="nav-list">
              <li class="nav-item"><a href="#gallery-section" class="nav-link ${
                activePage === "home" ? "active" : ""
              }" ${
      activePage === "home" ? 'aria-current="page"' : ""
    }>Galerie</a></li>
              <li class="nav-item"><a href="photographes.html" class="nav-link">Photographes</a></li>
              <li class="nav-item"><a href="#presentation-section" class="nav-link ${
                activePage === "about" ? "active" : ""
              }" ${
      activePage === "about" ? 'aria-current="page"' : ""
    }>À propos</a></li>
              <li class="nav-item"><a href="#contact-section" class="nav-link ${
                activePage === "contact" ? "active" : ""
              }" ${
      activePage === "contact" ? 'aria-current="page"' : ""
    }>Nous contacter</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;

    // Ajouter les gestionnaires d'événements après le rendu
    this._addEventListeners();

    // Initialiser l'Intersection Observer pour détecter les sections
    this._initSectionObserver();
  }

  // Ajouter les événements pour le menu mobile
  _addEventListeners() {
    // Éléments DOM
    const menuToggle = this.shadowRoot.querySelector(".menu-toggle");
    const mainNav = this.shadowRoot.querySelector(".main-nav");
    const navLinks = this.shadowRoot.querySelectorAll(".nav-link");

    // Vérification des éléments
    if (!menuToggle || !mainNav) return;

    // Fonction toggle avec syntaxe simplifiée
    const toggleMenu = () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      mainNav.classList.toggle("open");

      // Ajouter une classe au body pour empêcher le défilement (via l'élément parent)
      if (this.parentNode && this.parentNode.tagName === "BODY") {
        this.parentNode.style.overflow = !isExpanded ? "hidden" : "";
      }
    };

    // Événements - Utiliser l'approche la plus simple et fiable
    menuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenu();
    });

    // Fermeture du menu sur clic lien
    this.shadowRoot.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768 && mainNav.classList.contains("open")) {
          toggleMenu();
        }
      });
    });

    // Navigation interne de la page
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");

      // Si c'est un lien ancre (section interne)
      if (href && href.startsWith("#")) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });

            // Mise à jour de l'URL sans rechargement de page
            history.pushState(null, "", href);

            // Mise à jour de l'état actif dans la navigation
            this._updateActiveLink(link);
          }
        });
      }
    });

    // Accessibilité clavier
    menuToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
    });

    this.shadowRoot.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        menuToggle.getAttribute("aria-expanded") === "true"
      ) {
        toggleMenu();
      }
    });

    // Adaptation au redimensionnement
    const handleResize = () => {
      if (window.innerWidth > 768 && mainNav.classList.contains("open")) {
        menuToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("open");

        // Réinitialiser le style overflow du body
        if (this.parentNode && this.parentNode.tagName === "BODY") {
          this.parentNode.style.overflow = "";
        }
      }
    };

    window.addEventListener("resize", handleResize);

    // Détecter le défilement de la page
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.classList.add("scrolled");
      } else {
        this.classList.remove("scrolled");
      }
    });

    this._cleanup = () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", this._handleScroll);
    };
  }

  // Initialiser l'Intersection Observer pour les sections
  _initSectionObserver() {
    // Options pour l'observer
    const options = {
      root: null, // viewport
      rootMargin: "-20% 0px -70% 0px", // Déclenché quand la section est à 20% du haut et 70% du bas
      threshold: 0, // Déclenché dès qu'une partie de la section est visible
    };

    // Fonction de callback pour l'observer
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          // Enlever toutes les classes de section
          this.classList.remove(
            "gallery-section",
            "photographers-section",
            "contact-section",
            "presentation-section"
          );

          // Ajouter la classe correspondante
          if (
            sectionId === "gallery-section" ||
            sectionId.includes("gallery")
          ) {
            this.classList.add("gallery-section");
            this._updateActiveLink(
              this.shadowRoot.querySelector(
                '.nav-link[href="#gallery-section"]'
              )
            );
          } else if (
            sectionId === "photographers-section" ||
            sectionId.includes("photographers")
          ) {
            this.classList.add("photographers-section");
            this._updateActiveLink(
              this.shadowRoot.querySelector(
                '.nav-link[href="#photographers-section"]'
              )
            );
          } else if (
            sectionId === "contact-section" ||
            entry.target.classList.contains("contact-card")
          ) {
            this.classList.add("contact-section");
            this._updateActiveLink(
              this.shadowRoot.querySelector(
                '.nav-link[href="#contact-section"]'
              )
            );
          } else if (sectionId === "presentation-section") {
            this.classList.add("presentation-section");
            this._updateActiveLink(
              this.shadowRoot.querySelector(
                '.nav-link[href="#presentation-section"]'
              )
            );
          }
        }
      });
    };

    // Créer l'observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Observer les sections principales
    const sections = [
      document.getElementById("gallery-section"), // Galerie
      document.getElementById("photographers-section"), // Photographes
      document.getElementById("contact-section"), // Contact
      document.getElementById("presentation-section"), // Présentation
    ];

    // Ajouter chaque section à l'observer si elle existe
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Sauvegarder l'observer pour le nettoyer plus tard
    this._sectionObserver = observer;
  }

  // Mettre à jour le lien actif dans la navigation
  _updateActiveLink(activeLink) {
    if (!activeLink) return;

    // Retirer la classe active de tous les liens
    this.shadowRoot.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });

    // Ajouter la classe active au lien concerné
    activeLink.classList.add("active");
    activeLink.setAttribute("aria-current", "page");
  }

  // Nettoyage lorsque le composant est retiré du DOM
  disconnectedCallback() {
    if (this._cleanup) {
      this._cleanup();
    }

    if (this._sectionObserver) {
      this._sectionObserver.disconnect();
    }
  }

  // Méthode pour mettre à jour la page active
  setActivePage(pageName) {
    // Retirer la classe active de tous les liens
    this.shadowRoot.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });

    // Trouver le lien correspondant à la page active
    const activeLink = this.shadowRoot.querySelector(
      `.nav-link[href$="${pageName}.html"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
      activeLink.setAttribute("aria-current", "page");
    }
  }

  // Méthode appelée lorsque l'attribut change
  static get observedAttributes() {
    return ["active-page"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "active-page" && oldValue !== newValue) {
      this.setActivePage(newValue);
    }
  }
}

// Enregistrer le composant personnalisé
customElements.define("shoot-me-header", ShootMeHeader);
