export class Producto {
    private id: string
    private timestamp: Date
    private name: string
    private description: string
    private code: string
    private price: number
    private stock: number

    constructor(id: string, timestamp: Date, name, description: string, code: string, price: number, stock: number){
        this.id = id
        this.timestamp = timestamp
        this.name = name
        this.description = description
        this.code = code
        this.price = price
        this.stock = stock
    } 
}

function productCheck(id: string, products: any, res: any) {
    const product: any = products.find( product => product.id = id)
    if(!product){ res.sendStatus(404) }
    return product
}

export { productCheck }