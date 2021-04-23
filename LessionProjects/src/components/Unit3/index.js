import React, { Component } from 'react'
import { View,StyleSheet,Image,Text } from 'react-native'

const CatTemplate = ({name, img})=> {
    const tenconmeo =name;
   const img = img;
        return (
            <View style={[styles.box]}>
                <Image style={styles.img} 
                source={require({img})}></Image>
                <Text style={styles.buttonText}>{tenconmeo}</Text>
            </View>
        )
    
}

const styles = StyleSheet.create({
  
    box: {
  
      borderRadius: 20,
      flex: 1,
      margin: 20,
      padding: 10,
      backgroundColor:'#4f82c0',
      alignItems:'center'
    },
 
    buttonText: {
     
      color: 'white', 
      fontSize:20,
      fontWeight:'bold',
      marginVertical:20
    },

    img:{
        width: 200,
        height:200,
        borderRadius:360,
        borderWidth:5,
        borderColor:'white',
      
    }
  });

  export default CatTemplate;