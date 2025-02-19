//Compara dos numeros

let numero1 = parseInt(prompt("Ingresa el primer número"));
let numero2 = parseInt(prompt("Ingresa el segundo número"));


if (numero1 > numero2){
    alert("El número 1 que fue "+numero1+" es el número más grande");
    console.log("El primer número fue "+numero1+" y es MAYOR a "+numero2+" que fue el segundo número");
}else if(numero2 > numero1){
    alert("El número 2 que fue "+numero2+" es el número más grande");
    console.log("El primer número fue "+numero1+" y es MENOR a "+numero2+" que fue el segundo número");
}else if(numero1==numero2){
    alert("Son iguales")
    console.log("Los números son iguales")
}