import { Text, View } from "react-native"
import EStyleSheet from 'react-native-extended-stylesheet';
export default ({ item }) => {

    return <View style={[remStyle.container, remStyle.flexRow]} >
        <View style={{
            flexDirection: 'row'
        }}>
            <View style={remStyle.suggest} >
                <Text style={remStyle.amazon} >
                    {`Amazon's`}
                </Text>
                <Text style={remStyle.choice} >
                    {'Choice'}
                </Text>
            </View>
            <View style={remStyle.tran} />
        </View>
        <View style={remStyle.flexRow} >
            <Text style={remStyle.text} >
                {'for ' + item}
            </Text>
        </View>
    </View>
}
const remStyle = EStyleSheet.create({
    flexRow: {
        flexDirection: 'row'
    },
    container: {
        marginTop: '0.3rem',
        marginBottom: '1rem',
        alignItems: 'center'
    },
    suggest: {
        flexDirection: 'row',
        backgroundColor: '#232f3e',
        paddingTop: '0.2rem',
        paddingBottom: '0.2rem'
    },
    amazon: {
        color: '#ffffff',
        fontSize: '1.4rem',
        marginLeft: '0.8rem',
        marginRight: '0.3rem'

    },
    choice: {
        color: '#f69931',
        fontSize: '1.4rem',
        marginRight: '0.2rem'
    },
    tran: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: '1rem',
        borderTopWidth: '1.6rem',
        borderRightColor: "transparent",
        borderTopColor: '#232f3e',

    },
    text: {
        fontSize: '1.8rem',
        color: '$someBlue',
        marginLeft: '0.5rem'
    }
})