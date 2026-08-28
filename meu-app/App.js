import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView,} from 'react-native';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  cabecalho: {
    padding: 25,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  subtitulo: {
    fontSize: 14,
    color: '#777777',
  },

  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  instrucao: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 35,
  },

  numeroContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 35,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 25,
  },

  legenda: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  numero: {
    fontSize: 72,
    fontWeight: '700',
    color: '#222222',
  },

  botao: {
    width: '100%',
    backgroundColor: '#222222',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },

  botaoPressionado: {
    backgroundColor: '#444444',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

const Titulo = () => {
  return (
    <View style={estilo.cabecalho}>
      <Text style={estilo.subtitulo}>
        Sorteio de números
      </Text>
    </View>
  );
};

const TelaInicial = () => {
  const [numeroSorteado, setNumeroSorteado] = useState(0);

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100) + 1;
    setNumeroSorteado(novoNumero);
  };

  return (
    <View style={estilo.tela}>

      <Text style={estilo.instrucao}>
        Clique no botão para sortear um número
        {'\n'}
        entre 1 e 100.
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

const App = () => {
  return (
    <SafeAreaView style={estilo.container}>
      <Titulo />
      <TelaInicial />
    </SafeAreaView>
  );
};

export default App;

