import React from "react";
import { shallow } from "enzyme";
import GooglePlaces from "../GooglePlacesAutoComplete";
jest.mock("react-native-dotenv")

describe("<GooglePlaces />", () => {

    const testProps = {
        placeholder: "Where From ?",
        id: "from"
    }

    it("renders without crashing", () => {
        jest.mock("react-native-dotenv", () => {
            return {
                GOOGLE_PLACES_API_KEY : "some-key"
            }
          })
        const wrapper = shallow(<GooglePlaces {...testProps}/>);
        expect(wrapper).toMatchSnapshot();
    })
})