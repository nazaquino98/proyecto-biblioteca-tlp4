"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(id, nombre) {
        this.materialesPrestados = [];
        this.id = id;
        this.nombre = nombre;
    }
    Usuario.prototype.prestar = function (material) {
        if (material.disponibilidad) {
            material.disponibilidad = false;
            this.materialesPrestados.push(material);
            this.ultimaPrestacion = material;
            console.log("".concat(this.nombre, " prest\u00F3: ").concat(material.titulo));
        }
        else {
            console.log("El material \"".concat(material.titulo, "\" no est\u00E1 disponible."));
        }
    };
    Usuario.prototype.mostrarPrestados = function () {
        console.log("Materiales prestados por ".concat(this.nombre, ":"));
        this.materialesPrestados.forEach(function (material) { return material.mostrarInfo(); });
    };
    Usuario.prototype.mostrarUltimaPrestacion = function () {
        console.log("\u00DAltima prestaci\u00F3n de ".concat(this.nombre, ":"));
        this.ultimaPrestacion.mostrarInfo();
    };
    return Usuario;
}());
exports.Usuario = Usuario;
