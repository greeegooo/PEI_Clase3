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

export class List extends Array {
	sum = () => this.reduce((x, y) => x + y);
	all = (condicion: (x: any) => boolean) => this.reduce((acc, cur, ind, arr) => acc && condicion(cur), true);
	any = (condicion: (x: any) => boolean) => this.reduce((acc, cur, ind, arr) => acc || condicion(cur), false);

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

let separador = () => console.log('----------------------------------------------------------------------');

//Declaramos distintos tipos de listas
let numeros: number[] = [ 4, 2, 3 ];
let heterogenea: (number | string)[] = [ 'hoola', 1 ];

let c1: Cliente = new Cliente('Uno', 20, 400);
let c2: Cliente = new Cliente('Dos', 30, 100);
let c3: Cliente = new Cliente('Tres', 25, 300);
let c4: Cliente = new Cliente('Cuatro', 40, 200);

let c5: Cliente = new Cliente('Cinco', 18, 50);
let c6: Cliente = new Cliente('Seis', 22, 150);

let clientes = new List();
clientes.push(c1, c2, c3, c4);

let clientes2 = new List();
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

let removedElem = clientes.pop();
console.log('Removed elem:', removedElem);
console.log('Clientes:', clientes);
separador();

//Ordenarla
console.log('Desordenada', clientes);

let sortRichiest = (c1: Cliente, c2: Cliente): number => {
	if (c1.dinero == c2.dinero) return 0;
	if (c1.dinero > c2.dinero) return 1;
	if (c1.dinero < c2.dinero) return -1;
};

// clientes.sort(sortRichiest);
clientes.sort((a, b) => {
	if (c1.dinero == c2.dinero) return 0;
	if (c1.dinero > c2.dinero) return 1;
	if (c1.dinero < c2.dinero) return -1;
});

console.log('Ordenada', clientes);
separador();

//Filtrar
// let isRich = (c: Cliente): boolean => c.dinero > 200;

// let ricos = clientes.filter(isRich);
let ricos = clientes.filter((x) => x.dinero > 200);
console.log('Ricos', ricos);
separador();

//Operar con otras listas
let conjuncion = clientes.concat(clientes2);
console.log(conjuncion);
separador();

let inner = clientes.includes(clientes2);
