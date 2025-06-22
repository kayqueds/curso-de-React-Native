import React from 'react';
import { TextInput, View, Text, Button } from 'react-native';

// keybordTypr serve para definir o tipo de teclado que será exibido
export default function Form() {
  return (
    <View>
     <View>
        <Text>Altura:</Text>
        <TextInput placeholder='Ex: 1.75'
        keyboardType='numeric'/>

        <Text>Peso:</Text>
        <TextInput placeholder='75.385'
        keyboardType='numeric'/>
        <Button title='Calcular IMC'/>
        <ResultImc messageResultImc={messageResultImc}
        resultImc={imc}/>
     </View>
    </View>
  );
}





