console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb").textContent);

function changeColor(newColor) {
    const elem = document.getElementById("tituoWeb");
    elem.style.color = newColor;
}