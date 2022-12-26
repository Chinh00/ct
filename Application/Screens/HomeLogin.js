/* eslint-disable prettier/prettier */
import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { Button, Text, TextInput, View, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"


const HomeLogin = ({ navigation }) => {
    AsyncStorage.getItem("isLogin", (key, val) => {
        if (val === "TRUE") {
        navigation.navigate("HomeCom");
    } else {
        return (
        
        <View style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 100
        }}>
            <Text style={{
                fontSize: 18,
            }}>
                Đăng ký để lưu thông tin của bạn
            </Text>
            
            <View
                style={{
                        color: "black",
                        padding: 50,
                        width: 250,
                        borderRadius: 50
                    }}
            >
                <Button
                    title="Đăng ký"
                    onPress={() => {
                        navigation.navigate("Register")
                    }}
                    
                    color="#FDC22A"
                
                />
            </View>
            
            <Button
                title="Đăng nhập"
                onPress={() => {
                    navigation.navigate("Login");
                }}
            />
            <Text style={{
                fontSize: 18,
                marginTop: 30
            }}>Đăng nhập với</Text>
            <View style={{
                display: "flex",
                flexDirection: "row"
            }}>
                
                <View
                    style={styles.wrapper_icon}
                >
                    <Icon
                        name="facebook"
                        size={25}
                        color="white"
                        onPress={() => {
                            alert("Dang nhap voi facebook")
                        }}
                    />
                </View>
                <View
                    style={styles.wrapper_icon}
                >
                    <Icon
                        name="google"
                        size={25}
                        color="white"
                        onPress={() => {
                            alert("Dang nhap voi facebook")
                        }}
                    />
                </View>
            </View>
        </View>
        )
    }
    })
    return (
        
        <View style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 100
        }}>
            <Text style={{
                fontSize: 18,
            }}>
                Đăng ký để lưu thông tin của bạn
            </Text>
            
            <View
                style={{
                        color: "black",
                        padding: 50,
                        width: 250,
                        borderRadius: 50
                    }}
            >
                <Button
                    title="Đăng ký"
                    onPress={() => {
                        navigation.navigate("Register")
                    }}
                    
                    color="#FDC22A"
                
                />
            </View>
            
            <Button
                title="Đăng nhập"
                onPress={() => {
                    navigation.navigate("Login");
                }}
            />
            <Text style={{
                fontSize: 18,
                marginTop: 30
            }}>Đăng nhập với</Text>
            <View style={{
                display: "flex",
                flexDirection: "row"
            }}>
                
                <View
                    style={styles.wrapper_icon}
                >
                    <Icon
                        name="facebook"
                        size={25}
                        color="white"
                        onPress={() => {
                            alert("Dang nhap voi facebook")
                        }}
                    />
                </View>
                <View
                    style={styles.wrapper_icon}
                >
                    <Icon
                        name="google"
                        size={25}
                        color="white"
                        onPress={() => {
                            alert("Dang nhap voi facebook")
                        }}
                    />
                </View>
            </View>
        </View>
    )
    
    
    
    

}
 
const styles = StyleSheet.create({
    wrapper_icon: {
        borderWidth: 1,
        width: 40,
        height: 40,
        backgroundColor: "#3B5999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        margin: 30
    },
    
});
export default HomeLogin