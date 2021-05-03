
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import UserDetail from './src/Screens/UserDetail';

import { AppColors } from "./src/Assets/Styles";

const Stack = createStackNavigator();


export default class App extends Component {


  HomeStack = ({ navigation }) => {
    return <Home handleSelectionChanged={user => {
 
      navigation.navigate('UserDetail', { userData: user});
    }}></Home>
  };

  UserDetailStack = ({ route, navigation }) => {

    return (

      <UserDetail navigation={{...navigation}} userData={route.params.userData}></UserDetail>
    )
  }

  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: AppColors.Background,
            },
            headerTintColor: AppColors.TextColor,
            headerTitleStyle: {
              fontWeight: 'bold',

            },
          }}>
          <Stack.Screen name="Home" component={this.HomeStack} />
          <Stack.Screen name="UserDetail" component={this.UserDetailStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

};
