import React from "react";
import FormContext from "./FormContext";

export default class TextInput extends React.Component {
  static contextType = FormContext;
  render() {
    const { name, label, type } = this.props;
    return (
      <div className="input-row">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          onChange={this.context.inputChange(name)}
          value={this.context.getInputValue(name)}
        />
      </div>
    );
  }
}

TextInput.defaultProps = {
  type: "text"
};
