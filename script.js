// 1. Buscamos el formulario en el HTML por su ID
const formulario = document.getElementById('miFormulario');

// 2. Definimos la función que "evalúa" y lanza el alert
function evaluarEnvio(event) {
    // Evitamos que la página se recargue
    event.preventDefault();

    // La tarea específica: lanzar el alert con el mensaje exacto
    alert("llegó");

    // Opcional: seguimos viendo los datos en consola para control
    const nombre = document.getElementById('nombre').value;
    console.log("Nombre evaluado:", nombre);
}

// 3. Escuchamos el evento "submit" y llamamos a la función
formulario.addEventListener('submit', evaluarEnvio);