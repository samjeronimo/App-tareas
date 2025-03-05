import { desmarcar } from "./funcionesTareas.js";

function tarea() {
     
    let lis = document.createElement('div');
    lis.className = 'lista2';

    let h2 = document.createElement('h2');
    h2.textContent = 'Personal';
    h2.className = 'h2';
    lis.appendChild(h2);

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
    lis.appendChild(btn);
    //lis.appendChild(desmarcar());

    return lis;

}

export { tarea };