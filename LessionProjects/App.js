import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import Cover from './src/components/Unit4/Cover';
import People from './src/components/Unit4/People';
const _onPressButton = () => {

};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      page: 2,
      seed: 1,
      error: null,
      refreshing: false,
      selectedItem: {"gender":"male","name":{"title":"Mr","first":"Janique","last":"Costa"},"location":{"street":{"number":8364,"name":"Rua Belo Horizonte "},"city":"Araraquara","state":"Rondônia","country":"Brazil","postcode":12989,"coordinates":{"latitude":"-74.5614","longitude":"-150.0978"},"timezone":{"offset":"+1:00","description":"Brussels, Copenhagen, Madrid, Paris"}},"email":"janique.costa@example.com","login":{"uuid":"827d20c0-fa56-40aa-a2de-7df6d682d269","username":"smalltiger544","password":"brownie","salt":"7QvzaON4","md5":"12b90398592831552763936af62cf6e8","sha1":"3e7edd839bf49ad03b1df58a9f0fe5a354ca24b3","sha256":"417860b9520d81127a479a785c7886a30de02751f33787a2daa8bca21ac81bed"},"dob":{"date":"1991-08-17T12:17:45.926Z","age":30},"registered":{"date":"2019-03-23T12:56:23.958Z","age":2},"phone":"(84) 5181-4592","cell":"(23) 6323-6609","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/42.jpg","medium":"https://randomuser.me/api/portraits/med/men/42.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/42.jpg"},"nat":"BR"},
      result: 21
    };

  }
  CoverData = {
    Name: 'Phong Do',
    Age: 25,
    Addr: 'Phu cat , Binh Dinh',
    Phone: '12345678',
    Email: 'phong@gmail.com'
  };

  
  componentDidMount() {
    this.makeRemoteRequest();
    
  }

  makeRemoteRequest = () => {
    const { page, seed, result } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=${result}`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
          
        });
        
     
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });


  
  };

  renderData = ({ item,index }) => (

    <People onSelectedItem={value => this.setState({selectedItem:value})} key={index} data={item}></People>
  );
  renderSeparator = () => {
    return (

      Platform.OS !== 'android' &&
      (({ highlighted }) => (
        <View
          style={[
            style.separator,
            highlighted && { marginLeft: 0 }
          ]}
        />
      ))
    );
  };
  render() {

    return (
      <View style={{ flex: 1, backgroundColor: '#242526' }}>
        <View style={{ flex: 4 }}>
          <Cover key={this.state.selectedItem} data={this.state.selectedItem}></Cover>
        </View>

        <View style={styles.sperator}></View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <FlatList horizontal={true}
            data={this.state.data}
            renderItem={this.renderData}
            extraData={this.state.selectedItem}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={item => item.email} />
        </View>
      </View>

    );
  };

};

const styles = StyleSheet.create({

  sperator: {
    height: 1,
    backgroundColor: 'white'
  },
  flatListItemStyle: {
    padding: 10,

  }
})
