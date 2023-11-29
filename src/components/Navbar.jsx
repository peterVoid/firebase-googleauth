import Signin from "./Signin";
import { auth } from "../firebase";
import Logout from "./Logout";
import { useAuthState } from "react-firebase-hooks/auth";
const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="flex h-20 items-center justify-between p-6 bg-slate-800 text-white">
      <h1 className="text-3xl  uppercase font-bold">2 Orang</h1>
      {!user && <Signin />}
      {user && <Logout photo={user.photoURL} />}
    </div>
  );
};

export default Navbar;
