import React from "react";
import { shallow } from "enzyme";
import NavigationMenu from "../NavigationMenu";

describe("<NavigationMenu />", () => {

    it("renders without crashing", () => {
        const wrapper = shallow(<NavigationMenu/>);
        expect(wrapper).toMatchSnapshot();
    })
})