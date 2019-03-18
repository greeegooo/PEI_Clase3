import { IPromocion } from './Promocion';
import { Cliente } from './Cliente';

export class Producto {
	//Attr
	private _descripcion: string;
	private _precio: number;
	private _cantidad: number;
	private _promocion: IPromocion;

	//Ctor
	constructor(descripcion: string, precio: number, promocion: IPromocion, cantidad?: number) {
		this._descripcion = descripcion;
		this._precio = precio;
		this._cantidad = cantidad ? cantidad : 1;
		this._promocion = promocion;
	}

	//Getters & Setters
	get descripcion() {
		return this._descripcion;
	}
	set descripcion(descripcion: string) {
		this._descripcion = descripcion;
	}

	get precio() {
		return this._precio;
	}
	set precio(nuevoPrecio: number) {
		this._precio = nuevoPrecio;
	}

	get cantidad() {
		return this._cantidad;
	}
	set cantidad(cantidad: number) {
		this._cantidad = cantidad;
	}

	//Methods
	public total(cliente: Cliente) {
		return this._promocion.aplicar(cliente, this);
	}

	public totalSinPromocion(): number {
		return this._precio * this._cantidad;
	}
}
