import { useEffect, useState } from "react"
import { nanoid } from "@reduxjs/toolkit";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
export default ({ rating, size }) => {
    const [line, setLine] = useState([0, 0, 0, 0, 0])
    const star = ['star-o', 'star-half-empty', 'star']
    useEffect(() => {
        let notImportantArray = [0, 0, 0, 0, 0]
        for (let i = 0; i < 5; i++) {
            if (i + 1 <= rating) {
                notImportantArray[i] = 2
            } else if (rating < i + 0.5) {
                notImportantArray[i] = 0
            } else {
                notImportantArray[i] = 1
            }
        }
        setLine(notImportantArray)
    }, [rating])
    return <View style={{
        flexDirection: 'row',
    }} >
        {line.map((item) => {
            return <FontAwesome name={star[item]} size={remStyles._star.fontSize * size} color={remStyles._star.color} key={nanoid()} />
        }
        )}
    </View>
}
const remStyles = EStyleSheet.create({
    _star: {
        fontSize: '0.1rem',
        color: '$starYellow'
    }
})