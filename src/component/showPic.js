import { FlatList, StyleSheet, Image, Dimensions } from "react-native"

//Gallery pin and drag later
const width = Dimensions.get('window').width;
export default ({ pic }) => {
    return <FlatList
        data={pic}
        renderItem={({ item }) => {
            return <Image
                source={{ uri: item }}
                style={styles.imgcell}
            />
        }
        }
        style={styles.shell}
        horizontal
        pagingEnabled
    />
}
const styles = StyleSheet.create({
    shell: {
        overflow: 'hidden',
        flex: 1,
    },
    imgcell: {
        width: width,
        height: width
    },
})