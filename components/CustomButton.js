import React from 'react';
import PropTypes from 'prop-types';
import { ButtonTextStyles, CustomButtonStyles } from './Styles';

class CustomButton extends React.Component {
  render() {
    const { copyContent, priority } = this.props;
    let selectedBackgroundColor;
    let selectedColor;

    const colors = {
      primary: {
        backgroundColor: '#9446ed',
        color: '#fff'
      },
      secondary: {
        backgroundColor: '#bcccdc',
        color: '#102a43'
      }
    }

    switch (priority) {
      case "primary":
        selectedBackgroundColor = colors.primary.backgroundColor;
        selectedColor = colors.primary.color;
        break;

      case "secondary":
        selectedBackgroundColor = colors.secondary.backgroundColor;
        selectedColor = colors.secondary.color;
        break;

      default:
        selectedBackgroundColor = '#000'
        selectedColor = '#fff';
        break;
    }
    return (
      <CustomButtonStyles onPress={ () => this.props.navigateTo() } selectedBackgroundColor={ selectedBackgroundColor }>
        <ButtonTextStyles selectedColor={ selectedColor }>
          { copyContent }
        </ButtonTextStyles>
      </CustomButtonStyles>
    );
  }
}

export default CustomButton;

CustomButton.propTypes = {
  copyContent: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired
}
