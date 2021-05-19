import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../assets/Styles'

export default class ResultContent extends Component {
    render() {
        const { score, times,onPlay,onReset } = this.props;
        return (
            <>

                <View style={styles.inforContent}>
                    <Text style={styles.scoretxt}>Score:{score}</Text>
                    <Text style={styles.scoretxt}>Times:{times}</Text>
                </View>
                <View style={styles.buttonContent}>
                    <TouchableOpacity
                        onPress={() => { onPlay() }}
                        style={[styles.button, { backgroundColor: '#ff9aff' }]}>
                        <Text style={styles.buttonTxt}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {onReset() }}>
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
