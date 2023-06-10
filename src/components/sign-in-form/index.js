import { SignInContainer, ButtonsContainer } from "./styles";
import { useState } from "react";
import { emailSignInStart, googleSignInStart } from "../../store/user/actions";
import FormInput from "../form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button";
import { useDispatch } from "react-redux";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
    return resetFormFields();
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onGoogleSignIn = () => dispatch(googleSignInStart());

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput label="Email" type="email" required onChange={onChange} name="email" value={email} />

        <FormInput label="Password" type="password" required onChange={onChange} name="password" value={password} />
        <ButtonsContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
            Sign In
          </Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={onGoogleSignIn}>
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
