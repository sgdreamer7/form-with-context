import { createContext } from "react";

export default createContext({
  getInputValue: (name, defaultValue = "") => "",
  inputChange: (name) => (e) => {},
  isSubmitting: false
});
