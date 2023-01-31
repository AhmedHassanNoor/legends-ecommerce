import "./index.scss";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase";
import FormInput from "../form-input";
import Button from "../button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = formFields;

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password, displayName);
      if (user && user.uid) {
        await createUserDocumentFromAuth(user.uid, displayName, email);
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(" Cannot create user, email already in use!");
      } else {
        console.error(`user creation encountered an error: ${error.message}`);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

        <FormInput label="Email" type="email" required value={email} name="email" onChange={handleChange} />

        <FormInput label="Password" type="password" required value={password} name="password" onChange={handleChange} />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
