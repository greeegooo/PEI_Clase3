import { Sucursal } from './Models/Sucursal';
import { Cliente } from './Models/Cliente';
import { Producto } from './Models/Producto';
import { Descuento } from './Models/Descuento';
import { Mayorista } from './Models/Mayorista';

// A
let gonzalo: Cliente = new Cliente('Gonzalo Moares', 'Roosvelt 1655', 'gonza_diablito86@independiente.com', 1000);
let remeraDelRojo: Producto = new Producto('Remera de Independiente', 1500);

gonzalo.comprar(); //Error

let tomas: Cliente = new Cliente('Boro', '1 Broadway, 14th Floor, Cambridge, Boston', 'tomas@boro.com');
let botines: Producto = new Producto('Botines NIKE', 2000);

tomas.comprar(); //OK

// 2- Agregar al carrito de compras de Gonzalo un par de botines, un corto y una remera de Independiente.
let cortos: Producto = new Producto('Pantalones Cortos', 800);

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
} catch (error) {
	console.error(error.message);
}

/* 4- Registrar a Tomas como cliente. Tomas es un Manager de un equipo de futbol en España y por lo tanto cuando compra, compra en grande. 
      Cada vez que Tomas agrega un producto a su carrito lo hace x10. Pero este número puede cambiar según como le vaya al equipo. 
*/

tomas.cantidad = 20;
tomas.agregarAlCarrito(botines);
tomas.agregarAlCarrito(cortos);

/* 5- Cuando Tomas quiere comprar todo lo que tiene en su carrito, no importa el dinero en su cuenta.
      Además, se le hace un descuento del 15% en el total de la compra.
*/

tomas.comprar();
