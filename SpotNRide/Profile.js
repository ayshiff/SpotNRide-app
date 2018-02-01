import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch, Modal, Picker,TouchableOpacity, Button, TouchableHighlight } from 'react-native';
export default class Login extends Component {

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