import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity, 
    TouchableHighlight ,
    TouchableWithoutFeedback
} from 'react-native'

export default class Touched extends Component {
    handleOnpress=()=>{

        console.log('dasdasdas');
    };
    render() {
        return (
            <View style={styles.container}>
                
                <TouchableOpacity 
                    onPress={()=>{this.handleOnpress}}
                    activeOpacity={0.3} style={styles.button}>
                    <Text style={styles.txtButton}>TouchableOpacity</Text>
                 </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, justifyContent:'center', alignItems:'center'
    },
    button:{
        color:'red',
        backgroundColor:'#bfb',
        paddingVertical:5,
        paddingHorizontal:10
    },
    txtButton:{
        fontSize:20,

    }
})

