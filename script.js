"use strict";

// Reemplaza esta cadena una sola vez cuando exista la URL definitiva de GitHub Releases.
// Ejemplo: const DOWNLOAD_URL = "https://github.com/usuario/repositorio/releases/latest";
const DOWNLOAD_URL = "";

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(willOpen));
    siteNav.classList.toggle("is-open", willOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      navToggle.focus();
    }
  });
}

const toast = document.querySelector("#site-toast");
let toastTimer;

function showToast() {
  if (!toast) return;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 5000);
}

document.querySelectorAll("[data-download]").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!DOWNLOAD_URL) {
      event.preventDefault();
      showToast();
      return;
    }

    event.preventDefault();
    window.location.assign(DOWNLOAD_URL);
  });
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = String(new Date().getFullYear());
});

const lightboxLinks = Array.from(document.querySelectorAll("[data-lightbox]"));

if (lightboxLinks.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Vista ampliada de la captura");
  lightbox.innerHTML = `
    <button class="lightbox-button lightbox-close" type="button" aria-label="Cerrar vista ampliada">×</button>
    <button class="lightbox-button lightbox-prev" type="button" aria-label="Captura anterior">‹</button>
    <div class="lightbox-image-wrap"><img class="lightbox-image" alt=""></div>
    <button class="lightbox-button lightbox-next" type="button" aria-label="Captura siguiente">›</button>
    <p class="lightbox-caption" aria-live="polite"></p>`;
  document.body.append(lightbox);

  const image = lightbox.querySelector(".lightbox-image");
  const caption = lightbox.querySelector(".lightbox-caption");
  const closeButton = lightbox.querySelector(".lightbox-close");
  const previousButton = lightbox.querySelector(".lightbox-prev");
  const nextButton = lightbox.querySelector(".lightbox-next");
  let activeIndex = 0;
  let returnFocus = null;

  function renderLightbox() {
    const link = lightboxLinks[activeIndex];
    const thumbnail = link.querySelector("img");
    image.src = link.href;
    image.alt = thumbnail ? thumbnail.alt : "Captura ampliada de Chaos Control";
    caption.textContent = link.dataset.caption || image.alt;
  }

  function openLightbox(index, trigger) {
    activeIndex = index;
    returnFocus = trigger;
    renderLightbox();
    lightbox.classList.add("is-open");
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    image.removeAttribute("src");
    if (returnFocus) returnFocus.focus();
  }

  function moveLightbox(step) {
    activeIndex = (activeIndex + step + lightboxLinks.length) % lightboxLinks.length;
    renderLightbox();
  }

  lightboxLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openLightbox(index, link);
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", () => moveLightbox(-1));
  nextButton.addEventListener("click", () => moveLightbox(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });
}
