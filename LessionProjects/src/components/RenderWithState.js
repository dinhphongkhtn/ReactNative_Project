import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class RenderWithState extends Component {
    constructor(props){
        super(props);
        this.state ={
            isLogin : true
            
        };
    }
   
    renderLogin = () => {
        if (this.state.isLogin) {
            return (
                <>
                    <Text style={styles.txtButton}> Hello </Text>
                    <TouchableOpacity style={styles.button} onPress={this.handleLoginout}>
                        <Text style={styles.txtButton}> LOGOUT </Text>
                    </TouchableOpacity>
                </>
            );
        }

        return (
            <TouchableOpacity style={styles.button}  onPress={this.handleLoginout}>
                <Text style={styles.txtButton}> LOGIN </Text>
            </TouchableOpacity>
        );

    };

    handleLoginout=()=>{
        this.setState({isLogin:!this.state.isLogin}, ()=>{

            console.log('done');
        });
        console.log('wait');
    };
    render() {
        return (
            <View style={styles.container}>

                {
                    this.renderLogin()
                }

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    button: {
        color: 'red',
        backgroundColor: '#bfb',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8
    },
    txtButton: {
        fontSize: 20,

    }
})
