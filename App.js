import React from "react";
import { AuthStack } from "./src/navigators/navigators";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AuthStack />
    </NavigationContainer>
  );
}
