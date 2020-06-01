import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "../ErrorBoundary";

describe("ErrorBoundary", () => {
  let component;
  beforeEach(() => {
    component = shallow(<ErrorBoundary><div /></ErrorBoundary>);
  });

  it("should set state hasError: true", () => {
    component.instance().componentDidCatch();

    expect(component.state().hasError).toBeTruthy();
  });

  it("should render error when error: true", () => {
    component.instance().componentDidCatch();

    expect(component.find("div").text()).toBe("Произошла ошибка :(");
  });
});
