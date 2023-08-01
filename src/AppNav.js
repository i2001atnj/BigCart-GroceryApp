import React, { useContext } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import { AuthContext } from './context/AuthContext';

export default function AppNav() {
    const {isLoading, userToken} = useContext(AuthContext)

    if(isLoading){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }

    return (
        <NavigationContainer>
            { userToken !== null ? <HomeStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}