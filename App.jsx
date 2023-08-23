import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import AuthStack from "./src/navigators/AuthStack";
import HomeStack from "./src/navigators/HomeStack";

export default function App() {
  const [user, setUser] = useState(null);
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
