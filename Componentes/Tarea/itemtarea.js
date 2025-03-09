import { desmarcar } from "./funcionesTareas.js";

function tarea(tarea) {

    let lis = document.createElement('div');
    lis.className = 'lista2';

    let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        lis.appendChild(checkbox);

        let p = document.createElement('p');
        p.textContent = tarea;
        lis.appendChild(p);

        lis.addEventListener('click', desmarcar);

    return lis;
}

export { tarea };
