// Archivo JavaScript para interactividad futura
console.log("Página de Yeison cargada correctamente.");

// Ejemplo: Desplazamiento suave a la sección de proyectos al hacer clic en el botón
document.querySelector(".btn-primary").addEventListener("click", function () {
  document.querySelector(".projects-grid").scrollIntoView({
    behavior: "smooth",
  });
});

// --- Lógica del Modal "Saber Más" ---
const modal = document.getElementById("aboutModal");
const openModalBtn = document.getElementById("openModalBtn");
const aboutCloseBtn = document.querySelector(".about-close"); // Usamos la clase específica

// Abrir modal
if (openModalBtn) {
  openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Evita que la página haga scroll de fondo
  });
}

// Cerrar modal con la "X" específica de Sobre Mí
if (aboutCloseBtn) {
  aboutCloseBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}

// Cerrar modal haciendo clic fuera de la caja de contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// --- Funcionalidad del Menú de Navegación del Header ---

// 1. Vincular "Sobre Mí" del header para abrir el modal
const navSobreMi = document.getElementById("navSobreMi");
if (navSobreMi) {
  navSobreMi.addEventListener("click", (e) => {
    e.preventDefault();
    const aboutModalElement = document.getElementById("aboutModal");
    if (aboutModalElement) {
      aboutModalElement.classList.add("active");
      document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo
    }
  });
}

// 2. Desplazamiento suave para "Proyectos" y "Portafolio"
const navProyectos = document.getElementById("navProyectos");
const navPortafolio = document.getElementById("navPortafolio");

function scrollToProjects(e) {
  e.preventDefault();
  const projectsSection = document.querySelector(".projects-grid");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
}

if (navProyectos) navProyectos.addEventListener("click", scrollToProjects);
if (navPortafolio) navPortafolio.addEventListener("click", scrollToProjects);

// --- Lógica del Modal de Contacto
const contactModal = document.getElementById("contactModal");
const navContacto = document.getElementById("navContacto");
const contactCloseBtn = document.querySelector(".contact-close");

// Abrir modal de contacto al hacer clic en "Contacto" en el header
if (navContacto) {
  navContacto.addEventListener("click", (e) => {
    e.preventDefault();
    if (contactModal) {
      contactModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo
    }
  });
}

// Cerrar modal de contacto con la "X"
if (contactCloseBtn) {
  contactCloseBtn.addEventListener("click", () => {
    contactModal.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}

// Cerrar modal de contacto haciendo clic fuera de la caja
window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// --- Lógica del Modal Extragrande del CV ---
const cvModal = document.getElementById("cvModal");
const openCvModalBtn = document.getElementById("openCvModalBtn");
const cvCloseBtn = document.querySelector(".cv-close");

// Abrir modal del CV desde el modal de "Sobre Mí"
if (openCvModalBtn) {
  openCvModalBtn.addEventListener("click", () => {
    // Opcional: cerramos el primer modal o lo dejamos abierto de fondo
    cvModal.classList.add("active");
  });
}

// Cerrar modal del CV con la "X"
if (cvCloseBtn) {
  cvCloseBtn.addEventListener("click", () => {
    cvModal.classList.remove("active");
  });
}

// Cerrar modal del CV haciendo clic fuera de la caja
window.addEventListener("click", (e) => {
  if (e.target === cvModal) {
    cvModal.classList.remove("active");
  }
});
