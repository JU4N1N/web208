let frutas = ["Manzana", "Pera", "Palta", "Mango"];
console.log(frutas);

/*
console.log(frutas.length);
console.log(frutas[2]);
console.log(frutas[15]);
*/

for( let i = 0; i < frutas.length; i++ ){
    console.log("Fruta "+(i+1)+" : "+frutas[i]);
}

for (const fruta of frutas){
    console.log(fruta);
}

for (const fruta in frutas){
    console.log(fruta);
}

for ( i=1; i<=10;i++ ){
    console.log("3x"+i+" = "+(3*i))
    for (i=1; i<=10; i++){
        console.log("10x"+i+" = "+(10*i))
    }
}