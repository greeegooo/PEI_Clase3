"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sucursal {
    //Ctor
    constructor() {
        this._cartera = [];
        console.log('Comercio creado');
    }
    //Getters & Setters
    //Methods
    agregarCliente(cliente) {
        this._cartera.push(cliente);
        console.log('Cliente agregado');
    }
    totalVentas() {
        const total = this._cartera.map((x) => x.totalComprado()).reduce((total, totalCliente) => total + totalCliente);
        return total;
    }
}
exports.Sucursal = Sucursal;
//# sourceMappingURL=Sucursal.js.map