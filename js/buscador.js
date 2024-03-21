const inputPizza = document.getElementById('search');
const botonBuscar = document.getElementById('botonBuscar')
const pizzas = ["napolitana", "fugazzeta", "cuadrada", "calzone"]

botonBuscar.onclick = () => {
      const element = pizzas.find((pizza) => pizza === inputPizza.value)
      console.log (element);

      if ( element === undefined){
         Toastify({
            text: `no tenemos ese producto`,
            duration: 2000,
            position: "center",
            style: {
                background: "linear-gradient(to right,#FF0000, #FFD700)",
            },
         }).showToast()
         text.value=''
      } else{
         Toastify({
         text: `Buena noticia tenemos ${element}!!`,
            duration: 2000,
            position: "center",
            style: {
                background: "linear-gradient(to right,#008000, #96c93d)",
         }
      }).showToast()
      text.value=''
   }
}


 
/*
const inputPizza = document.getElementById('search');
const botonBuscar = document.getElementById('botonBuscar')
const pizzas = ["napolitana", "fugazzeta", "cuadrada", "calzone"]

botonBuscar.onclick = () => {
      const element = pizzas.find((pizza) => pizza === inputPizza.value)
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
      */