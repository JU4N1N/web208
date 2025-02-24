/*
function name (Argumentos){
    LN
}
*/

/*
function saludar(){
    alert("Hola mundo");
}
saludar();
*/

let nombre = prompt("Cuál es tu nombre perro?");

function saludar(nombre){
    return "Mi nombre es: "+nombre;
}

console.log(saludar(nombre));
alert("Mucho gusto "+nombre+" serguro seremos buenos amigos");