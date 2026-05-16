import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from '../estilo';
import imagem from '../../assets/luke-skywalker.jpg';

export default function TelaTrilogia2() {
  return (
    <View style={styles.container}>

      <View style={styles.boxDescricao}>

        <Text style={styles.titulo}>
          A história de Luke Skywalker
        </Text>

        <Image source={imagem} style={styles.imagem} />

        <Text style={styles.texto}>
          Trilogia original. Episódios IV, V e VI.

          Essa foi a primeira trilogia a surgir,
          porém sua história se passa após a trilogia prequela.

          Nela Luke Skywalker se aventura pela galáxia
          para atender a um pedido de socorro da princesa Leia
          e trava uma batalha contra Darth Vader.
        </Text>

      </View>

    </View>
  );
}