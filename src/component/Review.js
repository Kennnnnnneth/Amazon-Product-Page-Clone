import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';
import { RowSpread, RowView } from '../common/box';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { nanoid } from '@reduxjs/toolkit';
import Rating from './Rating';
import ReadMore from './ReadMore';
const api = {
    star: 4.5,
    review: 133519,
    list: [
        {
            name: 'Bob',
            avator: '',
            rating: 3.8,
            verify: true,
            title: 'My favourite controller',
            where: 'Earth',
            when: 1677618485457,
            model: {
                "Style": 'Elite Controllers',
                "Colour Name": 'Elite 2 White',
            },
            what: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
            name: 'JB',
            avator: '',
            rating: 4.2,
            verify: true,
            title: 'Overall works great!',
            where: 'Earth',
            when: 1677618485457,
            model: {
                "Style": 'Wireless Controllers',
                "Colour Name": 'Shock Blue',
            },
            what: `Morbi enim nunc faucibus a pellentesque sit amet. Quis enim lobortis scelerisque fermentum. Egestas erat imperdiet sed euismod nisi porta. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Vitae aliquet nec ullamcorper sit amet risus. Nisl rhoncus mattis rhoncus urna neque viverra justo. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Integer eget aliquet nibh praesent tristique magna sit. Leo duis ut diam quam nulla. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Eu sem integer vitae justo eget magna fermentum iaculis. Nunc faucibus a pellentesque sit amet porttitor. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sapien pellentesque habitant morbi tristique senectus. Faucibus nisl tincidunt eget nullam non nisi.`
        },
        {
            name: 'DJ',
            avator: '',
            rating: 3,
            verify: true,
            title: 'Works great over all',
            where: 'Earth',
            when: 1677618485457,
            model: {
                "Style": 'Wireless Controllers',
                "Colour Name": 'Robot White',
            },
            what: `Etiam erat velit scelerisque in dictum non consectetur a erat. Tempus iaculis urna id volutpat lacus laoreet. Elit eget gravida cum sociis natoque penatibus et. Ipsum dolor sit amet consectetur adipiscing elit. Amet tellus cras adipiscing enim eu turpis. Nullam vehicula ipsum a arcu cursus vitae. Non nisi est sit amet facilisis magna etiam tempor. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Penatibus et magnis dis parturient. Id ornare arcu odio ut sem. Id volutpat lacus laoreet non curabitur gravida arcu ac. Et tortor at risus viverra. Nec sagittis aliquam malesuada bibendum. Cras pulvinar mattis nunc sed.`
        },
    ]
}
const Cell = ({ item }) => {
    const { name, avator, rating, verify, title, where, when, model, what } = item
    const date = new Date(when)
    return <View style={{ marginBottom: styles._va.unit * 2.4 }} >
        <RowView>
            <View style={{ marginRight: 6 }} >
                {avator ? <></> : <FontAwesome name='user-circle' size={styles._va.unit * 3.4} color={EStyleSheet.value('$titleGray')} />}
            </View>
            <Text style={styles.p2} >{name}</Text>
        </RowView>
        <RowView>
            <Rating rating={rating} size={styles._va.unit * 1.8} />
            <Text>{" "}</Text>
            {verify && <Text style={{ fontSize: styles._va.unit * 1.3, color: '#c45500', fontWeight: '600' }}>{'Verified Purchase'}</Text>}
        </RowView>
        <Text style={styles.h3} >{title}</Text>
        <Text style={[styles.p3, { color: styles._va.gray }]} >{'Reviewed in ' + where + ' on ' + new Intl.DateTimeFormat("en-US", { month: 'long' }).format(date) + ' ' + date.getDate() + ', ' + date.getFullYear()}</Text>
        <Text style={[styles.p3, { color: styles._va.gray }]} >
            {
                Object.entries(model).map((e, i, a) => {
                    let output = e[0] + ': ' + e[1]
                    if (i > 0) {
                        output = "  |  " + output
                    }
                    return output
                }
                )
            }
        </Text>
        <View style={{ marginTop: styles._va.unit * 0.8, marginBottom: styles._va.unit * 1 }} >
            <ReadMore item={what} limit={40} linkText={["See less", "See more"]} linkColor={'#007185'} />
        </View>
        <RowView >
            <View style={styles.btn} >
                <Text style={{ fontSize: styles._va.unit * 1.8 }} >
                    {"Helpful"}
                </Text>
            </View>
            <Text style={{ color: EStyleSheet.value('$titleGray'), fontSize: styles._va.unit * 1.8 }} >{'Report'}</Text>
        </RowView>
    </View>
}
export default () => {
    return <View style={styles.container} >
        <RowSpread style={styles.title_box} >
            <View>
                <Text style={styles.h1} >{'Customer reviews'}</Text>
                <RowView style={{ marginVertical: styles._va.unit * 0.8 }} >
                    <Rating rating={api.star} size={EStyleSheet.value('$iconSize')} />
                    <Text style={styles.p2} >{api.star + ' out of 5'}</Text>
                </RowView>
                <Text style={[styles.p2, { color: styles._va.gray }]} >{api.review.toLocaleString() + ' global ratings'}</Text>
            </View>
            <AntDesign name='right' size={styles._va.unit * 1.8} />
        </RowSpread>
        <View style={{ marginTop: styles._va.unit * 1.6 }}>
            <Text style={styles.h2} >{'Top reviews from somewhere'}</Text>
            <View style={{ marginTop: styles._va.unit * 2.4 }} >
                {api.list.map((item) => <Cell key={nanoid()} item={item} />)}
            </View>
        </View>
        <View style={styles.write_box} >
            <RowSpread style={styles.write} >
                <Text style={styles.p2} >{'Write a review'}</Text>
                <AntDesign name='right' size={styles._va.unit * 1.8} />
            </RowSpread>
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
    _va: {
        unit: '1rem',
        gray: '$titleGray'
    },
    h1: {
        fontSize: '$h1_s',
        lineHeight: '$h1_h',
        fontWeight: '700',
    },
    h2: {
        fontSize: '$h2_s',
        lineHeight: '$h2_h',
        fontWeight: '700',
    },
    h3: {
        fontSize: '$h3_s',
        lineHeight: '$h3_h',
        fontWeight: '700',
    },
    p2: {
        fontSize: '$p2_s',
        lineHeight: '$p2_h'
    },
    p3: {
        fontSize: '$p3_s',
        lineHeight: '$p3_h'
    },
    title_box: {
        paddingVertical: '2.4rem',
        borderBottomWidth: 1,
        borderBottomColor: '#BBBFBF',
    },
    btn: {
        paddingVertical: '1.2rem',
        paddingHorizontal: '1.7rem',
        marginRight: '1rem',
        borderWidth: 1,
        borderRadius: '0.8rem',
        borderColor: '#D5D9D9'
    },
    write_box: {
        marginHorizontal: '-1.4rem',
        borderTopWidth: 1,
        paddingHorizontal: '1.4rem'
    },
    write: {
        marginVertical: '1.6rem',
        borderWidth: 1,
        borderRadius: '0.8rem',
        borderColor: '##D5D9D9',
        paddingHorizontal: '1.7rem',
        paddingVertical: '1.2rem',
    },
})