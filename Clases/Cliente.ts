import { Producto } from "./Producto";
import { Compra } from "./Compra";

export class Cliente {

    //Attr
    protected _carrito: Producto[];
    protected _compras: Compra[];
    protected _nombre: string;
    protected _dinero: number;

    //Ctor
    constructor(nombre: string) { 
        this._nombre = nombre;
        this._carrito = [];
        this._compras = [];
        this._dinero = 0;
        console.log("Cliente creado");
    }

    //Getters & Setters
    get carrito(): Producto[] { return this._carrito; }
    get nombre(): string { return this._nombre; }
    
    get dinero(): number { return this._dinero; }
    set dinero(cantidad: number) { this._dinero = cantidad; }

    //Methods
    public agregarAlCarrito(producto: Producto): void {
        this._carrito.push(producto);
        console.log("Producto agregado");
    }

    public comprar() : void {

        let totalDeCompra = 
            this._carrito
            .map(x => x.total())
            .reduce((sum, precio) => sum + precio);

        this.validarCompra(totalDeCompra);

        let compra = new Compra();
        compra.productos = this._carrito;
        compra.total = totalDeCompra;
        compra.fecha = new Date();

        this._compras.push(compra); //Lo agregamos al historial

        this._carrito = []; //Limpiamos el carrito

        console.log("Compra realizada");
        console.log("Se compro:")
        compra.productos.forEach(p => { console.log(p.nombre + " " + p.total()); });
        console.log("Total: " + compra.total);
    }

    public totalComprado(): number {
        return this._compras.map(x => x.total).reduce((sum, total) => sum + total);
    }

    private validarCompra(totalDeCompra: number) : void{

        if(this._dinero < totalDeCompra) {

            throw new Error("No te alcanza el dinero.");
        }  
    }
}