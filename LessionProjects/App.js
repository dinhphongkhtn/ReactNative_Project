import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import BaiTapOanTuXi from './src/components/BaiTapOanTuXi'
import DemoRedux from './src/Redux/DemoRedux'
import {  Provider} from "react-redux";
import store from './src/Redux/Redux/store';
export default class App extends Component {
  render() {
    return (
      
      // <BaiTapOanTuXi></BaiTapOanTuXi>
      <Provider store={store}>
        {/* <DemoRedux></DemoRedux> */}
        <BaiTapOanTuXi></BaiTapOanTuXi>
      </Provider>
    )
  }
}
