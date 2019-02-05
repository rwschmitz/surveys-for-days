import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'react-native-firebase';
import LandingScreen from './screens/LandingScreen';
import FAQScreen from './screens/FAQScreen';
import CategoryOneScreen from './screens/CategoryOneScreen';

firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
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
