import { login } from "./Login/login.js";
import { cargarHeader } from "./Componentes/Header/header.js";
import { consultarTareasBackEnd } from "./Componentes/Tarea/tarea.js";
//import {cargarTarea} from "./Componentes/Tarea/tarea.js"

function cargarDOM() {

    let DOM = document.getElementById('root');
    DOM.innerHTML = "";

    DOM.appendChild(cargarHeader());
    consultarTareasBackEnd();
    //DOM.appendChild(cargarTarea());

}

document.addEventListener("DOMContentLoaded", () => {
    let dom = document.getElementById('root');
    dom.innerHTML = "";
    dom.appendChild(login());
});


export { cargarDOM }