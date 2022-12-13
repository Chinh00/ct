/* eslint-disable prettier/prettier */

import AsyncStorage from "@react-native-community/async-storage";
import React, { Component, useState } from "react";
import { View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
const Account = ({ navigation }) => {
    const [email, setEmail] = useState("");
    AsyncStorage.getItem("emailUser", (key, val) => {
        setEmail(val)
    })
    return (
        
            <View style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                marginVertical: 50
            }}>
                <View style={{
                    alignSelf: "flex-end",
                    marginHorizontal: 20
                }}>
                <Button title="Đăng xuất"
                    onPress={async() => {
                        await AsyncStorage.removeItem("isLogin")
                        navigation.navigate("Home")
                    }}
                />
                </View>
                <Icon name="user" size={200}/>
                <Text style={{
                    fontSize: 20
                }} >Email: {email} </Text>
                
            </View>
        )
    }
export default Account
        