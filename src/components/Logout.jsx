import { auth } from "../firebase";
const signOut = () => {
  alert("Logout Successfully");
  signOut(auth);
};
const Logout = ({ photo }) => {
  return (
    <div className="flex justify-center items-center gap-5">
      <img src={photo} width={50} />
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Logout;
