const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navLogo = document.querySelector(".nav-logo");
let lastScrollY = window.scrollY;
let aboutLinkNavigation = false;

const translations = {
    es: {
        "nav.about": "Información",
        "nav.gallery": "Galería",
        "nav.tour": "Conciertos",
        "nav.music": "Música",
        "nav.contact": "Contacto",
        "hero.tag": "Rock alternativo · Post-grunge",
        "hero.subtitle": "todos vamos hacia la luz . . . como polillas",
        "hero.button": "ESCUCHÁNOS",
        "about.label": "SOBRE NOSOTROS",
        "about.title": "Bless the underground.",
        "about.firstParagraph": "The Haze es una banda de rock alternativo formada en Cantabria en 2023. Influenciada por el rock de los 90 y el grunge, la banda busca crear su propia identidad a través de canciones originales, energía cruda y una forma honesta de hacer música.",
        "about.secondParagraph": "Desde la sala de ensayo hasta el escenario, la intensidad y la conexión están en el centro de The Haze. Lo que comenzó como una necesidad compartida de hacer música desde dentro se convirtió en un proyecto construido por amigos que hacen música juntos.",
        "tour.label": "CONCIERTOS",
        "tour.title": "Próximas fechas",
        "dates.madridAuditorio": "18 SEPTIEMBRE 2026 - 20:00",
        "dates.madridPerro": "12 SEPTIEMBRE 2026 - 21:00",
        "dates.cantabriaOctubre": "19 SEPTIEMBRE 2026 - 20:00",
        "dates.baleares": "02 OCTUBRE 2026 - Por definir",
        "dates.rockBeer": "04 OCTUBRE 2026 - Por definir",
        "dates.groez": "09 OCTUBRE 2026 - Por definir",
        "music.label": "ESCUCHA",
        "music.title": "En todas partes",
        "music.spotify": "Spotify",
        "music.apple": "Apple Music",
        "music.youtube": "YouTube Music",
        "music.amazon": "Amazon Music",
        "socials.label": "Sigue a The Haze",
        "socials.instagram": "Instagram",
        "socials.tiktok": "TikTok",
        "socials.facebook": "Facebook",
        "socials.youtube": "YouTube",
        "contact.title": "CONTACTO",
        "contact.email": "somosthehaze@gmail.com"
    },
    en: {
        "nav.about": "About",
        "nav.gallery": "Gallery",
        "nav.tour": "Tour",
        "nav.music": "Music",
        "nav.contact": "Contact",
        "hero.tag": "Alternative Rock · Post Grunge",
        "hero.subtitle": "we are all heading towards the light . . . MOTH-like",
        "hero.button": "LISTEN NOW",
        "about.label": "ABOUT",
        "about.title": "Bless the underground.",
        "about.firstParagraph": "The Haze is an alternative rock band formed in Cantabria in 2023. Influenced by 90s rock and grunge, the band looks to create its own identity through original songs, raw energy and an honest approach to music.",
        "about.secondParagraph": "From the rehearsal room to the stage, intensity and connection are at the core of The Haze. What started as a shared need to make music from within became a project built by friends who make music together.",
        "tour.label": "TOUR",
        "tour.title": "Upcoming Dates",
        "dates.madridAuditorio": "18 SEPTEMBER 2026 - 20:00",
        "dates.madridPerro": "12 SEPTEMBER 2026 - 21:00",
        "dates.cantabriaOctubre": "19 SEPTEMBER 2026 - 20:00",
        "dates.baleares": "02 OCTOBER 2026 - To be confirmed",
        "dates.rockBeer": "04 OCTOBER 2026 - To be confirmed",
        "dates.groez": "09 OCTOBER 2026 - To be confirmed",
        "music.label": "LISTEN",
        "music.title": "Stream Everywhere",
        "music.spotify": "Spotify",
        "music.apple": "Apple Music",
        "music.youtube": "YouTube Music",
        "music.amazon": "Amazon Music",
        "socials.label": "Follow The Haze",
        "socials.instagram": "Instagram",
        "socials.tiktok": "TikTok",
        "socials.facebook": "Facebook",
        "socials.youtube": "YouTube",
        "contact.title": "CONTACT",
        "contact.email": "somosthehaze@gmail.com"
    }
};

function setLanguage(language) {

    const selectedLanguage = translations[language] ? language : "en";

    document.documentElement.lang = selectedLanguage;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const translation = translations[selectedLanguage][element.dataset.i18n];

        if (translation) element.textContent = translation;
    });

    document.querySelectorAll(".language-button").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.language === selectedLanguage
        );
    });

    localStorage.setItem("theHazeLanguage", selectedLanguage);
}

document.querySelectorAll(".language-button").forEach(button => {

    button.addEventListener("click", () => {

        setLanguage(button.dataset.language);
    });
});

