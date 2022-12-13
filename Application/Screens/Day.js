/* eslint-disable prettier/prettier */

import { Text, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native'
import React, { Component, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
const Day = () => {
    const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};
  const [data, setData] = useState(null)
  const [email, setEmail] = useState(null);
  AsyncStorage.getItem("emailUser", (key, val) => {
    setEmail(val)
  })
  
  
  return (
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              backgroundColor: generateColor(),
              marginVertical: 30,
              marginHorizontal: 20,
              borderRadius: 10,
              height: 60,
            }}
          >
            <Text>sad</Text>
          </View> 
        </ScrollView>
      </SafeAreaView>
    )
  }
export default Day