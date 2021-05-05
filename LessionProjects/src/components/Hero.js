import React, { Component } from 'react'
import { Text, View, Image,StyleSheet } from 'react-native'

export default class Hero extends Component {


    renderThumbMode = () => {
        return (
            <View>
                <Image source={this.props.heroData.Avarta} style={styles.avarta}></Image>
            </View>
        );
    }

    render() {
        return (
            <View style={{flex:1}}>
                {this.renderThumbMode()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer:{

    },
    avarta:{
        width:70,
        height:70,
        borderRadius:90,
        backgroundColor:'green',
        
    }
})

