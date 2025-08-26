"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Material_1 = require("./Material");
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(id, titulo, autor, paginas, genero) {
        var _this = _super.call(this, id, titulo, autor) || this;
        _this.paginas = paginas;
        _this.genero = genero;
        return _this;
    }
    Libro.prototype.mostrarInfo = function () {
        console.log("Libro: ".concat(this.titulo, " - ").concat(this.paginas, " p\u00E1ginas - ").concat(this.genero || "Sin género", " - Autor: ").concat(this.autor));
    };
    return Libro;
}(Material_1.Material));
exports.Libro = Libro;
