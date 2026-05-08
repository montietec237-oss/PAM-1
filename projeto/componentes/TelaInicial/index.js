import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import logo from '../../assets/logo.jpg';
import styles from '../styles';

export default function TelaInicial( props ) {
    return (
        <View style={styles.container}>
            <Text>Os três filmes mais famosos da Barbie</Text>
            <Image source={logo} style={styles.imagem } />

            <Text style={styles.titulo}>Você sabe quais são os três mais famosos da Barbie?</Text>

            <Text style={styles.texto}>Para saber os filmes mais famosos, clique no botão abaixo para ver:</Text>


            <Button title="Ver 1ª Filme" onPress = { () => props.navigation.navigate("Filme 1") } color="#372d00" />
            <Button title="Ver 2ª Filme" onPress = { () => props.navigation.navigate("Filme 2") } color="#372d00" />
            <Button title="Ver 3ª Filme" onPress = { () => props.navigation.navigate("Filme 3") } color="#372d00" />
    </View>
  )
}
