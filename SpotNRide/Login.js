import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch, Modal, Picker } from 'react-native';
import { ButtonGroup, Overlay, Button } from 'react-native-elements';
import { MapView, Location, Permissions, Constants } from 'expo';
import Mapv from './Map.js'
import {StackNavigator} from 'react-navigation';



class Login extends Component {

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
                <Button title="Login"
              //  style={{marginTop: 100}}
                    onPress={()=> this.props.navigation.navigate('screenMap')}
                    />
            </View>
        )
    }
}

export default StackNavigator(
    {
    HomeScreen: {
      screen: Login},
      screenMap: {
        screen: Mapv,
    }
},{ headerMode: 'none' }
  );
