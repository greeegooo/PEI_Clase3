import { Comercio } from "./Clases/Comercio";
import { Cliente } from "./Clases/Cliente";
import { Producto, Lacteo, Carne } from "./Clases/Producto";
import { Descuento } from "./Clases/Descuento";

let jumbo: Comercio = new Comercio();

let gregorio: Cliente = new Cliente("Gregorio");
let gonzalo: Cliente = new Cliente("Gonzalo");
let tomas: Cliente = new Cliente("Tomas");

let lecheSerenisima500ml = new Lacteo("lecheSerenisima500ml",70);
let medioKiloDeNalga = new Carne("medioKiloDeNalga",100);
let yogurConCereales = new Lacteo("yogurConCereales",50);
let carnePicada100gr = new Carne("carnePicada100gr",80);
let yerbaRosamonte = new Producto("yerbaRosamonte",40);

gregorio.agregarAlCarrito(lecheSerenisima500ml);
gregorio.agregarAlCarrito(medioKiloDeNalga);
gonzalo.agregarAlCarrito(yogurConCereales);
tomas.agregarAlCarrito(yerbaRosamonte);
tomas.agregarAlCarrito(carnePicada100gr);

jumbo.agregarCliente(gregorio);
jumbo.agregarCliente(gonzalo);
jumbo.agregarCliente(tomas);

gonzalo.comprar();