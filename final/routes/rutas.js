const express = require('express');
const router = express.Router();

module.exports = (db)=>{
    //Mostrar en la lista 
    router.get('/', (req,res)=>{
        //Consulta a la DB
        const consulta = 'SELECT * FROM users';

        //Usamos la DB para concetarnos a la BASE DE DATOS
        db.query(consulta,(err,results)=>{
            if(err){
                console.error('No se encontró el usuario', err);
                res.send("error comunicate con soporte");
            }else{
                res.render('index',{users: results});
            }
        });
    });

    //Agregar usuario
    router.post('/add',(req,res)=>{
        const {name, email}=req.body;
        console.log("Datos recibidos:", req.body);
        const insertarRegistroUsuario ='INSERT INTO users (usuario,correo) VALUES (?,?)';
        db.query( insertarRegistroUsuario,[name, email],(err)=>{
            if(err){
                console.error('No se inserto el registro',err);
                return res.status(500).send("Error al insertar usuario");
            }else{
                res.redirect('/');
            }
        });
    });

    //Editar usuario

    router.get('/edit/:id',(req,res)=>{
        const {id} =req.params;
        const editar = 'SELECT *  FROM users WHERE id = ?';
        db.query(editar,[id],(err,results)=>{
            if(err){
                console.error("Error",err);
            }else{
                res.render('edit',{user: results[0]});
            }
        });
    });

    //update
    router.post('/update/:id',(req,res)=>{
        const {id} = req.params;
        const {name, email} = req.body;
        const actualizarUser ='UPDATE users SET usuario=?, correo=? WHERE id=?';
        db.query(actualizarUser,[name, email,id],(err)=>{
            if(err){
                console.error("Sin actualizar usuario: ",err);
                res.send("Error de Update")
            }else{
                res.redirect('/');
            }
        });
    });

    //eliminar usuario

    router.get('/delete/:id',(req,res)=>{
        const {id} = req.params;
        const eliminar = 'DELETE FROM users Where id = ?';
        db.query(eliminar,[id],(err)=>{
            if(err){
                console.log('Error en delete', err);
                res.send("Errir eb eliminar usuario");
            }else{
                res.redirect('/');
            }
        });
    });
    return router;
};