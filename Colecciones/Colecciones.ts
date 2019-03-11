export class Cliente {
	//Attr
	public nombre: string;
	public edad: number;
	public dinero: number;

	//Ctor
	constructor(nombre: string, edad: number, dinero: number) {
		this.nombre = nombre;
		this.edad = edad;
		this.dinero = dinero;
	}
}

// export class List extends Array {
// 	first = (): any => this[0];
// 	last = (): any => this[this.length - 1];
// 	sum = (): number => this.reduce((x, y) => x + y);
// 	tail = (): any[] => this.filter((x) => this.indexOf(x) != 0);
// }

/*
	Declaramos distintos tipos de listas
*/
let numeros: number[] = [ 4, 2, 3 ];
let heterogenea: (number | string)[] = [ 'hoola', 1 ];

let c1: Cliente = new Cliente('Uno', 20, 400);
let c2: Cliente = new Cliente('Dos', 30, 100);
let c3: Cliente = new Cliente('Tres', 25, 300);
let c4: Cliente = new Cliente('Cuatro', 40, 200);

let c5: Cliente = new Cliente('Cinco', 18, 50);
let c6: Cliente = new Cliente('Seis', 22, 150);

let clientes = new Array<Cliente>();
clientes.push(c1, c2, c3, c4);

let clientes2 = new Array<Cliente>();
clientes2.push(c5, c6, c1);

console.log('numeros', numeros[2]);
console.log('Primer cliente', clientes[0].nombre);

/*
	Métodos de listas
*/

//length
let tamaño = clientes.length;
console.log('length', tamaño);

// Modificar -----------------------------------------------------------
//push()
clientes.push(c2);
console.log('push()', clientes);

//pop()
let removedElem = clientes.pop();
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

let oldest = (c1: Cliente, c2: Cliente): number => {
	if (c1.edad == c2.edad) return 0;
	if (c1.edad > c2.edad) return -1;
	if (c1.edad < c2.edad) return 1;
};

console.log('Antes', clientes);
clientes.sort(oldest);
console.log('Ordenada', clientes);

// Filter -----------------------------------------------------------
let esMayorDe25 = (c: Cliente): boolean => c.edad > 25;
let mayores = clientes.filter(esMayorDe25);
console.log('Mayores', mayores);

// Map -----------------------------------------------------------
let edades = clientes.map((x) => x.edad);
console.log('Edades', edades);

// Find -----------------------------------------------------------
// let buscado = clientes.find((x) => x.edad == 40); No encuentra el metodo find??
// console.log('Buscado', buscado);

// Every -----------------------------------------------------------
let todosCumplen = clientes.every((x) => x.edad > 18);
console.log('Cumplen todos?', todosCumplen);

// Some -----------------------------------------------------------
let algunoCumple = clientes.some((x) => x.edad > 18);
console.log('Alguno cumple?', algunoCumple);

// Reduce -----------------------------------------------------------
let algunoCumple2 = clientes.reduce((accum, current) => accum || current.edad > 18, false); //some
console.log('Alguno cumple2?', algunoCumple2);

let edades2 = clientes.reduce((accum, current) => accum.concat(current.edad), []); //map
console.log('edades2', edades2);

let mayores2 = clientes.reduce((accum, current) => (current.edad > 25 ? accum.concat(current) : accum), []); //filter
console.log('Mayores2', mayores2);

// ForEach -----------------------------------------------------------
let algunoCumple3: boolean = false;
clientes.forEach((x) => (algunoCumple3 = algunoCumple3 || x.edad > 18)); //some
console.log('Alguno cumple3?', algunoCumple3);

let edades3: number[] = [];
clientes.forEach((x) => edades3.push(x.edad)); //map
console.log('edades3', edades3);

let mayores3: Cliente[] = [];
clientes.forEach((x) => (x.edad > 25 ? mayores3.push(x) : mayores3)); //filter
console.log('Mayores3', mayores3);
