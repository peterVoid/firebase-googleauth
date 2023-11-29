import { useEffect, useState, useRef } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db, auth } from "../firebase";
import ChatMessages from "./ChatMessages";
import SendMessages from "./SendMessages";
const Chat = () => {
  const userNow = auth.currentUser;
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("time"));
    const unsub = onSnapshot(q, (querySnap) => {
      let message = [];
      querySnap.forEach((doc) => {
        message.push({ ...doc.data(), id: doc.id });
      });
      setMessages(message);
    });
    return () => unsub();
  }, []);

  return (
    <>
      {!userNow && (
        <div className="flex justify-center items-center h-[96vh]">
          <h1 className="text-3xl font-bold uppercase">Please login first</h1>
        </div>
      )}
      {userNow && (
        <>
          <div className="flex flex-col  px-[20px] py-8 gap-7 items-end">
            {messages.map((message) => (
              <>
                <ChatMessages
                  key={message.id}
                  messages={message}
                  data={messages}
                />
              </>
            ))}
            <SendMessages scroll={scroll} />
          </div>
        </>
      )}

      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
