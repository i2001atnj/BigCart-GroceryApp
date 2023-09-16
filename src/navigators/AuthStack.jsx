import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  OnboardingScreen,
  LoginScreen,
  PasswordRecoveryScreen,
  SignupScreen,
  VerifyNumberScreen,
  VerifyCodeScreen,
} from "../screens/auth/index";

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Auth Onboarding Screen">
      <Stack.Screen
        name="Auth Onboarding Screen"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth Login Screen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth Signup Screen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth Password Recovery Screen"
        component={PasswordRecoveryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth Verify Number Screen"
        component={VerifyNumberScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth Verify Code Screen"
        component={VerifyCodeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
