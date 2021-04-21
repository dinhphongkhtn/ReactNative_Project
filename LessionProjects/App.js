import React from 'react';
import { View, StyleSheet } from "react-native";
const App = () => {

  return (
    <>
      <View style={[styles.container, styles.verticalContainer]}>
        <View style={[styles.box, styles.yellowBox]}>
        </View>
        <View style={[styles.box, styles.yellowBox]}>
        </View>
      </View>

      <View style={[styles.container, styles.horizontalContainer]}>
        <View style={styles.container}>
          <View style={[styles.box, styles.blueBox]}>
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
    margin:20
  },
  yellowBox: {
    backgroundColor: '#ffffc2',
    marginVertical: 40
  },
  blueBox: {
    backgroundColor: '#4f82c0',
    
  },
  verticalContainer:{
    flexDirection: 'column',
    backgroundColor: '#A1c99A', 
    marginBottom: 10,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  horizontalContainer:{
    flexDirection:'row',
    backgroundColor: '#c8c8fA', 
    marginTop: 10 ,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  
});

export default App;