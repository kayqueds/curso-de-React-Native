import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';


const Titulo = styled.Text`

  font-size: 24px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Roboto';
  text-transform: uppercase;
  animation: fadeIn 1s ease-in-out;
`;


export default function Title() {
  return (
    <View>
      <Titulo>
        OneBitHealth...
      </Titulo>
    </View>
  );
}





