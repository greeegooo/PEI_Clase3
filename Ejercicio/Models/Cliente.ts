import { Producto } from './Producto';
import { Compra } from './Compra';

export class Cliente {
	//Attr
	protected _nombre: string;
	protected _domicilio: string;
	protected _mail: string;
	protected _dinero: number;

	//PARTE A
	// protected _producto: Producto;
	//PARTE B
	protected _carrito: Producto[];
	protected _compras: Compra[];

	//Ctor
	constructor(nombre: string, domicilio: string, mail: string, dinero?: number) {
		this.nombre = nombre;
		this.domicilio = domicilio;
		this._mail;
		this._dinero = dinero ? dinero : 0;

		//PARTE A
		// this._producto = null;

		//PARTE B
		this._carrito = [];
		this._compras = [];

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

	get mail(): string {
		return this._mail;
	}
	set mail(mail: string) {
		if (/\S+@\S+\.\S+/.test(mail)) {
			this._mail = mail;
		} else {
			throw new Error('Ingrese un mail valido');
		}
	}

	//PARTE A
	// get producto(): Producto {
	// 	return this._producto;
	// }
	//PARTE B
	get carrito(): Producto[] {
		return this._carrito;
	}

	get dinero(): number {
		return this._dinero;
	}
	set dinero(cantidad: number) {
		this._dinero = cantidad;
	}

	get compras(): Compra[] {
		return this._compras;
	}

	//Methods
	public agregarAlCarrito(producto: Producto): void {
		this._carrito.push(producto);
		console.log('Producto agregado');
	}

	// COMPRAR PARTE A
	// public comprar(producto: Producto): void {
	// 	if (this.dinero < producto.precio) {
	// 		throw new Error('No te alcanza el dinero');
	// 	}

	// 	this._producto = producto;
	// }

	// COMPRAR FINAL
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
	}

	totalComprado(): number {
		return this._compras.map((x) => x.total).reduce((sum, total) => sum + total);
	}

	compraMasCara(): Compra {
		let masCara = (x: Compra, y: Compra) => y.total - y.total;
		return this._compras.sort(masCara)[0];
	}

	protected validarCompra(totalDeCompra: number): void {
		if (this._dinero < totalDeCompra) {
			throw new Error('No te alcanza el dinero.');
		}
	}
}
