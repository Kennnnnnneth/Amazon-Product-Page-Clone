import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
export default ({ items = {} }) => {
    if (items) {
        const { banner, bonus } = items
        const banner_split = banner.split(/\^\^/)
        const bonus_split = bonus.split(/\^\^/)
        return <View style={remStyle.container} >
            <Text style={remStyle.banner} >
                <Text >
                    {banner_split[0]}
                </Text>
                <Text style={remStyle.em} >
                    {banner_split[1]}
                </Text>
                <Text >
                    {banner_split[2]}
                </Text>
            </Text>
            <Text style={remStyle.banner} >
                <Text>
                    {bonus_split[0]}
                </Text>
                <Text style={remStyle.cross} >
                    {bonus_split[1]}
                </Text>
                <Text style={remStyle.show} >
                    {bonus_split[2]}
                </Text>
                <Text>
                    {bonus_split[3]}
                </Text>
            </Text>
        </View>
    }
    return <></>
}
const remStyle = EStyleSheet.create({
    container: {
        padding: '1.2rem'
    },
    banner: {
        fontSize: '1.8rem',
        color: '$someBlue'
    },
    em: {
        color: '$safeGreen',
        fontWeight: 'bold'
    },
    cross: {
        color: '$titleGray',
        textDecorationLine: 'line-through',
        textDecorationColor: '$titleGray',
    },
    show: {
        color: '$discountRed',
        fontWeight: 'bold'
    }
})