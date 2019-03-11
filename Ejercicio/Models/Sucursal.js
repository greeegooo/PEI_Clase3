"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sucursal = /** @class */ (function () {
    //Ctor
    function Sucursal() {
        this._cartera = [];
        console.log("Comercio creado");
    }
    //Getters & Setters
    //Methods
    Sucursal.prototype.agregarCliente = function (cliente) {
        this._cartera.push(cliente);
        console.log("Cliente agregado");
    };
    Sucursal.prototype.totalVentas = function () {
        var total = this._cartera
            .map(function (x) { return x.totalComprado(); })
            .reduce(function (total, totalCliente) { return total + totalCliente; });
        return total;
    };
    return Sucursal;
}());
exports.Sucursal = Sucursal;
