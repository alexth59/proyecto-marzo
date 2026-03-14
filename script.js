// 1. DATOS ESTÁTICOS (Base de datos simulada)
const usuariosAutorizados = ["alex", "profe", "admin", "cliente", "personal", "administrador"];

const menuCafetin = [
    { id: 1, nombre: "Empanada", precio: 1.50 },
    { id: 2, nombre: "Café con leche", precio: 2.00 },
    { id: 3, nombre: "Jugo natural", precio: 1.20 },
    { id: 4, nombre: "Cachito", precio: 1.80 }
];

// Variable global para el total de la compra
let totalCuenta = 0;

// 2. FUNCIÓN DE LOGIN (Para index.html)
function login(event) {
    event.preventDefault();
    const user = document.getElementById('usuario').value.toLowerCase().trim();
    const pass = document.getElementById('password').value;

    let usuarioValido = false;
    usuariosAutorizados.forEach(autorizado => {
        if (user === autorizado) usuarioValido = true;
    });

    if (usuarioValido && pass === "1234") {
        alert("Acceso concedido como: " + user);
        window.location.href = user + ".html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

// 3. FUNCIÓN PARA MOSTRAR EL MENÚ (Para cliente.html)
function mostrarMenu() {
    const contenedor = document.getElementById('lista-menu');
    if (!contenedor) return; // Si no existe el div, sale de la función

    let contenidoHTML = "<ul>";
    menuCafetin.forEach(producto => {
        // Al hacer clic en el botón, pasamos el precio a la función comprar
        contenidoHTML += `<li>
            ${producto.nombre} - $${producto.precio.toFixed(2)} 
            <button onclick="comprar(${producto.precio})">Agregar</button>
        </li>`;
    });
    contenidoHTML += "</ul>";
    contenedor.innerHTML = contenidoHTML;
}

// 4. FUNCIÓN PARA CALCULAR EL TOTAL (Interacción)
function comprar(precio) {
    totalCuenta += precio;
    const spanTotal = document.getElementById('total-cuenta');
    if (spanTotal) {
        spanTotal.innerText = totalCuenta.toFixed(2);
    }
}

// 5. INICIALIZADOR (Detecta en qué página estamos)
document.addEventListener('DOMContentLoaded', () => {
    // Si estamos en el login (index.html)
    const formLogin = document.getElementById('miFormulario');
    if (formLogin) {
        formLogin.addEventListener('submit', login);
    }

    // Si estamos en la página del cliente (cliente.html)
    if (document.getElementById('lista-menu')) {
        mostrarMenu();
    }
});