import Title from './src/components/Title';
import Main from './src/components/Main';
import styled from 'styled-components/native';

// Styled component
const Container = styled.View`
  flex: 1;
  background-color: rgb(75, 218, 170);
  align-items: center;
  justify-content: center;
`;

const Conteudo = styled.View`
  width: 80%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: rgba(145, 31, 221, 0.8);
  border-radius: 20px;
`;


export default function App() {
  return (
    <Container>
      <Conteudo>
      <Title />
      <Main />
      </Conteudo>
    </Container>
  );
}
