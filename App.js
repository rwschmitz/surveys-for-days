import React from 'react';
import { TouchableOpacity } from 'react-native';
import { PrimaryTextStyles, NeutralTextStyles, ViewStyles } from './components/Styles';

class App extends React.Component {
  render() {
    return (
      <ViewStyles>
        <NeutralTextStyles>
          Hello!&nbsp;
          <NeutralTextStyles>We&apos;re glad&nbsp;</NeutralTextStyles>
          <PrimaryTextStyles>you&apos;re&nbsp;</PrimaryTextStyles>
          <NeutralTextStyles>here.</NeutralTextStyles>
        </NeutralTextStyles>
        <NeutralTextStyles>Ready to start?</NeutralTextStyles>
        <TouchableOpacity style={ { backgroundColor: '#9446ed' } }>
          <PrimaryTextStyles>Begin here</PrimaryTextStyles>
        </TouchableOpacity>
      </ViewStyles>
    );
  }
}

export default App;
