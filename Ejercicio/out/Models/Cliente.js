"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Compra_1 = require("./Compra");
class Cliente {
    //Ctor
    constructor(nombre, domicilio, mail, dinero) {
        this.nombre = nombre;
        this.domicilio = domicilio;
        this._mail;
        this._dinero = dinero ? dinero : 0;
        //PARTE A
        // this._producto = null;
        //PARTE B
        this._carrito = [];
        this._compras = [];
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
    get mail() {
        return this._mail;
    }
    set mail(mail) {
        if (/\S+@\S+\.\S+/.test(mail)) {
            this._mail = mail;
        }
        else {
            throw new Error('Ingrese un mail valido');
        }
    }
    //PARTE A
    // get producto(): Producto {
    // 	return this._producto;
    // }
    //PARTE B
    get carrito() {
        return this._carrito;
    }
    get dinero() {
        return this._dinero;
    }
    set dinero(cantidad) {
        this._dinero = cantidad;
    }
    get compras() {
        return this._compras;
    }
    //Methods
    agregarAlCarrito(producto) {
        this._carrito.push(producto);
        console.log('Producto agregado');
    }
    // COMPRAR PARTE A
    // public comprar(producto: Producto): void {
    // 	if (this.dinero < producto.precio) {
    // 		throw new Error('No te alcanza el dinero');
    // 	}
    // 	this._producto = producto;
    // }
    // COMPRAR FINAL
    comprar() {
        let totalDeCompra = this._carrito.map((x) => x.total(this)).reduce((sum, precio) => sum + precio);
        this.validarCompra(totalDeCompra);
        let compra = new Compra_1.Compra();
        compra.productos = this._carrito;
        compra.total = totalDeCompra;
        compra.fecha = new Date();
        this._compras.push(compra); //Lo agregamos al historial
        this._carrito = []; //Limpiamos el carrito
        console.log('Compra realizada');
    }
    totalComprado() {
        return this._compras.map((x) => x.total).reduce((sum, total) => sum + total);
    }
    compraMasCara() {
        let masCara = (x, y) => y.total - x.total;
        return this._compras.sort(masCara)[0];
    }
    validarCompra(totalDeCompra) {
        if (this._dinero < totalDeCompra) {
            throw new Error('No te alcanza el dinero.');
        }
    }
    precioPorPromocion(precio) {
        throw new Error('Method not implemented.');
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map