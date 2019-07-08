import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../searchBar";

describe("<SearchBar />", () => {

    it("renders without crashing", () => {
        jest.mock('react-native-dotenv', () => {
            return {
                GOOGLE_PLACES_API_KEY : "some-key"
            }
          })
        const wrapper = shallow(<SearchBar/>);
        expect(wrapper).toMatchSnapshot();
    })
})