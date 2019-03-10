import { Producto } from './Producto';

export class Compra {
	//Attr
	total: number; // Puede estar como prop o puede ser calculado
	productos: Producto[];
	fecha: Date;
}
