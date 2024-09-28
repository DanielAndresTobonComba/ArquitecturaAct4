// app.js

// Si no hay usuarios en el localStorage, inicializamos un diccionario vacío
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify({}));
}

// Lógica de inicio de sesión
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Obtener los usuarios guardados desde localStorage
    const users = JSON.parse(localStorage.getItem('users'));

    // Verificar si el usuario existe y la contraseña es correcta
    if (users[username]) {
        if (users[username] === password) {
            // Guardar el usuario en la sesión actual
            localStorage.setItem('currentUser', username);
            alert('Usuario existe, inicio de sesión exitoso');
            // Redirigir a la página de bienvenida
            window.location.href = '/HTML/bienvenida.html';
        } else {
            errorMessage.textContent = 'Contraseña incorrecta';
        }
    } else {
        // Si el usuario no existe, redirigir a la página de registro
        window.location.href = '/HTML/register.html';
    }
});
