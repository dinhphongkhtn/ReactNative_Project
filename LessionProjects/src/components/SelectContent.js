import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { styles } from "../assets/Styles";
import { Bao, bgGame, Bua, Keo, Player, playerComputer } from '../assets/images'
import { connect } from 'react-redux';
import { playerChangeSelect } from '../Redux/Redux/actions/gameActions';

 class SelectContent extends Component {

 

    renderCommands= () =>{
        const {arrayGame,playerChoose} = this.props;
        return arrayGame.map((item,index)=>{
            
            return (
                <TouchableOpacity key={index}
                onPress={() => { this.props.onPlaySelect(item) }}
                style={[styles.styleBorder, item.Id === playerChoose && {borderColor:'yellow'}]}>
                <Image style={[styles.smallimg]} source={item.Image}></Image>
            </TouchableOpacity>
            )
        });
    }

    render() {
        return (
            <View style={styles.selectConent}>
                {
                    this.renderCommands()
                }
            </View>
        )
    }
}

const mapStateToProps = (state) =>({
    arrayGame : state.GameReducer.arrayGame
})
const mapDispathToProps = dispatch =>({
    onPlaySelect: item=>dispatch(  playerChangeSelect(item))
    })
export default connect(mapStateToProps,mapDispathToProps)(SelectContent);