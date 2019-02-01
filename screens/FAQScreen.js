import React from 'react';
import { NeutralTextStyles, PrimaryTextStyles, ViewStyles } from '../components/Styles';

class FAQScreen extends React.Component {
  render() {
    return (
      <ViewStyles alignItems="flex-start">
        <PrimaryTextStyles>Q: What is the purpose of this app?</PrimaryTextStyles>
        <NeutralTextStyles>A: Demonstrate React Native proficiency.</NeutralTextStyles>

        <PrimaryTextStyles>Q: How&apos;s that going for you?</PrimaryTextStyles>
        <NeutralTextStyles>A: Great.</NeutralTextStyles>

        <PrimaryTextStyles>Q: What&apos;s up?</PrimaryTextStyles>
        <NeutralTextStyles>A: The sky.</NeutralTextStyles>
      </ViewStyles>
    );
  }
}

export default FAQScreen;
