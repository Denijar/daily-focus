import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import App from "./App";
import Header from "./components/Header";

let component;

beforeEach(() => {
    component = shallow(<App />);
});

test("it renders correctly", () => {
    const renderer = new ShallowRenderer();
    const component = renderer.render(<Header />);
    expect(component).toMatchSnapshot();
});

test("it contains a Header component", () => {
    expect(component.find(Header)).toHaveLength(1);
});
