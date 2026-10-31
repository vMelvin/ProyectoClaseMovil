# Archivo de Respuestas - Laboratorio 1

## E1. Cambio temporal de categoría a 'bebidas' (en plural)
- **Error:** `Type '"bebidas"' is not assignable to type 'CategoriaProducto'.` (línea 3, types/producto.ts)
- **Significado:** TypeScript detecta que el valor asignado no forma parte del conjunto cerrado de opciones de la unión literal definida en el tipo.

## E2. Eliminación de un campo obligatorio en el tipo
- **Error:** `Property 'precio' is missing in type...` (línea 12, data/menu.ts)
- **Explicación:** Los campos obligatorios deben estar siempre presentes para cumplir con la estructura del modelo; los campos opcionales (marcados con `?`) pueden omitirse.

## E3. Quitar una prop obligatoria de TarjetaProducto
- **Error:** `Property 'producto' is missing in type...` (línea 45, App.tsx)
- **Justificación:** Decidí que la prop `producto` fuera obligatoria porque la tarjeta depende directamente de sus datos para poder renderizar la interfaz y mostrar la información del menú.

---

## P1. BotonAccion
- **Props opcionales:** `apariencia`, `tamano`, `anchoCompleto`, `inhabilitado` y `enProceso` son opcionales (components/BotonAccion.tsx, líneas 8-14) porque disponen de valores por defecto preasignados en los parámetros del componente.
- **Inhabilitado / En proceso:** Se controla evaluando el evento táctil (components/BotonAccion.tsx, líneas 33-36) para retornar antes de ejecutar la función. Reducir solo la opacidad visual no impediría que el usuario dispare el evento por accidente.

## P2. Recorrido del evento desde "Sus favoritos"
- Al pulsar el botón dentro de la sección de favoritos (App.tsx, línea 43), se ejecuta el manejador de eventos que invoca a `Alert.alert` (App.tsx, línea 45), mostrando la notificación interactiva en pantalla de forma local.

## P3. Cálculo de precio con descuento
- El cálculo se procesa directamente dentro del componente visual (components/TarjetaProducto.tsx, líneas 21-28). Si requiriera cambiar la moneda o la lógica de descuento en el futuro, bastaría con ajustarlo en un módulo externo o constante sin alterar la estructura del componente.

## P4. EncabezadoSeccion y enlace "Ver todo"
- El enlace se renderiza de forma condicional evaluando si existe o no la prop `onPressVerTodo` (components/EncabezadoSeccion.tsx, línea 19). Su tipado corresponde a una función vacía `() => void` y es opcional para permitir títulos simples.

## P5. Funciones en App.tsx
- En `App.tsx` se implementaron funciones flecha anónimas como controladores de eventos y filtros lógicos (App.tsx, líneas 16, 23, 45, etc.) para administrar de manera directa el comportamiento dinámico de la pantalla.

## P6. Adición de una sección "Promociones"
- Para incorporar una nueva sección en el futuro, modificaría únicamente `App.tsx` para integrar el nuevo bloque y reutilizaría por completo los componentes ya creados (`EncabezadoSeccion`, `TarjetaProducto`, `BotonAccion`) sin modificar la carpeta de componentes.