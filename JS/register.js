// register.js

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores ingresados en el formulario de registro
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Obtener los usuarios almacenados desde localStorage
    let users = JSON.parse(localStorage.getItem('users'));

    // Agregar nuevo usuario al diccionario
    users[newUsername] = newPassword;

    // Guardar nuevamente en localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Iniciar la sesión del nuevo usuario
    localStorage.setItem('currentUser', newUsername);

    alert('Usuario creado exitosamente');

    // Redirigir a la página de bienvenida
    window.location.href = '/HTML/bienvenida.html';
});
