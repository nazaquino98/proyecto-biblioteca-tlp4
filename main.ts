import { Libro } from "./models/Libro";
import { Revista } from "./models/Revista";
import { Usuario } from "./models/Usuario";

const libro1 = new Libro(1, "Cien Años de Soledad", "Gabriel García Márquez", 471, "Realismo Mágico");
const libro2 = new Libro(2, "El Señor de los Anillos", "J.R.R. Tolkien", 1200, "Fantasía");
const revista = new Revista(3, "National Geographic", "Varios", 202);

const usuario = new Usuario(1, "Nazarena");

usuario.prestar(libro1);
usuario.prestar(revista);

usuario.mostrarPrestados();
usuario.mostrarUltimaPrestacion();

const materiales = [libro1, libro2, revista];
materiales.forEach(material => material.mostrarInfo());
