/* eslint-disable prettier/prettier */

import { Text, StyleSheet, View, ScrollView, SafeAreaView, Button, Touchable } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Update from './update';
import { NavigationContainer } from '@react-navigation/native';
import Modal from "react-native-modal";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Day = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState()
  const [data, setData] = useState([])
  const [dataItem, setItem] = useState()
  
  
  
const toggleModal = () => {
  setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    AsyncStorage.getItem("emailUser", (key, val) => {
      setId(Number(val))
    })
  }, [id])
  useEffect(() => {
      fetch("http://10.0.2.2:8000/api/data-out", {
                            method: 'POST',
                            headers:{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                              id: id
                            })
                        })
                            .then( responsive => responsive.json())
                            .then( responsive => {
                                setData(responsive)
                            }).catch((error) => { alert(error) })
    }, [id])

  
  
  
  return (
    
    <SafeAreaView>
      <Modal isVisible={isModalVisible} style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
          <View style={{ flex: 1 }}>
          
        </View>
        <Button title='Hủy' onPress={toggleModal} />
        <View style={{marginVertical: 10}}>
          <Button title='Xóa' color={"red"} onPress={() => {
            
            (async () => {
            await  fetch("http://10.0.2.2:8000/api/delete-out", {
                            method: 'POST',
                            headers:{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                              id: dataItem
                            })
                        })
                            .then( responsive => responsive.json())
                              .then(responsive => {
                                if (responsive === "TRUE") {
                                  alert("Xóa thành công")
                                }
                              }).catch((error) => { alert(error) })
            await  fetch("http://10.0.2.2:8000/api/data-out", {
                            method: 'POST',
                            headers:{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                              id: id
                            })
                        })
                            .then( responsive => responsive.json())
                            .then( responsive => {
                                setData(responsive)
                            }).catch((error) => { alert(error) })
              toggleModal()
          })()
        }} />
        </View>
        </Modal>
      <ScrollView>
        {data && data.map(res => {
          return <View
            key={res.id}
            style={{
              backgroundColor: "#4BC994",
              marginVertical: 10,
              marginHorizontal: 20,
              borderRadius: 10,
              height: 100,
              padding: 10
            }}
            
          
          >
            <TouchableOpacity onPress={() => {
              toggleModal()
              setItem(res.id)
            }} >
            <Text>Số tiền: {(res.total).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</Text>
            <Text>Loại danh mục: {res.name}</Text>
              <Text >Thời gian: {res.created_at}</Text>
              <Text>Ghi chú: { res.comment}</Text>
            </TouchableOpacity>
          
          </View> 
        })}
        
        </ScrollView>
      </SafeAreaView>
    )
  }
export default Day