// 1. Buscamos el formulario en el HTML por su ID
const formulario = document.getElementById('miFormulario');

// 2. Escuchamos el evento "submit"
formulario.addEventListener('submit', function(event) {
    // Evitamos que la página se recargue (comportamiento por defecto)
    event.preventDefault();

    // 3. Obtenemos los valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;

    // 4. ¿A dónde van los datos? 
    // Por ahora, los mostraremos en la consola del navegador
    console.log("Datos recibidos:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);

    alert("¡Formulario enviado con éxito, " + nombre + "!");
});