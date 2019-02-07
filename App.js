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

  state = {
    createdDisplayName: '',
    user: null,
    email: '',
    pw: '',
    accountEmail: '',
    accountPw: ''
  }

  componentDidMount() {
    this.firestoreUsers = firebase.firestore().collection('users');
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

  createAccountAndSetupUser = (email, pw, createdDisplayName) => {
    firebase.auth().createUserWithEmailAndPassword(email, pw).then((userCredentials) => {
      if(userCredentials.user) {
        userCredentials.user.updateProfile({
          displayName: createdDisplayName
        })
      }
    })
    this.firestoreUsers.doc(email).set();
  }

  fetchUserData = () => {
    // console.log(firebase.auth().currentUser);
    // const link = new firebase.links.DynamicLink('https://surveysfordays.page.link/apple-app-site-association', 'surveysfordays.page.link').ios.setBundleId('com.rudolphschmitz.surveysfordays');
    const link = new firebase.links.DynamicLink('https://pnmg.com', 'surveysfordays.page.link').ios.setBundleId('com.rudolphschmitz.surveysfordays');

    firebase.links()
    .createShortDynamicLink(link, 'SHORT')
    .then((url) => {
      console.log(url);
    });
    const docRef = this.firestoreUsers.doc(firebase.auth().currentUser._user.email);
    docRef.get().then((doc) => {
      if(doc.exists) {
        // console.log('Document data:', doc.data());
      } else {
        // console.log('No such document');
      }
    }).catch((error) => {
      // console.log('Error retriving document:', error);
    });
  }

  // createInvitation = () => {
  //
  // }

  render() {
    const { accountEmail, accountPw, createdDisplayName, email, pw, user } = this.state;

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
          <View>
            <Text>create dipslay name:</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
              onChangeText={(createdDisplayName) => this.setState({createdDisplayName})}
              value={createdDisplayName}
            />
          </View>
          <Button
            title="create account"
            onPress={ () => this.createAccountAndSetupUser(email, pw, createdDisplayName) }
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
    const currentUser = firebase.auth().currentUser;
    return (
      <React.Fragment>
        <AppContainer
          screenProps={
            {
              addName: this.addName,
              addUserByEmail: this.addUserByEmail,
              addUserEmail: this.addUserEmail,
              currentUserDisplayName: currentUser.displayName,
              currentUserEmail: currentUser.email,
              fetchUserData: this.fetchUserData,
              logout: this.logout,
            }
          }
        />
      </React.Fragment>
    )
  }
}

export default App;
