import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ColorCircle extends Component {

  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
  };
  
  static defaultProps = {
    backgroundColor: 'black',
    backgroundImage: ''
  };

  render() {
    const style = {
      width: '50vw',
      height: '50vh',
      border: 0,
      margin: 'auto',
      borderRadius: '100%',
      backgroundSize: 'contain',
    };

    return (
      <div style={{ ...style, backgroundColor: this.props.backgroundColor, backgroundImage: this.props.backgroundImage }}></div>
    );
  }

}
