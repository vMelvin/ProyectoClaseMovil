// components/BotonAccion.tsx
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface BotonAccionProps {
  titulo: string;
  onPress: () => void;
  apariencia?: 'principal' | 'alternativa' | 'destructiva' | 'enlace';
  tamano?: 'pequeño' | 'mediano' | 'grande';
  anchoCompleto?: boolean;
  inhabilitado?: boolean;
  enProceso?: boolean;
}

export const BotonAccion = ({
  titulo,
  onPress,
  apariencia = 'principal',
  tamano = 'mediano',
  anchoCompleto = false,
  inhabilitado = false,
  enProceso = false,
}: BotonAccionProps) => {
  const containerStyles: ViewStyle[] = [
    styles.base,
    styles[apariencia],
    styles[tamano],
    anchoCompleto && styles.anchoCompleto,
    (inhabilitado || enProceso) && styles.atenuado,
  ];

  const handlePress = () => {
    if (inhabilitado || enProceso) return;
    onPress();
  };

  return (
    <TouchableOpacity style={containerStyles} onPress={handlePress} activeOpacity={0.8}>
      {enProceso ? (
        <ActivityIndicator size="small" color={apariencia === 'principal' ? '#fff' : '#333'} />
      ) : (
        <Text style={[styles.textoBase, styles[`texto_${apariencia}`], styles[`texto_${tamano}`]]}>
          {titulo}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: { borderRadius: 8, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
  principal: { backgroundColor: '#007AFF' },
  alternativa: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#007AFF' },
  destructiva: { backgroundColor: '#FF3B30' },
  enlace: { backgroundColor: 'transparent' },
  pequeño: { paddingVertical: 6, paddingHorizontal: 12 },
  mediano: { paddingVertical: 10, paddingHorizontal: 16 },
  grande: { paddingVertical: 14, paddingHorizontal: 20 },
  anchoCompleto: { width: '100%' },
  atenuado: { opacity: 0.5 },
  textoBase: { fontWeight: '600' },
  texto_principal: { color: '#FFFFFF' },
  texto_alternativa: { color: '#007AFF' },
  texto_destructiva: { color: '#FFFFFF' },
  texto_enlace: { color: '#007AFF', textDecorationLine: 'underline' },
  texto_pequeño: { fontSize: 12 },
  texto_mediano: { fontSize: 14 },
  texto_grande: { fontSize: 16 },
});