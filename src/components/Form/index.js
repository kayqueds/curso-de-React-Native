import React, { useState } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import ResultImc from './ResultImc';
import styled from 'styled-components/native';


const Input = styled.TextInput`
  height: 40px;
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 20px;
`;


const Texto = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  font-family: 'Roboto';
  `;


// keybordTypr serve para definir o tipo de teclado que será exibido

export default function Form() {

const [altura, setAltura] = useState(null);
const [peso, setPeso] = useState(null);
const [messageImc, setMessageImc] = useState("Preench o peso e altura");
const [imc, setImc] = useState(null);
const [textButton, setButton] = useState("Calcular");

function imcCalculator() {
  return setImc((peso / (altura * altura)).toFixed(2));
}

function validationImc() {
  if(altura != null && peso != null){
    imcCalculator();
    setAltura(null);
    setPeso(null);
    setMessageImc("Seu IMC é igual: ");
    setButton("Calcular Novamente");
    return;
  }
    else{
      setImc(null);
      setButton("Calcular");
      setMessageImc("Preencha o peso e altura");
    }
  }

  return (
    <View>
     <View>
        <Texto>Altura:</Texto>
        <Input
        onChangeText={setAltura} placeholder='Ex: 1.75'
        keyboardType='numeric'/>

        <Texto>Peso:</Texto>
        <Input
        onChangeText={setPeso} placeholder='75.385'
        keyboardType='numeric'/>
        <Button onPress={()=> validationImc()} title={textButton}/>
        <ResultImc messageResultImc={messageImc}
        resultImc={imc}/>
     </View>
    </View>
  );
}

