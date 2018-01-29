import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MapView, Location, Permissions, Constants } from 'expo';

export default class App extends React.Component {

state = {
  latitude: null,
  longitude : null,
  errorMessage: null,
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
      
  };

  render() {
    console.log(this.state.latitude)
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
