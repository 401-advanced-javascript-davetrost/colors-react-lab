import React from 'react';
import { shallow } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('Color Container component', () => {
  it('renders ColorDisplay and ColorPicker componentss', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
