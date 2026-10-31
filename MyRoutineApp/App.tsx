// App.tsx
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Alert, View } from 'react-native';
import { menuProductos } from './data/menu';
import { EncabezadoSeccion } from './components/EncabezadoSeccion';
import { TarjetaProducto } from './components/TarjetaProducto';
import { BotonAccion } from './components/BotonAccion';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Sección 1: Menú del día */}
        <EncabezadoSeccion
          titulo="Menú del día"
          cantidad={menuProductos.length}
          onPressVerTodo={() => Alert.alert('Mostrando el menú completo')}
        />
        {menuProductos.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            producto={producto}
            textoBoton="Agregar"
            onPressBoton={() => Alert.alert(`${producto.nombre} agregado al pedido`)}
          />
        ))}

        <View style={styles.separator} />

        {/* Sección 2: Sus favoritos */}
        <EncabezadoSeccion titulo="Sus favoritos" />
        {menuProductos
          .filter((p) => p.nombre === 'Café americano' || p.nombre === 'Galleta de avena')
          .map((producto) => (
            <TarjetaProducto
              key={`fav-${producto.id}`}
              producto={producto}
              textoBoton="Pedir otra vez"
              onPressBoton={() => Alert.alert(`Pedido rápido: ${producto.nombre}`)}
            />
          ))}

        <View style={styles.separator} />

        {/* Sección 3: Su pedido */}
        <EncabezadoSeccion titulo="Su pedido" />
        <View style={styles.botonesAccionContainer}>
          <BotonAccion
            titulo="Confirmar pedido"
            apariencia="principal"
            anchoCompleto
            onPress={() => Alert.alert('Pedido confirmado')}
          />
          <View style={styles.espaciador} />
          <BotonAccion
            titulo="Vaciar pedido"
            apariencia="destructiva"
            anchoCompleto
            onPress={() => Alert.alert('Se vació el pedido')}
          />
          <View style={styles.espaciador} />
          <BotonAccion
            titulo="Enviando..."
            apariencia="alternativa"
            enProceso
            anchoCompleto
            onPress={() => {}}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F5F5' },
  container: { padding: 16, paddingBottom: 40 },
  separator: { height: 24 },
  botonesAccionContainer: { marginTop: 8 },
  espaciador: { height: 12 },
});