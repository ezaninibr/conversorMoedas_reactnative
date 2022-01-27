import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native';

import api from '../Services/api';

class Conversor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: 0
        };
        this.converter = this.converter.bind(this)
    }

    async converter(){
        let de_para = this.state.moedaA + '_' + this.state.moedaB;
        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=809dc917654d1818d14d`);
        let cotacao = response.data[de_para];
        
        let resultado = cotacao * parseFloat(this.state.moedaB_valor);
        this.setState({valorConvertido: resultado})

        Keyboard.dismiss();
    }

    render() {

        const {moedaA, moedaB} = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.texto}> {moedaA} para {moedaB}</Text>
                <View style={styles.conversor}>
                    <TextInput
                        onChangeText={(moedaB_valor) => this.setState({moedaB_valor})}
                        keyboardType='numeric'
                        style={styles.textInput}
                        placeholder='Digite o valor...'
                    />
                    <Button
                        title='Converter'
                        onPress={this.converter}
                    />
                </View>
                <Text>Resultado: R$ {this.state.valorConvertido.toFixed(2)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: 'center',
        alignItems:'center'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    conversor: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        marginRight: 10,
    },

});

export default Conversor;