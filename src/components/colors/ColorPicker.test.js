import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('Color Picker component', () => {
  const colors = ['red', 'green', 'yellow'];

  it('renders buttons labelled red, green and yellow', () => {
    const wrapper = shallow(
      <ColorPicker
        selectColor={() => null}
        colors={colors} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('captures a click on the green color button', () => {
    let testColor;
    const wrapper = shallow(
      <ColorPicker
        selectColor={(color) => testColor = color}
        colors={colors} />
    );
    wrapper.findWhere(el => el.key() === 'green').simulate('click');
    expect(testColor).toBe('green');
  });
});
