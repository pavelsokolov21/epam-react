import React from "react";
import { shallow } from "enzyme";
import { ErrorBoundary } from "../ErrorBoundary";

describe("ErrorBoundary", () => {
  // let component ? ***how get type for this var***
  // beforeEach(() => {
  //   component = shallow<ErrorBoundary>(<ErrorBoundary><div /></ErrorBoundary>);
  // });

  it("should set state hasError: true", () => {
    const component = shallow<ErrorBoundary>(<ErrorBoundary><div /></ErrorBoundary>);
    component.instance().componentDidCatch();

    expect(component.state().hasError).toBeTruthy();
  });

  it("should render error when error: true", () => {
    const component = shallow<ErrorBoundary>(<ErrorBoundary><div /></ErrorBoundary>);
    component.instance().componentDidCatch();

    expect(component.find("div").text()).toBe("Произошла ошибка :(");
  });
});
