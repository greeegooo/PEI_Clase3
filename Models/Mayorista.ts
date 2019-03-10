import { Cliente } from './Cliente';
import { Producto } from './Producto';
import { Compra } from './Compra';

export class Mayorista extends Cliente {
	protected _cantidad: number;

	constructor(nombre: string, cantidad?: number) {
		super(nombre);
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

	comprar(): void {
		let totalDeCompra = this._carrito.map((x) => x.total()).reduce((sum, precio) => sum + precio);

		let compra = new Compra();
		compra.productos = this._carrito;
		compra.total = totalDeCompra - totalDeCompra * 0.15;
		compra.fecha = new Date();

		this._compras.push(compra); //Lo agregamos al historial

		this._carrito = []; //Limpiamos el carrito

		console.log('Compra realizada');
		console.log('Se compro:');
		compra.productos.forEach((p) => {
			console.log(p.nombre + ' ' + p.total());
		});
		console.log('Total: ' + compra.total);
	}
}
