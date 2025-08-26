import { IUsuario } from "../interfaces/IUsuario";
import { Material } from "./Material";

export class Usuario implements IUsuario {
  id: number;
  nombre: string;
  private materialesPrestados: Material[] = [];
  ultimaPrestacion!: Material;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  prestar(material: Material): void {
    if (material.disponibilidad) {
      material.disponibilidad = false;
      this.materialesPrestados.push(material);
      this.ultimaPrestacion = material;
      console.log(`${this.nombre} prestó: ${material.titulo}`);
    } else {
      console.log(`El material "${material.titulo}" no está disponible.`);
    }
  }

  mostrarPrestados(): void {
    console.log(`Materiales prestados por ${this.nombre}:`);
    this.materialesPrestados.forEach(material => material.mostrarInfo());
  }

  mostrarUltimaPrestacion(): void {
    console.log(`Última prestación de ${this.nombre}:`);
    this.ultimaPrestacion.mostrarInfo();
  }
}
