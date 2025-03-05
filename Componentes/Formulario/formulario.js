import { agregarTarea } from "./funcionesFormulario.js";

function cargarFormulario() {

    let formulario = document.createElement('div');
    formulario.className = "div-formulario";

    formulario.appendChild(agregarTarea());

    return formulario;
}

export { cargarFormulario };