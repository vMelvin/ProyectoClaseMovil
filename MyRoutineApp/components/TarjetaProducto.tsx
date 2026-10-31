// components/TarjetaProducto.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Producto } from '../types/producto';
import { BotonAccion } from './BotonAccion';

interface TarjetaProductoProps {
  producto: Producto;
  textoBoton?: string;
  onPressBoton: () => void;
}

export const TarjetaProducto = ({ producto, textoBoton = 'Agregar', onPressBoton }: TarjetaProductoProps) => {
  const esAgotado = producto.disponibilidad === 'agotado';
  const esPocasUnidades = producto.disponibilidad === 'pocas unidades';
  const tieneDescuento = producto.observaciones?.includes('descuento');
  
  let precioFinal = producto.precio;
  if (tieneDescuento && producto.observaciones) {
    const porcentaje = parseInt(producto.observaciones) / 100;
    precioFinal = producto.precio * (1 - porcentaje);
  }

  const esNuevo = producto.observaciones?.includes('Producto nuevo');

  return (
    <View style={[styles.card, esAgotado && styles.cardAgotada]}>
      <View style={styles.headerCard}>
        <Text style={styles.nombre}>{producto.nombre}</Text>
        <View style={[styles.badgeCategoria, styles[producto.categoria]]}>
          <Text style={styles.textoCategoria}>{producto.categoria}</Text>
        </View>
      </View>

      <View style={styles.preciosContainer}>
        {tieneDescuento ? (
          <>
            <Text style={styles.precioTachado}>L. {producto.precio.toFixed(2)}</Text>
            <Text style={styles.precioFinal}>L. {precioFinal.toFixed(2)}</Text>
          </>
        ) : (
          <Text style={styles.precioFinal}>L. {producto.precio.toFixed(2)}</Text>
        )}
      </View>

      {esNuevo && (
        <View style={styles.etiquetaNuevo}><Text style={styles.textoEtiqueta}>Nuevo</Text></View>
      )}

      {esPocasUnidades && (
        <View style={styles.etiquetaPocas}><Text style={styles.textoEtiquetaPocas}>Últimas unidades</Text></View>
      )}

      <View style={styles.footerCard}>
        <BotonAccion titulo={esAgotado ? 'Agotado' : textoBoton} onPress={onPressBoton} inhabilitado={esAgotado} anchoCompleto />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 16, marginVertical: 8, elevation: 3 },
  cardAgotada: { opacity: 0.6 },
  headerCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  nombre: { fontSize: 16, fontWeight: 'bold', color: '#333', flex: 1 },
  badgeCategoria: { paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 },
  bebida: { backgroundColor: '#E3F2FD' },
  comida: { backgroundColor: '#E8F5E9' },
  postre: { backgroundColor: '#FCE4EC' },
  textoCategoria: { fontSize: 12, fontWeight: '600', textTransform: 'capitalize' },
  preciosContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  precioFinal: { fontSize: 16, fontWeight: 'bold', color: '#2E7D32' },
  precioTachado: { fontSize: 14, color: '#888', textDecorationLine: 'line-through', marginRight: 8 },
  etiquetaNuevo: { alignSelf: 'flex-start', backgroundColor: '#FFF8E1', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, marginBottom: 8 },
  textoEtiqueta: { fontSize: 10, color: '#F57F17', fontWeight: 'bold' },
  etiquetaPocas: { alignSelf: 'flex-start', backgroundColor: '#FFEBEE', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, marginBottom: 8 },
  textoEtiquetaPocas: { fontSize: 10, color: '#C62828', fontWeight: 'bold' },
  footerCard: { marginTop: 8 },
});