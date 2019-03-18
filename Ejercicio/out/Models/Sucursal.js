"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sucursal {
    //Ctor
    constructor() {
        this._clientes = [];
        console.log('Comercio creado');
    }
    //Getters & Setters
    //Methods
    agregarCliente(cliente) {
        this._clientes.push(cliente);
        console.log('Cliente agregado');
    }
    totalVentas() {
        return this._clientes.map((x) => x.totalComprado()).reduce((total, totalCliente) => total + totalCliente);
    }
    clienteQueMasCompro() {
        return this.listadoDeClientes()[0];
    }
    comprasMasCaras(monto) {
        return this._clientes.map((x) => x.compras).reduce((x, y) => x.concat(y)).filter((x) => x.total > monto);
    }
    todosCompraron() {
        return this._clientes.every((x) => x.compras.length > 0);
    }
    algunoNoComproMasDeUnaVez() {
        return this._clientes.some((x) => x.compras.length < 2);
    }
    listadoDeClientes() {
        let masCompro = (x, y) => y.totalComprado() - x.totalComprado();
        return this._clientes.sort(masCompro);
    }
}
exports.Sucursal = Sucursal;
//# sourceMappingURL=Sucursal.js.map