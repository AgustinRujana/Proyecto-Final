import { time } from 'node:console'
import { Producto } from './products.service'

export class Carrito {
    private id: string
    private timestamp: Date
    private productos: Producto[]

    constructor(id: string, timestamp: Date, productos: any[]) {
        this.id = id
        this.timestamp = timestamp
        this.productos = productos
    }
}