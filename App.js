import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
// import * as firebase from 'firebase';
import firebase from 'react-native-firebase';
import LandingScreen from './screens/LandingScreen';
import FAQScreen from './screens/FAQScreen';
import CategoryOneScreen from './screens/CategoryOneScreen';

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCUVmQo3dSeyr49mR1owbnFq7yMxFKJ9rw",
//   authDomain: "surveys-for-days.firebaseapp.com",
//   databaseURL: "https://surveys-for-days.firebaseio.com",
//   storageBucket: "surveys-for-days.appspot.com"
// };

// firebase.initializeApp(firebaseConfig);

firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
      console.log('------------');
      console.log('------------');
      console.log('------------');
      console.log('------------');
      console.log('word?');
      console.log('------------');
      console.log('------------');
      console.log('------------');
      console.log('------------');
    }
  });

const AppNavigator = createStackNavigator(
{
  Home: LandingScreen,
  FAQ: FAQScreen,
  CategoryOne: CategoryOneScreen,
},
{
  initialRouteName: 'Home',
}

);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

export default App;
