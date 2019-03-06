"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Clases/Cliente");
var Producto_1 = require("./Clases/Producto");
var Mayorista_1 = require("./Clases/Mayorista");
// 1- Registrar a Gonzalo como cliente dentro de la plataforma.
var gonzalo = new Cliente_1.Cliente("Gonzalo Moares");
// 2- Agregar al carrito de compras de Gonzalo un par de botines, un corto y una remera de Independiente.
var botines = new Producto_1.Producto("Botines", 1500);
var cortos = new Producto_1.Producto("Pantalones Cortos", 800);
var remeraDelRojo = new Producto_1.Producto("Remera de Independiente", 1000);
gonzalo.agregarAlCarrito(botines);
gonzalo.agregarAlCarrito(cortos);
gonzalo.agregarAlCarrito(remeraDelRojo);
/* 3- Gonzalo quiere comprar lo que tiene en su carrito para poder ir a jugar al futbol.
   Para hacerlo tiene que tener dinero suficiente, en caso contrario se debe mostrar un mensaje indicándole que es pobre.
   Se debe actualizar su historial de compras y su carrito debe quedar vacío.
*/
//gonzalo.dinero = 0; //Descomentar esto para que tire error
try {
    gonzalo.comprar();
}
catch (error) {
    console.error(error.message);
}
/* 4- Registrar a Tomas como cliente. Tomas es un Manager de un equipo de futbol en España y por lo tanto cuando compra, compra en grande.
   Cada vez que Tomas agrega un producto a su carrito lo hace x10. Pero este número puede cambiar según como le vaya al equipo.
*/
var tomas = new Mayorista_1.Mayorista("Tomas Boro", 10);
//tomas.cantidad = 20;
tomas.agregarAlCarrito(botines);
tomas.agregarAlCarrito(cortos);
/* 5- Cuando Tomas quiere comprar todo lo que tiene en su carrito, no importa el dinero en su cuenta.
   Además, se le hace un descuento del 15% en el total de la compra.
*/
tomas.comprar();
//# sourceMappingURL=Ejercicio.js.map