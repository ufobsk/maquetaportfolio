// Funcion que muestra el menu responsive

function responsiveMenu() {
    let x = documen.getElementById("nav");
    if (x.className===""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}