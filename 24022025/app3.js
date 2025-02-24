function suma(n1,n2){
    return parseInt(n1)+parseInt(n2);
}

function resta(m1,m2){
    return parseInt(m1)-parseInt(m2);
}

function multi(b1,b2){
    return parseInt(b1)*parseInt(b2);
}

function div(d1,d2){
    return parseInt(d1)/parseInt(d2);
}

let numero1=prompt("Ingresa un primer núnero: ");
let numero2=prompt("Ingresa un segundo núnero: ");

let resultado = suma (numero1, numero2);
let resultado1 = resta(numero1, numero2);
let resultado2 = multi(numero1, numero2);
let resultado3 = div(numero1, numero2);

console.log("El total de la suma es: "+resultado)
console.log("El total de la resta es: "+resultado1)
console.log("El total de la multiplicación es: "+resultado2)
console.log("El total de la división es: "+resultado3)




