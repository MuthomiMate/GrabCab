import React from 'react';
import CabOptions from '../cabOptions';
import { shallow } from 'enzyme';

describe("<CabOptions />", () => {
    it('renders correctly', () => {
        const wrapper = shallow(<CabOptions />);
        expect(wrapper).toMatchSnapshot()
    });
})