import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, Modal, Pressable } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import { RowView, RowSpread } from '../common/box';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { nanoid } from '@reduxjs/toolkit';
import Entypo from 'react-native-vector-icons/Entypo';
const api = [
    {
        method: 'FREE delivery',
        date_get: '2022-01-01',
        remain_hr: '04-46'
    }
]
export default () => {
    const navigation = useNavigation();
    const [qty, setQty] = useState(1)
    const arr = Array.from(Array(37).keys()).slice(1)
    return <View>
        <View style={styles.location} >
            <Text style={styles.text_default} >
                <Text style={styles.text_blue} >{api[0].method}</Text>
                <Text style={{ fontWeight: 'bold' }} >{api[0].date_get}</Text>
                <Text>{'. Order within '} </Text>
                <Text style={styles.text_blue} >{api[0].remain_hr}</Text>
            </Text>
        </View>
        <RowView>
            <SimpleLineIcons name='location-pin' size={styles._icon.fontSize} style={styles.icon} />
            <Text style={[styles.text_default, styles.text_blue]} >{"Select delivery location"}</Text>
        </RowView>
        <View style={styles.sign} >
            <Text style={[styles.sign_text, { color: '#1c6f1a' }]} >{'In Stock'}</Text>
        </View>
        <RNPickerSelect
            items={arr.map((item) => ({
                label: item + '',
                value: item
            }))}
            onValueChange={setQty}
            itemKey={nanoid()}
            placeholder={{}}
        >
            <RowView style={styles.select}>
                <Text style={styles.select_text} >{"Qty: " + qty}</Text>
                <AntDesign name={'down'} size={styles._select_icon.fontSize} />
            </RowView>
        </RNPickerSelect>
        <View style={[styles.location, styles.button, { backgroundColor: '#FFD814' }]} >
            <Text style={styles.button_text} >{'Add to Cart'}</Text>
        </View>
        <View style={[styles.location, styles.button, { backgroundColor: '#FFA41C', marginBottom: 0 }]} >
            <Text style={styles.button_text}>{'Bye now'}</Text>
        </View>
        <RowView style={styles.secure} >
            <Entypo name='lock' size={styles._secure_icon.fontSize} style={{ marginRight: 5 }} color='#999999' />
            <Text style={[styles.secure_text, styles.text_blue]} >{'Secure transaction'}</Text>
        </RowView>
        <View style={{ marginBottom: 12 }} >
            <Text style={styles.text_default} >{'Ships from and sold by Mamazon.ca'}</Text>
        </View>
        <View style={{ marginBottom: 16 }} >
            <Text style={styles.text_default} >{'Gift-wap available'}</Text>
        </View>
        <View style={{ marginBottom: 12 }} ><Text style={[styles.text_default, styles.text_blue]} >{'Add to Wish List'}</Text></View>
    </View>
}
const styles = EStyleSheet.create({
    location: {
        marginBottom: '1.2rem'
    },
    text_default: {
        fontSize: '1.5rem'
    },
    text_blue: {
        color: '$someBlue'
    },
    icon: {
        marginRight: '0.6rem'
    },
    _icon: {
        fontSize: '1.6rem'
    },
    sign: {
        paddingTop: '0.4rem',
        marginBottom: '0.4rem'
    },
    sign_text: {
        fontSize: '1.8rem'
    },
    select: {
        marginBottom: '2.1rem',
        backgroundColor: '#f0f2f2',
        borderRadius: '0.7rem',
        shadowColor: 'rgba(15 17 17 / 0.15',
        shadowOffset: { width: 0, height: '0.2rem' },
        shadowRadius: '0.5rem',
        paddingVertical: '0.8rem',
        paddingHorizontal: '1.7rem',
        alignSelf: 'flex-start'
    },
    select_text: {
        fontSize: '2rem',
        marginRight: '0.8rem'
    },
    _select_icon: {
        fontSize: '2rem'
    },
    button: {
        paddingVertical: '1.2rem',
        paddingHorizontal: '1.7rem',
        borderRadius: '10rem'
    },
    button_text: {
        fontSize: '1.6rem',
        textAlign: 'center'
    },
    secure: {
        marginVertical: '1.2rem'
    },
    _secure_icon: {
        fontSize: '1.8rem'
    },
    secure_text: {
        fontSize: '1.8rem',
    }
})