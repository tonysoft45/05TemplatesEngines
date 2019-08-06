'use strict'

var express = require('express')
var router = express.Router()

function jade(req,res,next){
    let locals= {
        title : 'Jade'
    }
    res.render('index',locals)

}

router.get('/', function(req,res){
    res.end('<h1> Prueba de configuracion primer app en express </h1>')
})

router.get('/jade', jade)


module.exports = router



