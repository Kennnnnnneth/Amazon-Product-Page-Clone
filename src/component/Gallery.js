import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, Image, FlatList } from "react-native"
import { nanoid } from '@reduxjs/toolkit';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const api = [
    'https://m.media-amazon.com/images/I/61P9Y9Oo+lL.jpg',
    'https://m.media-amazon.com/images/I/71sZ5QsmpeL.jpg',
    'https://m.media-amazon.com/images/I/714AgWDnXVL.jpg',
    'https://m.media-amazon.com/images/I/71CIxVdwHyL.jpg',
    'https://m.media-amazon.com/images/I/71-cBkIAXcL.jpg',
    'https://m.media-amazon.com/images/I/71tkrV0gXQL.jpg',
]
const Cell = ({ item }) => {
    return <View style={styles.cell} >
        <Image source={{ uri: item }} style={styles.img} />
    </View>
}
export default () => {
    return <View style={styles.container} >
        <Text style={styles.text} >{'Product image gallery'}</Text>
        <View style={{
            alignItems: 'center'
        }} >
            {api.map((item) => <Cell item={item} key={nanoid()} />)}
        </View>
    </View>
}
const styles = EStyleSheet.create({
    container: {
        marginTop: '0.5rem',
        paddingTop: '1.2rem',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: '2.2rem',
        fontWeight: '700'
    },
    cell: {
        marginBottom: windowWidth * 0.035
    },
    img: {
        width: windowWidth * 0.93,
        height: windowWidth * 0.93,
    }
})