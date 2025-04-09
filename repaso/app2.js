const frutas = [];

const fruta = prompt('¿Qué fruta deseas comprar?');

frutas.push(fruta);

while(confirm('¿Desea agragar otra fruta a el carrito?')){
    const fruta = prompt('¿Qué fruta desea agregar?');
    frutas.push(fruta);
}

console.log("Usted compró: ");
for(let fruta of frutas){
    console.log(fruta);
}

