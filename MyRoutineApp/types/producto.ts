// types/producto.ts
export type CategoriaProducto = 'bebida' | 'comida' | 'postre';
export type DisponibilidadProducto = 'disponible' | 'pocas unidades' | 'agotado';

export interface Producto {
  id: string;
  nombre: string;
  categoria: CategoriaProducto;
  precio: number;
  disponibilidad: DisponibilidadProducto;
  observaciones?: string;
}