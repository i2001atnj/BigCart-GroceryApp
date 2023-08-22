import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
//screens
import {
  WelcomeScreen,
  SignUpScreen,
  SearchScreen,
  PasswordRecovery,
  LoginScreen,
  HomeScreen,
  FiltersScreen,
  CategoriesScreen,
  AboutMeScreen,
} from "../screens/screens.js";

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Log in"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign up"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Recovery"
        component={PasswordRecovery}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
