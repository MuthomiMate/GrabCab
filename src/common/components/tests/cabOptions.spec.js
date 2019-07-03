import React from 'react';
import CabOptions from '../cabOptions';
import { shallow } from 'enzyme';

test('renders correctly', () => {
    const wrapper = shallow(<CabOptions />);
    expect(wrapper).toMatchSnapshot()
});