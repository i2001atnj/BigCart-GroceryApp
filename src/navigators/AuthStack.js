import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  WelcomeScreen,
  LoginScreen,
  PasswordRecovery,
  SignUpScreen,
} from "../screens/screens";

const Stack = createStackNavigator();

export default function AuthStack() {
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
        name="Recovery"
        component={PasswordRecovery}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
