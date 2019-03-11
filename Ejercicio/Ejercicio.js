"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Clases/Cliente");
var Producto_1 = require("./Clases/Producto");
// 1- Registrar a Gonzalo como cliente dentro de la plataforma.
var gonzalo = new Cliente_1.Cliente("Gonzalo Moares");
// 2- Agregar al carrito de compras de Gonzalo un par de botines, un corto y una remera de Independiente.
var botines = new Producto_1.Producto("Botines", 1500);
var cortos = new Producto_1.Producto("Pantalones Cortos", 800);
var remeraDelRojo = new Producto_1.Producto("Remera de Independiente", 1000);
gonzalo.agregarAlCarrito(botines);
gonzalo.agregarAlCarrito(cortos);
gonzalo.agregarAlCarrito(remeraDelRojo);
// 3- Gonzalo quiere comprar lo que tiene en su carrito para poder ir a jugar al futbol. 
// Para hacerlo tiene que tener dinero suficiente, en caso contrario se debe mostrar un mensaje indicándole que es pobre. 
// Se debe actualizar su historial de compras y su carrito debe quedar vacío.
gonzalo.dinero = 0;
try {
    gonzalo.comprar();
}
catch (error) {
    console.log(error.mensaje);
}
