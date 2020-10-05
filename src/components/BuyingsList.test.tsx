import React from "react";
import {mount} from "enzyme";
import {BuyingsList} from "./BuyingsList";

describe("Render works (one elem)", () => {
    const buyings = [{
        name: "Test",
        cost: 100.00
    }];
    const formHandler = jest.fn();
    const deleteHandler = jest.fn();

    const wrapper = mount(<BuyingsList />);

    it("render an element", () => {
        let elem = wrapper.childAt(0)
        expect(elem.text()).toMatch(buyings[0].name);
        expect(elem.text()).toMatch(`${buyings[0].cost} р.`);
    });

    it("edit will show dialog", () => {
        wrapper.find("button.edit").simulate("click");
        expect(wrapper.find("div.MuiDialog-root").exists())
    })
});

describe("Render works (a few elem)", () => {
    const formHandler = jest.fn();
    const deleteHandler = jest.fn();

    const fewBuyings = [
        {
            name: "Test1",
            cost: 120.00
        },
        {
            name: "Test2",
            cost: 1000.00
        },
        {
            name: "Test3",
            cost: 1060.00
        }
    ];

    it("render a few elements", () => {
        const wrapper = mount(<BuyingsList />);
    
        let elem1 = wrapper.childAt(0)
        let elem2 = wrapper.childAt(1)
        let elem3 = wrapper.childAt(2)
        expect(elem1.text()).toMatch(fewBuyings[0].name);
        expect(elem1.text()).toMatch(`${fewBuyings[0].cost} р.`);
        expect(elem2.text()).toMatch(fewBuyings[1].name);
        expect(elem2.text()).toMatch(`${fewBuyings[1].cost} р.`);
        expect(elem3.text()).toMatch(fewBuyings[2].name);
        expect(elem3.text()).toMatch(`${fewBuyings[2].cost} р.`);
    });
});