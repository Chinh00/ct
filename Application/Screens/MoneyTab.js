/* eslint-disable prettier/prettier */

import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Day from './Day';
import Month from './Month';
import Year from './Year';
const Tab = createMaterialTopTabNavigator();

export default class MoneyTab extends Component {
    render() {
        
    return (
    <Tab.Navigator initialRouteName='Da' >
            <Tab.Screen name='Day' component={Day} options={{
                title: "Ngày",
                
            }} />  
            <Tab.Screen name='Month' component={Month}
            options={{
                title: "Tháng",
                
                }} />  
            <Tab.Screen name='Year' component={Year}
            options={{
                title: "Năm",
                
            } } />  
     </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({})