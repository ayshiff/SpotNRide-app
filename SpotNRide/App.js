import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch/*, Modal*/ } from 'react-native';
import { ButtonGroup, Overlay } from 'react-native-elements';
import { MapView, Location, Permissions, Constants } from 'expo';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude : null,
      errorMessage: null,
      selectedIndex: 1,
      isVisible: false,
      switchValue: false
      }
    this.updateIndex = this.updateIndex.bind(this)
  }


  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    this.setState({
      isVisible: true
    })
  }

  componentWillMount() {
      this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
       latitude: location.coords.latitude,
       longitude: location.coords.longitude,
      });
      this.forceUpdate()
  };

  componentSearch = () => <Image style={{width: 18, height:18}} source={require('./img/search.png')} />

  render() {
    const buttons = ['Spots', 'Riders',{element: this.componentSearch}]
    const {selectedIndex} = this.state
    return (
      <View style={styles.container}>
     
      <MapView
        style={ styles.map }
        initialRegion={{
          latitude: 48.866667, //this.state.latitude,
          longitude: 2.333333, //this.state.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex= {selectedIndex}
          buttons={buttons}
          containerStyle={styles.buttons}
          selectedTextStyle={{color: '#f44336'}}
          textStyle={{fontSize: 13}}
      />
  {/*    <Modal 
      transparent={true}
      visible={this.state.isVisible}
      animationType={'slide'}
      >*/}
      <View style={{
            backgroundColor:'#f0f0f0',
            width: 50,
            height: 50}}>
      
    </View>

      <Switch value={this.state.switchValue}
      onValueChange={(value) => this.setState({switchValue: value}) }
       style={{position:'absolute', zIndex:2147483647, marginTop: 200 }}
        onTintColor='#f44336'/>
 {/*   </Modal> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    flex: 1
  },
  container:{
    flex: 1
  },
  buttons:{
    height: 40,
    borderWidth: 0.5,
    zIndex:2147483647,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 60,
    backgroundColor:'#fafafa',
    position: 'absolute',
    width: 300
  },
});
