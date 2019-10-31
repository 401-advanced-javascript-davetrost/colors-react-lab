import React from 'react';
import { shallow } from 'enzyme';
import ColorCircle from './ColorCircle';

describe('Color Circle component', () => {
  it('renders a circle with black background color', () => {
    const wrapper = shallow(      
      <ColorCircle
        backgroundColor='black'
        backgroundImage=''
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders a circle with a background image', () => {
    const wrapper = shallow(      
      <ColorCircle
        backgroundColor='transparent'
        backgroundImage='url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)' 
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
