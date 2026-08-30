import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { estilo } from './estilo';


export const TelaInicial = () => {
  const [numeroSorteado, setNumeroSorteado] = useState(0);

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 40) + 1;
    setNumeroSorteado(novoNumero);
  };

  return (
    <View style={estilo.tela}>

      <Text style={estilo.instrucao}>
        Clique no botão para sortear um número
        {'\n'}
        entre 1 e 40.
      </Text>

      <View style={estilo.numeroContainer}>
        <Text style={estilo.legenda}>
          Número sorteado
        </Text>

        <Text style={estilo.numero}>
          {numeroSorteado}
        </Text>
      </View>

      <Pressable
        onPress={gerarNumero}
        style={({ pressed }) => [
          estilo.botao,
          pressed && estilo.botaoPressionado,
        ]}
      >
        <Text style={estilo.textoBotao}>
          Sortear
        </Text>
      </Pressable>

    </View>
  );
};
