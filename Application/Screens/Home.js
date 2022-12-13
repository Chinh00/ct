/* eslint-disable prettier/prettier */

import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, StyleSheet } from 'react-native';
import day from './Day';
import month from './Month'
import year from "./Year"
import MoneyTab from './MoneyTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const Home = () => {
    return (
        <Tab.Navigator initialRouteName='Screen1' >
                
                <Tab.Screen name='Screen1' options={{
                    title: "Thu nhập"
                }} component={day}
                
            />
            <Tab.Screen name='Screen2' options={{
                title: "Chi tiêu"
            }} component={MoneyTab} />
        </Tab.Navigator>
            
    );
}


export default Home