import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import AuthStack from "./src/navigators/AuthStack";
import UserStack from "./src/navigators/UserStack";
import { userContext } from "./src/context/userContext";

export default function App() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  });

  return (
    <userContext.Provider value={user}>
      <NavigationContainer>
        <StatusBar style="auto" />
        {user ? <UserStack /> : <AuthStack />}
      </NavigationContainer>
    </userContext.Provider>
  );
}
