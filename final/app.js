const express = require('express');
const mysql = require ('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//manejar  paticiones  por medio de URL usando POST y por medio de REQ
app.use (bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

//Configuración  de platillas
app.set('view engine', 'ejs');

//Conexión a la db
const db=mysql.createConnection({
    host: 'localhost', //server
    user: 'root', //user
    password: 'Morenocruz#4', //pass
    database: 'node_crud', //nombre de la DB
    port: 3306 //port
});

//validación de la conexión a la DB
db.connect(err=>{
    if(err){
        console.error('Sin conexion a la DB', err);
    }else{
        console.log('Base de datos conectada');
    }
});


//Iniciar el servidor
const port= 3005;
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});

const routes = require('./routes/rutas')(db);
app.use('/', routes);