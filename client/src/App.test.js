import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Header from "./components/Header";

let component;

beforeEach(() => {
    component = shallow(<App />);
});

test("it contains a Header component", () => {
    expect(component.find(Header)).toHaveLength(1);
});
