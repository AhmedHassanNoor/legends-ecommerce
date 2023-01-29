import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    if (user) {
      await createUserDocumentFromAuth(user.uid, user.displayName, user.email);
    }
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
