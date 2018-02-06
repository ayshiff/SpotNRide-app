import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch, Modal, Picker,TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import Mapv from './Map.js'
import {StackNavigator} from 'react-navigation';


class Spot extends Component {

    constructor(props){
        super(props)
        this.state = {
            login: '',
            password: '',
            selectedIndex: 1
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({
            selectedIndex
        })
    }

    component1 = () => <Image style={{width: 16, height:18.5}} source={require('./img/community.png')} />
    component2 = () => <Image style={{width: 16, height:18.5}} source={require('./img/photo.png')} />
    component3 = () => <Image style={{width: 16, height:18.5}} source={require('./img/conversion.png')} />

    render(){

        const imageView = () => <Image style={{marginRight:10,marginTop:10, marginLeft:10, width: 200}}
         source={require('./img/imageSkatePark.png')} />

        const {selectedIndex} = this.state
        const buttons = [{element: this.component1},{element: this.component2},{element: this.component3}]
        return (
            <View style={{flex: 1, flexDirection: 'column',marginLeft: 20,marginRight:20,marginTop: 200}} >

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}> 
            <Image style={{}} source={require()} />
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}> 
            <Text style={{}}></Text>
            <Text style={{}}></Text>
            <Text style={{}}></Text>
            </View>
            </View>

                <View>
                <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex= {selectedIndex}
                buttons={buttons}
                containerStyle={{borderWidth: 0,height: 45}}
                selectedTextStyle={{color: '#f44336'}}
                textStyle={{fontSize: 13}}
      />               
    
                </View>

                <View style={{backgroundColor:'#f0f0f0', flex: 1, flexDirection: 'row',
                 flexWrap: 'wrap', alignItems:'center', justifyContent: 'space-around'}}>
                 <imageView />
                 <imageView />
                 <imageView />
                 <imageView />

                </View>

            </View>
        )
    }
}

const star = <Image style={{width: 16, height: 16,marginRight: 15}}  source={require('./img/star.png')} />

export default StackNavigator(
    {
    HomeScreen: {
      screen: Spot,
      headerBackTitle: 'Back'},
      screenMap: {
        screen: Mapv
    }
},{navigationOptions: {
    headerTitle:'Spot',
    headerRight: star
}}
  );