import { useState} from "react"
import { View, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, interpolate, Extrapolation, withSpring} from "react-native-reanimated";
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler";
import { nanoid } from "@reduxjs/toolkit";


const Poster = ({ item, index, selected, width }) => {
    const inputRange = [index - 1, index, index + 1];
    const pageIndex = useSharedValue(1)

    const animatedStyle = useAnimatedStyle(() => {
        if (selected === index) {
            pageIndex.value = 0
        }
        return {
            opacity: withSpring(interpolate(pageIndex.value, [0, 1], [1, 0], Extrapolation.CLAMP)),
            transform: [
                { translateX: pageIndex.value * width }
            ]
        }
    })
    return <Animated.View style={[{
        position: 'absolute',
        width: width,
        height: width * 1.47,
    }, animatedStyle]} >
        <Image source={{ uri: item.poster }} style={{
            flex: 1,
        }} />
    </Animated.View>
}
export default ({ items, showItems = 3 }) => {
    let { width } = useWindowDimensions()
    const [picIndex, setPicIndex] = useState(0)
    const sequence = items.map((_, index) => {
        return [
            index === 0 ? items.length - 1 : picIndex - 1,
            index,
            index === items.length - 1 ? 0 : index + 1,
        ]
    })
    const flingLeft = Gesture.Fling().runOnJS(true).direction(Directions.LEFT).onEnd(() => {
        setPicIndex(sequence[picIndex][2])
    })
    const flingRight = Gesture.Fling().runOnJS(true).direction(Directions.RIGHT).onEnd(() => {
        setPicIndex(sequence[picIndex][0])

    })
    const comebineGesture = Gesture.Race(flingLeft, flingRight)


    return <GestureDetector gesture={comebineGesture}>
        <FlatList
            data={items}
            keyExtractor={() => nanoid()}
            contentContainerStyle={styles.contentContainerStyle}
            horizontal
            renderItem={({ item, index }) => <Poster item={item} index={index} width={width} selected={picIndex} />}
            scrollEnabled={false}
            inverted
            removeClippedSubviews={false}
            CellRendererComponent={({
                item,
                index,
                children,
                style,
                ...props
            }) => <View style={[style, { zIndex: items.length - index }]} index={index} {...props} >
                    {children}
                </View>}
        />
    </GestureDetector>
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flex: 1,
        height: 375,
        backgroundColor: '#ccc',
        overflow: 'hidden',
    },

})