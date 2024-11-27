import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput, SafeAreaView} from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Uni Scholar</Text>
      <Text>This platform allows students to ask questions and share answers. Feel free to explore and contribute to the community.</Text>
      <Text>Questions</Text>
      <Button title='Send' onPress={() => console.log('Button clicked')}/>
      <Button title='Comments' onPress={() => console.log('Button clicked')}/>
      <StatusBar style="auto" />
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


