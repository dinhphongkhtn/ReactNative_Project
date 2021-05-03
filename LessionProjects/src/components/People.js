import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from 'react-native'

import AppStyles, { AppColors } from "../Assets/Styles";
import Commands from './Commands';
const _onPressButton = () => {

};



export default class People extends Component {

    state = {
        isSelected: false,
        showCommands: false
    };
    setSelectedItem = (isSelected) => {

        this.setState({ isSelected: isSelected });

        // alert(`${email} ${this.state.selectedItem}`);
    }
    onSelectionChanged = (item) => {
        this.props.onSelectedItem(item);

    };

    onShowCommandLayout=(isShow)=>{
        this.setState({showCommands:isShow});
    };

    render() {
        return (
            <TouchableOpacity
                //  onPress={() => { this.onSelectionChanged(this.props.data); }}
                
               onLongPress={()=>{this.onShowCommandLayout(true)}}
            //    onPressOut={
            //        this.state.showCommands ?
            //        this.onShowCommandLayout(false)
            //        :
            //          this.onSelectionChanged(this.props.data)
            //    }
            
            onBlur={()=>{this.onShowCommandLayout(false)}}
                style={styles.buttonStyle}>
                <View style={{ flexDirection: 'row', padding: '2%', backgroundColor: '#dcdcdc' }}>
                    <View style={styles.viewImage}>
                        <Image style={styles.img}
                            source={{ uri: this.props.data.picture.large }}>
                        </Image>
                    </View>
                    <View style={styles.viewInfor}>
                        <Text style={[AppStyles.primaryText, { fontSize: 16 }]}>{this.props.data.name.first} {this.props.data.name.last}</Text>
                        <Text style={[AppStyles.secondText, { fontSize: 14 }]}>{this.props.data.email}</Text>

                        {
                            this.state.showCommands ?
                            <View style={styles.commandContainer}>
                                <Commands></Commands>
                            </View>
                            :
                            <View/>
                        }
                    </View>
                   
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: '3%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        borderColor: '#3D85C6',
        borderWidth: 2
    },

    viewInfor: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    viewImage: {
        flex: 1,
        marginRight: 10
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 100,
        alignSelf: 'flex-start',
        resizeMode: 'contain',

    },
    viewContent: {
        flex: 1,
        flexDirection: 'row'
    },
    buttonStyle: {
        flex: 1, borderRadius: 10,
        borderColor: 'lightgray',
        borderWidth: 1, 
        margin: 5
    },
    commandContainer:{
        
        position:'absolute',
        backgroundColor:'gray',
        right: 0,
        width: 180,
        height: '100%',
        
    }
});

