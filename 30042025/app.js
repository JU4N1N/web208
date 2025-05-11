//impotar express
const express= require('express');

//Generar una instancia
const app =express();

//definicion de puerto
const port = 5024;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde el primer puerto, atte JUANIN');
});


app.listen(port);