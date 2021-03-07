//Imports
import { Carrito } from '../service/carrito.service'
import { productCheck } from '../service/products.service'
import { products } from './productos'
//Imports Ends

const express = require('express')
const router = express.Router()

//Carrito
let id = 'Algo' //Este Id deberia ser automatico o algo problema de Agustin del futuro
let carrito: any[] = []

router.route('/')
    .get((req, res) => {
        if (!carrito){
            res.sendStatus(404)
        }
        res.send(carrito) 
    })
    .post((req, res) => {
        new Carrito(id, new Date, [])
        res.sendStatus(201)
    })

router.route('/:id')
    .get((req, res) => {
        let userCarrito = carrito.filter( userCarrito => userCarrito.id == id )
        res.send(userCarrito)
    })

    .post((req, res) => {
        let product = productCheck( req.param.id, products, res )
        let userCarrito = carrito.filter( userCarrito => userCarrito.id == id )
        carrito = carrito.filter( otherCarrito => otherCarrito.id !== id )
        userCarrito[2].push( product )
        carrito.push( userCarrito )
        res.sendStatus(200)
    })

    .patch((req, res) => {
        let product = productCheck( req.param.id, products, res )
        let userCarrito = carrito.filter( userCarrito => userCarrito.id == id )
        carrito = carrito.filter( otherCarrito => otherCarrito.id !== id )
        userCarrito[2] = userCarrito[2].filter( product => product.id !== req.param.id)
        carrito.push( userCarrito )
        res.sendStatus(200)
    })

//Exports
module.exports = router