import { View, Text, StyleSheet } from 'react-native';

export default function Details({ route }) {
    const average = route.params.km / route.params.gasolina;

    function calculaMedia(X) {
        const classification = [
            { limite: 4, rate: 'E', color: 'red' },
            { limite: 8, rate: 'D', color: 'orange' },
            { limite: 10, rate: 'C', color: 'yellow' },
            { limite: 12, rate: 'B', color: 'green' },
            { limite: Infinity, rate: 'A', color: 'darkgreen' },
        ];
        for (let i = 0; i < classification.length; i++) {
            if (X <= classification[i].limite) {
                return classification[i];
            }
        }
    }

    const resultado = calculaMedia(average);

    return (
        <View style={styles.container}>
            <View style={styles.component}>
                <Text style={styles.title}>Média do Consumo</Text>
                <Text style={[styles.text, { color: resultado.color }]}>
                    {average.toFixed(1)} Km/L
                </Text>
            </View>
            <View style={styles.component}>
                <Text style={styles.title}>Categoria</Text>
                <Text style={[styles.categoryText, { color: resultado.color }]}>
                    {resultado.rate}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#030712',
    },
    component: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    categoryText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
    },
});
