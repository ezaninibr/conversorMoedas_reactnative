import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Conversor from './src/Conversor';



export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <View style={styles.container}>
        <Conversor moedaA={"USD"} moedaB={"BRL"}/>
        <Conversor moedaA={"EUR"} moedaB={"BRL"}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:50
  },
});
