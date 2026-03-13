const formulario = document.getElementById('miFormulario');

// Solo una declaración con TODOS los usuarios que quieres permitir
const usuariosAutorizados = ["alex", "profe", "admin", "cliente", "personal", "administrador"];

function login(event) {
    event.preventDefault();

    const user = document.getElementById('usuario').value.toLowerCase().trim();
    const pass = document.getElementById('password').value;

    let usuarioValido = false;

    // RECORREMOS el arreglo para validar si el usuario existe
    usuariosAutorizados.forEach(function(autorizado) {
        if (user === autorizado) {
            usuarioValido = true;
        }
    });

    if (usuarioValido && pass === "1234") {
        alert("Acceso concedido como: " + user);
        
        // Redirección dinámica: si el usuario es "cliente", busca "cliente.html"
        window.location.href = user + ".html"; 
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

formulario.addEventListener('submit', login);