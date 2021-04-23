import React, { Component } from 'react'
import { Text, View } from 'react-native'


export class Box extends Component {
    render() {
        return (
            <View style={{backgroundColor:'red'}}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default class SubBox extends Box{
    render(){
        return(
            <Box>
                <Text >dsadsa</Text>
            </Box>

        );
    };
    
}
