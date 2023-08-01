import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import UserPageScreen from './screens/UserPageScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import ShoppingCartScreen from './screens/ShoppingCartScreen'
import HomeVectorFocused from './assets/homeVector.png';
import HomeVector from './assets/homeVector2.png';
import UserVectorFocused from './assets/user.png';
import UserVector from './assets/user2.png';
import FavoritesVector from './assets/favorites.png';
import FavoritesVectorFocused from './assets/favorites2.png';
import ShoppingCartVector from './assets/shoppingCartVector.png';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
            let tabIcon;
            if (route.name === 'Home') {
                tabIcon = focused ? HomeVectorFocused : HomeVector;
            }
            if (route.name === 'User') {
                tabIcon = focused ? UserVectorFocused : UserVector;
            }
            if (route.name === 'Favorites') {
                tabIcon = focused ? FavoritesVectorFocused : FavoritesVector;
            }
            if (route.name === 'Shopping Cart') {
                tabIcon = focused ? ShoppingCartVector : ShoppingCartVector;
            }
            return <Image source={tabIcon}/>;
        },
        headerShown: false,
        headerBackground: '#FFFFFF',})}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{tabBarShowLabel: false}}/>
            <Tab.Screen
                name="User"
                component={UserPageScreen}
                options={{tabBarShowLabel: false}}/>
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{tabBarShowLabel: false}}/>
            <Tab.Screen
                name="Shopping Cart"
                component={ShoppingCartScreen}
                options={{tabBarShowLabel: false}}/>
        </Tab.Navigator>
    );
}