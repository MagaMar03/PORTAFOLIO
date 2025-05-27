// ===============================
// Navegación suave al hacer clic
// ===============================

// Selecciona todos los enlaces dentro de la clase nav-links
document.querySelectorAll('.nav-links a').forEach(link => {
  // Escucha el evento 'click' en cada enlace
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Previene el salto brusco al destino

    // Obtiene el destino del enlace (ej: #sobre-mi)
    const target = document.querySelector(this.getAttribute('href'));

    // Si el destino existe, realiza un desplazamiento suave
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===============================
// Scrollspy: resalta sección activa
// ===============================

// Selecciona todas las secciones y los enlaces del menú
const secciones = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-links a');

// Escucha el evento 'scroll' de la ventana
window.addEventListener('scroll', () => {
  let actual = ''; // Guarda el ID de la sección visible actualmente

  // Recorre cada sección para determinar cuál está en vista
  secciones.forEach(seccion => {
    const top = window.scrollY; // Posición actual del scroll vertical
    const offset = seccion.offsetTop - 90; // Posición de inicio de la sección menos compensación del header fijo
    const height = seccion.offsetHeight; // Altura total de la sección

    // Comprueba si el scroll está dentro de esta sección
    if (top >= offset && top < offset + height) {
      actual = seccion.getAttribute('id'); // Obtiene el id (ej: "contacto")
    }
  });

  // Recorre todos los enlaces del menú y actualiza la clase 'active'
  links.forEach(link => {
    link.classList.remove('active'); // Quita la clase 'active' de todos
    if (link.getAttribute('href') === `#${actual}`) {
      link.classList.add('active'); // Añade la clase solo al enlace correspondiente
    }
  });
});
