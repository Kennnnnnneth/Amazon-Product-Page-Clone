import { ScrollView, View, Text } from "react-native"
import { useState } from "react";
import EStyleSheet from 'react-native-extended-stylesheet';
import Sponsor from '../../../component/Sponsor'
import TitleExpander from "../../../component/TitleExpander"
import Badge from "../../../component/Badge";
import LandingImage from "../../../component/LandingImage";
import TypeSelect from "../../../component/TypeSelect";
import PriceDetail from "../../../component/PriceDetail";
import Promote from "../../../component/Promote";
import Adding from "../../../component/Adding";
import Seller from "../../../component/Seller";
import Others from "../../../component/Others";
import AlsoBuy from "../../../component/AlsoBuy";
import Gallery from "../../../component/Gallery";
import ProductDescription from "../../../component/ProductDescription";
import Question from "../../../component/Question";
import Review from "../../../component/Review";
const api_received = {
    pic: [
        'https://cdn.cloudflare.steamstatic.com/steam/apps/570/ss_e0a92f15a6631a8186df79182d0fe28b5e37d8cb.jpg',
        'https://cdn.cloudflare.steamstatic.com/steam/apps/570/ss_86d675fdc73ba10462abb8f5ece7791c5047072c.jpg',
        'https://cdn.cloudflare.steamstatic.com/steam/apps/570/ss_7ab506679d42bfc0c0e40639887176494e0466d9.jpg',
        'https://cdn.cloudflare.steamstatic.com/steam/apps/570/ss_f9ebafedaf2d5cfb80ef1f74baa18eb08cad6494.jpg'
    ],
    this_store: {
        store: 'Microhard Store',
        start: 4.6,
        start_review: 168741,
        feature_name: ` Zbox Wireless Controller for Zbox Series X|S, Zbox One, and Sandows Devices - Pulse Red `,
        tag: '#1 Best Seller',
        cat_name: 'in Zbox Series X Controllers',
    },
    category: 'controller',
    price: {
        history_price: 74.99,
        now_price: 59.99,
    },
    promote: {
        banner: 'Get a ^^$65,000,000 Mamazon.ca Gift Card^^ instandtly, plus up to 5% back for 6 months after approval for the Amazon.ca Rewards Astercard.',
        bonus: 'Pay ^^$5,999^^ $9,099^^ for this order after approval'
    }//need empty even we dont have
    ,
    type: [{
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
    }]
}
const styles = EStyleSheet.create({
    a_container: {
        paddingRight: '1.4rem',
        paddingLeft: '1.4rem',
        backgroundColor: '#fff',
    },
    container: {
        paddingBottom: '2.8rem',
        backgroundColor: '#d5d9d8'
    },
    landingImage: {
        height: '29rem'
    },

})
export default ({ route, navigation }) => {
    const [value, setValue] = useState('')
    return <ScrollView style={styles.container} >
        <View style={styles.a_container}  >
            <Sponsor />
            <TitleExpander items={api_received.this_store} />
            <Badge item={api_received.this_store.cat_name} />
            <LandingImage items={api_received.pic} />
            <Promote items={api_received.promote} />
        </View>
        <TypeSelect type={api_received.type} />
        <PriceDetail item={api_received} />
        <Adding />
        <Seller />
        <Others />
        <AlsoBuy />
        <Gallery />
        <ProductDescription />
        <Question />
        <Review />
    </ScrollView>
}