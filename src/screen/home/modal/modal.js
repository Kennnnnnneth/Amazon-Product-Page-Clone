
import { View, Text, Pressable, ScrollView, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Cell = ({ index }) => {
    return <Text>{index}</Text>
}
export default ({ route, navigation }) => {
    const { qty } = route.params
    const emptyArray = Array.from(Array(37));
    return <TouchableWithoutFeedback>
        <View style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
            <Pressable style={{ marginTop: 100, marginLeft: 100 }} onPress={() => navigation.goBack()} >
                <Text>{'go back'}</Text>
            </Pressable>

            <Text>{qty}</Text>
            <ScrollView >
                {emptyArray.map((_, index) => <Cell index={index + 1} />)}
            </ScrollView>
        </View>
    </TouchableWithoutFeedback>
}
const styles = EStyleSheet.create({

})