import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { AppColors } from "../Assets/Styles";
import Icons from "../Assets/Icons";
export default class DataContent extends Component {

    render() {
        const { Icon, Content,hideSperator } = this.props;
        return (
            <View>
                <View style={styles.container}>
                    <Icons style={{marginRight:10}} name={Icon} size={25} color="black" />
                    <Text style={styles.textContent}>{Content}</Text>
                </View>
                {/* <Text style={styles.textDescription}>{Description}</Text> */}
                {
                    hideSperator ?  <View/> : <View style={styles.sperator}/>
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        padding: 10,

    },
    sperator: {
        borderBottomWidth: 1,
        borderColor: AppColors.Sperator,
        width: '85%',
        alignSelf:'flex-end',
        opacity:0.3
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 15,
        alignSelf:'center'

    },
    textContent: {
        color: AppColors.TextColor,
        fontSize: 16,
        width: '90%',
        alignSelf: 'center'
    },
    textDescription: {
        color: 'white',
        fontSize: 11.5,
        fontStyle:'italic',
        width: '85%',
        marginLeft:'15%'
    }
})
