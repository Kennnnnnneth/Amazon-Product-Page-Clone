import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useWindowDimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import home from '../screen/home'
import cart from '../screen/cart'
import profile from '../screen/profile'
import more from '../screen/more'
const { Navigator, Screen } = createMaterialTopTabNavigator()
export default () => {
    const { width } = useWindowDimensions()
    return <Navigator
        tabBarPosition='bottom'
        screenOptions={{
            swipeEnabled: false,
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
                position: 'absolute',
                top: -10,
                left: width / 8 - 20,
                width: 40,
                height: 15,
                backgroundColor: '#40E0D0',
                borderRadius: 7,
            },
            tabBarStyle: { overflow: 'hidden' },
        }}
    >
        <Screen name='home' component={home} options={{
            tabBarIcon: ({ focused }) => <FontAwesome name={'home'} size={24} color={focused ? '#40E0D0' : 'black'} />
        }} />
        <Screen name='cart' component={cart} options={{
            tabBarIcon: ({ focused }) => <FontAwesome name={'shopping-cart'} size={24} color={focused ? '#40E0D0' : 'black'} />
        }} />
        <Screen name='more' component={more} options={{
            tabBarIcon: ({ focused }) => <FontAwesome name={'bars'} size={24} color={focused ? '#40E0D0' : 'black'} />
        }} />
        <Screen name='profile' component={profile} options={{
            tabBarIcon: ({ focused }) => <FontAwesome name={'user-circle'} size={24} color={focused ? '#40E0D0' : 'black'} />
        }} />
    </Navigator>
}