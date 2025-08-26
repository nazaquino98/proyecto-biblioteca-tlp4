# Investigación: Conceptos de TypeScript

## ¿Qué diferencia existe entre extends y implements en TypeScript?

- **extends** → herencia entre clases.  
- **implements** → obliga a una clase a cumplir con una interfaz.

## ¿Qué ventajas ofrece el tipado fuerte en funciones y clases?
- Previene errores en tiempo de compilación.  
- Facilita el autocompletado y la documentación del código.

## ¿Qué significa que una clase sea abstracta?

- No se puede instanciar directamente.  
- Sirve como plantilla para clases hijas que deben implementar ciertos métodos.

## ¿Por qué conviene usar getters y setters para el encapsulamiento?

- Permiten controlar el acceso y validación de propiedades privadas.  
- Encapsulan la lógica de lectura y escritura.

## Ejemplos de tipado

### a. Función con parámetros obligatorios y opcionales

```ts
function saludar(nombre: string, edad?: number): string {
  return `Hola ${nombre}, ${edad ? `tienes ${edad} años` : "edad no especificada"}`;
}
