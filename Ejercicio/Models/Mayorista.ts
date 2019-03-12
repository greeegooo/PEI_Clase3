import { Cliente } from './Cliente';
import { Producto } from './Producto';
import { Compra } from './Compra';

export class Mayorista extends Cliente {
	protected _cantidad: number;

	constructor(nombre: string, domicilio: string, mail: string, dinero: number, cantidad: number) {
		super(nombre, domicilio, mail, dinero);
		this._cantidad = cantidad;
	}

	get cantidad() {
		return this._cantidad;
	}
	set cantidad(cantidad: number) {
		this._cantidad = cantidad;
	}

	agregarAlCarrito(producto: Producto): void {
		producto.cantidad = this._cantidad;
		this._carrito.push(producto);
	}

	validarCompra(totalDeCompra: number): void {}

	precioPorPromocion(precio: number): number {
		return precio - precio * 0.15;
	}
}
