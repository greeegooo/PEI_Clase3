import { Cliente } from "./Cliente";

export class Sucursal{

    //Attr
    private _cartera: Cliente[];

    //Ctor
    constructor() {
        this._cartera = [];
        console.log("Comercio creado");
    }

    //Getters & Setters

    //Methods
    agregarCliente(cliente: Cliente) : void {

        this._cartera.push(cliente);
        console.log("Cliente agregado");
    }

    totalVentas() : number {

        const total = 
            this._cartera
            .map(x => x.totalComprado())
            .reduce((total, totalCliente) => total + totalCliente);

        return total;
    }
}