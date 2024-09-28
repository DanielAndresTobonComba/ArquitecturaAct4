// dashboard.js

// Comprobar si el usuario está en la sesión
const currentUser = localStorage.getItem('currentUser');

if (!currentUser) {
    // Si no hay usuario en la sesión, redirigir al inicio de sesión
    window.location.href = '/HTML/loggin.html';
} else {
    // Mostrar el mensaje de bienvenida con el nombre del usuario
    document.getElementById('welcomeMessage').textContent = `Bienvenido, ${currentUser}`;
    document.getElementById('userDetails').textContent = `Tus datos de usuario: ${currentUser}`;
}

// Cerrar sesión
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Eliminar la sesión del usuario
    localStorage.removeItem('currentUser');
    // Redirigir al inicio de sesión
    window.location.href = '/HTML/loggin.html';
});
