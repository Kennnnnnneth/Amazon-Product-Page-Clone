import EStyleSheet from 'react-native-extended-stylesheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, FlatList, Image, TouchableWithoutFeedback, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withSpring, withTiming, useDerivedValue } from 'react-native-reanimated';
import { RowSpread, RowView } from '../common/box';
const api_receive = [
    {
        name: 'Pulse Red',
        img: "https://m.media-amazon.com/images/I/41B5RRzU01L._QL92_SH45_SS200_.jpg",
        edition: [{
            style: 'Wireless Controllers',
            price: 77.99,
            available: true,
        }]
    },
    {
        name: 'Controller + Wireless Adapter',
        img: "https://m.media-amazon.com/images/I/41jXZAEljAL._QL92_SH45_SS200_.jpg",
        edition: [
            {
                style: 'Wireless Controllers',
                price: 177.99,
                available: false,
            },
            {
                style: 'Electric Volt',
                price: 1177.99,
                available: true,
            }
        ]
    },
    {
        name: 'Electric Volt',
        img: "https://m.media-amazon.com/images/I/4149mj7CU5L._QL92_SH45_SS100_.jpg",
        edition: [{
            style: 'Wireless Controllers',
            price: 477.99,
            available: true,
        }]
    },
    {
        name: 'Elite 2 Black',
        img: "https://m.media-amazon.com/images/I/41xqtrfjZSL._QL92_SH45_SS100_.jpg",
        edition: [{
            style: 'Elite Controllers',
            price: 877.99,
            available: false,
        }]
    }
]
const Section = ({ item, setUp, index }) => {
    return <Pressable style={styles.section} onPress={() => setUp(index)} >
        <View style={styles.img_wrap} >
            <Image source={{ uri: item.img }} style={styles.img} />
        </View>
        <View style={styles.text_wrap} >
            <Text style={styles.text} >{item.name} </Text>
        </View>
    </Pressable>
}
const SecondSection = ({ item, data, select, setSelect }) => {
    const this_element = data.find(e => e['style'] === item)
    return <Pressable style={[styles.section, styles.section2]} >
        <View style={{ backgroundColor: '#efefef', width: '100%' }} >
            <View style={styles.img_wrap} >
                <Text style={styles.text2_pick} >{item}</Text>
            </View>
        </View>
        <View style={styles.img_wrap} >
            <Text style={styles.text2} >
                {this_element ? '$' + this_element.price : ' '}
            </Text>
            <View style={styles.text2_title_wrap} >
                <Text style={[styles.text2_title, this_element && this_element.available ? { color: '#008a00' } : { color: '#b12704' }]} >
                    {this_element && this_element.available ? 'In Stock' : 'Currently unavaible'}
                </Text>
            </View>
        </View>
    </Pressable>
}
export default () => {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(true)
    const [select, setSelect] = useState(0)
    const [secondSelect, setSecondSelect] = useState(0)
    const rotation1 = useSharedValue(0)
    const rotation2 = useSharedValue(0)
    const resize = useSharedValue(400)
    const resize2 = useSharedValue(400)
    const rotate1 = useAnimatedStyle(() => {
        return {
            transform: [
                { rotate: `${interpolate(rotation1.value, [0, 1], [0, 180])}deg` }
            ]
        }
    })
    const rotate2 = useAnimatedStyle(() => {
        return {
            transform: [
                { rotate: `${interpolate(rotation2.value, [0, 1], [0, 180])}deg` }
            ]
        }
    })
    const resize1 = useAnimatedStyle(() => {
        return {
            maxHeight: withTiming(resize.value, { duration: 100 })
            // maxHeight: 'max-content'
        }
    })
    const resize22 = useAnimatedStyle(() => {
        return {
            maxHeight: withTiming(resize2.value, { duration: 100 })
            // maxHeight: 'max-content'
        }
    })
    return <View style={styles.container}  >
        <RowSpread style={styles.title} >
            <View>
                <Text style={styles.a_title} >
                    <Text >
                        {'Color Name:  '}
                    </Text>
                    {show1 ?
                        <Text style={{ fontWeight: 'bold' }} >
                            {api_receive[select].name}
                        </Text> : <></>
                    }
                </Text>
            </View>
            <RowView>
                {!show1 ? <Image source={{ uri: api_receive[select].img }} style={{
                    width: 45,
                    height: 45,
                    position: 'absolute',
                    left: -50,
                    top: -3
                }} /> : <></>}
                <TouchableWithoutFeedback onPress={() => {
                    setShow1(!show1)
                    rotation1.value = withSpring(show1 ? 1 : 0)
                    if (show1) {
                        resize.value = withTiming(0)
                    } else {
                        resize.value = withTiming(400)
                    }
                }}>
                    <Animated.View style={rotate1} >
                        <AntDesign name={'down'} size={20} />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </RowView>
        </RowSpread>
        {!show1 ? <Text style={[styles.hidden_title, { fontWeight: 'bold' }]} >{api_receive[select].name}</Text> : <></>
        }
        <Animated.View style={resize1} >
            <FlatList
                data={api_receive}
                renderItem={({ item, index }) => <Section item={item} setUp={setSelect} index={index} />}
                horizontal
                style={styles.list}
            />
        </Animated.View>
        <RowSpread style={styles.title} >
            <View>
                <Text style={styles.a_title} >
                    <Text>
                        {'Style:  '}
                    </Text>
                    {show2 ?
                        <Text style={{ fontWeight: 'bold' }} >
                            {api_receive[select].name}
                        </Text> : <></>
                    }
                </Text>
            </View>
            <TouchableWithoutFeedback onPress={() => {
                setShow2(!show2)
                rotation2.value = withSpring(show2 ? 1 : 0)
                if (show2) {
                    resize2.value = withTiming(0)
                } else {
                    resize2.value = withTiming(400)
                }
            }} >
                <Animated.View style={rotate2} >
                    <AntDesign name={'down'} size={20} />
                </Animated.View>
            </TouchableWithoutFeedback>
        </RowSpread>
        {!show2 ? <Text style={[styles.hidden_title, { fontWeight: 'bold' }]} >{api_receive[select].name}</Text> : <></>
        }
        <Animated.View style={resize22} >
            <FlatList
                data={api_receive.map(({ edition }) => edition.map(({ style }) => style)).flat().sort().filter((e, i, a) => a.indexOf(e) === i)}
                renderItem={({ item }) => <SecondSection item={item} data={api_receive[select].edition} select={secondSelect} setSelect={setSecondSelect} />}
                horizontal
                style={styles.list}
            />
        </Animated.View>
    </View>
}
const styles = EStyleSheet.create({
    container: {
        paddingHorizontal: '1.4rem',
        backgroundColor: '#fff',
        marginTop: 5,
    },
    title: {
        paddingTop: '1.2rem',
    },
    a_title: {
        fontSize: '2rem',
        fontWeight: '400'
    },
    list: {
        paddingVertical: '1.5rem',
    },
    section: {
        alignItems: 'center',
        marginRight: '1.5rem'
    },
    img_wrap: {
        padding: '0.9rem'
    },
    img: {
        width: '10rem',
        height: '10rem'
    },
    text_wrap: {
    },
    text: {
        width: '10rem',
        height: '2.05rem',
        overflow: 'hidden',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: '700'
    },
    hidden_title: {
        fontSize: '2rem'
    },
    section2: {
        borderWidth: '0.1rem',
        borderRadius: '0.3rem',
        borderColor: '#d5d9d9'
    },
    text2_pick: {
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    text2: {
        fontSize: '2.5rem'
    },
    text2_title_wrap: {
        height: '3.6rem'
    },
    text2_title: {
        fontSize: '1.6rem',
        lineHeight: '2.24rem'
    },
})
// api_receive.map(({ edition }) => edition[0].style).sort().filter((e, i, a) => a.indexOf(e) === i)