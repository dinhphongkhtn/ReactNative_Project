import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,SafeAreaView, SectionList,StatusBar } from "react-native";
import Cover from '../components/Cover';
import People from '../components/People';
import { AppColors } from "../Assets/Styles";
import DataContent from '../components/DataContent';
export default class Home extends Component {

    CoverData = {
        Name: 'Phong Do',
        Age: 25,
        Addr: 'Phu cat , Binh Dinh',
        Phone: '12345678',
        Email: 'phong@gmail.com'
    };

    state = {
        loading: false,
        data: [],
        page: 2,
        seed: 1,
        error: null,
        refreshing: false,
        selectedItem: {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Phong",
                "last": "Do"
            },
            "location": {
                "street": {
                    "number": 8364,
                    "name": "Rua Belo Horizonte "
                },
                "city": "Araraquara",
                "state": "Rondônia",
                "country": "Brazil",
                "postcode": 12989,
                "coordinates": {
                    "latitude": "-74.5614",
                    "longitude": "-150.0978"
                },
                "timezone": {
                    "offset": "+1:00",
                    "description": "Brussels, Copenhagen, Madrid, Paris"
                }
            },
            "email": "janique.costa@example.com",
            "login": {
                "uuid": "827d20c0-fa56-40aa-a2de-7df6d682d269",
                "username": "smalltiger544",
                "password": "brownie",
                "salt": "7QvzaON4",
                "md5": "12b90398592831552763936af62cf6e8",
                "sha1": "3e7edd839bf49ad03b1df58a9f0fe5a354ca24b3",
                "sha256": "417860b9520d81127a479a785c7886a30de02751f33787a2daa8bca21ac81bed"
            },
            "dob": {
                "date": "1991-08-17T12:17:45.926Z",
                "age": 30
            },
            "registered": {
                "date": "2019-03-23T12:56:23.958Z",
                "age": 2
            },
            "phone": "(84) 5181-4592",
            "cell": "(23) 6323-6609",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.6435-9/s960x960/72357979_1932632633505760_8348506526012407808_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=Zebfj3Vy7HAAX_kFGHs&_nc_ht=scontent.fsgn5-7.fna&tp=7&oh=112e8ebf516a203b89abce82755c8cf4&oe=60B335BE",
                "medium": "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/68891166_1855994864502871_7830898761378299904_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0ghNrHqlRucAX-fTsD2&_nc_ht=scontent-xsp1-3.xx&oh=b4729ac2f28552d9fb89e5609dcb2047&oe=60B2022E",
                "thumbnail": "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/68891166_1855994864502871_7830898761378299904_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0ghNrHqlRucAX-fTsD2&_nc_ht=scontent-xsp1-3.xx&oh=b4729ac2f28552d9fb89e5609dcb2047&oe=60B2022E"
            },
            "nat": "BR"
        },
        result: 21
    };
    componentDidMount() {
        this.makeRemoteRequest();

    }

    makeRemoteRequest = () => {
        const { page, seed, result } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=${result}`;
        this.setState({ loading: true });
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false,

                });


            })
            .catch(error => {
                this.setState({ error, loading: false });
            });

    };

    selectionChanged = (item) => {
        
        this.props.handleSelectionChanged(item);
    }

    renderDataItem = ({ item, index }) => (
        <People onSelectedItem={() => { this.selectionChanged(item) }} key={index} data={item}></People>
    );

    render() {
        console.log(('item'));
        return (
            <View style={{ flex: 1, backgroundColor: AppColors.Background }}>
                <View style={{ flex: 1 }}>
                    <Cover key={this.state.selectedItem} data={this.state.selectedItem}></Cover>
                </View>
                <View>
                  <DataContent hideSperator={true} Icon={'users'} Content={'Recommened'}></DataContent>
                </View>
                <View style={{ flex: 1.5, flexDirection: 'row', marginTop: 10 }}>
                   
                     <FlatList numColumns={1} 
                        data={this.state.data}
                        renderItem={this.renderDataItem}
                        extraData={this.state.selectedItem}
                        keyExtractor={item => item.email} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
      },
    sperator: {
        height: 1,
        backgroundColor: 'white'
    },
    flatListItemStyle: {
        padding: 10,

    },
    button: {
        borderRadius: 10,
        borderColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 2,
        backgroundColor: '#242526'
    },

})
