import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RowSpread } from '../common/box';
const api = {
    type: 'Computer',
    price: 69.99,
    method: 'free',
    used_qty: 24,
}
export default () => {
    return <View style={styles.container} >
        <Text style={styles.h1} >{'Orther sellers on Amazon'}</Text>
        <RowSpread>
            <View style={styles.box} >
                <View style={{ marginBottom: styles._space.space * 2 }} >
                    <Text style={styles.h2} >{api.type + ' New & Used (' + api.used_qty + ') from'}</Text>
                </View>
                <View style={{ marginBottom: styles._space.space }} >
                    <Text style={styles.price_text} >{'$' + api.price}</Text>
                </View>
                <View style={{ marginBottom: styles._space.space }} >
                    <Text style={styles.method_text} >{api.method.toUpperCase() + ' Shipping'}</Text>
                </View>
            </View>
            <View>
                <AntDesign name='right' size={styles._space.icon} />
            </View>
        </RowSpread>
    </View>
}
const styles = EStyleSheet.create({
    container: {
        marginTop: '0.5rem',
        paddingVertical: '1.2rem',
        paddingHorizontal: '1.4rem',
        backgroundColor: '#fff',
    },
    h1: {
        fontSize: '1.8rem',
        fontWeight: '700',
    },
    box: {
        marginTop: '0.8rem',
        marginBottom: '0.4rem'
    },
    h2: {
        fontSize: '1.5rem'
    },
    _space: {
        space: '0.4rem',
        icon: '1.8rem',
    },
    price_text: {
        fontSize: '1.8rem',
    },
    method_text: {
        fontSize: '1.3rem'
    }
})