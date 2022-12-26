/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput } from 'react-native-gesture-handler';
const Search = () => {
    const [income, setIncome] = useState([])
    const [spending, setSpending] = useState([])
    const [id, setId] = useState()
    const [val, setVal] = useState()
    const [dataIncome, setDataIncome] = useState([])
    const [dataSpending, setDataSpending] = useState([])
    AsyncStorage.getItem("emailUser", (key, val) => {
        setId(Number(val))
    }, [])
    
    useEffect(() => {
        fetch("http://10.0.2.2:8000/api/data", {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then(res => res.json())
            .then(res => {
                setIncome(res)
                setDataIncome(res)
            })
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
            .then(res => res.json())
            .then(res => {
                setSpending(res)
                setDataSpending(res)
        })
        
    }, [id])

  const SearchAjax = (val) => {
        if (val === "") {
            setDataIncome(income)
        } else {
          setDataIncome(income.filter((i) => {
              return (i.comment.match(`${val}`) || i.name.match(`${val}`))
            }))
        }
        if (val === "") {
            setDataSpending(spending)
        } else {
            setDataSpending(spending.filter((i) => {
              return (i.comment.match(`${val}`) || i.name.match(`${val}`))
            }))
        }
      setVal(val)
        
    }

    return <View>
        



      <ScrollView>
        <View style={{
            padding: 30
        }}>
            <TextInput placeholder='Tìm kiếm' underlineColorAndroid={"#0F82EB"} onChangeText={(val) => SearchAjax(val) }  value={val} />    
        </View>
              {dataIncome && dataIncome.map(res => {
                return <View
                  key={res.id}
                  style={{
                    backgroundColor: "#4BC994",
                    marginVertical: 10,
                    marginHorizontal: 20,
                    borderRadius: 10,
                    height: 130,
                    padding: 10
                  }}
                  
                >
                <Text style={{color: "#FFFDFF"}}>Thu nhập</Text>

                  <TouchableOpacity onPress={() => {
                    
                  }} >
                  <Text>Số tiền: {(res.total).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</Text>
                  <Text>Loại danh mục: {res.name}</Text>
                    <Text >Thời gian: {res.created_at}</Text>
                    <Text>Ghi chú: { res.comment}</Text>
                  </TouchableOpacity>
          
                </View> 
              })}
        {dataSpending && dataSpending.map(res => {
          return <View
            key={res.id}
            style={{
              backgroundColor: "#4BC994",
              marginVertical: 10,
              marginHorizontal: 20,
              borderRadius: 10,
              height: 130,
              padding: 10
            }}
            
          
          >
            <Text style={{color: "#FF0000"}}>Chi tiêu</Text>
            <TouchableOpacity onPress={() => {
              
            }} >
            <Text>Số tiền: {(res.total).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</Text>
            <Text>Loại danh mục: {res.name}</Text>
              <Text >Thời gian: {res.created_at}</Text>
              <Text>Ghi chú: { res.comment}</Text>
            </TouchableOpacity>
          
          </View> 
        })}
        </ScrollView>
        </View>
}

export default Search;
