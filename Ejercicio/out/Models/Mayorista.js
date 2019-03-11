"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const Compra_1 = require("./Compra");
class Mayorista extends Cliente_1.Cliente {
    constructor(nombre, cantidad) {
        super(nombre);
        this._cantidad = cantidad;
    }
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    agregarAlCarrito(producto) {
        producto.cantidad = this._cantidad;
        this._carrito.push(producto);
    }
    comprar() {
        let totalDeCompra = this._carrito.map((x) => x.total()).reduce((sum, precio) => sum + precio);
        let compra = new Compra_1.Compra();
        compra.productos = this._carrito;
        compra.total = totalDeCompra - totalDeCompra * 0.15;
        compra.fecha = new Date();
        this._compras.push(compra); //Lo agregamos al historial
        this._carrito = []; //Limpiamos el carrito
        console.log('Compra realizada');
        console.log('Se compro:');
        compra.productos.forEach((p) => {
            console.log(p.nombre + ' ' + p.total());
        });
        console.log('Total: ' + compra.total);
    }
}
exports.Mayorista = Mayorista;
//# sourceMappingURL=Mayorista.js.map