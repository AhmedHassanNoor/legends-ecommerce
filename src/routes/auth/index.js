import { AuthenticationContainer } from "./styles";

import SignUpForm from "../../components/sign-up-form";
import SignInForm from "../../components/sign-in-form";

const Auth = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Auth;
