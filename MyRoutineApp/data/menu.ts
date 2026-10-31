// data/menu.ts
import { Producto } from '../types/producto';

export const menuProductos: Producto[] = [
  { id: '1', nombre: 'Café americano', categoria: 'bebida', precio: 35.00, disponibilidad: 'disponible' },
  { id: '2', nombre: 'Licuado de fresa', categoria: 'bebida', precio: 55.00, disponibilidad: 'pocas unidades', observaciones: 'Producto nuevo' },
  { id: '3', nombre: 'Empanada de queso', categoria: 'comida', precio: 30.00, disponibilidad: 'disponible', observaciones: '10% de descuento' },
  { id: '4', nombre: 'Sándwich de pollo', categoria: 'comida', precio: 75.00, disponibilidad: 'agotado' },
  { id: '5', nombre: 'Pastel de chocolate', categoria: 'postre', precio: 45.00, disponibilidad: 'pocas unidades', observaciones: '20% de descuento' },
  { id: '6', nombre: 'Galleta de avena', categoria: 'postre', precio: 20.00, disponibilidad: 'disponible', observaciones: 'Producto nuevo' },
];