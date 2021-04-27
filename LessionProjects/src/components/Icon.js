import React, { Component } from 'react'
import {StyleSheet,Image,TouchableOpacity } from 'react-native'

export default class Icon extends Component {
    handleIconClick=(icon, display)=>{
        console.log(display);
        this.props.onSelectedChanged(icon);
    };
    render() {
        // this.props.currentIcon === this.props.name ? { borderWidth: 3 } : { borderWidth: 0 }
        return (
            <TouchableOpacity onPress={()=>{this.handleIconClick(this.props.name,this.props.display)}}>
            <Image style=
                {styles.smallIcon
                }
                source={this.props.name} ></Image>
        </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    smallIcon: {
        width: 50,
        height: 50,
        borderColor: 'white',
        borderRadius: 60
    },
})
