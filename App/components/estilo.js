import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#b71c1c',
        marginBottom: 5
    },

    rodada: {
        fontSize: 16,
        color: '#555',
        marginBottom: 12
    },

    texto: {
        fontSize: 16,
        color: '#333',
        marginVertical: 8,
        textAlign: 'center'
    },

    numeroBox: {
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: '#c62828',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },

    numero: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#ffffff'
    },

    entrada: {
        width: 175,
        height: 45,
        borderWidth: 2,
        borderColor: '#c62828',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
        color: '#333',
        backgroundColor: '#ffffff',
        marginBottom: 8,
        paddingHorizontal: 10
    },

    escolhido: {
        fontSize: 15,
        color: '#666',
        marginBottom: 10
    },

    placar: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginVertical: 15
    },

    card: {
        width: '45%',
        paddingVertical: 12,
        paddingHorizontal: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: '#fbe9e7',
        alignItems: 'center'
    },

    pontos: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#b71c1c',
        marginTop: 5
    },

    mensagem: {
        textAlign: 'center',
        fontSize: 15,
        color: '#333',
        marginVertical: 10,
        paddingHorizontal: 10
    },

    final: {
        width: '90%',
        alignItems: 'center',
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#c62828',
        backgroundColor: '#fbe9e7'
    },

    finalTitulo: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#b71c1c',
        marginBottom: 8
    }

});

export default estilo;