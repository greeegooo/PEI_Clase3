"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sum = function () { return _this.reduce(function (x, y) { return x + y; }); };
        _this.all = function (condicion) { return _this.reduce(function (acc, cur, ind, arr) { return acc && condicion(cur); }, true); };
        _this.any = function (condicion) { return _this.reduce(function (acc, cur, ind, arr) { return acc || condicion(cur); }, false); };
        return _this;
        // intersect = (list: any[]): any[] => this._intersect(list);
        // _intersect(list: any[]): any[] {
        // 	let intersectList: any[] = [];
        // 	let intersection = function(x: any) {
        // 		if (list.filter((y) => x === y)) {
        // 			intersectList.push(this.indexOf(x));
        // 		}
        // 	};
        // 	this.forEach(intersection);
        // 	return intersectList;
        // }
    }
    return List;
}(Array));
exports.List = List;
var separador = function () { return console.log('----------------------------------------------------------------------'); };
//Declaramos distintos tipos de listas
var numeros = [4, 2, 3];
var heterogenea = ['hoola', 1];
var c1 = new Cliente('Uno', 20, 400);
var c2 = new Cliente('Dos', 30, 100);
var c3 = new Cliente('Tres', 25, 300);
var c4 = new Cliente('Cuatro', 40, 200);
var c5 = new Cliente('Cinco', 18, 50);
var c6 = new Cliente('Seis', 22, 150);
var clientes = new List();
clientes.push(c1, c2, c3, c4);
var clientes2 = new List();
clientes2.push(c5, c6, c1);
console.log(numeros[2]);
console.log(clientes[0].nombre);
separador();
//Operamos con listas
//Forma tradicional
//Metodos de listas
console.log(clientes.length);
separador();
//Modificarlas
clientes.push(c2);
console.log(clientes);
separador();
var removedElem = clientes.pop();
console.log('Removed elem:', removedElem);
console.log('Clientes:', clientes);
separador();
//Ordenarla
console.log('Desordenada', clientes);
var sortRichiest = function (c1, c2) {
    if (c1.dinero == c2.dinero)
        return 0;
    if (c1.dinero > c2.dinero)
        return 1;
    if (c1.dinero < c2.dinero)
        return -1;
};
// clientes.sort(sortRichiest);
clientes.sort(function (a, b) {
    if (c1.dinero == c2.dinero)
        return 0;
    if (c1.dinero > c2.dinero)
        return 1;
    if (c1.dinero < c2.dinero)
        return -1;
});
console.log('Ordenada', clientes);
separador();
//Filtrar
// let isRich = (c: Cliente): boolean => c.dinero > 200;
// let ricos = clientes.filter(isRich);
var ricos = clientes.filter(function (x) { return x.dinero > 200; });
console.log('Ricos', ricos);
separador();
//Operar con otras listas
var conjuncion = clientes.concat(clientes2);
console.log(conjuncion);
separador();
var intersection = function (l1, l2) {
    var intersectList = [];
    var fn = function (x) {
        if (l2.filter(function (y) { return x === y; })) {
            intersectList.push(l1[l1.indexOf(x)]);
        }
    };
    l1.forEach(fn);
    return intersectList;
};
console.log(intersection(clientes, clientes2));
// let numeros2 = new List();
// numeros2.push(1);
// console.log('Sumatoria', numeros2.sum());
// separador();
// let bu = new List();
// bu.push(true, true);
// console.log(bu.all((x) => x == true));
// console.log(bu.any((x) => x == false));
