

let nombreUsuario = prompt("Ingrese su nombre")
alert ("Hola " + nombreUsuario + ", Bienvenido/a!")


    const precioPoleraBeige = 4000;
    const precioSacoCamel = 8500;
    const precioEngomadonegro = 9000;
    const preciocamisaBlanca = 4200;
    const preciocamperaEcocuero = 6000;
    const precioremeraWings = 2700;
    
let continuar = true 
while (continuar) {
   let menu = parseInt(prompt("Igrese 1 para Polera beige, ingrese 2 para Saco camel, ingrese 3 Engomado negro, ingrese 4 para camisa blanca, ingrese 5 para campera ecocuero, ingrese 6 para remera wings,  otro numero para salir"))

    switch(menu) {
        case 1: 
            alert("Usted seleccionó Polera beige, y su precio es " + precioPoleraBeige) ;
            break;
        case 2:
            alert("Usted seleccionó Saco Camel,  y su precio es " + precioSacoCamel);
            break;
        case 3:
             alert("Usted seleccionó Engomado negro,  y su precio es " + precioEngomadonegro);
            break;
        case 4:
             alert("Usted seleccionó camisa blanca,  y su precio es " + preciocamisaBlanca);
            break ;
        case 5:
             alert("Usted seleccionó campera ecocuero, y su precio es " + preciocamperaEcocuero);
            break;
             case 6:
             alert("Usted seleccionó remera wings, y su precio es " + precioremeraWings);
            break;
        default:
            alert("elija otra opcion");
            break;
    }

   let confirmacion = prompt("Desea consultar otro producto? (si/no)").toLowerCase()
    if(confirmacion =="no") {
        continuar = false
        alert("gracias por su visita no se olvide de seguirnos en nuestras redes, lo esperamos pronto!")
     } else {
      continuar = true;
     }
    }
     

