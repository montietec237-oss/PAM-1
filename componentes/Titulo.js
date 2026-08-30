import React from 'react';
import { View, Text } from 'react-native';
import { estilo } from './estilo';

export const Titulo = () => {
  return (
    <View style={estilo.cabecalho}>
      <Text style={estilo.subtitulo}>
        Sorteio de números
      </Text>
    </View>
  );
};
