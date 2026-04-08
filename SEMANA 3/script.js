document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // 1. Referencias a elementos
    const form = this;
    const btn = form.querySelector('button');
    const feedback = document.getElementById('formFeedback');
    const formData = new FormData(form);
    const nombre = document.getElementById('nombre').value;
    // Simulación de envío dinámico
    feedback.innerHTML = `<p style="color: green; text-align: center; margin-top: 10px;">
        ¡Gracias, ${nombre}! Tu estrategia digital empieza ahora. Te contactaremos en breve.
    </p>`;

    // Limpiar formulario
    this.reset();
});