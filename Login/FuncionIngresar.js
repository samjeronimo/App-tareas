import { login } from "./login.js";

function IngresarUsuario() {
    let ingreso = document.createElement('div');
    ingreso.className = "ingreso-usuario";

    let contenedor = document.createElement('div');
    contenedor.className = "contenedor-registro";
    ingreso.appendChild(contenedor);

    let titulo = document.createElement('h1');
    titulo.textContent = "Crear Cuenta";
    contenedor.appendChild(titulo);

    let inputNombre = document.createElement('input');
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.className = "input";
    contenedor.appendChild(inputNombre);

    let inputEmail = document.createElement('input');
    inputEmail.type = "email";
    inputEmail.placeholder = "Correo";
    inputEmail.className = "input";
    contenedor.appendChild(inputEmail);

    let inputPass = document.createElement('input');
    inputPass.type = "password";
    inputPass.placeholder = "Contraseña";
    inputPass.className = "input";
    contenedor.appendChild(inputPass);

    let btnRegistrarse = document.createElement('button');
    btnRegistrarse.textContent = "Registrarse";
    btnRegistrarse.className = "btn-registrar";
    contenedor.appendChild(btnRegistrarse);

    let btnVolver = document.createElement('button');
    btnVolver.textContent = "Volver";
    btnVolver.className = "btn-volver";
    contenedor.appendChild(btnVolver);

    // Evento para volver al login
    btnVolver.addEventListener('click', () => {
        let root = document.getElementById('root');
        root.innerHTML = "";
        root.appendChild(login()); // Regresa al login
    });

    // Registro de nuevo usuario
    btnRegistrarse.addEventListener('click', () => {
        let nombre = inputNombre.value;
        let email = inputEmail.value;
        let password = inputPass.value;
    
        // Hacer fetch al backend para registrar
        fetch('http://localhost:3000/registro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, correo: email, contraseña: password })
        })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            alert(data.message);
            let root = document.getElementById('root');
            root.innerHTML = "";
            root.appendChild(login());  // Redirigir a login después del registro
          } else {
            alert(data.error);
          }
        })
        .catch(err => {
          console.error('Error al registrar:', err);
          alert('Error al registrar');
        });
    });

    return ingreso;
}

export { IngresarUsuario };
