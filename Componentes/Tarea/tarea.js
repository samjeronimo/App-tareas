import { tareas } from './data.js';
import { tarea } from './itemtarea.js';

function cargarTarea() {
    let lista = document.createElement('div');
    lista.className = 'lista';

    let h2 = document.createElement('h2');
    h2.textContent = 'Personal';
    h2.className = 'h2';
    lista.appendChild(h2);

    tareas.forEach(function (tarea) {
        let item = document.createElement('div');
        item.className = 'tareas';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'cuadrito';
        checkbox.id = `tarea-${tarea}`;

        let label = document.createElement('label');
        label.textContent = tarea;
        label.className = 'objetos';
        label.setAttribute('for', checkbox.id);

        item.addEventListener('click', function () {
            let check = this.querySelector('.cuadrito'); 
            check.checked = !check.checked;
            this.classList.toggle('seleccionado', check.checked);
        });

        item.appendChild(checkbox);
        item.appendChild(label);
        lista.appendChild(item);
    });

    let btn = document.createElement('div');
    btn.className = 'btn';

    let texto = document.createElement('input');
    texto.type = 'text';
    texto.placeholder = 'Write a task...';
    texto.className = 'texto';

    let btn2 = document.createElement('button');
    btn2.textContent = 'Add';
    btn2.className = 'btn2';

    btn.appendChild(texto);
    btn.appendChild(btn2);
    lista.appendChild(btn);

    //lista.appendChild(tarea());

    return lista;

    
}

export { cargarTarea }