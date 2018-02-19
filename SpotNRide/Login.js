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
            email: '',
            password: ''
        }
    }


    loginAction() {
        let that =this
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
          that.props.navigation.navigate('screenMap')  
        }).catch(error => {
            console.log(error.code)
            this.setState({
                error: error.code
            })
        })
        

    }

    render(){

        return (
            <View style={{flex: 1, flexDirection: 'column',marginLeft: 20,marginRight:20,marginTop: 200}} >
                 <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1,marginTop: 50}}
                onChangeText={(text) => this.setState({email})}
                value={this.state.email}
                underlineColorAndroid='transparent'
            />

                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1,marginTop: 10,marginBottom: 10}}
                onChangeText={(text) => this.setState({login})}
                value={this.state.login}
                underlineColorAndroid='transparent'
            />

            <Text style={{marginBottom:10,marginTop:10,color: 'red'}}> {this.state.error} </Text>
            
                <Button title="Login"
              //  style={{marginTop: 100}}
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
},{ headerMode: 'none' }
  );
