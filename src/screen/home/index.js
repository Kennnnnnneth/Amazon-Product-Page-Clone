import { createStackNavigator } from '@react-navigation/stack';

import homepage from './homepage'
import product from './product'
import SearchBar from '../../component/searchBar'
import modal from './modal/modal';
const { Navigator, Screen, Group } = createStackNavigator()
export default () => {
    return <Navigator
        screenOptions={{
            header: () => <SearchBar />
        }}
    >
        <Screen name='homepage' component={homepage} />
        <Screen name='product' component={product} />
        <Group screenOptions={{
            presentation: 'modal',
            headerShown: false
        }} >
            <Screen name='Modal' component={modal} />
        </Group>
    </Navigator>
}
