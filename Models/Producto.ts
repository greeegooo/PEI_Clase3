export class Producto {
	//Attr
	private _nombre: string;
	private _precio: number;
	private _cantidad: number;

	//Ctor
	constructor(nombre: string, precio: number, cantidad?: number) {
		this._nombre = nombre;
		this._precio = precio;
		this._cantidad = cantidad ? cantidad : 1;
	}

	//Getters & Setters
	get nombre() {
		return this._nombre;
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

export class Lacteo extends Producto {}

export class Carne extends Producto {}
