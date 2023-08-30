import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import OnboardingScreen from "../screens/Onboarding";
import LogScreen from "../screens/Login";
import PasswordRecoveryScreen from "../screens/PasswordRecovery";
import SignScreen from "../screens/Signup";
import VerifyNumberScreen from "../screens/VerifyNumber";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LogScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Password Recovery"
        component={PasswordRecoveryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verify Number"
        component={VerifyNumberScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
