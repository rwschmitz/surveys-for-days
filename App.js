import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import LandingScreen from './screens/LandingScreen';
import FAQScreen from './screens/FAQScreen';
import CategoryOneScreen from './screens/CategoryOneScreen';

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
