import { useState } from "react"
import { View, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, interpolate, Extrapolation, withSpring } from "react-native-reanimated";
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler";
import { nanoid } from "@reduxjs/toolkit";
import EStyleSheet from 'react-native-extended-stylesheet';
import Feather from 'react-native-vector-icons/Feather';
const Cell = ({ item }) => {
    return <Image source={{ uri: item }} style={{
        height: 245.45,
        width: 355
    }} />
}
export default ({ items }) => {
    const [page, setPage] = useState(0)
    const sequence = items.map((_, index) => {
        return [
            index === 0 ? items.length - 1 : page - 1,
            index,
            index === items.length - 1 ? 0 : index + 1,
        ]
    })
    const onLeft = Gesture.Fling().runOnJS(true).direction(Directions.LEFT).onEnd(() => {
        setPage[sequence[page][2]]
    })
    const onRight = Gesture.Fling().runOnJS(true).direction(Directions.RIGHT).onEnd(() => {
        setPage[sequence[page][0]]
    })
    const combineGesture = Gesture.Race(onLeft, onRight)
    return <View>
        <GestureDetector gesture={combineGesture} style={remStyle.gesture} >
            <FlatList
                data={items}
                renderItem={({ item, index }) => <Cell item={item} index={index} />}
                keyExtractor={() => nanoid()}
                horizontal
                pagingEnabled
                scrollEnabled={false}
            />
        </GestureDetector>
        <View style={remStyle.pagination_warp} >
            <View style={remStyle.a_dot_list} >
                {items.map((_, index) => {
                    if (page === index) {
                        return <View style={[remStyle.a_dot, {
                            backgroundColor: '#007185'
                        },
                        index ? remStyle.a_dot_margin : {}
                        ]} key={nanoid()} />
                    }
                    return <View style={[remStyle.a_dot, index ? remStyle.a_dot_margin : {}]} key={nanoid()} />
                }
                )}
            </View>
            <View style={{ flexDirection: 'row' }} >
                <Feather name='heart' size={remStyle._a_button.fontSize} />
                <Feather name='bookmark' size={remStyle._a_button.fontSize} style={remStyle.a_button_margin} />

            </View>
        </View>
    </View>
}
const remStyle = EStyleSheet.create({
    gesture: {

    },
    pagination_warp: {
        flexDirection: 'row',
        marginTop: '1.2rem',
        marginBottom: '1.6rem',
        minHeight: '2.4rem',
        justifyContent: 'space-between'
    },
    a_dot_list: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    a_dot: {
        width: '0.9rem',
        height: '0.9rem',
        borderRadius: '0.45rem',
        borderColor: '#888c8c',
        borderWidth: '0.1rem',
    },
    a_dot_margin: {
        marginLeft: '1rem',
    },
    _a_button: {
        fontSize: '2.4rem',
    },
    a_button_margin: {
        marginLeft: '2.4rem'
    }
})