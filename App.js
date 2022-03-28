import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

var [totalReal, setTotalReal] = useState('');
var [totaDollar, setTotalDollar] = useState('');
var [cotacao, setCotacao] = useState('');

function CalcularTotal(){

  totaDollar = parseFloat(totalReal) / parseFloat(cotacao);
  alert("O Total em Dollar será: " + totaDollar.toFixed(2));
}


  return (
    <View style={styles.container}>
     <Text style={styles.titulo}>Aplicativo de Conversao</Text>

     <TextInput style={styles.campo} placeholder="Total em Real.."
      keyboardType="numeric"
      onChangeText={(totalReal) => setTotalReal(totalReal)}
      />
     <TextInput style={styles.campo} placeholder="Cotação do Dia" 
     keyboardType="numeric"
     onChangeText={(cotacao) => setCotacao(cotacao)}/>

     <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
     <Text>Calcular</Text>
     </TouchableOpacity>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
  },
  titulo:{
    textAlign:'center',
    marginTop:40,
    marginBottom:40,
    fontSize:30,
    color:"#228B22"
  },
  campo:{
    backgroundColor:"#FFF",
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15
  },
  botao:{
    justifyContent:'cnter',
    alignItems: 'center',
    margin: 15,
    backgroundColor:'#FFD700',
    padding: 10
  }
});
