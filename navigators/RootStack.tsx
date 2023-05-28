import React, { FunctionComponent } from 'react'

//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Screens
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import Details from '../screens/Details'


export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Details: undefined;
};

const Stack = createStackNavigator<RootStackParamList>()

const RootStack: FunctionComponent = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={ {headerShown: false}}/>
            <Stack.Screen name="Details" component={Details}  options={{ headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default RootStack;