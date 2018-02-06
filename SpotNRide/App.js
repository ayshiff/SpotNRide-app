import React from 'react';
import Login from './Login.js'

import ReactNative from "react-native";
import * as firebase from 'firebase';


export default class App extends React.Component {

  constructor(props){
    super(props)
    // Initialize Firebase
    const firebaseConfig = {
    apiKey: "AIzaSyBGeho9fqv7ZR5Wfkxx_9p4fHnIMGHk_wU",
    authDomain: "spotnride-74ea5.firebaseapp.com",
    databaseURL: "https://spotnride-74ea5.firebaseio.com",
    projectId: "spotnride-74ea5",
    storageBucket: "spotnride-74ea5.appspot.com",
    messagingSenderId: "1032015059409"
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


