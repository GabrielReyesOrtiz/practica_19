//Inyectamos las dependencias express, mongoose, person
const express = require('express');
//Generamos la instancia de router
const router = express.Router();
const mongoose = require('../node_modules/mongoose');
let Person = require('../models/person');
//Agregamos  la ruta "/persons", por el metodo GET.
router.get('/persons', function(req, res, next){
  Person.find(function (err, persons) {
    if (err) return next(err);
    res.json(persons);
  });
});
//Exportamos el router
module.exports=router;