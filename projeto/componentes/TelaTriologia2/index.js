import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../../styles';

import imagem from '../../assets/barbie-diamond-castle.jpg';

export default function TelaBarbie() {
  return (
    <View style={styles.container}>
      <View style={styles.boxDescricao}>
        <Text style={styles.titulo}>Barbie: The Diamond Castle</Text>

        <Image source={imagem} style={styles.imagem} />

        <Text style={styles.textos}>
          Foca na amizade entre Barbie e suas amigas e o poder da música para superar desafios.
        </Text>
      </View>
    </View>
  );
}