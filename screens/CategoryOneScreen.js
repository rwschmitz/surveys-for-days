import React from 'react';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { NeutralTextStyles, PrimaryTextStyles, ViewStyles } from '../components/Styles';

class CategoryOneScreen extends React.Component {
  render() {

    const radioProps = [
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 3, value: 3 },
      { label: 4, value: 4 },
      { label: 5, value: 5 },
    ];


    return (
      <ViewStyles alignItems="center">

        <NeutralTextStyles>
          On a scale of 1 to 5, with 1 being the low and 5 being the high, how cool are you?
        </NeutralTextStyles>

        <RadioForm
          buttonColor='#9446ed'
          initial={ 0 }
          labelHorizontal={ true }
          onPress={ (value) => { this.setState({ value: value }) } }
          radio_props={ radioProps }
          selectedButtonColor='#9446ed'
        />

      </ViewStyles>
    );
  }
}

export default CategoryOneScreen;
