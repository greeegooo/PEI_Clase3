"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comercio_1 = require("./Clases/Comercio");
var Cliente_1 = require("./Clases/Cliente");
var Producto_1 = require("./Clases/Producto");
var jumbo = new Comercio_1.Comercio();
var gregorio = new Cliente_1.Cliente("Gregorio");
var gonzalo = new Cliente_1.Cliente("Gonzalo");
var tomas = new Cliente_1.Cliente("Tomas");
var lecheSerenisima500ml = new Producto_1.Lacteo("lecheSerenisima500ml", 70);
var medioKiloDeNalga = new Producto_1.Carne("medioKiloDeNalga", 100);
var yogurConCereales = new Producto_1.Lacteo("yogurConCereales", 50);
var carnePicada100gr = new Producto_1.Carne("carnePicada100gr", 80);
var yerbaRosamonte = new Producto_1.Producto("yerbaRosamonte", 40);
gregorio.agregarAlCarrito(lecheSerenisima500ml);
gregorio.agregarAlCarrito(medioKiloDeNalga);
gonzalo.agregarAlCarrito(yogurConCereales);
tomas.agregarAlCarrito(yerbaRosamonte);
tomas.agregarAlCarrito(carnePicada100gr);
jumbo.agregarCliente(gregorio);
jumbo.agregarCliente(gonzalo);
jumbo.agregarCliente(tomas);
gonzalo.comprar();
console.log(gonzalo.totalComprado());