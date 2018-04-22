import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch, Modal, Picker } from 'react-native';
import { ButtonGroup, Overlay, Button } from 'react-native-elements';
import { MapView, Location, Permissions, Constants } from 'expo';
import Mapv from './Map.js'
import {StackNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import logoSpotNRide from './img/spotnride.png'


class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }


    loginAction() {
        let that =this/*
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
          that.props.navigation.navigate('screenMap')  
        }).catch(error => {
            console.log(error.code)
            this.setState({
                error: error.code
            })
        })*/
        that.props.navigation.navigate('screenMap') 

    }

    render(){

        return (
            <View style={{flex: 1, flexDirection: 'column', backgroundColor:'#fafafa', alignItems:'center', 
        justifyContent: 'space-between'}} >

                <View style={{flex: 1,flexDirection: 'row', marginTop:220}}>
                <Image source={logoSpotNRide} style={{width:30, height:43}}/>
                <Text style={{color: 'rgba(239, 83, 80, 100)',fontSize:30, marginLeft:5}}> SpotNRide </Text>
                </View>
                 <TextInput
                 placeholder={'Email'}
                style={{height: 40, borderColor: 'gray', borderWidth: 1,marginTop: 50,borderRadius:3,
             marginLeft:20,marginRight:20,width:300}}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                underlineColorAndroid='transparent'
            />

                <TextInput
                placeholder={'Password'}
                style={{height: 40, borderColor: 'gray', borderWidth: 1,marginTop: 10,marginBottom: 10,borderRadius:3,
            marginTop:10, marginLeft:20,marginRight:20,width:300}}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                secureTextEntry={true}
                underlineColorAndroid='transparent'
            />

            <Text style={{marginBottom:10,marginTop:10,color:'#f0f0f0'}}> {this.state.error} </Text>
            
                <Button title="Se connecter"
                style={{width:200, marginBottom: 280}}
                backgroundColor= 'rgba(239, 83, 80, 100)'
                buttonStyle={{borderRadius: 6}}
                    onPress={this.loginAction.bind(this)}
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
},{
     headerMode: 'none' 
    }
  );
