import React, { Component } from 'react'
import { FlatList, Text, View ,StyleSheet} from 'react-native'
import heroData from "../heroData/index";
import Hero from './Hero';
export default class HeroList extends Component {

    heroData = [...heroData]

    renderItem = ({item,index}) => {
        console.log(item)
        return (
            <View style={{marginRight:20, flex:1}}>

                <Hero  heroData={item} displayMode={1} />
            </View>

        )
    }

    render() {
        return (
            <View style={{ flex: 1, marginHorizontal:10 }}>
              
                <FlatList 
                    numColumns={4}
                    renderItem={this.renderItem}
                   data={this.heroData}
                   keyExtractor={item => item.Id}
                ></FlatList>
            </View>

        )
    }
}

const styles = StyleSheet.create({

})

