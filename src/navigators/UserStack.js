import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  SearchScreen,
  FiltersScreen,
  CategoriesScreen,
  AboutMeScreen,
  DetailsScreen,
  CategoryScreen,
} from "../screens/screens.js";
import HomeStack from "./HomeStack.js";

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
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
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
