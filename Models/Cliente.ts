import { Producto } from './Producto';
import { Compra } from './Compra';

export class Cliente {
	//Attr
	protected _nombre: string;
	protected _domicilio: string;
	protected _mail: string;
	protected _dinero: number;

	protected _carrito: Producto[];
	protected _compras: Compra[];

	//Ctor
	constructor(nombre: string) {
		this.nombre = nombre;
		this.domicilio = '';
		this._carrito = [];
		this._compras = [];
		this._dinero = 0;
		console.log('Cliente creado');
	}

	//Getters & Setters
	get nombre(): string {
		return this._nombre;
	}
	set nombre(nombre: string) {
		if (/\D/.test(nombre)) {
			this._nombre = nombre;
		} else {
			throw new Error('El nombre solo puede contener letras');
		}
	}

	get domicilio(): string {
		return this._domicilio;
	}
	set domicilio(domicilio: string) {
		this._domicilio = domicilio;
	}

	get carrito(): Producto[] {
		return this._carrito;
	}
	// set carrito(producto: Producto) {
	// 	this._carrito.push(producto);
	// }

	get dinero(): number {
		return this._dinero;
	}
	set dinero(cantidad: number) {
		this._dinero = cantidad;
	}

	//Methods
	public agregarAlCarrito(producto: Producto): void {
		this._carrito.push(producto);
		console.log('Producto agregado');
	}

	public comprar(): void {
		let totalDeCompra = this._carrito.map((x) => x.total()).reduce((sum, precio) => sum + precio);

		this.validarCompra(totalDeCompra);

		let compra = new Compra();
		compra.productos = this._carrito;
		compra.total = totalDeCompra;
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

	totalComprado(): number {
		return this._compras.map((x) => x.total).reduce((sum, total) => sum + total);
	}

	private validarCompra(totalDeCompra: number): void {
		if (this._dinero < totalDeCompra) {
			throw new Error('No te alcanza el dinero.');
		}
	}
}
