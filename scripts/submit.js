document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Check if a success message already exists and remove it
        var existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        // Create and display the success message
        var successMessage = document.createElement('p');
        successMessage.textContent = 'Sua mensagem foi enviada com sucesso! Obrigado.';
        successMessage.style.color = '#00aaff';
        successMessage.style.textAlign = 'center';
        successMessage.classList.add('success-message'); // Add a class for easier identification

        // Append the success message to the form container
        var formContainer = document.querySelector('.contact-container');
        formContainer.appendChild(successMessage);
    });
});
