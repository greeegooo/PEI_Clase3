import { Cliente } from './Cliente';

export class Minorista extends Cliente {
	precioPorPromocion(precio: number) {
		return precio - precio * 0.1;
	}
}
