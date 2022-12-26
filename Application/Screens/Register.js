/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import { Text, Button, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Navigation} from "@react-navigation/native"
import AsyncStorage from "@react-native-community/async-storage";
import { ScrollView } from "react-native-gesture-handler";
const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [subtotal, setSubtotal] = useState(0)
    return (
        <ScrollView style={{flex: 1, padding: 20}}>
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
                <View style={style.form_item}>
                    <Text>Xác nhận mật khẩu</Text>
                    <TextInput underlineColorAndroid={"blue"} secureTextEntry={true} onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword) } value={confirmPassword} />
                </View>
                <View style={style.form_item}>
                    <Text>Số dư</Text>
                    <TextInput underlineColorAndroid={"blue"} keyboardType="numeric" onChangeText={(sub) => setSubtotal(sub) } value={subtotal} />
                </View>
                
                <View style={{
                    marginVertical: 20
                }} >
                    <Button color={"#FDC22A"} title="Đăng ký" onPress={async () => {
                        if (confirmPassword === password) {
                            
                            await fetch("http://10.0.2.2:8000/api/register", {
                            method: 'POST',
                            headers:{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                email: email,
                                password: password,
                                subtotal: subtotal
                            })
                        })
                            .then( responsive => responsive.json())
                            .then( responsive => {
                                if (responsive !== "FALSE") {
                                    AsyncStorage.setItem("isLogin", "TRUE");
                                    AsyncStorage.setItem("emailUser", String(responsive));
                                    navigation.navigate("HomeCom")
                                } else {
                                    alert("Đăng ký thất bại ... ");
                                }
                            }).catch((error) => {alert(error)})
                        }
                        else {
                            alert("loi ...");
                        }
                        
                    }} />
                    
                </View>
                <View style={style.text} >
                        <Text>Đã có tài khoản? <Text style={style.text_in} onPress={() => {navigation.navigate("Login")}}>Đăng nhập</Text></Text>
                </View>
            </View>
        </View>
        </ScrollView>
        
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
        marginVertical: 20
    },  
    button: { 
        alignSelf: "flex-end",
        marginVertical: 10
    }
})
export default Login