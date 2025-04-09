/*
var micarro = new Object();
miCarro.marca = 'ford';
miCarro.modelo = 'fiesta';
miCarro.año = 2013;
miCarro.color = 'blanco';
*/


/*
//Objeto literal
var miCarro = {
    marca : 'Ford',
    modelo : 'Fiesta',
    año : 2013,
    color : 'Blanco'
};
*/

const gato = {
    nombre: 'Kikis',
    duemre: true,
    edad: 11,
    enemigos: ["laBebe","Bobito","Cherquio"]
}
/*
console.log(gato.nombre);
console.log(gato.enemigo[1]);

console.log(gato['nombre']);
*/

gato.color= "manchado";
console.log(gato.color);
console.log(gato);
gato.edad=12
console.log(gato.edad);

delete gato.duerme;
console.log(gato);