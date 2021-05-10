import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { Keo, Player } from '../assets/images'
import {styles} from "../assets/Styles";
export default class PlayerItem extends Component {
    render() {
        const {imageGame, imagePlayer} = this.props;
        return (
            <View style={styles.subContent}>
                <View style={[styles.styleBorder, { width: 100, height: 100 }]}>
                    <Image style={styles.imgCommand} source={imageGame}></Image>
                    <View style={styles.arrow}></View>
                </View>
                <View style={styles.playerBorder}>
                    <Image style={styles.imgCommand} source={imagePlayer}></Image>
                </View>
            </View>
        )
    }
}

