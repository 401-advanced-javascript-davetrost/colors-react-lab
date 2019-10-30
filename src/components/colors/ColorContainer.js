import React, { Component } from 'react';
import ColorDisplay from './ColorDisplay';
import ColorPicker from './ColorPicker';

export default class ColorContainer extends Component {
  state = {
    backgroundColor: 'black'
  };

  selectColor = backgroundColor => {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor } = this.state;
    const colors = ['red', 'green', 'black', 'yellow'];

    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
        <ColorPicker
          selectColor={this.selectColor}
          colors={colors} />
      </>
    );
  }
}
