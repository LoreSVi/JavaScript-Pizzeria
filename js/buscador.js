
let input = document.getElementById("search")
 const pizzas = ["napolitana", "fugazzeta", "cuadrada", "calzone"]
 
 input.onchange = () => {
    const element = pizzas.find((pizza) => pizza === input.value)
    console.log (element);

 if ( element === undefined){
    let print = document.createElement("h2")
    print.innerHTML = `no tenemos ese producto`
    document.body.appendChild(print)
 } else{
    let print = document.createElement("h2")
    print.innerHTML = `Buena noticia tenemos ${element}!!`
    document.body.appendChild(print)
 }
 }
  
 
