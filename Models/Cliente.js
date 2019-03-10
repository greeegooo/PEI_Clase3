"use strict";
exports.__esModule = true;
var Compra_1 = require("./Compra");
var Cliente = /** @class */ (function () {
    //Ctor
    function Cliente(nombre) {
        this.nombre = nombre;
        this.domicilio = '';
        this._carrito = [];
        this._compras = [];
        this._dinero = 0;
        console.log('Cliente creado');
    }
    Object.defineProperty(Cliente.prototype, "nombre", {
        //Getters & Setters
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            if (/\D/.test(nombre)) {
                this._nombre = nombre;
            }
            else {
                throw new Error('El nombre solo puede contener letras');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "domicilio", {
        get: function () {
            return this._domicilio;
        },
        set: function (domicilio) {
            this._domicilio = domicilio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "carrito", {
        get: function () {
            return this._carrito;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "dinero", {
        // set carrito(producto: Producto) {
        // 	this._carrito.push(producto);
        // }
        get: function () {
            return this._dinero;
        },
        set: function (cantidad) {
            this._dinero = cantidad;
        },
        enumerable: true,
        configurable: true
    });
    //Methods
    Cliente.prototype.agregarAlCarrito = function (producto) {
        this._carrito.push(producto);
        console.log('Producto agregado');
    };
    Cliente.prototype.comprar = function () {
        var totalDeCompra = this._carrito.map(function (x) { return x.total(); }).reduce(function (sum, precio) { return sum + precio; });
        this.validarCompra(totalDeCompra);
        var compra = new Compra_1.Compra();
        compra.productos = this._carrito;
        compra.total = totalDeCompra;
        compra.fecha = new Date();
        this._compras.push(compra); //Lo agregamos al historial
        this._carrito = []; //Limpiamos el carrito
        console.log('Compra realizada');
        console.log('Se compro:');
        compra.productos.forEach(function (p) {
            console.log(p.nombre + ' ' + p.total());
        });
        console.log('Total: ' + compra.total);
    };
    Cliente.prototype.totalComprado = function () {
        return this._compras.map(function (x) { return x.total; }).reduce(function (sum, total) { return sum + total; });
    };
    Cliente.prototype.validarCompra = function (totalDeCompra) {
        if (this._dinero < totalDeCompra) {
            throw new Error('No te alcanza el dinero.');
        }
    };
    return Cliente;
}());
exports.Cliente = Cliente;