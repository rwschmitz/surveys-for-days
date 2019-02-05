import React from 'react';
// import * as firebase from 'firebase';
import RadioForm from 'react-native-simple-radio-button';
import CustomButton from '../components/CustomButton';
import { NeutralTextStyles, ViewStyles } from '../components/Styles';

class CategoryOneScreen extends React.Component {

  state = {
    answer1: 0,
    answer2: 0
  }

  render() {
    const { answer1, answer2 } = this.state;

    const radioProps = [
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 3, value: 3 },
      { label: 4, value: 4 },
      { label: 5, value: 5 },
    ];

    // const storeAnswerToQ1 = (userSelectedAnswer) => {
    //   firebase.database().ref(`Question 1/`).set({
    //     userSelectedAnswer
    //   });
    // }

    // const storeAnswerToQ2 = (userSelectedAnswer) => {
    //   firebase.database().ref(`Question 2/`).set({
    //     userSelectedAnswer
    //   });
    // }

    return (
      <ViewStyles alignItems="center">
        <NeutralTextStyles>
          On a scale of 1 to 5, with 1 being the low and 5 being the high, how cool are you?
        </NeutralTextStyles>

        <RadioForm
          buttonColor='#bcccdc'
          initial={ 0 }
          labelHorizontal={ true }
          onPress={ (value) => { this.setState({ answer1: value }) } }
          radio_props={ radioProps }
          selectedButtonColor='#9446ed'
        />

        {/* <CustomButton buttonFunction={ () => storeAnswerToQ1(answer1) } copyContent="Submit" priority="primary" /> */}

        {/* Question spacer */}

        <NeutralTextStyles>
          On a scale of 1 to 5, with 1 being the low and 5 being the high, how neat are you?
        </NeutralTextStyles>

        <RadioForm
          buttonColor='#bcccdc'
          initial={ 0 }
          labelHorizontal={ true }
          onPress={ (value) => { this.setState({ answer2: value }) } }
          radio_props={ radioProps }
          selectedButtonColor='#9446ed'
        />

        {/* <CustomButton buttonFunction={ () => storeAnswerToQ2(answer2) } copyContent="Submit" priority="primary" /> */}
      </ViewStyles>
    );
  }
}

export default CategoryOneScreen;
