import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

// 나중에 로그인 기능 구현되면, AuthNavigator랑 MainTabNavigator 순서 바꿔주면 됨
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
