import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView,} from 'react-native';
import { estilo } from './componentes/estilo';
import { Titulo } from './componentes/Titulo';
import { TelaInicial } from './componentes/TelaInicial.js';

const App = () => {
  return (
    <SafeAreaView style={estilo.container}>
      <Titulo />
      <TelaInicial />
    </SafeAreaView>
  );
};

export default App;