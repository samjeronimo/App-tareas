import { cargarHeader } from "./Componentes/Header/header.js";
import {cargarTarea} from "./Componentes/Tarea/tarea.js"

function cargarDOM() {

    let DOM = document.getElementById('root');

    DOM.appendChild(cargarHeader());
    DOM.appendChild(cargarTarea());

}

cargarDOM();

export { cargarDOM }