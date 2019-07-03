import React from "react";
import { shallow } from "enzyme";
import ToolBar from "../ToolBar";

describe("<ToolBar />", () => {
    const testProps = {
        iconName:"menu",
        iconSize:25,
        iconType:"entypo",
        iconColor:"#FFFFFF",
        text:"DashBoard",
        textColor:"#FFFFFF"
    }

    it("renders without crashing", () => {
        const wrapper = shallow(<ToolBar {...testProps}/>);
        expect(wrapper).toMatchSnapshot();
    })
})