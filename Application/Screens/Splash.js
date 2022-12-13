/* eslint-disable prettier/prettier */
import React from "react";
import { Text, StyleSheet, View } from "react-native";


const Splash = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(10, 89, 62)"
        }}>
            <Text style={{
                fontSize: 28, 
                color: "white"
            }}>Welcome to my App</Text>
        </View>
    )
}
export default Splash

