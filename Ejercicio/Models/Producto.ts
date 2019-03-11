export class Producto {
	//Attr
	private _descripcion: string;
	private _precio: number;
	private _cantidad: number;

	//Ctor
	constructor(descripcion: string, precio: number, cantidad?: number) {
		this._descripcion = descripcion;
		this._precio = precio;
		this._cantidad = cantidad ? cantidad : 1;
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
	public total() {
		return this._precio * this._cantidad;
	}
}
