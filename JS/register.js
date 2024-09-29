// register.js
// Función para regresar a la página de login
function backToLogin() {
    window.location.href = '/HTML/loggin.html';
}

// Registro de usuario
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Almacenar el nuevo usuario en localStorage
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[newUsername]) {
        alert('El usuario ya existe. Prueba con otro nombre.');
    } else {
        users[newUsername] = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuario creado con éxito');
        window.location.href = '/HTML/loggin.html'; // Redirigir a login tras registrar
    }
});


