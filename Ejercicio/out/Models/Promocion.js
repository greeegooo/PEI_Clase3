"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export class PromocionSinPromocion implements IPromocion {
// 	aplicar(cliente: Cliente, producto: Producto): number {
// 		return producto.totalSinPromocion();
// 	}
// }
// export class PromocionPorCantidad implements IPromocion {
// 	//Attr
// 	private _cantidad: number;
// 	//Ctor
// 	constructor(cantidad: number) {
// 		this._cantidad = cantidad;
// 	}
// 	aplicar(cliente: Cliente, producto: Producto): number {
// 		let total: number = producto.totalSinPromocion();
// 		let descuento: number = producto.cantidad > this._cantidad ? 0.1 : 0.05;
// 		return total - total * descuento;
// 	}
// }
// export class PromocionPorCliente implements IPromocion {
// 	aplicar(cliente: Cliente, producto: Producto): number {
// 		return cliente.precioPorPromocion(producto.totalSinPromocion());
// 	}
// }
//OTRA FORMA, SI LA PROMOCIONES COMPARTIERAN MAS QUE SOLO EL METODO
class Promocion {
    aplicar(cliente, producto) {
        return producto.totalSinPromocion();
    }
}
exports.Promocion = Promocion;
class PromocionPorCantidad extends Promocion {
    //Ctor
    constructor(cantidad) {
        super();
        this._cantidad = cantidad;
    }
    aplicar(cliente, producto) {
        let total = producto.totalSinPromocion();
        let descuento = producto.cantidad > this._cantidad ? 0.1 : 0.05;
        return total - total * descuento;
    }
}
exports.PromocionPorCantidad = PromocionPorCantidad;
class PromocionPorCliente extends Promocion {
    aplicar(cliente, producto) {
        return cliente.precioPorPromocion(producto.totalSinPromocion());
    }
}
exports.PromocionPorCliente = PromocionPorCliente;
//# sourceMappingURL=Promocion.js.map