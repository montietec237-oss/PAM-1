import React from "react";
import { Text, View, Image } from "react-native";
import styles from '../styles'; 

import image from '../../assets/sith.jpg';

export default function TelaTriologia3() {
    return (
        <View style={styles.container}>
            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A história de Rey</Text>

                <Image source={image} style={styles.imagem}/>

                <Text style={styles.textos}>
                    Trilogia sequela. Episódios VII, VIII e IX.

                    Enquanto surge uma nova ameaça para a galáxia, Rey, uma catadora de sucata, e Finn, um soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a única esperança de restaurar a paz da galáxia.
                </Text>
            </View>
        </View>
    );
}