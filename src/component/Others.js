import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';

export default () => {
    return <View style={styles.container} >
        <View style={{ marginBottom: styles._va.space }} >
            <Text style={styles.h1} >
                <Text>{'Available at a lower price from '}</Text>
                <Text style={{ color: styles._va.color }} >{'other sellers'}</Text>
                <Text>{' that may not offer free Prime delivery. '}</Text>
            </Text>
        </View>
        <Text style={[styles.h1, { color: styles._va.color }]} >{'SELL ON MAMMAZON '}</Text>
    </View>
}
const styles = EStyleSheet.create({
    container: {
        marginTop: '0.5rem',
        paddingTop: '1.2rem',
        paddingHorizontal: '1.4rem',
        backgroundColor: '#fff',
    },
    h1: {
        fontSize: '1.8rem'
    },
    _va: {
        color: '$someBlue',
        space: '0.8rem'
    }
})