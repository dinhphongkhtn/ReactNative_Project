import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { styles } from '../assets/Styles'
import { PLAY_GAME, RESET_GAME } from '../Redux/Redux/actions/gameActions';
class ResultContent extends Component {

    onPressPlayButton = () => {

       
       const interval = setInterval(() => {

        if(this.props.times === 0){
            this.props.resetGame();
            clearInterval(interval);
            Alert.alert("Alert","Done",[
                {
                    style:'cancel'
                }
            ]);
        }else{

            const rdId = Math.floor(Math.random() * 3);
            this.props.onPressPlayButton(rdId);
        }
        }, 200);

        setTimeout(() => {
            clearInterval(interval);
        }, 20000);
    }

    render() {
        const { score, times, onPlay, onReset } = this.props;
        return (
            <>

                <View style={styles.inforContent}>
                    <Text style={styles.scoretxt}>Score:{score}</Text>
                    <Text style={styles.scoretxt}>Times:{times}</Text>
                </View>
                <View style={styles.buttonContent}>
                    <TouchableOpacity
                        onPress={this.onPressPlayButton}
                        style={[styles.button, { backgroundColor: '#ff9aff' }]}>
                        <Text style={styles.buttonTxt}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onReset() }}>
                        <LinearGradient style={[styles.button]}
                            start={{ x: 0.5, y: 0 }} end={{ x: 1, y: 1 }}
                            colors={['#dfaf12', '#ffce35']} >
                            <Text style={styles.buttonTxt}>Reset</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </>
        )
    }
}

const mapDispathToProps = dispatch => {
    return {
        onPressPlayButton: (id) => dispatch({
            type: PLAY_GAME,
            payload: id
        }),
        resetGame: ()=> dispatch({
            type: RESET_GAME,
            
        })
    }
}

const mapStateToProps = state => {
    return {
        times: state.GameReducer.times,
        score: state.GameReducer.score
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ResultContent);