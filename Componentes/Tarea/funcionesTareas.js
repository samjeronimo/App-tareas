import { tareas } from "./data.js";

function desmarcar() {

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
        
        
    });
    
}

export { desmarcar };