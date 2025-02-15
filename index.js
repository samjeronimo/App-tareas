import { header } from "./Componentes/Header/header.js";
import { formulario } from "./Componentes/Tarea/tarea.js";

let DOM = document.getElementById('root');

DOM.appendChild(header());
DOM.appendChild(formulario());