"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Compra_1 = require("./Compra");
class Cliente {
    //Ctor
    constructor(nombre) {
        this.nombre = nombre;
        this.domicilio = '';
        this._carrito = [];
        this._compras = [];
        this._dinero = 0;
        console.log('Cliente creado');
    }
    //Getters & Setters
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        if (/\D/.test(nombre)) {
            this._nombre = nombre;
        }
        else {
            throw new Error('El nombre solo puede contener letras');
        }
    }
    get domicilio() {
        return this._domicilio;
    }
    set domicilio(domicilio) {
        this._domicilio = domicilio;
    }
    get carrito() {
        return this._carrito;
    }
    // set carrito(producto: Producto) {
    // 	this._carrito.push(producto);
    // }
    get dinero() {
        return this._dinero;
    }
    set dinero(cantidad) {
        this._dinero = cantidad;
    }
    //Methods
    agregarAlCarrito(producto) {
        this._carrito.push(producto);
        console.log('Producto agregado');
    }
    comprar() {
        let totalDeCompra = this._carrito.map((x) => x.total()).reduce((sum, precio) => sum + precio);
        this.validarCompra(totalDeCompra);
        let compra = new Compra_1.Compra();
        compra.productos = this._carrito;
        compra.total = totalDeCompra;
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
    totalComprado() {
        return this._compras.map((x) => x.total).reduce((sum, total) => sum + total);
    }
    validarCompra(totalDeCompra) {
        if (this._dinero < totalDeCompra) {
            throw new Error('No te alcanza el dinero.');
        }
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map