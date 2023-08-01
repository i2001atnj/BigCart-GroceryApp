import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import WelcomeScreen from './screens/WelcomeScreen'
import SignUpScreen from './screens/SignUpScreen'
import SearchScreen from './screens/SearchScreen'
import PasswordRecovery from './screens/PasswordRecovery'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import FiltersScreen from './screens/FiltersScreen'
import CategoriesScreen from './screens/CategoriesScreen'
import AboutMeScreen from './screens/AboutMeScreen'

const Stack = createStackNavigator();

export default function Auth() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome screen"
                component={WelcomeScreen}
                options={{headerShown: false}}/>
            <Stack.Screen
                name="Search screen"
                component={SearchScreen}
                options={{headerShown: false}}/>
            <Stack.Screen
                name="Filters screen"
                component={FiltersScreen}
                options={{headerShown: false}}/>
            <Stack.Screen
                name="Categories screen"
                component={CategoriesScreen}
                options={{headerShown: false}}/>
            <Stack.Screen
                name="Login screen"
                component={LoginScreen}
                options={{headerShown: false}}/>
            <Stack.Screen
                name="Sign up screen"
                component={SignUpScreen}
                options={{headerShown: false}}/>
            <Stack.Screen
                name="Home screen"
                component={HomeScreen}
                options={{headerShown: false}}/>
            <Stack.Screen
                name="Recovery screen"
                component={PasswordRecovery}
                options={{headerShown: false}}/>
            <Stack.Screen
                name="About me screen"
                component={AboutMeScreen}
                options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}