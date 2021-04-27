import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

//import defaultIcon from "../Assets/images/care.png";

import defaultIcon from "../Assets/index";
import Icon from './Icon';

export default class IconComponent extends Component {


    state = {

        currentIcon: defaultIcon
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtStyle}>Bạn đang cảm thấy thế lào</Text>
                <Image style={styles.largeIcon} source={this.state.currentIcon} ></Image>
                <View style={styles.listIcons}>
                 
                    <Icon
                        onSelectedChanged={item => this.setState({currentIcon:item})}
                        display={'angry'}
                         name={require('../Assets/images/angry.png')}></Icon>
                    <Icon
                        onSelectedChanged={item => this.setState({currentIcon:item})}
                        display={'care'}
                         name={require('../Assets/images/care.png')}></Icon>
                    <Icon
                        onSelectedChanged={item => this.setState({currentIcon:item})}
                        display={'haha'}
                         name={require('../Assets/images/haha.png')}></Icon>
                    <Icon
                        onSelectedChanged={item => this.setState({currentIcon:item})}
                        display={'love'}
                         name={require('../Assets/images/love.png') }></Icon>
                         <Icon
                        onSelectedChanged={item => this.setState({currentIcon:item})}
                        display={'sad'}
                         name={ require('../Assets/images/sad.png')  }></Icon>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    largeIcon: {
        alignSelf: 'center',
        width: 200,
        height: 200,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 100,

    },

    txtStyle: {
        fontSize: 18,
        alignSelf: 'center'
    },
    listIcons: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 30
    }
})
