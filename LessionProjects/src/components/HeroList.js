import React, { Component } from 'react'
import { FlatList, Text, View ,StyleSheet} from 'react-native'
import heroData from "../heroData/index";
import Hero from './Hero';
export default class HeroList extends Component {

    heroData = [...heroData]

    renderItem = ({item,index}) => {
        
        return (
            <View style={[{flex:1}, this.props.horizontal ? {marginRight:25} : {}]}>

                <Hero  heroData={item} displayMode={this.props.displayMode} />
            </View>

        )
    }

    render() {
        return (
            <View style={{ flex: 1}}>
              
                <FlatList 
                    horizontal={this.props.horizontal}
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

