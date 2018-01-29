import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { MapView, Location, Permissions, Constants } from 'expo';

export default class App extends React.Component {

state = {
  latitude: null,
  longitude : null,
  errorMessage: null,
  text: 'Rechercher'
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

  render() {
    console.log(this.state.latitude)
    return (
      <View style={styles.container}>
     
      <MapView
        style={ styles.map }
        initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
       <TextInput
      style={styles.search}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
      />
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
    zIndex: 1
  },
  container:{
    flex: 1
  },
  search:{
    height: 40,
    borderWidth: 1,
    zIndex:2147483647,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 60
  }
});
