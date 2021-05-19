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
import { playerChangeSelect } from '../Redux/Redux/actions/gameActions';
import PlayerItem from './PlayerItem';
import ResultContent from './ResultContent';
import SelectContent from './SelectContent';

 class BaiTapOanTuXi extends Component {

    state = {
       
       
    }

    arrayGames = [];

    changePlayerChoose = (item) => {

         this.props.dispatch(playerChangeSelect(item));
    };

    convertChooseToInt = (choose) => {
        switch (choose) {
            case Keo: return 1;
            case Bua: return 2;
            case Bao: return 3;
            default: return -1;
        }
    }
    resetGame = () => {
        this.setState({ score: 0, times: 9 });
        clearInterval();
    }
    changeTimes = (value) => {
        this.setState({ times: this.state.times + value }, () => {
            if (this.state.times === 0) {

                // alert("Finished");
            }
        })
    }

    getResult = () => {
        const { playerChoose, thanosChoose } = this.state;
        let playerSelectId = playerChoose.Id;
        // let playerSelectId = playerChoose.Id;
        let winner = 'none';

        if (playerChoose.Id === thanosChoose.Id) return winner;

        if (playerChoose.Image === Keo) {

            winner = thanosChoose.Image === Bao ? 'player' : 'thanos';
        } else if (playerChoose.Image == Bua) {
            winner = thanosChoose.Image === Keo ? 'player' : 'thanos';
        }
        else if (playerChoose.Image === Bao) {
            winner = thanosChoose.Image === Bua ? 'player' : 'thanos';
        }

        return winner;
    }

    play = () => {

        let playerChooseInt = this.state.playerChoose.Id;

        if (playerChooseInt === -1) {
            alert("Select your choose!");
            return;
        }

        let rd = Math.floor(Math.random() * 3 + 1);
        // let choose = -1;
        // console.log(rd);
        // switch (rd) {
        //     case 1: choose = Keo; break;
        //     case 2: choose = Bua; break;
        //     case 3: choose = Bao; break;
        // }
        let _thanosChoose = this.state.commands.find(a => a.Id === rd);

        this.setState({ thanosChoose: _thanosChoose }, () => {

            let winner = this.getResult();

            if (winner === 'none') return;
            if (winner === 'player') {
                this.setState({ score: this.state.score + 1 });
            }
            else if (winner === 'thanos') {

                this.changeTimes(-1);
            }
        });

    }

    runPlay = (isStop) => {
        let play;
        play = setInterval(() => {
            if (this.state.times > 0 && !isStop) {
                this.play()
            } else 
            {
                clearInterval(play);
                this.resetGame();
            }
        }, 1000);
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
                                onPlay={()=>{this.runPlay(false)}}
                                onReset={()=>{this.runPlay(true)}}
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