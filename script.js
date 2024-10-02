// Función para hacer scroll hacia las secciones
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Envío del formulario de contacto con mensaje de confirmación
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto de enviar el formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').innerText = '¡Gracias por tu mensaje! Te responderemos pronto.';
        document.getElementById('formMessage').style.color = 'green';

        // Aquí podrías enviar los datos a un servidor si lo deseas

        // Limpiar formulario
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').innerText = 'Por favor completa todos los campos.';
        document.getElementById('formMessage').style.color = 'red';
    }
});