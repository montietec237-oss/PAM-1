import React from "react";
import { Text, View, Image } from "react-native";
import styles from '../estilo.js';

import imagem from '../../assets/darth-vader.jpeg';

export default function TelaTrilogia1() {
    return (
        <View style={styles.container}>
            
            <View style={styles.boxDescricao}>
            <Text style={styles.Titulo}>A história de Darth Vader</Text>
            
            <Image source={imagem} style={styles.imagem} />
            
            <Text style={styles.texto}>Trilogia prequela. Episódios I, II e III

                    Apesar de ter sido criada depois da trilogia original, essa é a primeira trilogia na ordem cronológica da série Star Wars. Nela é contada a história do grande vilão Darth Vader.

                    Através dessa trilogia você vai saber de onde ele veio e quem ele é.
            </Text>
            </View>
        </View>
    );
}