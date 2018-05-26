import React from 'react';

import Navigation from './src/Navigation';

import ReactNative from "react-native";
import * as firebase from 'firebase';


export default class App extends React.Component {

  constructor(props){
    super(props)
    // Initialize Firebase
    const firebaseConfig = {
};
firebase.initializeApp(firebaseConfig);
    this.state = {
    }
  }

  render(){
    return(
        <Navigation />
    )
  }
}


