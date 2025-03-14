import { cargarDOM } from "../index.js";
import { IngresarUsuario } from "./FuncionIngresar.js";

function login() {

    let body = document.createElement('div');
    body.className = "body";

    let inicio = document.createElement('div');
    inicio.className = "Login";
    body.appendChild(inicio);

    let h1 = document.createElement('h1');
    h1.textContent = "Bienvenido";
    inicio.appendChild(h1);

    let img_login = document.createElement('img');
    img_login.src = "https://cdn-icons-png.flaticon.com/512/5087/5087579.png";
    img_login.alt = "img";
    h1.appendChild(img_login);

    let correo = document.createElement('h2');
    correo.className = "correo";
    correo.textContent = "Correo";
    inicio.appendChild(correo);

    let div_correo = document.createElement('input');
    div_correo.type = 'label'
    div_correo.className = "div-correo";
    inicio.appendChild(div_correo);

    let pass = document.createElement('h2');
    pass.className = "pass";
    pass.textContent = "Password";
    inicio.appendChild(pass);

    let div_pass = document.createElement('input');
    div_pass.type = 'password';
    div_pass.className = "div-pass";
    inicio.appendChild(div_pass);

    let div_btn = document.createElement('div');
    div_btn.className = "div-btn";
    inicio.appendChild(div_btn);

    let btn_crear = document.createElement('a');
    btn_crear.className = "btn-crear";
    btn_crear.innerHTML = "Login";
    div_btn.appendChild(btn_crear);


    let btn_ingresar = document.createElement('a');
    btn_ingresar.className = "btn-ingresar";
    btn_ingresar.innerHTML = "Ingresar"
    div_btn.appendChild(btn_ingresar);

    btn_crear.addEventListener('click', () => {
        let root = document.getElementById('root');
        root.innerHTML = "";
        root.appendChild(IngresarUsuario());
    });

    btn_ingresar.addEventListener('click', () => {
        let email = div_correo.value;
        let password = div_pass.value;
    
        // Hacer fetch al backend para verificar login
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
          })
          .then(response => response.json())
          .then(data => {
            if (data.message === 'Login exitoso') {
              let root = document.getElementById('root');
              root.innerHTML = "";
              cargarDOM();
            } else {
              alert(data.error);
            }
          })
          .catch(err => {
            console.error('Error al hacer login:', err);
            alert('Error en el login');
          });
    });


    return body;

}

export { login }