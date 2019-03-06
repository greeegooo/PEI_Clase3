"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Compra_1 = require("./Compra");
var Cliente = /** @class */ (function () {
    //Ctor
    function Cliente(nombre) {
        this._dinero = 100;
        this._nombre = nombre;
        this._carrito = [];
        this._compras = [];
        console.log("Cliente creado");
    }
    Object.defineProperty(Cliente.prototype, "carrito", {
        //Getters & Setters
        get: function () { return this._carrito; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "nombre", {
        get: function () { return this._nombre; },
        enumerable: true,
        configurable: true
    });
    //Methods
    Cliente.prototype.agregarAlCarrito = function (prod) {
        this._carrito.push(prod);
        console.log("Producto agregado");
    };
    Cliente.prototype.comprar = function () {
        var totalAComprar = this._carrito.map(function (x) { return x.precio; }).reduce(function (sum, precio) { return sum + precio; });
        this.validarCompra(totalAComprar);
        var compra = new Compra_1.Compra();
        compra.productos = this._carrito;
        compra.total = totalAComprar;
        compra.fecha = new Date();
        this._compras.push(compra); //Lo agregamos al historial
        this._carrito = []; //Limpiamos el carrito
        console.log("Compra realizada");
        console.log("Se compro:");
        compra.productos.forEach(function (p) { console.log(p.nombre + " " + p.precio); });
        console.log("Total: " + compra.total);
    };
    Cliente.prototype.validarCompra = function (totalAComprar) {
        if (this._dinero < totalAComprar) {
            throw new Error("No te alcanza el dinero.");
        }
    };
    Cliente.prototype.totalComprado = function () {
        return this._compras.map(function (x) { return x.total; }).reduce(function (sum, total) { return sum + total; });
    };
    return Cliente;
}());
exports.Cliente = Cliente;
var Mayorista = /** @class */ (function (_super) {
    __extends(Mayorista, _super);
    function Mayorista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mayorista;
}(Cliente));
exports.Mayorista = Mayorista;
var Minorista = /** @class */ (function (_super) {
    __extends(Minorista, _super);
    function Minorista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Minorista;
}(Cliente));
exports.Minorista = Minorista;
