import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  OnboardingScreen,
  LogScreen,
  PasswordRecovery,
  SignScreen,
} from "../screens/screens";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding Screen"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Log Screen"
        component={LogScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign Screen"
        component={SignScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Recovery Password Screen"
        component={PasswordRecovery}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
