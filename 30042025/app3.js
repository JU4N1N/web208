const express= require('express');

const app =express();

const port = 4000;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde el tercer puerto, atte JUANIN');
});

app.listen(port);