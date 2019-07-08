import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";

describe("<Login />", () => {
    const tesProps = {
        style: {}
    }

    it("renders successfully", () => {
        const wrapper = shallow(<Login {...tesProps}/>)
        expect(wrapper).toMatchSnapshot()
    });
})