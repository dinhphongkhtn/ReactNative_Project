import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export default class DemoFlatlist extends Component {

    items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    renderItem = ({ item, index,separators:{highlight} }) => {
        console.log(highlight);
        return (

            <View key={index} style={[styles.item, {
                backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            }]}>
                <Text>Item {item}</Text>
            </View>
        )
    }
    state={
        isRefreshing:true
    }
    render() {
        return (

            <FlatList data={this.items} style={styles.container}
                
                
                keyExtractor={item => item.toString()}
                contentContainerStyle={styles.itemcontainer}
                renderItem={this.renderItem}
                ItemSeparatorComponent={({highlighted}) => {
                   
                    return <View style={styles.itemSeparator}></View>
                }}
            ></FlatList>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

    },
    itemcontainer: {
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,

        borderRadius: 10
    },
    itemSeparator: {
        width: '100%',

        height: 10
    }
})
