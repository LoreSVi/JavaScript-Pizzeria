
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

   
let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
        <h3> ${product.nombre}</h3>
        <p class="price"> ${product.precio} $</p>
        `;

        shopContent.append(content);

  
        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        content.append(comprar);

        comprar.addEventListener("click", () => {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
            });
            console.log(carrito);
        });
});


verCarrito.addEventListener("click", () => {
modalContainer.innerHTML = '';
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header"
modalHeader.innerHTML = 
`<h1 class="modal-header-title">Tu carrito🛒 </h1>
`;
modalContainer.append(modalHeader);

const modalbutton = document.createElement("h1");
modalbutton.innerText = "cerrar❎";
modalbutton.className = "modal-header-button";

 
modalbutton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});


modalHeader.append(modalbutton);

carrito.forEach((product) => {
let carritoContent = document.createElement("div");
carritoContent.className = "modal-content";
carritoContent.innerHTML = `
<img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">$ ${product.precio} </p>
    <div class="cantidad">
    <button id="plus-button">+</button>
<span id="counter">0</span>
<button id="minus-button">-</button> 
</div>

` 
    modalHeader.append(modalbutton);
;  

    modalContainer.append(carritoContent);
  });

   
    
let counter = document.getElementById("counter")
let sumar = document.getElementById("plus-button")
let restar = document.getElementById("minus-button")
let contador = 0


sumar.onclick = () => {
   contador ++
    counter.innerHTML = contador
   restar.disabled = false
}

restar.onclick = () => {
   if (contador === 0) {
        restar.disabled = true
   } else {
       contador --
        counter.innerHTML = contador
    }
   
}    


/*
  const totalProducto =   contador.onchange =() => {
   product.precio = product.precio * contador;

  const totalp = document.createElement("div")
  totalp.className = "totalp-content"
  totalp.innerHTML =  `Total a pagar: $ ${totalProducto}`;
  modalContainer.append(totalp);

    }
    */
;


 
  const total = carrito.reduce((acc, el) => acc + (el.precio), 0);

  const totalCompra = document.createElement("div")
  totalCompra.className = "total-content"
  totalCompra.innerHTML =  `Total a pagar: $ ${total}`;
  modalContainer.append(totalCompra);
});





