import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDtrBXFwLWx-hVClCCQsomXp472hUyxHvk",
      authDomain: "one-time-password-6f767.firebaseapp.com",
      databaseURL: "https://one-time-password-6f767.firebaseio.com",
      projectId: "one-time-password-6f767",
      storageBucket: "one-time-password-6f767.appspot.com",
      messagingSenderId: "604590465997"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
