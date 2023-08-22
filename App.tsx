import React, { useState, useEffect } from "react";
import { AuthStack } from "./src/navigators/navigators";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { HomeStack } from "./src/navigators/navigators";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  });
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
