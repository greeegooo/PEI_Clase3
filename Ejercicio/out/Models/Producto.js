"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    //Ctor
    constructor(nombre, precio, cantidad) {
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad ? cantidad : 1;
    }
    //Getters & Setters
    get nombre() {
        return this._nombre;
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
    total() {
        return this._precio * this._cantidad;
    }
}
exports.Producto = Producto;
class Lacteo extends Producto {
}
exports.Lacteo = Lacteo;
class Carne extends Producto {
}
exports.Carne = Carne;
//# sourceMappingURL=Producto.js.map