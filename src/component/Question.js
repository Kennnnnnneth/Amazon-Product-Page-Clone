import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { nanoid } from '@reduxjs/toolkit';
import { RowView, RowSpread } from '../common/box';

const Cell = ({ q, a, name, time }) => {
    return <View style={{ marginBottom: 16 }} >
        <RowSpread>
            <View>
                <Text style={[styles.text, { fontWeight: '700', width: EStyleSheet.value('$rwidth') * 72 }]} >
                    {"Q: " + q}
                </Text>
                <View style={{ width: EStyleSheet.value('$rwidth') * 72, marginVertical: 4 }} >
                    <Text style={styles.text} >
                        <Text style={{ fontWeight: '700' }} >{'A: '}</Text>
                        <Text>{a}</Text>
                    </Text>
                </View>
            </View>
            <AntDesign name='right' size={styles._va.unit * 1.8} style={{}} />
        </RowSpread>
        <Text style={[styles.text, { color: '#595b5a' }]} >
            {name + ' | ' + time}
        </Text>
    </View>
}

export default () => {
    const [search, setSearch] = useState('')
    const api = [
        {
            q: 'Can it connect an innoview 15.8" portable monitor? the monitor has a hdmi port.',
            a: 'yes,it can',
            name: 'Devin',
            time: '6 months ago',//date need to fix
        },
        {
            q: 'Will this controller  work on the xbox one s ?',
            a: 'Yup! These new controllers made for Xbox Series X|S will also work with all consoles in th…',
            name: 'Microsoft Customer Care Team Microsoft Customer',
            time: '2 years ago',//date need to fix
        },
    ]
    const number = 265
    return <View style={styles.container} >
        <View style={{ paddingBottom: styles._va.unit * 0.4 }}><Text style={styles.h1}>{'Looking for specific info?'}</Text></View>
        <RowView style={styles.search_box} >
            <AntDesign name='search1' size={styles._va.unit * 1.8} style={{ marginRight: 10 }} />
            <TextInput
                onChangeText={setSearch}
                value={search.length > 20 ? search.slice(0, 40) + '...' : search}
                placeholder={'Search in reviews, Q&A...'}
                style={{ fontSize: styles._va.unit * 1.8 }}
            />
        </RowView>
        <View style={{ marginTop: 4, marginBottom: 16 }} ><Text style={styles.title} >{'Customer questions'}</Text></View>
        <View style={styles.inner_box} >
            {
                api.map(({ q, a, name, time }) => <Cell q={q} a={a} name={name} time={time} key={nanoid()} />)
            }
        </View>
        <RowSpread style={styles.link_box} >
            <Text style={[styles.text, { fontWeight: '700' }]} >{`See all ${number} answered questions`}</Text>
            <AntDesign name='right' size={styles._va.unit * 1.8} style={{ marginRight: 10 }} />
        </RowSpread>
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
    },
    h1: {
        fontSize: '2.7rem',
        fontWeight: '700',
    },
    search_box: {
        marginVertical: '1rem',
        borderWidth: 1,
        borderRadius: '0.7rem',
        padding: '1.2rem'
    },
    title: {
        fontSize: '2.2rem',
        fontWeight: '700'
    },
    inner_box: {
        paddingHorizontal: '1.7rem',
        paddingVertical: '1.3rem',
        borderWidth: 1,
        borderRadius: '0.96rem',
        borderColor: '#dcdcdc',
    },
    text: {
        fontSize: '$normalText',
        lineHeight: '$normalLineHeight'
    },
    link_box: {
        paddingHorizontal: '1.4rem',
        marginTop: '1.3rem',
        marginBottom: '1.7rem',
    },
})