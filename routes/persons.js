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
//Agregamos ruta por GET para renderizar la vista 
router.get('/person', function (req, res){
  res.render('person');
});
//Agregamos nueva ruta por POST para poder agregar un docuento nuevo a nuetsra coleccion
router.post('/addPerson', function(req, res){
  //nueva instancia de "Person" que recibe valores del body
  const myPerson = new Person({
    nombre: req.body.nombre,
    edad: req.body.edad,
    tipoSangre: req.body.tipoSangre,
    nss: req.body.nss}); //Creamos la entidad 
    myPerson.save();//guardamos en BD
});

//Exportamos el router
module.exports=router;