import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import TextInput from "./Form/TextInput";
import SubmitButton from "./Form/SubmitButton";

class App extends Component {
  onSubmit = (data) => console.log(data);

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.onSubmit}>
          <TextInput name="first_name" label="First Name" />
          <SubmitButton>
            <span>Submit form</span>
          </SubmitButton>
        </Form>
      </div>
    );
  }
}

export default App;
