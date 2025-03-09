function desmarcar(event) {

    const checkbox = event.target;
    const texto = checkbox.nextElementSibling;

    if (checkbox.checked) {
        texto.style.textDecoration = "line-through";
        texto.style.color = "blue";
    } else {
        texto.style.textDecoration = "none";
        texto.style.color = "black";
    }
    
}

export { desmarcar };