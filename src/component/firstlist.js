import { FlatList, StyleSheet, View, Text, Image, useWindowDimensions, Pressable } from "react-native"
import { nanoid } from "@reduxjs/toolkit";
import { useNavigation } from '@react-navigation/native';
const banner = [
    'Keep shopping for',
    'Pickup where you left off',
    'Selected for you',
    'Shop apparel, shoes, and more',
    'Amazon Smart Home',
    'Now is time for you',
    'Always is your best choise'
]
// const { Width } = useWindowDimensions()
const Cell = ({ item, index }) => {
    return <View style={styles.cell}>
        <Text style={styles.text} >{banner[index]}</Text>
        <Image style={styles.img} source={{ uri: item.poster }} />
    </View>
}

export default ({ items }) => {
    const navigation = useNavigation()
    return <View style={styles.container} >
        <FlatList
            style={styles.try}
            keyExtractor={() => nanoid()}
            data={items}
            renderItem={({ item, index }) => <Pressable
                onPress={() => navigation.navigate('product', {
                    banner: banner[index],
                    item: item

                })}>
                <Cell item={item} index={index} />
            </Pressable>}
            horizontal
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150
    },
    try: {
        position: 'absolute',
        top: -50,
    },
    cell: {
        margin: 5,
        padding: 5,
        alignItems: 'center',
        width: 100,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    text: {
        paddingBottom: 10,
        width: '100%',
        minHeight: 40

    },
    img: {
        width: 100,
        height: 147,
    },
})