import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../../estilo.js';

import imagem from '../../assets/lucas-skywalker.jpg';

export default function TelaTriologia2() {
  return (
    <View style={styles.container}>
      <View style={styles.boxDescricao}>
        <Text style={styles.titulo}>A história de Lukas Skywalker</Text>

        <Image source={imagem} style={styles.imagem} />

        <Text style={styles.textos}>
         Trilogia original. Episódios IV, V e VI.

         Essa foi a primeira trilogia a surgir, porém sua história se passa após a trilogia prequela.

         Nela Luke Skywalker se aventura pela galáxia  para atender a um pedido de socorro da princesa Leia e se trava um batalha com o grande Darth Vader.
        </Text>
      </View>
    </View>
  );
}