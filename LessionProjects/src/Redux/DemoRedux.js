import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from "react-redux";
import { COUNT_UP,userCountUp,userCountDown } from './Redux/actions/countActions';
class DemoRedux extends Component {

    countUp = (value) => {
        this.props.dispatch(userCountUp(value))
    }
    userCountDown = () =>{
        this.props.dispatch(userCountDown(3))
    }
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text> DemoRedux </Text>
                <Text> Number: {this.props.number} </Text>
                <Text> Number: {this.props.userName} </Text>
                <View style={styles.btnContent}>
                    <TouchableOpacity onPress={ ()=>{this.countUp(5)}}>
                       <View style={{backgroundColor:'red'}}>
                       <Text> count up </Text>
                       </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ this.userCountDown}>
                        <Text> Count down </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    numberTxt: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

const mapStateToProps = (state) => {
    console.log(state);
    return {
        number: state.grcountReducer.number,
        userName:state.gruserReducer.userName
    };

};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         countUp: () => dispatch({
//             type: 'COUNT_UP'
//         }),
//         countDown:()=>dispatch({
//             type: 'COUNT_DOWN'
//         })
//     }
// }

export default connect(mapStateToProps)(DemoRedux);