import React, { useState, useEffect } from 'react';
import HomeStack from './src/HomeStack'
import AuthStack from './src/AuthStack'
import { NavigationContainer } from '@react-navigation/native';
import { FIREBASE_AUTH } from './src/config/firebase';
import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {

  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, [])

  return (
    <NavigationContainer>
      {user !== null ? <HomeStack/> : <AuthStack/>}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}