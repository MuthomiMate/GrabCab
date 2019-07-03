import React from 'react';
import Home from '../Home';
import { shallow } from 'enzyme';
describe("<Home />", ()=> {
    it("renders correctly", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot()
    });
})