import EStyleSheet from 'react-native-extended-stylesheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { nanoid } from '@reduxjs/toolkit';
import { View, Text } from 'react-native';
import { RowSpread } from '../common/box';
const Section = ({ item }) => {
    return <View style={styles.section} >
        <RowSpread>
            <Text style={styles.section_text} >{item.name}</Text>
            <AntDesign name='right' size={styles._section_icon.fontSize} />
        </RowSpread>
        <RowSpread style={styles.downer} >
            <Text style={styles.section_text} >{'$' + item.price}</Text>
            <View style={styles.downer_box} >
                <Text style={styles.downer_text} >{'Add to Cart'}</Text>
            </View>
        </RowSpread>
    </View>
}
const api = [
    {
        name: `Zbox Game Pass Ultimate: 120 Month Membership [Digital Code]`,
        price: 49.99
    },
    {
        name: `$50 Zbox Gift Card - [Digital Code]`,
        price: 50.00
    }
]
export default () => {
    return <View style={styles.container} >
        <Text style={styles.text} >{'Add an Accessory'}</Text>
        {api.map((item) => <Section item={item} key={nanoid()} />)}
    </View>
}
const styles = EStyleSheet.create({
    container: {
        marginTop: '0.5rem',
        paddingVertical: '1.2rem',
        paddingHorizontal: '1.4rem',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: '1.8rem',
        fontWeight: '700',
    },
    section: {
        borderTopWidth: 1,
        borderTopColor: '#e0dddd',
        paddingVertical: '0.8rem'
    },
    section_text: {
        fontSize: '1.8rem',
    },
    _section_icon: {
        fontSize: '1.8rem'
    },
    downer: {
        marginTop: '0.8rem',
        alignItems: 'flex-start',
    },
    downer_box: {
        borderRadius: '0.8rem',
        backgroundColor: '#ffd814',
        paddingHorizontal: '3rem',
        paddingVertical: '0.8rem',
    },
    downer_text: {
        fontSize: '1.5rem'
    }
})