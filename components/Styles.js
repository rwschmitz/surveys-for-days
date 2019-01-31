import styled from 'styled-components';

// Colors
const primary = '#9446ed'
const neutralGrey = '#D9e2ec'
const neutralBlueGrey = '#102a43';

// Fonts
const primaryFont = 'Avenir';

// Views

export const ViewStyles = styled.View`
align-items: center;
background-color: ${neutralGrey};
flex: 1;
justify-content: center;
`;

// Texts

export const NeutralTextStyles = styled.Text`
font-family: ${primaryFont};
font-size: 24px;
color: ${neutralBlueGrey};
`;

export const PrimaryTextStyles = styled.Text`
font-family: ${primaryFont};
font-size: 24px;
color: ${primary};
`;
