import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
