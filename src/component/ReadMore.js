import EStyleSheet from 'react-native-extended-stylesheet';
import { Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default ({ item, limit, linkText, linkColor }) => {
    const [value, setValue] = useState(false)
    return <Text style={styles.p3} >
        <Text>
            {value ? item : item.split(' ').slice(0, limit).join(" ") + '...'}
        </Text>
        <Text style={{ color: linkColor }} onPress={() => setValue(!value)} >
            {value ? linkText[0] : linkText[1]}
        </Text>
    </Text>
}


const styles = EStyleSheet.create({
    p3: {
        fontSize: '$p3_s',
        lineHeight: '$p3_h',
    },
})