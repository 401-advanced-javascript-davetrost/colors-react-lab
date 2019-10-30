import React, { Component } from 'react';
import colors from '../../data/commonColorNames';
import ColorCircle from './ColorCircle';

export default class RandomColor extends Component {

  state = {
    backgroundColor: 'black',
    backgroundImage: ''
  };

  updateColor = color => {
    if(color === this.state.backgroundColor) {
      this.setState({
        backgroundColor: 'transparent',
        backgroundImage: 'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)' 
      });
    } else {
      this.setState({
        backgroundColor: color,
        backgroundImage: '' 
      });
    }
  }

  componentDidMount() {
    setInterval(
      () => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        this.updateColor(color);
      },
      1000
    );
  }

  render() {
    return (
      <ColorCircle
        backgroundColor={this.state.backgroundColor}
        backgroundImage={this.state.backgroundImage} 
      />
    );
  }
}
