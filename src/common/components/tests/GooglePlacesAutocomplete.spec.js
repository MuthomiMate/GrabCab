import React from "react";
import { shallow } from "enzyme";
import GooglePlaces from "../GooglePlacesAutoComplete";

describe("<GooglePlaces />", () => {

    const testProps = {
        placeholder: "Where From ?",
        id: "from"
    }

    it("renders without crashing", () => {
        const wrapper = shallow(<GooglePlaces {...testProps}/>);
        expect(wrapper).toMatchSnapshot();
    })
})