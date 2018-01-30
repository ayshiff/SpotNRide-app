import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch, Modal, Picker } from 'react-native';
import { ButtonGroup, Overlay } from 'react-native-elements';
import { MapView, Location, Permissions, Constants } from 'expo';

export default class Map extends React.Component {
    static navigationOptions = {
        header: {
          visible: false,
        }
      }

  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude : null,
      errorMessage: null,
      selectedIndex: null,
      isVisible: false,
      switchValue: false,
      type: 'Skatepark',
      activite: 'Activités'
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
    const showModal = <View style={{
      paddingLeft: 20,
      paddingRight: 20,
      display: 'flex',
      flexDirection: 'column',
      marginRight: 30,
      marginLeft: 30,
      marginTop: 100,
      width: 300,
      position: 'absolute',
      zIndex:2147483647,
      backgroundColor:'#f0f0f0',
      height: 300}}>

      <Picker
        selectedValue={this.state.type}
        onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
        <Picker.Item label="Skatepark" value="Skatepark" />
        <Picker.Item label="Outdoor" value="Outdoor" />
        </Picker>

      {/*  <Picker
        selectedValue={this.state.activite}
        onValueChange={(itemValue, itemIndex) => this.setState({activite: itemValue})}>
        <Picker.Item label="Skateboard" value="Skateboard" />
        <Picker.Item label="Ride" value="Ride" />
        </Picker>*/}

      <Text >  Couvert           </Text>
      <Switch value={this.state.switchValue}
      onValueChange={(value) => this.setState({switchValue: value}) }
       style={{ marginTop: 10, height: 5, width: 20 }}
        onTintColor='#f44336'/>
      
      </View>
  
    const buttons = ['Spots', 'Riders',{element: this.componentSearch}]
    const {selectedIndex} = this.state
    console.log(this.state.isVisible)
    return (
      <View style={styles.container}>
     
      <MapView
        style={ styles.map }
        onPress={() => this.setState({isVisible: false})}
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
    {/*  <Modal 
      transparent={false}
      visible={this.state.isVisible}
     // style={styles.modal}
    //  animationType={'slide'}
      >*/}
     
     
     

      
  {/*  </Modal> */} 
  {this.state.isVisible ? showModal : null}
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
  modal:{
    marginRight: 30,
        marginLeft: 30,
        marginTop: 100,
        width: 300,
        height: 10
  }
});
