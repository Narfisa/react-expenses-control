import React from "react";
import {mount} from "enzyme";
import {NewBuyingForm} from "./NewBuyingForm";

describe("NewBuyingForm", () => {
    it("calls callback with right data", () => {
        const buying = {
            name: "Test",
            cost: "100.00"
        };
        const formHandler = jest.fn();
        const wrapper = mount(<NewBuyingForm formHandler={formHandler}/>);
        wrapper.find("input.buying-name").simulate("change", { target: { value: buying.name }});

        /* @see https://github.com/s-yadav/react-number-format/issues/269 */
        wrapper.find("input.buying-cost").simulate("change", { target: { value: buying.cost, focus: () => {}}});

        wrapper.find("button").simulate("click");
        buying.cost = Number(buying.cost) as any;
        expect(formHandler).toHaveBeenCalledWith(buying, undefined);
    });
    
    it("calls callback with right data and index", () => {
        const buying = {
            name: "Test",
            cost: "100.00"
        };
        const index = 1;
        const formHandler = jest.fn();
        const wrapper = mount(<NewBuyingForm formHandler={formHandler} index={index}/>);
        wrapper.find("input.buying-name").simulate("change", { target: { value: buying.name }});

        /* @see https://github.com/s-yadav/react-number-format/issues/269 */
        wrapper.find("input.buying-cost").simulate("change", { target: { value: buying.cost, focus: () => {}}});

        wrapper.find("button").simulate("click");
        buying.cost = Number(buying.cost) as any;
        expect(formHandler).toHaveBeenCalledWith(buying, index);
    });
});
