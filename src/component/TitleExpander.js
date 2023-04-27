import { View, StyleSheet, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import Rating from './Rating'

export default ({ items }) => {
    const { store, start, start_review, feature_name, tag, cat_name } = items
    return <View>
        <View style={{
        }}>
            <Text style={remStyles.storeName} >
                {store}
            </Text>
        </View>
        <Text style={remStyles.title} >
            {feature_name}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
            <View>
                <Rating rating={start} size={21} />
            </View>
            <Text style={remStyles.review} >
                {'(' + start_review.toLocaleString() + ')'}
            </Text>
        </View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        fontSize: 13
    }
})
const remStyles = EStyleSheet.create({
    storeName: {
        fontSize: '1.6rem',
        color: '$someBlue'
    },
    title: {
        fontSize: '2.4rem',
        fontWeight: '700',
        color: 'black',
        lineHeight: '3rem',
        marginBottom: '0.8rem'
    },
    review: {
        fontSize: '1.8rem',
        marginLeft: '0.6rem',
        color:'$someBlue'
    },
});
