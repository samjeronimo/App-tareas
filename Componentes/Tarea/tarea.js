import { tarea } from './itemtarea.js';

function consultarTareasBackEnd() {
    fetch("http://localhost:3000/tareas")
  .then(response => response.json())
  .then(data => cargarTareaDOM(data))
  .catch(error => console.error("Error:", error));
}

function cargarTareaDOM(data) {
    let DOM = document.querySelector('#root');
    DOM.appendChild(renderTarea(data));
}

function renderTarea(data) {

    let div = document.createElement('div');
    div.className = "div-tareas";

    data.forEach((e) => {
        console.log(e.nombre_tarea);
        div.appendChild(tarea(e.nombre_tarea));
    })
    return div;
}




export {  consultarTareasBackEnd };
