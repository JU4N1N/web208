const express= require('express');

const app =express();

const port = 3009;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde el segundo puerto, atte JUANIN');
});

app.listen(port);