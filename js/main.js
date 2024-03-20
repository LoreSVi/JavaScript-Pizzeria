//Archivo JSON con el array de objetos para renderizar los productos que se pueden agregar al carrito. La ruta debería tener dos puntos al principio pero GitHub Pages no encuentra el archivo así, por alguna extraña razón solo encuentra el archivo JSON con un solo punto.
const rutaJson = "./data/products.json";

//Para instanciar los productos que se agregan al carrito
class product {
  constructor(id, imagen, nombre, precio) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 1;
    this.subtotal = 0;
  }

  calcularSubTotal() {
    this.subtotal = this.precio * this.cantidad;
  }
}

const containerProducts = document.getElementById("container-products");
const cantidadCart = document.getElementById("count");

//Para que no perder info de los productos agregados, tambien para no perder la cantidad total que se ve el icono del carrito
let cart;
let cartLS = localStorage.getItem("cart");
if (cartLS) {
  cart = JSON.parse(cartLS);
  cantidadCart.innerHTML = cart.reduce(
    (acumulador, producto) => acumulador + producto.cantidad,
    0
  );
} else {
  cart = [];
}



//Función para hacer la petición al archivo JSON y retorna el array de objetos de los productos o un error
async function peticion(rutaJson) {
  try {
    const response = await fetch(rutaJson);
    if (!response.ok) {
      throw new Error(
        `Error de petición: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (err) {}
}

//Para guardar en el Local Storage
function saveProductLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

//Para que me muestre el total de productos agregados en el icono del carrito
function sumaCantidadCart() {
  let cantidadTotalCart = cart.reduce(
    (acumulador, producto) => acumulador + producto.cantidad,
    0
  );
  cantidadCart.innerHTML = cantidadTotalCart;
}

//Toastify para aviso de "Agregado al carrito"
function toastifyAddCard() {
  Toastify({
    text: "Agregado al carrito",
    duration: 2000,
    newWindow: true,
    gravity: "bottom",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "#FF0000",
      color: "#151515",
    },
    onClick: function () {},
  }).showToast();
}

//Botones para agregar al carrito o sumar uno a la cantidad del producto si ya existe y guardar en el Local Storage
async function addToCardButton() {
  const addButton = document.querySelectorAll(".btnAgregarCarrito");
  const products = await peticion(rutaJson);

  addButton.forEach((button) => {
    button.onclick = (e) => {
      const productId = e.target.id;
      if (cart.some((product) => product.id == productId)) {
        cart.forEach((product) => {
          if (product.id == productId) {
            product.cantidad++;
            product.subtotal = product.cantidad * product.precio;
          }
        });
        saveProductLocalStorage();
      } else {
        const searchProduct = products.find(
          (product) => product.id == productId
        );
        const productToCart = new product(
          searchProduct.id,
          searchProduct.imagen,
          searchProduct.nombre,
          searchProduct.precio
        );
        productToCart.calcularSubTotal();

        cart.push(productToCart);
        saveProductLocalStorage();
      }
      sumaCantidadCart();
      toastifyAddCard();
    };
  });
}

//Para renderizar productos que se pueden agregar al carrito, renderiza el array de objetos "products" creado con anteriroidad
async function renderProducts() {
  const productos = await peticion(rutaJson);

  productos.forEach((product) => {
    const article = document.createElement("article");
    article.className = "product";
    article.innerHTML = `
        <figure>
        <img class="img-card-product" src="${product.img}">
        </figure>
        <div class="body-product">
            <h2 class="name-card-product">${product.nombre}</h2>
            <p class="precio-card-product">$${product.precio}</p>
            <button id="${product.id}" class="btnAgregarCarrito">Agregar al carrito</button>
        </div>
        `;
    containerProducts.appendChild(article);
  });
  addToCardButton();
}
renderProducts();


