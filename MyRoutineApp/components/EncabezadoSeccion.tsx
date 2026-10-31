// components/EncabezadoSeccion.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface EncabezadoSeccionProps {
  titulo: string;
  cantidad?: number;
  onPressVerTodo?: () => void;
}

export const EncabezadoSeccion = ({ titulo, cantidad, onPressVerTodo }: EncabezadoSeccionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tituloRow}>
        <Text style={styles.titulo}>
          {titulo} {cantidad !== undefined && `(${cantidad})`}
        </Text>
        {onPressVerTodo && (
          <TouchableOpacity onPress={onPressVerTodo}>
            <Text style={styles.enlaceVerTodo}>Ver todo</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 12 },
  tituloRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  titulo: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  enlaceVerTodo: { fontSize: 14, color: '#007AFF', textDecorationLine: 'underline' },
});