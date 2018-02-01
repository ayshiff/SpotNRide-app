import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch, Modal, Picker,TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import Mapv from './Map.js'
import {StackNavigator} from 'react-navigation';


class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {
            login: '',
            password: ''
        }
    }

    render(){

        return (
            <View style={{flex: 1, flexDirection: 'column',marginLeft: 20,marginRight:20,marginTop: 200}} >

                 <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1,marginTop: 50}}
                onChangeText={(text) => this.setState({login})}
                value={this.state.login}
                underlineColorAndroid='transparent'
            />

                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1,marginTop: 10,marginBottom: 10}}
                onChangeText={(text) => this.setState({login})}
                value={this.state.login}
                underlineColorAndroid='transparent'
            />
            </View>
        )
    }
}

const star = <Image style={{width: 16, height: 16,marginRight: 15}}  source={require('./img/star.png')} />

export default StackNavigator(
    {
    HomeScreen: {
      screen: Profile,
      headerBackTitle: 'Back'},
      screenMap: {
        screen: Profile
    }
},{navigationOptions: {
    headerTitle:'Profile',
    headerRight: star
}}
  );