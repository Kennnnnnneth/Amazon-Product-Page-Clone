import { StyleSheet, SafeAreaView, View, TextInput, Text } from 'react-native';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default ({ isHome = 0 }) => {
    const [search, setSearch] = useState('')
    const navigation = useNavigation();
    return <SafeAreaView style={styles.searchbar}>
        
        <View
            style={styles.searchbarInputContainer}>

            <Feather name="search" size={20} style={styles.searchIcon} />
            <TextInput
                style={styles.searchBarInput}
                value={search}
                placeholder={'Search Something...'}
                onChangeText={setSearch}
            />
            <Ionicons name='scan-sharp' size={20} style={styles.searchIcon} />
        </View>
        <View style={styles.toAddress} >
            <SimpleLineIcons name='location-pin' size={21} style={{
                marginRight: 5
            }} />
            <Text style={styles.toAddressText} >
                {'Deliver to Ruuuuua - Night City  M3T 3H5'}
            </Text>
        </View>
    </SafeAreaView>
}
const styles = StyleSheet.create({
    searchbar: {
        backgroundColor: 'rgba(136, 206, 199, 1)'
    },
    searchbarInputContainer: {
        margin: 4,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        padding: 2,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 7,
        justifyContent: 'space-between'
    },
    searchBarInput: {
        height: 40, width: '80%'
    },
    searchIcon: {
        margin: 5
    },
    toAddress: {
        backgroundColor: 'rgba(186, 226, 223, 1)',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    toAddressText: {
        fontFamily: "AppleSDGothicNeo-Bold",
        fontWeight: '200',
        fontSize: 20,
        color: 'black',
        margin: 5,
        flexGrow: 1,
        textAlign: 'center'
    }
})