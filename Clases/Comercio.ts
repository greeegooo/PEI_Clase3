import { Cliente } from "./Cliente";

export class Comercio{

    private _cartera: Cliente[];
    private dinero: number;

    constructor(){
        this._cartera = [];
        console.log("Comercio creado");
    }

    agregarCliente(cliente: Cliente) {
        this._cartera.push(cliente);
        console.log("Cliente agregado");
    }

    totalVentas(){
        return this._cartera.map(x => x.totalComprado()).reduce((total, totalCliente) => total + totalCliente);
    }
}