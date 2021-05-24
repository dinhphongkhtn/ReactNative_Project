import React, { Component } from 'react'
import {
    Text, View, StyleSheet, ImageBackground, Image, SafeAreaView,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux';
import { Bao, bgGame, Bua, Keo, Player, playerComputer } from '../assets/images'

import { styles } from "../assets/Styles";
import { playerChangeSelect, resetGame, runPlay } from '../Redux/Redux/actions/gameActions';
import PlayerItem from './PlayerItem';
import ResultContent from './ResultContent';
import SelectContent from './SelectContent';

 class BaiTapOanTuXi extends Component {

    changePlayerChoose = (item) => {

         this.props.dispatch(playerChangeSelect(item));
    };
    runPlay = ()=>{
        this.props.dispatch(runPlay());
    }
    resetGame = ()=>{
        this.props.dispatch(resetGame());
    }
    render() {

        return (
            <ImageBackground source={bgGame} style={styles.background}>
                {/* <StatusBar barStyle={'light-content'}/> */}
                <View style={styles.overlay}>
                    <SafeAreaView style={styles.container}>
                        <View style={styles.playerContent}>

                            <PlayerItem imageGame={this.props.playerChoose.Image} imagePlayer={Player}></PlayerItem>
                            <PlayerItem imageGame={this.props.thanosChoose.Image} imagePlayer={playerComputer}></PlayerItem>
                        </View>
                        <View style={styles.selectConent}>
                            <SelectContent playerChoose={this.props.currentSelect}
                                onPlaySelect={item => { this.changePlayerChoose(item) }}></SelectContent>

                        </View>
                        <View style={styles.inforContent}>
                            <ResultContent
                                onPlay={this.runPlay}
                                onReset={this.resetGame}
                                score={this.props.score} times={this.props.times}></ResultContent>
                        </View>

                    </SafeAreaView>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        playerChoose : state.GameReducer.playerChoose,
        thanosChoose:  state.GameReducer.thanosChoose,
        currentSelect: state.GameReducer.currentSelect,
        score: state.GameReducer.score,
        times: state.GameReducer.times,
    }
}


export default connect(mapStateToProps)(BaiTapOanTuXi);