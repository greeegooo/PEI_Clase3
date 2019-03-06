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
Object.defineProperty(exports, "__esModule", { value: true });
var Producto = /** @class */ (function () {
    //Ctor
    function Producto(nombre, precio, cantidad) {
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad ? cantidad : 1;
    }
    Object.defineProperty(Producto.prototype, "nombre", {
        //Getters & Setters
        get: function () { return this._nombre; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "precio", {
        get: function () { return this._precio; },
        set: function (nuevoPrecio) { this._precio = nuevoPrecio; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "cantidad", {
        get: function () { return this._cantidad; },
        set: function (cantidad) { this._cantidad = cantidad; },
        enumerable: true,
        configurable: true
    });
    //Methods
    Producto.prototype.total = function () { return this._precio * this._cantidad; };
    return Producto;
}());
exports.Producto = Producto;
var Lacteo = /** @class */ (function (_super) {
    __extends(Lacteo, _super);
    function Lacteo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lacteo;
}(Producto));
exports.Lacteo = Lacteo;
var Carne = /** @class */ (function (_super) {
    __extends(Carne, _super);
    function Carne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Carne;
}(Producto));
exports.Carne = Carne;
//# sourceMappingURL=Producto.js.map