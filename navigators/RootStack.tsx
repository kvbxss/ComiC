import React, { FunctionComponent } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/Splash'
import Home from '../screens/Home'
import Details from '../screens/Details'

type RootStackParamList = {
    Splash: undefined;
};

const Stack = createStackNavigator()

const RootStack: FunctionComponent = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default RootStack;