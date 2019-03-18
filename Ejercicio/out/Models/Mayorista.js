"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
class Mayorista extends Cliente_1.Cliente {
    constructor(nombre, domicilio, mail, dinero, cantidad) {
        super(nombre, domicilio, mail, dinero);
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
    validarCompra(totalDeCompra) { }
    precioPorPromocion(precio) {
        return precio - precio * 0.15;
    }
}
exports.Mayorista = Mayorista;
//# sourceMappingURL=Mayorista.js.map