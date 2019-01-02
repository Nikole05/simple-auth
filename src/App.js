import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyDeCegA4JREJSlW-APNOym0on6ZE7HvBvo",
                authDomain: "auth-simple.firebaseapp.com",
                databaseURL: "https://auth-simple.firebaseio.com",
                projectId: "auth-simple",
                storageBucket: "auth-simple.appspot.com",
                messagingSenderId: "139302578518"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An app!</Text>
            </View>
        );
    }
}

export default App;
