import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class Cover extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.viewImage}>
                    <Image style={styles.imgCover}
                        source={{ uri: this.props.data.picture.large }}
                    ></Image>
                    <Image
                        source={{ uri: this.props.data.picture.medium }}
                        style={styles.imgAvarta}></Image>
                </View>
                <View style={styles.viewInfor}>
                    <Text style={styles.primaryText}>{this.props.data.name.first}</Text>
                    <Text style={styles.secondText}>{this.props.data.name.last}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    viewImage: {
        flex: 2,
        paddingHorizontal: '3%',
        paddingTop: '2%'
    },
    viewInfor: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    imgCover: {
        borderRadius: 10,

        width: '100%',
        height: '100%'
    },
    imgAvarta: {
        borderRadius: 60,
        width: 100,
        height: 100,
        borderColor: 'transparent',
        borderWidth: 3,
        alignSelf: 'center',
        marginTop: -70,
        borderColor: '#242526'

    },

    primaryText: {
        color: 'white',

        fontSize: 20,
        fontWeight: 'bold'
    },
    secondText: {
        color: 'white',

        fontSize: 13,

    },
}
);
