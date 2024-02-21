import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.numero, {color:'black'}]}>05</Text>
    <Text style={[styles.sala, {backgroundColor:'pink'}]}>I2HN</Text>
    <Text style={[styles.texto, {color:'blue'}]}>Ana Júlia Reis De Sousa</Text>
    <Text style={[styles.data, {color:'pink'}]}>21-02-2024</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'gray',
  alignItems: 'center',
  justifyContent: 'center',
 },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    left: '30%',
  },
  numero: {
    fontSize: 25,
    fontStyle: 'italic',
    alignItems: 'center',
    justifyContent: 'center',
    right: '30%',
    top: '25%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  sala:{
    fontSize: 20,
  },
  data:{
    fontSize: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,
  },


  })
