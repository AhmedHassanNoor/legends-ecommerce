import { SignUpContainer } from "./styles";
import { useState } from "react";
import FormInput from "../form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button";
import { useDispatch } from "react-redux";
import { userSignUpStart } from "../../store/user/actions";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formFields;

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    return dispatch(userSignUpStart(email, password, displayName));
  };

  return (
    <SignUpContainer>
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
        <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
          submit
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
