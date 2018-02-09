import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch, Modal, Picker,TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import Mapv from './Map.js'
import {StackNavigator} from 'react-navigation';
import { ButtonGroup } from 'react-native-elements';


import iconStarProfile from './img/starProfile.png'
import iconSettings from './img/settings.png'
import iconEmail from './img/email.png'

import iconSkatePark from './img/skatePark.png'

class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {
            login: '',
            password: '',
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({
            selectedIndex
        })
    }

    component1 = () => <Image style={{width: 16, resizeMode: 'contain'}} source={iconStarProfile} />
    component2 = () => <Image style={{width: 16, resizeMode: 'contain'}} source={iconSettings} />
    component3 = () => <Image style={{width: 16, resizeMode: 'contain'}} source={iconEmail} />

    render(){

        const cardView = () => <View style = {{
            marginTop: 14,marginLeft: 10,marginRight: 10,flex: 1, flexDirection: 'row',
            justifyContent: 'space-around', backgroundColor:'#fafafa'}}>
            
        <Image style={{width:70, height: 'auto'}} source={iconSkatePark} />
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}> 
            <Text style={{fontSize:20, fontWeight:'bold'}}> Cosanostra </Text>
            <Text style={{fontSize:14}}> Meilleur skatepark d'Olréans</Text>
            <Text style={{fontSize: 10}}> 24 rue des Tours, 45000 Orléans</Text>
            </View>
        </View>

        const {selectedIndex} = this.state
        const buttons = [{element: this.component1},{element: this.component2},{element: this.component3}]
        
        return (
            <View style={{marginTop: 200}} >

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around',marginLeft: 20, marginRight: 20}}> 
            <Image style={{}} />
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}> 
            <Text style={{fontSize:20, fontWeight:'bold'}}> Thomas Tuillier</Text>
            <Text style={{fontSize:14}}> Skatteur professionnel </Text>
            <Text style={{}}></Text>
            </View>
            </View>

                <View>
                <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex= {selectedIndex}
                buttons={buttons}
                containerStyle={{borderWidth: 0,height: 45, width: '100%', marginLeft: 0, marginRight: 0 }}
                selectedTextStyle={{color: '#f44336'}}
                textStyle={{fontSize: 13}}
      />               
                </View >
                <View style={{backgroundColor:'#f0f0f0'}}>

                </View>
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