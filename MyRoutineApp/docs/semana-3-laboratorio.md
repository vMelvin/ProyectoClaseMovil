# Archivo de Respuestas - Laboratorio 1

## E1. Cambio temporal de categoría a 'bebidas' (en plural)
- **Error:** `Type '"bebidas"' is not assignable to type 'CategoriaProducto'.` (línea 3, types/producto.ts)
- **Significado:** TypeScript detecta que el valor asignado no coincide con el conjunto cerrado de opciones definido en la unión literal del tipo.

## E2. Eliminación de un campo obligatorio en el tipo
- **Error:** `Property 'precio' is missing in type...` (línea 12, data/menu.ts)
- **Explicación:** Los campos obligatorios deben estar presentes siempre para cumplir con la estructura; los campos opcionales (`?`) pueden omitirse de forma segura.

## E3. Quitar una prop obligatoria de TarjetaProducto
- **Error:** `Property 'producto' is missing in type...` (línea 45, App.tsx)
- **Justificación:** Decidí que la prop `producto` fuera obligatoria porque una tarjeta no puede renderizarse ni mostrar información sin un objeto de producto asociado.

---

## P1. BotonAccion
- **Props opcionales:** `apariencia`, `tamano`, `anchoCompleto`, `inhabilitado` y `enProceso` son opcionales (components/BotonAccion.tsx, líneas 8-14) porque poseen valores por defecto establecidos en los parámetros.
- **Inhabilitado / En proceso:** Se controla evaluando el evento de toque (components/BotonAccion.tsx, líneas 33-36) para retornar antes de ejecutar el callback. No basta con bajar la opacidad, ya que el componente seguiría respondiendo al tacto.

## P2. Recorrido del evento desde "Sus favoritos"
- Al pulsar el botón en la sección "Sus favoritos" (App.tsx, línea 43), se ejecuta la función `onPressBoton` que invoca a `Alert.alert` (App.tsx, línea 45), mostrando la notificación en pantalla.

## P3. Cálculo de precio con descuento
- El cálculo se realiza directamente en el componente (components/TarjetaProducto.tsx, líneas 21-28). Si cambiara de moneda en el futuro, modificaría un archivo global o de constantes sin alterar los componentes visuales.

## P4. EncabezadoSeccion y enlace "Ver todo"
- El enlace se decide condicionalmente evaluando la existencia de la prop `onPressVerTodo` (components/EncabezadoSeccion.tsx, línea 19). Su tipo es una función `() => void` y es opcional para permitir títulos simples.

## P5. Funciones en App.tsx
- En `App.tsx` se definieron funciones flecha anónimas como controladores de eventos y filtros locales (App.tsx, líneas 16, 23, 45, etc.) para gestionar la interacción general de la pantalla.

## P6. Adición de una sección "Promociones"
- Para agregar una nueva sección, modificaría principalmente `App.tsx` para incorporar el nuevo bloque y reutilizaría los componentes existentes (`EncabezadoSeccion`, `TarjetaProducto`, `BotonAccion`) sin tocar la carpeta `components`.