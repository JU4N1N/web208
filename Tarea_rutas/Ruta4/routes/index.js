const express = require('express');
const router =  express.Router();
const path = require('path');


router.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname+"/../index4.html"));
});


module.exports=router;