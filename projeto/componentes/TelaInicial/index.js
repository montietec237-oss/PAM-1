import React from 'react';
import { View, Text, Image, Button } from 'react-native';

import styles from '../estilo';
import logo from '../../assets/logo.jpeg';

export default function TelaInicial(props) {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Star Wars - Ordem Cronológica
      </Text>

      <Image
        source={logo}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Você sabe qual é a ordem cronológica da franquia Star Wars?
      </Text>

      <Text style={styles.texto}>
        Os principais filmes da franquia estão divididos em trilogias.
        Clique em um dos botões abaixo para visualizar.
      </Text>

      <Button
        title="Ver 1ª Trilogia"
        onPress={() => props.navigation.navigate('Tela Triologia 1')}
        color="#372d00"
      />

      <Button
        title="Ver 2ª Trilogia"
        onPress={() => props.navigation.navigate('Tela Triologia 2')}
        color="#372d00"
      />

      <Button
        title="Ver 3ª Trilogia"
        onPress={() => props.navigation.navigate('Tela Triologia 3')}
        color="#372d00"
      />

    </View>
  );
}