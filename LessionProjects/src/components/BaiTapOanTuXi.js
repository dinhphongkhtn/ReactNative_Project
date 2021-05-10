import React, { Component } from 'react'
import {
    Text, View, StyleSheet, ImageBackground, Image, SafeAreaView,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Bao, bgGame, Bua, Keo, Player, playerComputer } from '../assets/images'

import { styles } from "../assets/Styles";
import PlayerItem from './PlayerItem';

export default class BaiTapOanTuXi extends Component {

    state = {
        score: 0,
        times: 9
    }

    render() {


        return (
            <ImageBackground source={bgGame} style={styles.background}>
                {/* <StatusBar barStyle={'light-content'}/> */}
                <View style={styles.overlay}>
                    <SafeAreaView style={styles.container}>
                        <View style={styles.playerContent}>

                            <PlayerItem imageGame={Keo} imagePlayer={Player}></PlayerItem>
                            <PlayerItem imageGame={Bao} imagePlayer={playerComputer}></PlayerItem>
                        </View>
                        <View style={styles.selectConent}>
                            <View style={styles.styleBorder}>
                                <Image style={styles.smallimg} source={Keo}></Image>
                            </View>
                            <View style={styles.styleBorder}>
                                <Image style={styles.smallimg} source={Bua}></Image>
                            </View>
                            <View style={styles.styleBorder}>
                                <Image style={styles.smallimg} source={Bao}></Image>
                            </View>
                            {/* <Image style={styles.imgCommand} source={Bua}></Image>
                            <Image style={styles.imgCommand} source={Bao}></Image> */}
                        </View>
                        <View style={styles.inforContent}>
                            <Text style={styles.scoretxt}>Score:{this.state.score}</Text>
                            <Text style={styles.scoretxt}>Times:{this.state.times}</Text>
                        </View>
                        <View style={styles.buttonContent}>

                            <TouchableOpacity style={[styles.button, { backgroundColor: '#ff9aff' }]}>
                                <Text style={styles.buttonTxt}>Play</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <LinearGradient style={[styles.button]}
                                    start={{ x: 0.5, y: 0 }} end={{ x: 1, y: 1 }}
                                    colors={['#dfaf12', '#ffce35']} >
                                    <Text style={styles.buttonTxt}>Reset</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>

                    </SafeAreaView>
                </View>
            </ImageBackground>
        )
    }
}

