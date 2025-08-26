import { Material } from "./Material";

export class Libro extends Material {
  paginas: number;
  genero?: string;

  constructor(id: number, titulo: string, autor: string, paginas: number, genero?: string) {
    super(id, titulo, autor);
    this.paginas = paginas;
    this.genero = genero;
  }

  mostrarInfo(): void {
    console.log(`Libro: ${this.titulo} - ${this.paginas} páginas - ${this.genero || "Sin género"} - Autor: ${this.autor}`);
  }
}
