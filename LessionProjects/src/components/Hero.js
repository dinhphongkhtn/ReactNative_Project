import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Hero extends Component {


    renderThumbMode = () => {
        return (
            <View>
                
                <Image source={this.props.heroData.Avarta} style={styles.avarta}></Image>
                <Text style={[styles.textName,{alignSelf:'center',fontSize:12}]}>{this.props.heroData.Name}</Text>
            </View>
        );
    }

    renderDeitalMode = () => {
        return (
            <View style={styles.itemContainer}>
                    <View style={styles.imgContainer}>
                        {
                            this.renderThumbMode()
                        }
                    </View>
                    <View style={styles.inforContainer}>
                        <Text style={styles.textName}>{this.props.heroData.Name}</Text>
                        <Text>15 bạn chung</Text>
                    </View>
            </View>
          
        )
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.props.displayMode === 1?
                    this.renderThumbMode()
                    : this.renderDeitalMode()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#dcdcdc',
        borderRadius: 10,
        flex:1,
        flexDirection:'row',
        marginBottom:10
    },
    imgContainer:{
        flex:1,
        margin:5
    },
    inforContainer:{
        flex:3,
        justifyContent:'center'
    },
    avarta: {
        width: 70,
        height: 70,
        borderRadius: 90,
        
    },
    textName:{
        fontSize:16,
        fontWeight:'bold'
    }
})

