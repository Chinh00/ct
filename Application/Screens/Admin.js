/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Admin = () => {
    const [data, setData] = useState([])
    useEffect(() => {
         fetch("http://10.0.2.2:8000/api/list-user", {
                            method: 'POST',
                            headers:{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                            })
                        })
                            .then( responsive => responsive.json())
                            .then(responsive => {
                                setData(responsive)
                            }).catch((error) => { alert(error) })
    }, [])
    function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
    return <View style={{
        flex: 1,
    }}>
        <ScrollView>
            {data.map(res => {
                return <View
            key={res.id}
            style={{
              backgroundColor: getRandomColor(),
              marginVertical: 10,
              marginHorizontal: 20,
              borderRadius: 10,
              height: 50,
              padding: 10
            }}
            
          
          >
            
            <Text>Email: {(res.email)}</Text>
            <Text>Tổng tiền: {res.subtotal}</Text>
          
          </View> 
            })}
        </ScrollView>

    </View>
}

export default Admin;
