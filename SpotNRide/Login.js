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

        }
    }

    render(){

        return (
            <View >
                <Text> Login Router </Text>
                <Button title="Learn More"
                style={{marginTop: 600, marginLeft: 50}}
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
