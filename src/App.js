import "./styles.css";
import { useState } from "react";

//rewrite NameForm example from https://reactjs.org/docs/forms.html
// using React Hooks
export default function App(props) {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("A hook name was submitted: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Single Input Form</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
