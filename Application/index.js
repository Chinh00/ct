/**
 * @format
 */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import {name as appName} from './app.json';
import Splash from './Screens/Splash';
import HomeLogin from './Screens/HomeLogin';
import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from './App';
import Home from './Screens/Home';
import HomeNavigator from './Screens/HomeNavigator';
import day from './Screens/Day';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Test Screen</Text>
    </View>
  );
}


function Application() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
class Main extends Component {
  constructor(prpps) {
    super(prpps)
    this.state = { screen: 'Splash' }
    setTimeout(() => {
      this.setState({screen : 'App'})
    }, 2000)
  } 
  render() {
      const {screen} = this.state;
      let currentScreen = (screen === "Splash") ? <Splash /> : <Application />;
    return currentScreen
  }
}

AppRegistry.registerComponent(appName, () => Application);