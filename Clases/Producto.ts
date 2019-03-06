
export class Producto {
    
    private _nombre: string;
    private _precio: number;

    constructor(nombre: string, precio: number){
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre(){ return this._nombre; }

    get precio(){
        return this._precio;
    }

    set precio(nuevoPrecio: number){
        this._precio = nuevoPrecio;
    }
}

export class Lacteo extends Producto{

}

export class Carne extends Producto{

}
