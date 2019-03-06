"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comercio = /** @class */ (function () {
    function Comercio() {
        this._cartera = [];
        console.log("Comercio creado");
    }
    Comercio.prototype.agregarCliente = function (cliente) {
        this._cartera.push(cliente);
        console.log("Cliente agregado");
    };
    Comercio.prototype.totalVentas = function () {
        return this._cartera.map(function (x) { return x.totalComprado(); }).reduce(function (total, totalCliente) { return total + totalCliente; });
    };
    return Comercio;
}());
exports.Comercio = Comercio;
