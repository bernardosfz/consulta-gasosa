import { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Text} from 'react-native';

export default function Home({ navigation }) {
    const [kilometer,setKilometer] = useState();
    const [gasosa,setGasosa] = useState();

    const nKilometer = parseFloat(kilometer);
    const nGasosa = parseFloat(gasosa);

 return (
   <View style={styles.container}>
    <Text style={styles.text}>Calcula Gasosa</Text>
    <TextInput
        style={styles.textInput}
        value={kilometer}
        onChangeText={setKilometer}
        placeholder='Quilometragem percorrida (Km)'
        keyboardType='numeric'
    />
    <TextInput
        style={styles.textInput}
        value={gasosa}
        onChangeText={setGasosa}
        placeholder='Gasolina consumida (L)'
        keyboardType='numeric'
    />
    <Button
        color='#6225c5'
        title='Calcular'
        onPress={() => navigation.navigate("Details", {gasolina: nGasosa, km: nKilometer})}
    />
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#030712'
    },
    textInput: {
        width: '80%',
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 20,
        padding: 16,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 28,
        color: 'white'
    },
})