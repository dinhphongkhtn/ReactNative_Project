import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default class BaiTapScrollView extends Component {

    items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    renderItem = () => {
        return this.items.map((idx, index) => {
            return (

                <View key={index} style={[styles.item,{
                    backgroundColor:`#${Math.floor(Math.random()*16777215).toString(16)}`,
                    }]}>
                    <Text>Item {idx}</Text>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        this.renderItem()
                    }
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:20
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:90,
        marginVertical:10,
        borderRadius:10
    }
})

