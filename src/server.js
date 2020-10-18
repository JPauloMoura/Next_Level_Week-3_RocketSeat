const express = require('express')
const path = require('path')
const pages = require('./pages')
const server = express()

server
.use(express.static("public"))
// conf. template
.set("views", path.join(__dirname, "views"))
.set("view engine", "hbs")
// rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)

server.listen(5500)
