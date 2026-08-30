import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F9', // Roxo bem suave no fundo
  },

  cabecalho: {
    padding: 25,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EBE5F0',
  },

  subtitulo: {
    fontSize: 14,
    color: '#7A6B85', // Roxo acinzentado suave
  },

  tela: {
    flex: 1,
    justify: 'center',
    alignItems: 'center',
    padding: 25,
  },

  instrucao: {
    fontSize: 16,
    color: '#52435B', // Roxo escuro natural
    textAlign: 'center',
    marginBottom: 35,
    lineHeight: 22,
  },

  numeroContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 35,
    alignItems: 'center',
    borderRadius: 16, // Bordas mais arredondadas e modernas
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#EBE5F0',
    // Sombra suave
    shadowColor: '#58366C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },

  legenda: {
    fontSize: 12,
    color: '#8E7B99',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    fontWeight: '600',
  },

  numero: {
    fontSize: 72,
    fontWeight: '700',
    color: '#3B1E4D', // Roxo profundo
  },

  botao: {
    width: '100%',
    backgroundColor: '#6B3FA0', // Roxo principal vibrante e natural
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    // Sombra do botão
    shadowColor: '#6B3FA0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },

  botaoPressionado: {
    backgroundColor: '#532E80', // Roxo mais escuro ao pressionar
    transform: [{ scale: 0.98 }],
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});