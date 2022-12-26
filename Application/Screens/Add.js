/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";
import DatePicker from "react-native-date-picker";
import format from "date-fns/format";
import moment from "moment";
import { ca, vi } from "date-fns/locale";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import AsyncStorage from "@react-native-community/async-storage";
function ModalTester({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date())
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setDate(date)
    
  };
  const [email, setEmail] = useState();
  const [money, setMoney] = useState()
  const [cate, setCate] = useState()
  const [comment, setComment] = useState()
  const [id, setId] = useState()
  useEffect(() => {
  AsyncStorage.getItem("emailUser", (key, val) => {
    setId(Number(val))
  })
  }, [])
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{
          flex: 1,
          margin: 20
        }} >
          <View>
            <Text style={{
            fontSize: 18
          }}>Số tiền</Text>
            <TextInput underlineColorAndroid={"#108926"} keyboardType="numeric" style={{
            marginVertical: 15
          }} value={money} onChangeText={(text) => {setMoney(text)}} />
          </View>
          <View
            
          >
            <Text style={{ fontSize: 18 }}>Chọn danh mục: { cate}</Text>
            <View style={{
              display: "flex",
              flexDirection: "row"
            }} >
              <View style={{
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center"
              }}
                
              >
                <Icon name="car" size={30} onPress={() => {
                  setCate(1)
                  
              }} />
                <Text>Di chuyển</Text>
              </View>
              <View style={{
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Icon name="home" size={30} onPress={() => {
                  setCate(2)
                  
              }} />
                <Text>Nhà</Text>
                </View>
              <View style={{
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Icon name="heart" size={30} onPress={() => {
                  setCate(3)
                  
              }} />
                <Text>Sức khỏe</Text>
                </View>
              <View style={{
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Icon name="gift" size={30} onPress={() => {
                  setCate(4)
                  
              }} />
                <Text>Quà tặng</Text>
              </View>
              <View style={{
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Icon name="money" size={30} onPress={() => {
                  setCate(5)
                  
              }} />
                <Text>Tiền lương</Text>
              </View>
              
          </View>
            <View style={{
              display: "flex",
              flexDirection: "row"
            }} >
              
              <View style={{
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Icon name="paperclip" size={30}
                onPress={() => {
                  setCate(6)
                  
              }}/>
                <Text>Tạp phẩm</Text>
              </View>
              <View style={{
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Icon name="question" size={30} onPress={() => {
                  setCate(7)
                  
              }} />
                <Text>Khác</Text>
              </View>
              
          </View>
          </View>
          <View>
            <TextInput placeholder="Ghi chú"  value={comment} onChangeText={(text) => setComment(text)} />
          </View>
          <View style={{ flex: 1, marginVertical: 20 }}>
      <Button title={"Thời gian: " + moment(date).local("vi", vi).format("YYYY/MM/DD")} onPress={toggleModal}  />

      <Modal isVisible={isModalVisible} style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
        <View style={{ flex: 1 }}>
          <DatePicker mode="date" date={date} onDateChange={setDate}  />

          <Button title="Xác nhận" onPress={toggleModal} />
        </View>
      </Modal>
          </View>
          <View style={{
            width: 100,
            marginVertical: 20
          }}> 
            <Button title="Thêm" color={"#108926"} onPress={async () => {
              
              await fetch("http://10.0.2.2:8000/api/add", {
                            method: 'POST',
                            headers:{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                              
                              total: money,
                              comment: comment,
                              id: id,
                              time: moment(date).local("vi", vi).format("YYYY/MM/DD"),
                              cate: cate
                              
                            })
                        })
                            .then( responsive => responsive.json())
                            .then( responsive => {
                                navigation.navigate("HomeNav1")
                            }).catch((error) => { alert(error) })
              setMoney()
              setCate()
              setComment()
              
            }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ModalTester;