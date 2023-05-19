// Funcion que aplica el estilo a la opcion seleccionada en el menu y quita la previamente sellecionada

function seleccionar(link) {
    let opciones = document.querySelector('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    let x = document.getElementById("nav");
    x.className = "";

}



// Funcion que muestra el menu responsive

function responsiveMenu() {
    let x = documen.getElementById("nav");
    if (x.className===""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

