import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const handleSignin = () => {
  const q = new GoogleAuthProvider();
  signInWithRedirect(auth, q);
};
const Signin = () => {
  return (
    <div className="flex justify-center items-center">
      <GoogleButton onClick={handleSignin} />
    </div>
  );
};

export default Signin;
