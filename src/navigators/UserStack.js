import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  HomeScreen,
  SearchScreen,
  FiltersScreen,
  CategoriesScreen,
  AboutMeScreen,
} from "../screens/screens.js";

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About"
        component={AboutMeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
