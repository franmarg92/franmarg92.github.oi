document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.section');

    function handleNavigation(event) {
        event.preventDefault();

        // Eliminar clase activa de todos los enlaces y secciones
        links.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Agregar clase activa a la sección correspondiente
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        event.target.classList.add('active');
        targetSection.classList.add('active');

        // Desplazamiento suave hacia la sección seleccionada
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    links.forEach(link => link.addEventListener('click', handleNavigation));
});
