import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-dom/test-utils";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "../Form";
import TextInput from "../TextInput";

beforeAll(() => configure({ adapter: new Adapter() }));

it("calls onSubmit prop function when form is submitted", () => {
  const onSubmitFn = jest.fn();
  const wrapper = mount(<Form onSubmit={onSubmitFn} />);
  const form = wrapper.find("form");
  form.simulate("submit");
  expect(onSubmitFn).toHaveBeenCalledTimes(1);
});

it("gets the form state from onSubmit function", () => {
  const wrapper = document.createElement("div");
  const onSubmitFn = jest.fn((data) => {
    return data;
  });
  ReactDOM.render(
    <Form onSubmit={onSubmitFn}>
      <TextInput name="first_name" label="First Name" />;
    </Form>,
    wrapper
  );
  const input = wrapper.querySelector("input");
  const form = wrapper.querySelector("form");
  TestUtils.Simulate.change(input, { target: { value: "Peter Parker" } });
  TestUtils.Simulate.submit(form);
  expect(onSubmitFn).toHaveBeenCalledTimes(1);
  expect(onSubmitFn.mock.results[0].value).toEqual({ first_name: "Peter Parker" });
});
