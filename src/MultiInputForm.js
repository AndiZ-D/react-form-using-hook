import { useState } from "react";

// Muli-inputs form using React Hook
// referenced: https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57
export default function MultiInputForm(props) {
  const [formInputs, setFormInputs] = useState({});

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormInputs((input) => ({ ...input, [name]: value }));
  };

  const handleSubmit = (event) => {
    alert(`Full name captured!
    First name: ${formInputs.firstname}
    Last name: ${formInputs.lastname}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Multi-Input Form</h1>
      <label>First Name</label>
      <input name="firstname" type="text" onChange={handleInputChange} />
      <br />
      <label>Last Name</label>
      <input name="lastname" type="text" onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
