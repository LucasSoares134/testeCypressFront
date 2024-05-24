document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var message = document.getElementById('message');

 
    message.textContent = '';
    name.classList.remove('invalid');
    email.classList.remove('invalid');
    password.classList.remove('invalid');
    confirmPassword.classList.remove('invalid');

    var valid = true;

    if (name.value.trim() === '') {
        name.classList.add('invalid');
        valid = false;
    }

    var emailPattern = /@(?:gmail\.com\.br|hotmail\.com\.br)$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('invalid');
        valid = false;
    }

   
    if (password.value.length === 0) {
        password.classList.add('invalid');
        valid = false;
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('invalid');
        valid = false;
    }

    if (valid) {
        message.textContent = 'Cadastro realizado com sucesso!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Por favor, corrija os campos em vermelho. Estão inválidos!';
        message.style.color = 'red';
    }
});
