import "./index.scss";
import SignUpForm from "../../components/sign-up-form";
import SignInForm from "../../components/sign-in-form";

const Auth = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
