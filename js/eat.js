/*
eatme.onclick = () => {
  document.getElementById("myImage").src = "../IMG/nenepizza.jpeg";
};

tryA.onclick = () => {
  document.getElementById("myImage").src = "../IMG/porcionpizza.jpeg";
};
*/
function cambiarImagen() {
  var imagen = document.getElementById("myImage");
  if (imagen.src.match("../IMG/porcionpizza.jpeg")) {
    imagen.src = "../IMG/nenepizza.jpeg";
    imagen.alt = "comiendo pizza";
  } else {
    imagen.src = "../IMG/porcionpizza.jpeg";
    imagen.alt = "pizza";
  }
}

eatme.onclick = () => {
  cambiarImagen();
};
