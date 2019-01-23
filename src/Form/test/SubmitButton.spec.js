import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";
import SubmitButton from "../SubmitButton";
import Form from "../Form";

beforeAll(() => configure({ adapter: new Adapter() }));

it("renders submit button with custom text", () => {
  const wrapper = mount(<SubmitButton>Click here</SubmitButton>);
  const button = wrapper.find("button");
  expect(button).toHaveLength(1);
  expect(button.prop("type")).toEqual("submit");
  expect(button.text()).toEqual("Click here");
});

it("disables the submit button during submission and enables it when done", async () => {
  const onSubmitFn = jest.fn(async () => {
    await new Promise((resolve) => resolve());
  });
  const wrapper = document.createElement("div");
  ReactDOM.render(
    <Form onSubmit={onSubmitFn}>
      <SubmitButton>Click here</SubmitButton>
    </Form>,
    wrapper
  );
  const button = wrapper.querySelector("button");
  const form = wrapper.querySelector("form");
  TestUtils.Simulate.submit(form);
  expect(button.disabled).toBeTruthy();
  // This line makes sure the submit function is finished before executing next instructions
  await onSubmitFn.mock.results[0].value;
  expect(button.disabled).toBeFalsy();
});
