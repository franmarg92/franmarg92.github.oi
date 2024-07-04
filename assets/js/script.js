document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');

            // Get the target section ID from data-target attribute
            const targetId = this.getAttribute('data-target');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            // Show the target section
            document.getElementById(targetId).classList.add('active');
        });
    });
});
