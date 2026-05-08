import React from "react";
import { Text, View, Image } from "react-native";
import styles from '../styles';

import imagem from '../../assets/Barbie-as-the-Princess-and-the-Pauper.jpg'

export default function TelaFilme1() {
    return (
        <View style={styles.container}>
            
            <View style={styles.boxDescricao}>
            <Text style={styles.Titulo}>Barbie as the Princess and the Pauper</Text>
            
            <Image source={imagem} style={styles.imagem} />
            
            <Text style={styles.texto}>Barbie é a princesa Anneliese, que se parece exatamente com a pobre camponesa Erika. Quando Anneliese é sequestrada, Erika deve assumir seu lugar e salvar o reino. Juntas, elas descobrem a importância da amizade e do amor verdadeiro.</Text>
            </View>
        </View>
    );
}