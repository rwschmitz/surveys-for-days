import React from 'react';
import { View } from 'react-native';
// import firebase from 'react-native-firebase';
import CustomButton from '../components/CustomButton';
import { NeutralTextStyles, PrimaryTextStyles, ViewStyles } from '../components/Styles';

class LandingScreen extends React.Component {
  render() {

    const navigateToFAQ = () => {
      this.props.navigation.navigate('FAQ')
    }

    const navigateToCategoryOne = () => {
      this.props.navigation.navigate('CategoryOne')
    }

    // firebase.auth()
    // .signInAnonymously()
    // .then(credential => {
    //   if (credential) {
    //     console.log('default app user ->', credential.user.toJSON());
    //   }
    // });


    return (
      <ViewStyles alignItems="center">
        <View>
          <NeutralTextStyles>
            Hello!&nbsp;
            <NeutralTextStyles>We&apos;re glad&nbsp;</NeutralTextStyles>
            <PrimaryTextStyles>you&apos;re&nbsp;</PrimaryTextStyles>
            <NeutralTextStyles>here.</NeutralTextStyles>
          </NeutralTextStyles>

          <NeutralTextStyles>Ready to start?</NeutralTextStyles>
          <CustomButton navigateTo={ navigateToCategoryOne } copyContent="Begin here" priority="primary" />
          <CustomButton navigateTo={ navigateToFAQ } copyContent="FAQ" priority="secondary" />
        </View>

      </ViewStyles>
    );
  }
}

export default LandingScreen;
