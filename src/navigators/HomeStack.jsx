import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import UserPageScreen from "../screens/UserPage";
import FavoritesScreen from "../screens/Favorites";
import CartScreen from "../screens/Cart";
import {
  homeVector,
  homeVector2,
  user,
  user2,
  favorites,
  favorites2,
  shoppingCartVector,
} from "../assets/assets.js";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home Screen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let tabIcon;
          if (route.name === "Home Screen") {
            tabIcon = focused ? homeVector : homeVector2;
          }
          if (route.name === "User Page Screen") {
            tabIcon = focused ? user : user2;
          }
          if (route.name === "Favorites Screen") {
            tabIcon = focused ? favorites2 : favorites;
          }
          if (route.name === "Cart Screen") {
            tabIcon = focused ? shoppingCartVector : shoppingCartVector;
          }
          return <Image source={tabIcon} />;
        },
        headerShown: false,
        headerBackground: "#FFFFFF",
      })}
    >
      <Tab.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="User Page Screen"
        component={UserPageScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Favorites Screen"
        component={FavoritesScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Cart Screen"
        component={CartScreen}
        options={{ tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
}
