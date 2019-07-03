import React from 'react';
import Home from '../Home';
import { shallow } from 'enzyme';
describe("<Home />", ()=> {

    it("renders correctly", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot()
    });

    it("changes state after 5 seconds", (done) => {
        const wrapper = shallow(<Home />);
        setTimeout(()=> {
            expect(wrapper.state().showNextPage).toBe(true)
            done();
          }, 5000)
    })
})