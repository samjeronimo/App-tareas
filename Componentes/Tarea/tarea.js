import { tareas } from './data.js';
import { tarea } from './itemtarea.js';

function cargarTarea() {
    let lista = document.createElement('div');
    lista.className = 'lista';


    lista.appendChild(tarea());

    return lista;

    
}

export { cargarTarea }