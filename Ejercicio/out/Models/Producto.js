"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    //Ctor
    constructor(descripcion, precio, promocion, cantidad) {
        this._descripcion = descripcion;
        this._precio = precio;
        this._cantidad = cantidad ? cantidad : 1;
        this._promocion = promocion;
    }
    //Getters & Setters
    get descripcion() {
        return this._descripcion;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    get precio() {
        return this._precio;
    }
    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    //Methods
    total(cliente) {
        return this._promocion.aplicar(cliente, this);
    }
    totalSinPromocion() {
        return this._precio * this._cantidad;
    }
}
exports.Producto = Producto;
//# sourceMappingURL=Producto.js.map