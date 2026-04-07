document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById('nombre').value;
    const feedback = document.getElementById('formFeedback');

    // Simulación de envío dinámico
    feedback.innerHTML = `<p style="color: green; text-align: center; margin-top: 10px;">
        ¡Gracias, ${nombre}! Hemos recibido tu mensaje con éxito.
    </p>`;

    // Limpiar formulario
    this.reset();
});