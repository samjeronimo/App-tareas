function agregarTarea() {

    let agregar = document.createElement('div');
    agregar.className = "agregar";
    
    let h2 = document.createElement('h2');
    h2.textContent = "hola mundo";
    agregar.appendChild(h2);

    return agregar;

}

export { agregarTarea }