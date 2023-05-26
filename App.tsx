import React from 'react';
import { useFonts } from 'expo-font';
import styled from 'styled-components/native';
import { colors } from './components/colors';

import RootStack from './navigators/RootStack';



export default function App() {
  
  const [loaded] = useFonts({
    SatoshiRegular: require('./assets/fonts/Satoshi-Regular.otf'),
    SatoshiBold: require('./assets/fonts/Satoshi-Bold.otf'),
    SatoshiLight: require('./assets/fonts/Satoshi-Light.otf'),
    SatoshiMedium: require('./assets/fonts/Satoshi-Medium.otf'),
  })

  if (!loaded) return null;
  
  return (
    <RootStack />
  );
}


