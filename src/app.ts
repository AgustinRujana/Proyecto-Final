//Imports
import express from 'express'

const app = require('express')()
const fs = require('fs')

//Port
const port: number = 8080

app.use(express.json)

//Routes
app.use('/productos', require('./routes/productos'))
app.use('/carrito', require('./routes/carrito'))

//Exits
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})