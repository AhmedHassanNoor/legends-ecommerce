import { useEffect } from "react";
import { signInWithGoogleRedirect, createUserDocumentFromAuth, auth } from "../../utils/firebase";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form";

const SignIn = () => {
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
    <div>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
