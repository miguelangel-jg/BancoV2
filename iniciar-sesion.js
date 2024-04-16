// Recuperar listaClientes del almacenamiento local
let listaClientes = JSON.parse(localStorage.getItem("listaClientes"));

// Verificar si listaClientes es nulo o indefinido antes de usarlo
if (!listaClientes) {
  listaClientes = []; // Si no hay datos en el almacenamiento local, inicializa listaClientes como un array vacío
}

document.getElementById("iniciarS").addEventListener("click", () => {
  // Ahora puedes usar listaClientes en tu lógica para iniciar sesión, por ejemplo:
  function verificarUsuario(email, password) {
    const usuario = listaClientes.find(
      (cliente) => cliente.email === email && cliente.password === password
    );
    return usuario !== undefined;
  }

  // Ejemplo de uso
  const emailUsuario = document.getElementById("user").value; // Obtener el valor del campo de correo electrónico
  const passwordUsuario = document.getElementById("passwd").value; // Obtener el valor del campo de contraseña
  
  if (verificarUsuario(emailUsuario, passwordUsuario)) {
    alert("Usuario válido. Iniciando sesión...");
    
    let nombreUsuario = '';

    for (let i = 0; i < listaClientes.length; i++) {
      if(emailUsuario == listaClientes[i].email );
        nombreUsuario = listaClientes[i].nombre;
      }

    localStorage.setItem("nombreUsuario", JSON.stringify(nombreUsuario));
    // Aquí puedes redirigir al usuario a la página de inicio de sesión exitosa
    window.location.href = 'clientes.html';
  } else {
    console.log("Usuario no válido. Verifica tus credenciales.");
  }
});

