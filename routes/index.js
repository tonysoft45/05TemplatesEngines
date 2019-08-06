'use strict'

var express = require('express')
var router = express.Router()

router.get('/', function(req,res){
    res.end('<h1> Prueba de configuracion primer app en express </h1>')
})


module.exports = router



