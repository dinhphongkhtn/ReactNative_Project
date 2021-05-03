import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native'
import { AppColors } from "../Assets/Styles";
import Icons from "../Assets/Icons";

export default class Commands extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:'red'}]}>
                    <Icons color={'white'} name={'trash'} size={25}></Icons>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:'yellow'}]}>
                    <Icons color={'white'} name={'edit'} size={25}></Icons>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:'green'}]}>
                    <Icons color={'white'} name={'eye'} size={25}></Icons>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'black'
    },
    buttonStyle:{
        justifyContent:'center',
        flex:1,
        
        alignItems:'center'
    }
});
