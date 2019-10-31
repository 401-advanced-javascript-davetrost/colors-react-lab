import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('Color Display component', () => {
  it('renders a box with black background color', () => {
    const wrapper = shallow(<ColorDisplay backgroundColor='black' />);
    expect(wrapper).toMatchSnapshot();
  });
});
