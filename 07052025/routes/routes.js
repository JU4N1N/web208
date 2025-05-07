const express = require('express');
const { request } = require('http');
const path = require('path');
const router = express.Router();

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"))
});

router.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/registro.html"))
});


module.exports=router;