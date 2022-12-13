/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import { Text, Button, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Navigation} from "@react-navigation/native"
import AsyncStorage from "@react-native-community/async-storage";

const Login = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    return (
        <View style={style.container}>
            <View style={style.form} >
                <View style={style.form_item}>
                    <Text>Email</Text>
                    <TextInput underlineColorAndroid={"blue"} onChangeText={(email) => setEmail(email) } value={email} />
                </View>
                <View style={style.form_item}>
                    <Text>Mật khẩu</Text>
                    <TextInput underlineColorAndroid={"blue"} secureTextEntry={true} onChangeText={(password) => setPassword(password) } value={password} />
                </View>
                
                <View style={style.button} ><Text onPress={() => {
                    navigation.navigate("ResetPassword")
                }} >Quên mật khẩu?</Text></View>
                
                <View >
                    <Button color={"#FDC22A"} title="Đăng nhập" onPress={async () => {
                        
                        await fetch("http://10.0.2.2:8000/api/login", {
                            method: 'POST',
                            headers:{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                email: email,
                                password: password,
                            })
                        })
                            .then( responsive => responsive.json())
                            .then( responsive => {
                                if (responsive === "TRUE") {
                                    AsyncStorage.setItem("isLogin", "TRUE");
                                    AsyncStorage.setItem("emailUser", email);
                                    navigation.navigate("HomeCom")
                                } else {
                                    alert("Tai khoan mat khau khong chinh xac ... ");
                                }
                            }).catch((error) => {alert(error)})
                    }} />
                    
                </View>
                <View style={style.text} >
                        <Text>Chưa có tài khoản? <Text style={style.text_in} onPress={() => {navigation.navigate("Register")}}>Đăng ký</Text></Text>
                </View>
            </View>
        </View>
        
    )
}
const style = StyleSheet.create({
    text: {
        alignSelf: "center",
        color: "black",
        marginVertical: 30
    },
    text_in: {
        textDecorationLine: "underline"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        
    },
    form_item: {
        width: 300,
        fontSize: 10,
        marginVertical: 20,
    },  
    button: { 
        alignSelf: "flex-end",
        marginVertical: 10
    }
})
export default Login