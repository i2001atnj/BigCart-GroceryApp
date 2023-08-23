import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  UserPageScreen,
  FavoritesScreen,
  ShoppingCartScreen,
} from "../screens/screens.js";
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
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let tabIcon;
          if (route.name === "Home") {
            tabIcon = focused ? homeVector : homeVector2;
          }
          if (route.name === "User") {
            tabIcon = focused ? user : user2;
          }
          if (route.name === "Favorites") {
            tabIcon = focused ? favorites2 : favorites;
          }
          if (route.name === "Shopping Cart") {
            tabIcon = focused ? shoppingCartVector : shoppingCartVector;
          }
          return <Image source={tabIcon} />;
        },
        headerShown: false,
        headerBackground: "#FFFFFF",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="User"
        component={UserPageScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Shopping Cart"
        component={ShoppingCartScreen}
        options={{ tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
}
