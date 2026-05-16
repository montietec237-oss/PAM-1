import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  texto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },

  imagem: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  boxDescricao: {
    alignItems: 'center',
  },

});

export default styles;