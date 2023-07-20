// localizar el nodo en el DOM
// nodo: etiqueta es si arrchico .html

let header_del_DOM = document.querySelector(".header");

// almacena en una variable el contenido a agregar
let header = `
<img src="./img/Logo_Parqueo.jpg" class="img">
<p class="titulo"> <b>Parqueo La Colina 🏔</b> </p>
<ul class="encabezado">
        <ol class="opcionesLista">
            <a href="#" class="btn">🚌 Buses</a>
            <a href="#" class="btn">🛺 Bicis</a>
            <a href="#" class="btn">🚗 Carros</a>
            <a href="#" class="btn">🛵 Motos</a>
            <a href="#" class="btn">🛺 Otros</a>
        </ol>
</ul>
`;

// agregar el contenido a la referencia del DOM
header_del_DOM.innerHTML = header;