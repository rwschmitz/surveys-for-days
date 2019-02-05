import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'react-native-firebase';
import LandingScreen from './screens/LandingScreen';
import FAQScreen from './screens/FAQScreen';
import CategoryOneScreen from './screens/CategoryOneScreen';
import { ViewStyles } from './components/Styles';

const AppNavigator = createStackNavigator(
  {
    Home: LandingScreen,
    FAQ: FAQScreen,
    CategoryOne: CategoryOneScreen,
  },
  {
    initialRouteName: 'Home',
  });

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {

  // constructor() {
  //   super();
  //   this.unsubscriber = null;
  //   this.state = {
  //     user: null,
  //     email: '',
  //     pw: '',
  //     accountEmail: '',
  //     accountPw: ''
  //   };
  // }

  state = {
    user: null,
    email: '',
    pw: '',
    accountEmail: '',
    accountPw: ''
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  logout = () => {
    firebase.auth().signOut()
  }


  render() {
    const { accountEmail, accountPw, email, pw, user } = this.state;

    // If the user has not authenticated
    if (!user) {
      return (
        <ViewStyles alignItems="center">
          <View>
            <Text>create email:</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
              onChangeText={(email) => this.setState({email})}
              value={email}
            />
          </View>
          <View>
            <Text>create pw:</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
              onChangeText={(pw) => this.setState({pw})}
              value={pw}
            />
          </View>
          <Button
            title="create account"
            onPress={ () => firebase.auth().createUserWithEmailAndPassword(email, pw) }
          />
          <View>
            <Text>login email:</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
              onChangeText={(accountEmail) => this.setState({accountEmail})}
              value={accountEmail}
            />
          </View>
          <View>
            <Text>login pw:</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
              onChangeText={(accountPw) => this.setState({accountPw})}
              value={accountPw}
            />
          </View>
          <Button
            title="login"
            onPress={ () => firebase.auth().signInWithEmailAndPassword(accountEmail, accountPw) }
          />
        </ViewStyles>
      )
    }
    const currentUser = firebase.auth().currentUser._user;
    return (
      <React.Fragment>
        <AppContainer
          screenProps={
            {
              currentUserEmail: currentUser.email,
              logout: this.logout
            }
          }
        />
      </React.Fragment>
    )
  }
}

export default App;
