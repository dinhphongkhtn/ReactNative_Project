import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HeroList from './src/components/HeroList'
import Entypo from "./src/assets/icons/index";
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.titleContainer, { flex: 1.2 }]}>
        <Text style={styles.titleText}>Tìm kiếm gần đây</Text>
          <HeroList displayMode={1} horizontal={true}></HeroList>
        </View>

        <View style={[styles.titleContainer, { flex: 5 }]}>
          <Text style={styles.titleText}>Gợi ý bạn bè</Text>
          <HeroList displayMode={2} horizontal={false}></HeroList>
        </View>

        {/* <Entypo name="shoppingcart" size={30} color={'red'}></Entypo> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2'
  },
  titleContainer: {

    flex: 1,
    justifyContent: 'space-between'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 10
  }

})

