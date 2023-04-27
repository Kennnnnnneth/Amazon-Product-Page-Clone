import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, Image, FlatList } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import { nanoid } from '@reduxjs/toolkit';
import { RowSpread, RowView } from '../common/box';
import Rating from './Rating';
const bought_together = [
    {
        pic: 'https://images-na.ssl-images-amazon.com/images/I/61P9Y9Oo+lL._AC_UL140_SR140,140_.jpg',
        price: 69.99,
        naem: ' Xbox Wireless Controller for Xbox Series X|S, Xbox One,…',
    },
    {
        pic: 'https://images-na.ssl-images-amazon.com/images/I/61beNMz9m2L._AC_UL140_SR140,140_.jpg',
        price: 73.96,
        naem: 'Xbox Wireless Controller for Xbox Series X|S, Xbox One, and…'
    },
    {
        pic: 'https://images-na.ssl-images-amazon.com/images/I/71wG2SsDRXL._AC_UL140_SR140,140_.jpg',
        price: 70.48,
        name: 'Xbox Wireless Controller for Xbox Series X|S, Xbox One, and…'
    }
]
const also_like = [
    {
        name: 'eXtremeRate Shadow Red Soft Touch Grip Front Housing Shell Cover for Xbox One S/X Controller, Replacement Parts Custom Case Faceplate for Xbox One Wireless Controller 1708 - Controller NOT Included',
        pic: 'https://m.media-amazon.com/images/I/41s4lPC3AxL._AC_UX345_UY345_SR345,345_.jpg',
        star: 4.2,
        review: 4944,
        price: 18.59,
        prime: true
    },
    {
        name: 'Wireless Handheld Game Console, Retro Game Console, 10000+ Classic Game Console, 2.4G Wireless Controllers, HDMI Output TV Video,Ideal Gift for Kids and Adults',
        pic: 'https://m.media-amazon.com/images/I/51D0EA6HaJL._AC_UX345_UY345_SR345,345_.jpg',
        price: 64.99,
    },
    {
        name: 'Heiko Wireless Controller Compatible with PS4 / PS4 Slim / PS4 Pro &amp; PC - Enhanced Dualshock PS4 Controller with 1000 Battery, 6-Axis Gyro Sensor, Speaker/Audio Jack for Playstation 4(Blue Cloud)',
        pic: 'https://m.media-amazon.com/images/I/41xAouAvNdL._AC_UX345_UY345_SR345,345_.jpg',
        star: 3.8,
        review: 12,
        price: 38.77,
    },
    {
        name: 'eXtremeRate Shadow Red Soft Touch Replacement Handles Shell for Xbox Series X/S Controller, Custom Side Rails Panels Front Housing Shell Faceplate for Xbox Core Controller - Controller NOT Included',
        pic: 'https://m.media-amazon.com/images/I/310L9by7nnL._AC_UX345_UY345_SR345,345_.jpg',
        star: 4.7,
        review: 868,
        price: 26.99
    },
    {
        name: 'Charging Stand with Cooling Fan for Xbox Series X Console &amp; Controller,Vertical Dual Charger Station Dock Accessories with 2x 1400mAh Rechargeable Battery &amp; Cover,Headset Stand &amp; 10 Game Slots (Black)',
        pic: 'https://m.media-amazon.com/images/I/41InWkkcOkL._AC_UX230_UY230_SR230,230_.jpg',
        star: 2.6,
        review: 1534,
        price: 69.99,
    },
    {
        name: 'eXtremeRate Scarlet Red Soft Touch Custom Bottom Shell w/Battery Cover for Xbox Series S/X Controller - Controller &amp; Side Rails NOT Included',
        pic: 'https://m.media-amazon.com/images/I/41TVWbp7laL._AC_UX230_UY230_SR230,230_.jpg',
        star: 3.4,
        review: 146432,
        price: 26.99
    }

]
const Plus = () => {
    return <AntDesign name='plus' size={styles._va.unit * 1.5} />
}
const Pic = ({ item }) => {
    return <Image source={{ uri: item.pic }} style={{ width: styles._va.unit * 7, height: styles._va.unit * 7 }} />
}
const Cell = ({ item }) => {
    return <View style={{ marginLeft: styles._va.unit * 2.4 }} >
        <Image source={{ uri: item.pic }} style={{ width: styles._va.unit * 11.5, height: styles._va.unit * 11.5 }} />
        <Text style={{ width: styles._va.unit * 12.2, height: styles._va.unit * 4.05, fontSize: styles._va.unit * 1.8, color: styles._va.blue, lineHeight: styles._va.unit * 2.4 }} >{item.name.slice(0, 21) + (item.name.length > 21 ? "..." : "")}</Text>
        {item.star && <Rating rating={item.star} size={18} />}
        {item.review && <Text style={{ fontSize: styles._va.unit * 1.6, color: styles._va.gray }} >{item.review + ' reviewers'}</Text>}
        <Text style={{ fontSize: styles._va.unit * 2.2, color: '#b12704' }} >{'$' + item.price}</Text>
    </View>
}
export default () => {
    return <View style={styles.container} >
        <View style={styles.upper} >
            <Text style={styles.h1} >{'Frequently Not bought together'}</Text>
            <View style={styles.box} >
                <View style={styles.innerBox_up}>
                    <RowSpread>
                        {
                            bought_together.map((_, index, a) => {
                                if (index + 1 < a.length) {
                                    return [index, -1]
                                }
                                return index
                            }).flat().map((item) => {
                                if (item >= 0) {
                                    return <Pic item={bought_together[item]} key={nanoid()} />
                                }
                                return <Plus key={nanoid()} />
                            })
                        }
                    </RowSpread>
                </View>
                <RowSpread style={styles.innerBox_down} >
                    <Text style={{}} >{' '}</Text>
                    <Text style={{ fontSize: styles._va.unit * 2.2 }} >{' Buy all three: $' + bought_together.reduce((a, c) => a + c.price, 0)}</Text>
                    <AntDesign name='down' size={styles._va.unit * 1.8} />
                </RowSpread>
            </View>
        </View>
        <View style={{ marginBottom: styles._va.unit * 3 }} >
            <Text style={{ fontSize: styles._va.unit * 2.65, fontWeight: '700' }} >{'You might also like'}</Text>
            <Text style={{ fontSize: 13, color: '#555555' }} >{'Sponsored'}</Text>
            <FlatList
                data={also_like}
                renderItem={({ item }) => <Cell item={item} />}
                keyExtractor={() => nanoid()}
                horizontal
            />
        </View>
    </View>
}
const styles = EStyleSheet.create({
    container: {
        marginTop: '0.5rem',
        paddingTop: '1.2rem',
        paddingHorizontal: '1.4rem',
        backgroundColor: '#fff',
    },
    upper: {
        marginVertical: '0.2rem',
        paddingHorizontal: '1.5rem',
    },
    h1: {
        fontSize: '2.2rem',
        fontWeight: '700',
    },
    box: {
        marginTop: '1.2rem',
        borderRadius: '0.7rem',
        borderColor: '#d5d8d9',
        borderWidth: 1
    },
    innerBox_up: {
        borderBottomWidth: 1,
        borderColor: '#d5d8d9',
        paddingVertical: '1.2rem',
        paddingHorizontal: '1.5rem'
    },
    _va: {
        unit: '1rem',
        blue: '$someBlue',
        gray: '$titleGray'
    },
    innerBox_down: {
        paddingHorizontal: '1.7rem',
        paddingVertical: '1.4rem',
    },
    down: {

    },
})