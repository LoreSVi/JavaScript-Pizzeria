let input = document.getElementById("search");

input.onchange = ()=>{
const resultado = productos.filter((el) => 
el.nombre.includes(el.nombre === input.value))
}