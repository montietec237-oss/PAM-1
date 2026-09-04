import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#b71c1c',
        marginBottom: 5
    },

    rodada: {
        fontSize: 18,
        color: '#555',
        marginBottom: 20
    },

    texto: {
        fontSize: 16,
        color: '#333',
        margin: 10
    },

    numeroBox: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#b71c1c',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    numero: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff'
    },

    entrada: {
        width: 180,
        height: 50,
        borderWidth: 2,
        borderColor: '#b71c1c',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        color: '#333',
        backgroundColor: '#fff',
        marginBottom: 15
    },

    escolhido: {
        fontSize: 16,
        color: '#555',
        margin: 10
    },

    placar: {
        flexDirection: 'row',
        margin: 20
    },

    card: {
        padding: 15,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#fbe9e7',
        alignItems: 'center'
    },

    pontos: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#b71c1c',
        marginTop: 5
    },

    mensagem: {
        textAlign: 'center',
        fontSize: 16,
        color: '#333',
        margin: 15
    },

    final: {
        alignItems: 'center',
        margin: 15,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fbe9e7'
    },

    finalTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#b71c1c',
        marginBottom: 10
    }

});

export default estilo;