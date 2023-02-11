import "./index.scss";
import { useState } from "react";
import {
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";
import FormInput from "../form-input";
import Button from "../button";
import { useEffect } from "react";
import {} from "../../utils/firebase";
import { getRedirectResult } from "firebase/auth";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    const getRedirect = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user.uid, response.user.displayName, response.user.email);
      }
    };
    getRedirect();
  }, []);

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required value={email} name="email" onChange={handleChange} />
        <FormInput label="Password" type="password" required value={password} name="password" onChange={handleChange} />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogleRedirect}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
