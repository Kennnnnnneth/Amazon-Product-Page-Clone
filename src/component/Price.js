import { Text, View } from "react-native"
import EStyleSheet from 'react-native-extended-stylesheet';
import { RowView } from "../common/box";
export default ({ items }) => {
    const difference = items.history_price - items.now_price
    return <View style={remStyle.container} >
        <RowView>
            {difference ? <Text style={remStyle.discount} >
                {Math.round(-difference * 100 / items.history_price) + '%'}
            </Text> : <></>}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={remStyle.currency} >
                    {'$'}
                </Text>
                <Text style={remStyle.money_front} >
                    {(items.now_price + '').split('.')[0]}
                </Text>
                <Text style={remStyle.money_back} >
                    {(items.now_price + '').split('.')[1]}
                </Text>
            </View>
        </RowView>
        <Text>
            <Text style={remStyle.old_money_title} >
                {'List Price:'}
            </Text>
            <Text style={remStyle.old_price} >
                {'$' + items.history_price}
            </Text>
        </Text>
    </View>
}

const remStyle = EStyleSheet.create({
    container: {
        marginBottom: '1.2rem'
    },
    discount: {
        fontSize: '4.6rem',
        color: '$discountRed',
        fontWeight: '300',
        marginRight: '0.4rem',
    },
    currency: {
        fontSize: '2rem',
        fontWeight: '300',
        top: '-0.7rem'
    },
    money_front: {
        fontSize: '4.9rem',
    },
    money_back: {
        fontSize: '2rem',
        top: '-0.7rem'
    },
    old_money_title: {
        color: '$titleGray'
    },
    old_price: {
        color: '$titleGray',
        textDecorationLine: 'line-through',
        textDecorationColor: '$titleGray',
    }
})