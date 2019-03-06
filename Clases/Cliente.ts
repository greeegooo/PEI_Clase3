import { Producto } from "./Producto";
import { Compra } from "./Compra";

export class Cliente {

    //Props
    private _carrito: Producto[];
    private _compras: Compra[];
    private _nombre: string;
    private _dinero: number = 100;

    //Ctor
    constructor(nombre: string) { 
        this._nombre = nombre;
        this._carrito = [];
        this._compras = [];
        console.log("Cliente creado");
    }

    //Getters & Setters
    get carrito(): Producto[] { return this._carrito; }
    get nombre(): string { return this._nombre; }

    //Methods
    agregarAlCarrito(prod: Producto) {
        this._carrito.push(prod);
        console.log("Producto agregado");
    }

    comprar(){

        let totalAComprar = this._carrito.map(x => x.precio).reduce((sum, precio) => sum + precio);

        this.validarCompra(totalAComprar);

        let compra = new Compra();
        compra.productos = this._carrito;
        compra.total = totalAComprar;
        compra.fecha = new Date();

        this._compras.push(compra); //Lo agregamos al historial

        this._carrito = []; //Limpiamos el carrito

        console.log("Compra realizada");
        console.log("Se compro:")
        compra.productos.forEach(p => { console.log(p.nombre + " " + p.precio); });
        console.log("Total: " + compra.total);
    }

    private validarCompra(totalAComprar: number){

        if(this._dinero < totalAComprar) {

            throw new Error("No te alcanza el dinero.");
        }  
    }

    totalComprado(): number {
        return this._compras.map(x => x.total).reduce((sum, total) => sum + total);
    }
}

export class Mayorista extends Cliente {
    
}

export class Minorista extends Cliente {
    
}