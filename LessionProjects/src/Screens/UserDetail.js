import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AppColors } from '../Assets/Styles';
import Cover from "../components/Cover";
import DataContent from '../components/DataContent';
export default class UserDetail extends Component {
    render() {

        this.props.navigation.setOptions({ title: `${this.props.userData.name.first} ${this.props.userData.name.last} ` });
        this.state = {
            selectedItem: this.props.userData
        }

        const { location, phone, email,dob } = this.props.userData;

        return (
            <View style={{ flex: 1, backgroundColor: AppColors.Background }}>
                <View style={{ flex: 1.7 }}>
                    <Cover key={this.state.selectedItem} data={this.state.selectedItem}></Cover>
                </View>
                <View style={{ flex: 2, backgroundColor: AppColors.SecondBackground,  marginTop: '7%', borderRadius: 15, padding: '3%' }}>
                    <DataContent Description={'location'}
                        Content={`${location.street.number},${location.street.name},${location.city},${location.state},${location.country}`}
                        Icon={'location'}></DataContent>
                    <DataContent  Description={'Phone'}
                        Content={phone}
                        Icon={'phone'}></DataContent>
                    <DataContent  Description={'Email'}
                        Content={email}
                        Icon={'email'}></DataContent>
                        <DataContent  Description={`Age: ${dob.age}`}
                        Content={`${dob.date}`}
                        Icon={'calendar'}></DataContent>
                </View>
            </View>
        )
    }
}
