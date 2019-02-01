import styled from 'styled-components';

// Colors
const primary = '#9446ed'
const neutralGrey = '#d9e2ec'
const neutralBlueGrey = '#102a43';
const neutralWhite = '#f0f4f8';
const white = '#fff';

// Fonts
const primaryFont = 'Avenir';
const paragraphTextSize = 20;
const buttonTextSize = 20;

// Views
export const ViewStyles = styled.View`
align-items: ${props => props.alignItems};
background-color: ${neutralGrey};
flex: 1;
justify-content: center;
padding-left: 16px;
padding-right: 16px;
`;

// Texts
export const NeutralTextStyles = styled.Text`
color: ${neutralBlueGrey};
font-family: ${primaryFont};
font-size: ${paragraphTextSize}px;
padding-bottom: 16px;
`;

export const PrimaryTextStyles = styled.Text`
color: ${primary};
font-family: ${primaryFont};
font-size: ${paragraphTextSize}px;
`;

export const ButtonTextStyles = styled.Text`
font-family: ${primaryFont};
font-size: ${buttonTextSize}px;
color: ${props => props.selectedColor};
`;

// Components
export const CustomButtonStyles = styled.TouchableOpacity`
background-color: ${props => props.selectedBackgroundColor};
border-radius: 8px;
padding-bottom: 8px;
padding-left: 16px;
padding-right: 16px;
padding-top: 8px;
`;
