const express = require('express');
const routes = require('./routes');

const app = express();

const port = 3090
app.use("/",routes);

app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port}`)
})