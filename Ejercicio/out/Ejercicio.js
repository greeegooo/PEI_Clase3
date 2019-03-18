"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Models/Cliente");
const Producto_1 = require("./Models/Producto");
const Promocion_1 = require("./Models/Promocion");
// A
let gonzalo = new Cliente_1.Cliente('Gonzalo Moares', 'Roosvelt 1655', 'gonza_diablito86@independiente.com', 50);
// let remeraDelRojo: Producto = new Producto('Remera de Independiente', 1500);
let remera = new Producto_1.Producto('Remera del rojo', 100, new Promocion_1.Promocion());
gonzalo.agregarAlCarrito(remera);
try {
    gonzalo.comprar(); //Error
}
catch (e) {
    console.error(e.message);
}
// let tomas: Cliente = new Cliente('Boro', '1 Broadway, 14th Floor, Cambridge, Boston', 'tomas@boro.com');
// let botines: Producto = new Producto('Botines NIKE', 2000);
// tomas.comprar(); //OK
// 2- Agregar al carrito de compras de Gonzalo un par de botines, un corto y una remera de Independiente.
// let cortos: Producto = new Producto('Pantalones Cortos', 800);
/* 3- Gonzalo quiere comprar lo que tiene en su carrito para poder ir a jugar al futbol.
      Para hacerlo tiene que tener dinero suficiente, en caso contrario se debe mostrar un mensaje indicándole que es pobre.
      Se debe actualizar su historial de compras y su carrito debe quedar vacío.
*/
//gonzalo.dinero = 0; //Descomentar esto para que tire error
// try {
// 	gonzalo.comprar();
// } catch (error) {
// 	console.error(error.message);
// }
/* 4- Registrar a Tomas como cliente. Tomas es un Manager de un equipo de futbol en España y por lo tanto cuando compra, compra en grande.
      Cada vez que Tomas agrega un producto a su carrito lo hace x10. Pero este número puede cambiar según como le vaya al equipo.
*/
/* 5- Cuando Tomas quiere comprar todo lo que tiene en su carrito, no importa el dinero en su cuenta.
      Además, se le hace un descuento del 15% en el total de la compra.
*/
//# sourceMappingURL=Ejercicio.js.map