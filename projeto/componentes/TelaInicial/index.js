import React from 'react';
import { View, Button, Image, Text } from 'react-native';

import logo from '../../assets/logo.jpeg';
import styles from '../estilo';

export default function TelaInicial(props) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Star Wars - Ordem cronológica
      </Text>

      <Image source={logo} style={styles.imagem} />

      <Text style={styles.titulo}>
        Você sabe qual é a ordem cronológica da franquia Star Wars?
      </Text>

      <Text style={styles.texto}>
        Os principais filmes da franquia estão divididos em trilogias.
        Clique no botão abaixo para ver:
      </Text>

      <Button
        title="Ver 1ª Trilogia"
        onPress={() => props.navigation.navigate('Filme 1')}
        color="#372d00"
      />

      <Button
        title="Ver 2ª Trilogia"
        onPress={() => props.navigation.navigate('Filme 2')}
        color="#372d00"
      />

      <Button
        title="Ver 3ª Trilogia"
        onPress={() => props.navigation.navigate('Filme 3')}
        color="#372d00"
      />

    </View>
  );
}