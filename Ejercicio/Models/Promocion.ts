import { Producto } from './Producto';
import { Cliente } from './Cliente';

export interface IPromocion {
	aplicar(cliente: Cliente, producto: Producto): number;
}

export class PromocionSinPromocion implements IPromocion {
	aplicar(cliente: Cliente, producto: Producto): number {
		return producto.totalSinPromocion();
	}
}

export class PromocionPorCantidad implements IPromocion {
	//Attr
	private _cantidad: number;

	//Ctor
	constructor(cantidad: number) {
		this._cantidad = cantidad;
	}

	aplicar(cliente: Cliente, producto: Producto): number {
		let total: number = producto.totalSinPromocion();
		let descuento: number = producto.cantidad > this._cantidad ? 0.1 : 0.05;

		return total - total * descuento;
	}
}

export class PromocionPorCliente implements IPromocion {
	aplicar(cliente: Cliente, producto: Producto): number {
		return cliente.precioPorPromocion(producto.totalSinPromocion());
	}
}
