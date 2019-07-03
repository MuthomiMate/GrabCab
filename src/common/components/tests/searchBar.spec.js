import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../searchBar";

describe("<SearchBar />", () => {

    it("renders without crashing", () => {
        const wrapper = shallow(<SearchBar/>);
        expect(wrapper).toMatchSnapshot();
    })
})