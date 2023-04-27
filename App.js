import { NavigationContainer } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Nav from './src/nav'
export default function App() {
  return <NavigationContainer>
    <Nav />
  </NavigationContainer>
}

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({
  $rem: (10 * entireScreenWidth / 375),
  $rwidth: entireScreenWidth * 0.01,
  $textColor: '#0f1111',
  $someBlue: '#007185',
  $starYellow: '#fea11c',
  $titleGray: '#565959',
  $discountRed: '#cc0c39',
  $safeGreen: '#087c00',
  $iconSize: '1.8rem',
  $normalText: '1.7rem',
  $normalLineHeight: '2.3rem',
  $h1_s: '2.65rem',
  $h1_h: '3.5rem',
  $h2_s: '2.2rem',
  $h2_h: '2.75rem',
  $h3_s: '2rem',
  $h3_h: '2.7rem',
  $p1_s: '2.2rem',
  $p1_h: '2.75rem',
  $p2_s: '1.8rem',
  $p2_h: '2.45rem',
  $p3_s: '1.56rem',
  $p3_h: '2.2rem',
});
