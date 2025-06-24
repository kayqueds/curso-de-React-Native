import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function ResultImc(props) {

const Texto = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-top: 10px;
  font-family: 'Roboto';
  text-align: center;
  `;


  return (
    <View>
       <Texto>
        {props.messageResultImc}
      </Texto>
        <Texto>
            {props.resultImc}
        </Texto>
      <Texto>
        {props.statusImc}  
      </Texto>
    </View>
  );
}





