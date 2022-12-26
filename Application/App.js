/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeLogin from './Screens/HomeLogin';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Home from './Screens/Home';
import ResetPassword from './Screens/ResetPassword';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeNavigator from './Screens/HomeNavigator';
import Account from './Screens/account';
import Admin from './Screens/Admin';
const Stack = createNativeStackNavigator();
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = ({ navigation }) => {
  
  return (
    
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeLogin} options={{
        headerShown: false
      }} />
      <Stack.Screen name='Login' component={Login} options={{
        title: "Đăng nhập", 
        headerStyle: {
          backgroundColor: "#108962",
          
        },
        headerTintColor: "white",
        
      }} />
      <Stack.Screen name='Register' component={Register} options={{
        title: "Đăng ký", 
        headerStyle: {
          backgroundColor: "#108962",
          
        },
        headerTintColor: "white",
        
      }}/>
      <Stack.Screen name='HomeCom' component={HomeNavigator} options={{headerShown: false}} />
      <Stack.Screen name='ResetPassword' component={ResetPassword} />
      <Stack.Screen name='Account' component={Account}/>
      <Stack.Screen name='Admin' component={Admin} options={{
        title: "Thông tin người dùng ứng dụng",
      }} />
    </Stack.Navigator>
  )
}
export default App;
