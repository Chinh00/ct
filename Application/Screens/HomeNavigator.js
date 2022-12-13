/* eslint-disable prettier/prettier */


import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./Home";
import Splash from "./Splash";
import Account from "./account";
import Icon from "react-native-vector-icons/FontAwesome"
import Chart from "./Chart";
import { ScreenStackHeaderRightView } from "react-native-screens";
import Add from "./Add";
const Drawer = createDrawerNavigator();
const HomeNavigator = () => {
      

    return (
        
        <Drawer.Navigator
            initialRouteName="HomeNav1"
            style={{
                margin: 20
            }}
            
        >
            <Drawer.Screen name="HomeNav1" component={Home} options={{
                title: "Trang chủ",
                headerTitleAlign: "center",

            }}
            />
            <Drawer.Screen name="Add" component={Add} options={{
                title: "Thêm khoản thu chi"
            }} />

            <Drawer.Screen name="HomeNav2" options={{
                title: "Biểu đồ"
            }} component={Chart} />
            <Drawer.Screen name="Account" component={Account} options={{
                title: "Thông tin người dùng"
            }} />
        </Drawer.Navigator>
    )
}
export default HomeNavigator