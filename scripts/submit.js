// Código para o formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Verifica se uma mensagem de sucesso já existe e a remove
        var existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Limpa os campos do formulário
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        // Cria e exibe a mensagem de sucesso
        var successMessage = document.createElement('p');
        successMessage.textContent = 'Sua mensagem foi enviada com sucesso! Obrigado.';
        successMessage.style.color = '#00aaff';
        successMessage.style.textAlign = 'center';
        successMessage.classList.add('success-message'); // Adiciona uma classe para fácil identificação

        // Adiciona a mensagem de sucesso ao contêiner do formulário
        var formContainer = document.querySelector('.contact-container');
        formContainer.appendChild(successMessage);
    });
});
