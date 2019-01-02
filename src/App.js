import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
                <LoginForm />
            </View>
        );
    }
}

export default App;
