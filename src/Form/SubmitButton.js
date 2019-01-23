import React from "react";
import FormContext from "./FormContext";
export default class SubmitButton extends React.Component {
  static contextType = FormContext;
  render() {
    return (
      <button type="submit" disabled={this.context.isSubmitting}>
        {this.props.children}
      </button>
    );
  }
}
