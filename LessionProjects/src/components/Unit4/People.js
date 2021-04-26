import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'

const _onPressButton = () => {

};



export default class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: false,

        };

    };
    setSelectedItem = (isSelected) => {
        this.setState({ isSelected: isSelected });
        // alert(`${email} ${this.state.selectedItem}`);
    }
    onSelectionChanged =(item)=>{this.props.onSelectedItem(item)};
    render() {
        return (
            <TouchableHighlight
                onPress={() => {  this.onSelectionChanged(this.props.data);}}
                 
                style=
                {
                    this.state.isSelected ?
                        {
                            flex: 1, borderRadius: 10,
                            backgroundColor: '#bbf',
                            borderWidth: 1, margin: 5
                        }
                        :
                        {
                            flex: 1, borderRadius: 10,
                            borderColor: 'lightgray',
                            borderWidth: 1, margin: 5
                        }
                }

            >
                <View style={{ flex: 1 }}>
                    <View style={styles.viewImage}>
                        <Image style={styles.img}
                            source={{ uri: this.props.data.picture.large }}>
                        </Image>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={styles.primaryText}>{this.props.data.name.first} {this.props.data.name.last}</Text>
                    </View>

                </View>
            </TouchableHighlight>
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
        flex: 2,
        flexDirection: 'row'
    },
    viewImage: {
        flex: 3,
        padding: 5
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 5,
        alignSelf: 'flex-start',
        resizeMode: 'contain'
    },
    viewContent: {
        flex: 1,
        flexDirection: 'row'
    },

    primaryText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop:10
    },

});

