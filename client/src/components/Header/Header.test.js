import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import Header from ".";

test("it renders correctly", () => {
    const renderer = new ShallowRenderer();
    const component = renderer.render(<Header />);
    expect(component).toMatchSnapshot();
});
