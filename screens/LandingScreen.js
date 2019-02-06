import React from 'react';
import { View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { NeutralTextStyles, PrimaryTextStyles, ViewStyles } from '../components/Styles';

class LandingScreen extends React.Component {
  render() {

    const { screenProps: { addName, addUserByEmail, addUserEmail, currentUserDisplayName, currentUserEmail, fetchUserData, logout }, navigation: { navigate } } = this.props;

    const navigateToFAQ = () => {
      navigate('FAQ')
    }

    const navigateToCategoryOne = () => {
      navigate('CategoryOne')
    }

    return (
      <ViewStyles alignItems="center">
        <View>
          <NeutralTextStyles>
            {/* {`Hello ${currentUserDisplayName.charAt(0).toUpperCase()}${currentUserDisplayName.substr(1)}! `} */}
            {`Hello ${currentUserEmail}! `}
            <NeutralTextStyles>We&apos;re glad&nbsp;</NeutralTextStyles>
            <PrimaryTextStyles>you&apos;re&nbsp;</PrimaryTextStyles>
            <NeutralTextStyles>here.</NeutralTextStyles>
          </NeutralTextStyles>

          <NeutralTextStyles>Ready to start?</NeutralTextStyles>
          <CustomButton buttonFunction={ navigateToCategoryOne } copyContent="Begin here" priority="primary" />
          <CustomButton buttonFunction={ navigateToFAQ } copyContent="FAQ" priority="secondary" />
          <CustomButton buttonFunction={ logout } copyContent="Sign out" priority="secondary" />
          <CustomButton buttonFunction={ fetchUserData } copyContent="Fetch user data" priority="secondary" />
        </View>

      </ViewStyles>
    );
  }
}

export default LandingScreen;
