import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import AppStyles, { AppColors } from "../Assets/Styles";

export default class Cover extends Component {

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
                    <View style={styles.viewInfor}>
                        <Text style={AppStyles.primaryText}>{`${this.props.data.name.first} ${this.props.data.name.last}`}</Text>
                        {/* <Image style={AppStyles.button} source={{ uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png' }}></Image> */}
                    </View>
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
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row'
    },
    imgCover: {
        borderRadius: 10,

        width: '100%',
        height: '80%'
    },
    imgAvarta: {
        borderRadius: 60,
        width: 100,
        height: 100,
        borderColor: 'transparent',
        borderWidth: 3,
        alignSelf: 'center',
        marginTop: -70,
        borderColor: AppColors.Background

    },
}
);
