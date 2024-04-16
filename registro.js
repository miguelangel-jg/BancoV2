class Cliente {
    constructor(nombre, apellidos, telefono, dni, email, password, cuenta) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.dni = dni;
        this.email = email;
        this.password = password;
        this.tCuenta = cuenta;
    }
}

// Array de clientes:
let listaClientes = [];

document.getElementById("registrarse").addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let telefono = parseInt(document.getElementById("telefono").value);
    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cuenta = document.getElementById("tCuenta").value;

    console.log("Aqui llega");

    if (nombre && apellidos && telefono && dni && email && password) {
        // Creamos un nuevo cliente
        let nCliente = new Cliente(nombre, apellidos, telefono, dni, email, password, cuenta);
        // Añadimos el nuevo cliente al array de clientes:
        listaClientes.push(nCliente);

        // Almacenar listaClientes en el almacenamiento local del navegador
        localStorage.setItem("listaClientes", JSON.stringify(listaClientes));

        alert("Cliente añadido");

        // Redirigir a la página de inicio de sesión
        window.location.href = 'inicio-sesion.html';
    } else {
        alert("Por favor introduzca los valores en el formulario");
    }

});
