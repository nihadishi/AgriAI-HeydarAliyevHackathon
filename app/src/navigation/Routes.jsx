import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NetInfo from '@react-native-community/netinfo';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import StartScreen from '../screens/StartScreen/StartScreen';
import NoInternetScreen from '../screens/NoInternetScreen/NoInternetScreen';
import { BottomNavigation } from '../components/BottomNavigation/BottomNavigation';
import DetectScreen from '../screens/DetectScreen/DetectScreen';
import ResultScreen from '../screens/ResultScreen/ResultScreen';
const Stack = createNativeStackNavigator();

const Routes = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [isStart, setIsStart] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);
  useEffect(() => {
    setTimeout(() => {
      setIsStart(false);
    }, 4500);
  }, []);

  return (
    <NavigationContainer>
      {isStart ? (
        <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      ) : isConnected ? (
        <>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DetectScreen"
            component={DetectScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ResultScreen"
            component={ResultScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        <BottomNavigation/></>
      ) : (
        <Stack.Navigator initialRouteName="NoInternetScreen">
          <Stack.Screen
            name="NoInternetScreen"
            component={NoInternetScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;