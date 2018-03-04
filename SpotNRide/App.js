import React from 'react';
import Login from './Login.js'

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
      <Login />
    )
  }
}


