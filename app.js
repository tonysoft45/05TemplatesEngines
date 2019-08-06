'use strict'

// Configuración de la aplicación

var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var jade = require('jade')
var routes = require('./routes/index.js')

var faviconURL = __dirname + '/public/img/node-favicon.png'

var publicDir = express.static(`${__dirname}/public`)

var viewDir = `${__dirname}/views`

var port = (process.env.PORT || 3000)

var app = express()

// Configuración de la aplicación
app.set('views',viewDir)
app.set('view engine','jade')
app.set('port', port)

// Ejecutando Middleware
app.use(favicon(faviconURL))
app.use(publicDir)

//Ejecutando el Middleware donde esta la logica de las rutas
.use('/', routes)

module.exports = app

