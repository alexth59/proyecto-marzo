// 1. Buscamos el formulario
const formulario = document.getElementById('miFormulario');

// 2. Función que evalúa el envío y redirecciona
function evaluarEnvio(event) {
    event.preventDefault(); // Evita que la página se refresque

    // Capturamos el valor que el usuario escribió en el campo de "Nombre"
    // (O puedes añadir un nuevo input exclusivo para el Rol)
    const valorIngresado = document.getElementById('nombre').value.toLowerCase().trim();

    // EVALUACIÓN con Switch and Case
    switch (valorIngresado) {
        case "cliente":
            alert("Redireccionando a Cliente...");
            window.location.href = "cliente.html"; // Carga el nuevo HTML
            break;

        case "personal":
            alert("Redireccionando a Personal...");
            window.location.href = "personal.html";
            break;

        case "administrador":
            alert("Redireccionando a Administrador...");
            window.location.href = "administrador.html";
            break;

        default:
            // Si escribe cualquier otra cosa que no sea x, y o z
            alert("Acceso denegado. Rol '" + valorIngresado + "' no reconocido.");
            break;
    }
}

// 3. Escuchamos el evento
formulario.addEventListener('submit', evaluarEnvio);