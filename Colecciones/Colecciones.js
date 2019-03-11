"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    //Ctor
    function Cliente(nombre, edad, dinero) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
// export class List extends Array {
// 	first = (): any => this[0];
// 	last = (): any => this[this.length - 1];
// 	sum = (): number => this.reduce((x, y) => x + y);
// 	tail = (): any[] => this.filter((x) => this.indexOf(x) != 0);
// }
/*
    Declaramos distintos tipos de listas
*/
var numeros = [4, 2, 3];
var heterogenea = ['hoola', 1];
var c1 = new Cliente('Uno', 20, 400);
var c2 = new Cliente('Dos', 30, 100);
var c3 = new Cliente('Tres', 25, 300);
var c4 = new Cliente('Cuatro', 40, 200);
var c5 = new Cliente('Cinco', 18, 50);
var c6 = new Cliente('Seis', 22, 150);
var clientes = new Array();
clientes.push(c1, c2, c3, c4);
var clientes2 = new Array();
clientes2.push(c5, c6, c1);
console.log('numeros', numeros[2]);
console.log('Primer cliente', clientes[0].nombre);
/*
    Métodos de listas
*/
//length
var tamaño = clientes.length;
console.log('length', tamaño);
// Modificar -----------------------------------------------------------
//push()
clientes.push(c2);
console.log('push()', clientes);
//pop()
var removedElem = clientes.pop();
console.log('removedElem', removedElem);
console.log('pop()', clientes);
//unshift()
clientes.unshift(c2);
console.log('unshift()', clientes);
//shift()
removedElem = clientes.shift();
console.log('removedElem', removedElem);
console.log('shift', clientes);
// Ordenar -----------------------------------------------------------
console.log('Antes', numeros);
numeros.sort();
console.log('Despues', numeros);
console.log();
console.log('Antes', clientes);
clientes.sort();
console.log('Despues', clientes);
// Ordenar con criterio
var oldest = function (c1, c2) {
    if (c1.edad == c2.edad)
        return 0;
    if (c1.edad > c2.edad)
        return -1;
    if (c1.edad < c2.edad)
        return 1;
};
console.log('Antes', clientes);
clientes.sort(oldest);
console.log('Ordenada', clientes);
// Filter -----------------------------------------------------------
var esMayorDe25 = function (c) { return c.edad > 25; };
var mayores = clientes.filter(esMayorDe25);
console.log('Mayores', mayores);
// Map -----------------------------------------------------------
var edades = clientes.map(function (x) { return x.edad; });
console.log('Edades', edades);
// Find -----------------------------------------------------------
// let buscado = clientes.find((x) => x.edad == 40);
// console.log('Buscado', buscado);
// Every -----------------------------------------------------------
var todosCumplen = clientes.every(function (x) { return x.edad > 18; });
console.log('Cumplen todos?', todosCumplen);
// Some -----------------------------------------------------------
var algunoCumple = clientes.some(function (x) { return x.edad > 18; });
console.log('Alguno cumple?', algunoCumple);
// Reduce -----------------------------------------------------------
var algunoCumple2 = clientes.reduce(function (accum, current) { return accum || current.edad > 18; }, false); //some
console.log('Alguno cumple2?', algunoCumple2);
var edades2 = clientes.reduce(function (accum, current) { return accum.concat(current.edad); }, []); //map
console.log('edades2', edades2);
var mayores2 = clientes.reduce(function (accum, current) { return (current.edad > 25 ? accum.concat(current) : accum); }, []); //filter
console.log('Mayores2', mayores2);
// ForEach -----------------------------------------------------------
var algunoCumple3 = false;
clientes.forEach(function (x) { return (algunoCumple3 = algunoCumple3 || x.edad > 18); }); //some
console.log('Alguno cumple3?', algunoCumple3);
var edades3 = [];
clientes.forEach(function (x) { return edades3.push(x.edad); }); //map
console.log('edades3', edades3);
var mayores3 = [];
clientes.forEach(function (x) { return (x.edad > 25 ? mayores3.push(x) : mayores3); });
console.log('Mayores3', mayores3);
