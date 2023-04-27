import Price from "./Price"
import { View } from "react-native"
import Delievery from "./Delievery";
import EStyleSheet from 'react-native-extended-stylesheet';
export default ({ item }) => {
    return <View style={styles.container} >
        <View>
            <Price items={item.price} />
            <Delievery />
        </View>
    </View>
}
const styles = EStyleSheet.create({
    container: {
        paddingRight: '1.4rem',
        paddingLeft: '1.4rem',
        backgroundColor: '#fff',
        marginTop: 5,
    },
})