import React from "react";
import {mount, shallow} from "enzyme";
import { Buying } from "./Buying";

describe("Render works", () => {
    const buying = {
        name: "Test",
        cost: 100.00
    };
    const formHandler = jest.fn();
    const deleteHandler = jest.fn();

    const wrapper = mount(<Buying deleteHandler={deleteHandler} formHandler={formHandler} buying={buying} index={0}/>);

    it("render an element", () => {
        const buying = {
            name: "Test",
            cost: 100.00
        };
        expect(wrapper.childAt(0).text()).toMatch(buying.name);
        expect(wrapper.childAt(0).text()).toMatch(`${buying.cost} р.`);
    });

    it("edit will show dialog", () => {
        wrapper.find("button.delete").simulate("click");
    })
});
