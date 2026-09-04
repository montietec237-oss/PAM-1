import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import estilo from './estilo';

export default function TelaInicial() {

    const [rodada, setRodada] = useState(1);
    const [numeroEscolhido, setNumeroEscolhido] = useState('');
    const [numeroSorteado, setNumeroSorteado] = useState(null);
    const [pontosRodada, setPontosRodada] = useState(0);
    const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
    const [mensagem, setMensagem] = useState(
        'Digite um número de 1 a 100 para começar.'
    );
    const [finalizado, setFinalizado] = useState(false);

    function sortearNumero() {

        if (numeroEscolhido === '' || finalizado) {
            setMensagem('Digite um número de 1 a 100.');
            return;
        }

        const escolhido = Number(numeroEscolhido);

        if (escolhido < 1 || escolhido > 100) {
            setMensagem('Digite um número entre 1 e 100.');
            return;
        }

        const numero = Math.floor(Math.random() * 100) + 1;

        const pontos = 100 - Math.abs(
            escolhido - numero
        );

        setNumeroSorteado(numero);
        setPontosRodada(pontos);
        setPontuacaoTotal(pontuacaoTotal + pontos);

        if (escolhido === numero) {
            setMensagem(
                'Acertou! Você fez ' + pontos + ' pontos!'
            );
        } else {
            setMensagem(
                'Você escolheu: ' +
                escolhido +
                '. Número sorteado: ' +
                numero +
                '. Você fez ' +
                pontos +
                ' pontos!'
            );
        }

        if (rodada === 5) {
            setFinalizado(true);
        } else {
            setRodada(rodada + 1);
            setNumeroEscolhido('');
        }
    }

    function reiniciar() {

        setRodada(1);
        setNumeroEscolhido('');
        setNumeroSorteado(null);
        setPontosRodada(0);
        setPontuacaoTotal(0);
        setMensagem(
            'Digite um número de 1 a 100 para começar.'
        );
        setFinalizado(false);
    }

    function mensagemFinal() {

        if (pontuacaoTotal === 500) {
            return 'Perfeito! Você acertou todos!';
        }

        if (pontuacaoTotal >= 400) {
            return 'Quase perfeito!';
        }

        if (pontuacaoTotal >= 300) {
            return 'Excelente!';
        }

        if (pontuacaoTotal >= 200) {
            return 'Muito bem!';
        }

        if (pontuacaoTotal >= 100) {
            return 'Bom começo!';
        }

        return 'Continue tentando!';
    }

    return (
        <View style={estilo.container}>

            <Text style={estilo.titulo}>
                Jogo dos Números
            </Text>

            <Text style={estilo.rodada}>
                {finalizado
                    ? 'Jogo concluído'
                    : 'Rodada ' + rodada + ' de 5'}
            </Text>

            <Text style={estilo.texto}>
                Número sorteado
            </Text>

            <View style={estilo.numeroBox}>
                <Text style={estilo.numero}>
                    {numeroSorteado === null
                        ? '?'
                        : numeroSorteado}
                </Text>
            </View>

            <Text style={estilo.texto}>
                Digite um número de 1 a 100:
            </Text>

            <TextInput
                style={estilo.entrada}
                value={numeroEscolhido}
                onChangeText={setNumeroEscolhido}
                keyboardType="numeric"
                placeholder="1 - 100"
                maxLength={3}
            />

            <Text style={estilo.escolhido}>
                Número escolhido: {
                    numeroEscolhido === ''
                        ? '--'
                        : numeroEscolhido
                }
            </Text>

            <Button
                title="Sortear Número"
                onPress={sortearNumero}
                color="#b71c1c"
            />

            <View style={estilo.placar}>

                <View style={estilo.card}>
                    <Text>Pontos da rodada</Text>

                    <Text style={estilo.pontos}>
                        {pontosRodada}
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text>Pontuação total</Text>

                    <Text style={estilo.pontos}>
                        {pontuacaoTotal} / 500
                    </Text>
                </View>

            </View>

            <Text style={estilo.mensagem}>
                {mensagem}
            </Text>

            {finalizado && (
                <View style={estilo.final}>

                    <Text style={estilo.finalTitulo}>
                        Fim de jogo!
                    </Text>

                    <Text>
                        Pontuação final:
                    </Text>

                    <Text style={estilo.pontos}>
                        {pontuacaoTotal} / 500
                    </Text>

                    <Text style={estilo.mensagem}>
                        {mensagemFinal()}
                    </Text>

                </View>
            )}

            <Button
                title="Jogar Novamente"
                onPress={reiniciar}
                color="#b71c1c"
            />

        </View>
    );
}