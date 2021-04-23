import React, { Component } from 'react';
import { View, StyleSheet, Button, TouchableHighlight, Text } from "react-native";


const _onPressButton = () => {
  alert('You tapped the button!')
};
const App = () => {

  return (
    <>
      <View style={[styles.container, styles.verticalContainer]}>
        <View style={[styles.box, styles.yellowBox]}>
          <View style={styles.button}>
            <TouchableHighlight style={{ justifyContent: 'center',flex:1, backgroundColor:'purple'}}
              onPress={_onPressButton} underlayColor="red">
              <Text style={styles.buttonText}>Touch Me!</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{ justifyContent: 'center',flex:1, backgroundColor:'gray' }}
              onPress={_onPressButton} underlayColor="red">
              <Text style={styles.buttonText}>Touch Me!</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.box, styles.yellowBox]}>
        </View>
      </View>

      <View style={[styles.container, styles.horizontalContainer]}>
        <View style={styles.container}>
          <View style={[styles.box, styles.blueBox]}>
            <View style={styles.button}>
              <TouchableHighlight style={{  justifyContent: 'center',flex:1 }}
                onPress={_onPressButton} underlayColor="red">
                <Text style={styles.buttonText}>Touch Me!</Text>
              </TouchableHighlight>
              
            </View>
          </View>
          <View style={[styles.box, styles.blueBox]}>
          </View>
        </View>
        <View style={styles.container}>
          <View style={[styles.box, styles.blueBox]}>
          </View>
          <View style={[styles.box, styles.blueBox]}>
          </View>
        </View>
      </View>
    </>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  box: {

    borderRadius: 20,
    flex: 1,
    margin: 20,
    padding: 10
  },
  yellowBox: {
    backgroundColor: '#ffffc2',
    marginVertical: 40
  },
  blueBox: {
    backgroundColor: '#4f82c0',

  },
  verticalContainer: {
    flexDirection: 'column',
    backgroundColor: '#A1c99A',
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  horizontalContainer: {
    flexDirection: 'row',
    backgroundColor: '#c8c8fA',
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {

    backgroundColor: '#2196F3',
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal:10,
    justifyContent:'space-around',
    padding:10
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
});

export default App;