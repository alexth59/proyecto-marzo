const formulario = document.getElementById('miFormulario');

// Nuestra "base de datos" de usuarios permitidos
const usuariosAutorizados = ["alex", "profe", "admin"];

function login(event) {
    event.preventDefault();

    const user = document.getElementById('usuario').value.toLowerCase().trim();
    const pass = document.getElementById('password').value;

    let encontrado = false;

    // RECORREMOS el arreglo para ver si el usuario existe
    usuariosAutorizados.forEach(function(autorizado) {
        if (user === autorizado) {
            encontrado = true;
        }
    });

    // Evaluamos el resultado del recorrido
    if (encontrado && pass === "1234") {
        alert("Bienvenido " + user);
        // Aquí podrías usar tu switch anterior para redireccionar
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

formulario.addEventListener('submit', login);