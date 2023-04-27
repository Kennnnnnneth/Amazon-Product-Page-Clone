import { View, StyleSheet, Text, Pressable } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { withDecay } from "react-native-reanimated"


export default ({ item, width }) => {
    const difference_price = item.history_price - item.price

    return <View>

        <View style={[styles.container, {

        }]} >
            <Text style={[{
                paddingLeft: 17,
                paddingRight: 17,
            }, styles.top_banner]} >
                {'Top deal'}
            </Text>
            <View style={[styles.price_container, styles.padding]} >
                <View style={styles.price_now} >
                    {difference_price ? <Text style={styles.price_different} >
                        {Math.round(-difference_price * 100 / item.history_price) + '%'}
                    </Text> : <> </>}
                    <Text style={{
                        top: 7
                    }} >{'$'}</Text>
                    <Text style={styles.price_integer} >
                        {(item.price + '').split('.')[0]}
                    </Text>
                    <Text style={styles.price_friction} >
                        {(item.price + '').split('.')[1]}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    paddingBottom: 5,
                }} >
                    <Text>
                        {"Was :"}
                    </Text>
                    <Text style={styles.price_history} >
                        {'$' + item.history_price}
                    </Text>
                </View>
                <View style={{
                    alignItems: 'center'
                }} >
                    <Pressable style={[styles.coupon, {
                        width: width * 0.7,
                        alignItems: 'center'
                    }]} >
                        <View>
                            <Text style={[{
                                lineHeight: 25
                            }, styles.fontSize]} >
                                {`Get a $65 Amazon.ca Gift Card instandtly, plus up to 5% back for 6 months after approval for the Amazon.ca Rewards Mastercard.`}
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                        }} >
                            <Text style={[styles.fontSize]} >
                                {`Pay `}
                            </Text>
                            <Text style={{
                                color: '#555658',
                                fontSize: 16,
                                textDecorationLine: 'line-through',
                                textDecorationColor: '#555658',
                            }} >
                                {'$59.99'}
                            </Text>
                            <Text style={[{
                                color: '#a1331d'
                            }, styles.fontSize]}>
                                {` $0 `}
                            </Text>
                            <Text style={[styles.fontSize]} >
                                {`for this order after approval`}
                            </Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.title} >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700'
                    }} >
                        {item.name}
                    </Text>
                </View>
            </View>
            <View style={styles.button} >
                <Pressable style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }} >
                    <MaterialCommunityIcons name='cards-heart-outline' size={20} style={styles.paddingRight} color='#9d9d9d' />
                    <Text>{'Collect'}</Text>
                </Pressable>
                <Pressable style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }} >
                    <Feather name='trending-down' size={20} style={styles.paddingRight} color='#9d9d9d' />
                    <Text>{'Remaind'}</Text>
                </Pressable>
                <Pressable style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }} >
                    <AntDesign name='sharealt' size={20} style={styles.paddingRight} color='#9d9d9d' />
                    <Text>{'Share'}</Text>
                </Pressable>
            </View>
        </View>
    </View>
}
const styles = StyleSheet.create({
    padding: {
        paddingLeft: 17,
        paddingRight: 17,
    },
    paddingRight: {
        paddingRight: 5
    },
    backgroundColor: {
        color: '#f0f0f0'
    },
    fontSize: {
        fontSize: 16,
        fontWeight: '500',
        color: '#336a7b'
    },
    container: {
        borderRadius: 15,
        backgroundColor: "#ffffff",
        paddingBottom: 12,
        paddingTop: 12,
    },
    top_banner: {
        color: '#cc0c39',
        fontSize: 16,
        fontWeight: '700',
    },
    price_container: {

    },
    price_different: {
        color: '#cc0c39',
        paddingRight: 7,
        fontSize: 40,
        fontWeight: '300',
    },
    price_now: {
        flexDirection: 'row',
        paddingBottom: 5,
        paddingTop: 5,
    },
    price_integer: {
        color: '#0f1111',
        fontSize: 46,
        fontWeight: '500',

    },
    price_friction: {
        fontSize: 17,
        top: 6
    },
    price_history: {
        fontSize: 16,
        color: '#565959',
        fontWeight: '300',
        textDecorationLine: 'line-through',
        textDecorationColor: '#565959'
    },
    coupon: {

    },
    title: {
        paddingBottom: 8,
        paddingTop: 8,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 8,
        paddingTop: 8,
    }
})