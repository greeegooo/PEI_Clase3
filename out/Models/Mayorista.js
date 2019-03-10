"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var Compra_1 = require("./Compra");
var Mayorista = /** @class */ (function (_super) {
    __extends(Mayorista, _super);
    function Mayorista(nombre, cantidad) {
        var _this = _super.call(this, nombre) || this;
        _this._cantidad = cantidad;
        return _this;
    }
    Object.defineProperty(Mayorista.prototype, "cantidad", {
        get: function () {
            return this._cantidad;
        },
        set: function (cantidad) {
            this._cantidad = cantidad;
        },
        enumerable: true,
        configurable: true
    });
    Mayorista.prototype.agregarAlCarrito = function (producto) {
        producto.cantidad = this._cantidad;
        this._carrito.push(producto);
    };
    Mayorista.prototype.comprar = function () {
        var totalDeCompra = this._carrito.map(function (x) { return x.total(); }).reduce(function (sum, precio) { return sum + precio; });
        var compra = new Compra_1.Compra();
        compra.productos = this._carrito;
        compra.total = totalDeCompra - totalDeCompra * 0.15;
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
    return Mayorista;
}(Cliente_1.Cliente));
exports.Mayorista = Mayorista;
//# sourceMappingURL=Mayorista.js.map