//Imports
import { Producto, productCheck} from '../service/products.service'
//Imports Ends

const express = require('express')
const router = express.Router()

//Productos
let products: any[] = [] 

router.route('/')
    .get((req, res) => {
        if (!products){
            res.sendStatus(404)
        }
        res.send(products) 
    })
    .post((req, res) => {
        const {id, name, description, code, price, stock} = req.body
        let newProduct = new Producto(id, new Date(), name, description, code, price, stock)
        products.push(newProduct)
        res.sendStatus(201)
    })

router.route('/:id')
    .get((req, res) => {
        let product = productCheck(req.param.id, products, res)
        res.send(product)
    })

    .delete((req, res) => {
        productCheck(req.param.id, products, res)
        products = products.filter( product => product.id !== req.param.id)
        res.sendStatus(200)
    })

router.route('/:id/:value')
    .patch((req, res) => {
        let product = productCheck(req.param.id, products, res)
        let paramToChange = req.param.value
        const { newValue } = req.body
        switch(paramToChange){
            case 'description':
                product.description = newValue
                break
            case 'name':
                product.name = newValue
                break
            case 'code':
                product.code = newValue
                break
            case 'price':
                product.price = newValue
                break
            case 'stock':
                product.stock = newValue
                break
            
        }               
        res.sendStatus(200)
    })


//Exports
export { products }
module.exports = router