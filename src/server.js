const express = require('express')
const path = require('path')
const pages = require('./pages')
const server = express()

server
// utilizando body do req p/ envio do formulário
.use(express.urlencoded({ extended:true }))
.use(express.static("public"))
// conf. template
.set("views", path.join(__dirname, "views"))
.set("view engine", "hbs")
// rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

server.listen(5500)
