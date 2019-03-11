import { Cliente } from './Cliente';
import { Compra } from './Compra';
import { Producto } from './Producto';

export class Sucursal {
	//Attr
	private _clientes: Cliente[];

	//Ctor
	constructor() {
		this._clientes = [];
		console.log('Comercio creado');
	}

	//Getters & Setters

	//Methods
	agregarCliente(cliente: Cliente): void {
		this._clientes.push(cliente);
		console.log('Cliente agregado');
	}

	totalVentas(): number {
		return this._clientes.map((x) => x.totalComprado()).reduce((total, totalCliente) => total + totalCliente);
	}

	clienteQueMasCompro(): Cliente {
		return this.listadoDeClientes()[0];
	}

	comprasMasCaras(monto: number): Compra[] {
		return this._clientes.map((x) => x.compras).reduce((x, y) => x.concat(y)).filter((x) => x.total > monto);
	}

	todosCompraron(): boolean {
		return this._clientes.every((x) => x.compras.length > 0);
	}

	algunoNoComproMasDeUnaVez(): boolean {
		return this._clientes.some((x) => x.compras.length < 2);
	}

	listadoDeClientes(): Cliente[] {
		let masCompro = (x: Cliente, y: Cliente) => y.totalComprado() - x.totalComprado();
		return this._clientes.sort(masCompro);
	}
}