setLanguage(localStorage.getItem("theHazeLanguage") || "es");

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

function handleNavbar() {

    const currentScrollY = window.scrollY;

    if (currentScrollY <= 300) {

        navLogo?.classList.remove("nav-logo-visible");

    } else if (currentScrollY > 20) {

        navLogo?.classList.add("nav-logo-visible");
    }

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(22,22,22,.9)";
        navbar.style.borderColor = "rgba(215,191,192,.12)";
        navbar.style.padding = "14px 28px";
        navbar.style.backdropFilter = "blur(30px)";

    } else {

        navbar.style.background = "rgba(22,22,22,.7)";
        navbar.style.borderColor = "rgba(215,191,192,.08)";
        navbar.style.padding = "18px 28px";
    }

    lastScrollY = currentScrollY;
}

window.addEventListener("scroll", handleNavbar);


/* ==========================
   MOBILE MENU
========================== */

menuToggle?.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ==========================
   CLOSE MENU ON CLICK
========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ==========================
   SMOOTH SCROLL OFFSET
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        if (target.id === "about") {

            aboutLinkNavigation = true;

            document.querySelector(".about-moths")?.style.setProperty(
                "--moths-reveal",
                "1"
            );
        }

        const yOffset = -100;

        const y =
            target.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        });

    });

});

function resumeAboutScrollReveal() {

    if (!aboutLinkNavigation) return;

    aboutLinkNavigation = false;
    updateAboutMoths();
}

window.addEventListener("wheel", resumeAboutScrollReveal, { passive:true });
window.addEventListener("touchmove", resumeAboutScrollReveal, { passive:true });
window.addEventListener("keydown", event => {

    if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {

        resumeAboutScrollReveal();
    }
});


/* ==========================
   REVEAL ANIMATION
========================== */

const reveals = document.querySelectorAll(
    ".about, .gallery, .tour, .music, .contact"
);
const about = document.querySelector(".about");
const aboutMoths = document.querySelector(".about-moths");

function updateAboutMoths() {

    if (!about || !aboutMoths) return;

    if (aboutLinkNavigation) {

        aboutMoths.style.setProperty("--moths-reveal", "1");

        return;
    }

    const aboutBounds = about.getBoundingClientRect();
    const revealStart = window.innerHeight;
    const revealDistance = window.innerHeight + aboutBounds.height;
    const revealProgress = Math.min(
        1,
        Math.max(0, (revealStart - aboutBounds.top) / revealDistance)
    );

    aboutMoths.style.setProperty("--moths-reveal", revealProgress);
}

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-section");

                if (entry.target.classList.contains("about")) {

                    updateAboutMoths();
                }

            } else if (entry.target.classList.contains("about")) {

                aboutMoths?.style.setProperty("--moths-reveal", "0");

            }

        });

    },

    {
        threshold: 0.15
    }

);

reveals.forEach(section => {

    section.classList.add("hidden-section");

    revealObserver.observe(section);

});


/* ==========================
   HERO PARALLAX
========================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY =
            scroll * 0.45 + "px";

    }

});

window.addEventListener("scroll", updateAboutMoths, { passive:true });
window.addEventListener("resize", updateAboutMoths);
updateAboutMoths();


/* ==========================
   ACTIVE LINK ON SCROLL
========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active-link");
        }

    });

});


/* ==========================
   INITIAL LOAD ANIMATION
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");
const galleryLightbox = document.querySelector(".gallery-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

function closeGalleryLightbox() {

    galleryLightbox?.classList.remove("is-open");
    galleryLightbox?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
}

function openGalleryLightbox(image) {

    if (!galleryLightbox || !lightboxImage) return;

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    galleryLightbox.classList.add("is-open");
    galleryLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    lightboxClose?.focus();
}

galleryImages.forEach(image => {

    image.addEventListener("click", () => openGalleryLightbox(image));

    image.addEventListener("keydown", event => {

        if (event.key === "Enter" || event.key === " ") {

            event.preventDefault();
            openGalleryLightbox(image);
        }
    });
});

lightboxClose?.addEventListener("click", closeGalleryLightbox);

galleryLightbox?.addEventListener("click", event => {

    if (event.target === galleryLightbox) closeGalleryLightbox();
});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") closeGalleryLightbox();
});


/* ==========================
   OPTIONAL CURSOR
========================== */

const cursor = document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


/* ==========================
   CURSOR HOVER EFFECT
========================== */

const hoverElements = document.querySelectorAll(
    "a, button, .gallery img"
);

hoverElements.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.classList.add("cursor-grow");

    });

    item.addEventListener("mouseleave", () => {

        cursor.classList.remove("cursor-grow");

    });

});
