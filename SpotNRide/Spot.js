import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch, Modal, Picker,TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import MapScreen from 'Map'
import { ButtonGroup } from 'react-native-elements';
import {StackNavigator} from 'react-navigation';
import {ScrollView, FlatList} from 'react-native'
import backImage from './img/arrow_back.jpg'


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

    component1 = () => <Image style={{width: 20, resizeMode:'contain'}} source={require('./img/community.png')} />
    component2 = () => <Image style={{width: 20, resizeMode:'contain'}} source={require('./img/photo.png')} />
    component3 = () => <Image style={{width: 20, resizeMode:'contain'}} source={require('./img/conversion.png')} />

    render(){
        const {params} = this.props.navigation.state
        const imageView = <Image style={{marginRight:10,marginTop:10, marginLeft:10, width: 140, height:140, zIndex: 20}}
         source={require('./img/imageSkatePark.png')} />

        const {selectedIndex} = this.state
        const buttons = [{element: this.component1},{element: this.component2},{element: this.component3}]
        return (
            <View style={{flex: 1, flexDirection: 'column' }} >

            <View style={{flex: 1, flexDirection: 'row',height:90,marginBottom:60, alignItems:'flex-start', marginLeft:20, marginRight:20 }}> 
            <Image style={{marginRight:10,marginTop:10, marginLeft:10, width: 100, height:100, zIndex: 20,alignSelf:'flex-start'}}
         source={require('./img/skatePark.png')} />
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between',marginTop: 20, marginLeft: 10}}> 
            <Text style={{fontWeight:'bold', fontSize:30}}>{params.spot}</Text>
            <Text style={{fontSize:14, marginTop:5}}>Description : </Text>
            <Text style={{fontSize:14, marginTop:25}}>Type </Text>
            <Text style={{fontSize:14, marginTop:10}}>Activités : </Text>
            <Text style={{fontSize:14, marginTop:10}}>Difficulté : </Text>
            <Text style={{fontSize:14, marginTop:10}}>Couvert : </Text>
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
    
                </View>

                <View style={{backgroundColor:'#f0f0f0', flex: 1}}>
                 <ScrollView contentContainerStyle={{ flexGrow: 1,alignItems:'center', justifyContent: 'space-around',flexDirection: 'row',
                 flexWrap: 'wrap'}} >
                 {imageView}
                 {imageView}
                 {imageView}
                 {imageView}
                 {imageView}
                 {imageView}
                 {imageView}
                 </ScrollView>

                </View>

            </View>
        )
    }
}

const star = <Image style={{width: 16, height: 16,marginRight: 15}}  source={require('./img/star.png')} />

export default StackNavigator({
    HomeScreen: { screen: Spot },
    ScreenMap: { screen: MapScreen },
}, {
    headerMode: 'none' 
   }
  );