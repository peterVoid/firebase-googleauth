import { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const SendMessages = ({ scroll }) => {
  const [input, setInput] = useState("");
  const handleSendMessage = async (e) => {
    const { uid, displayName } = auth.currentUser;
    e.preventDefault();
    if (!input) {
      alert("Type a messages");
      return;
    }
    await addDoc(collection(db, "messages"), {
      text: input,
      time: serverTimestamp(),
      name: displayName,
      uid,
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form
      onSubmit={handleSendMessage}
      className="flex items-center justify-ceter absolute bottom-0 w-full max-w-[720px] gap-5 mb-4">
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Type a message"
        className="w-full outline-none  focus:bg-slate-800 focus:text-white px-4 py-5 ease-in-out duration-200 rounded-full "
      />
      <button type="submit" className="px-6 py-5 bg-emerald-500 rounded-full">
        Send
      </button>
    </form>
  );
};

export default SendMessages;
