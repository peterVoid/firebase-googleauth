import { useRef, useState } from "react";
import { SpeedDial } from "primereact/speeddial";
import { Toast } from "primereact/toast";
import { auth, db } from "../firebase";
const styles = {
  sent: "flex justify-end  bg-blue-700 px-4 py-2 ",
  archived: "flex justify-start  bg-gray-300 px-4 py-2 mr-[70%]",
};
import { deleteDoc, doc } from "firebase/firestore";
const ChatMessages = ({ messages }) => {
  const deleteDocc = async () => {
    const konprem = confirm("Are you sure?");
    if (konprem) {
      await deleteDoc(doc(db, "messages", messages.id));
    } else {
      return;
    }
  };
  const toast = useRef(null);
  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Update",
          detail: "Data Updated",
        });
      },
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => {
        toast.current.show({
          severity: "error",
          summary: "Perhatian",
          detail: "Pikirkan Baik Baik",
        });
        deleteDocc();
      },
    },
  ];
  const sts =
    messages?.uid === auth.currentUser?.uid ? styles.sent : styles.archived;
  const { text, name } = messages;
  return (
    <div
      className={`max-w-[720px] w-[30%] bg-slate-600 p-5 relative rounded-tr-xl rounded-tl-xl rounded-bl-xl ${sts}`}>
      <Toast ref={toast} />
      {messages?.uid === auth.currentUser?.uid && (
        <div className="absolute left-0 top-0">
          <SpeedDial
            model={items}
            radius={80}
            type="semi-circle"
            direction="down"
            className={`${
              messages.uid === auth.currentUser.uid
                ? "absolute right-0 -top-3"
                : "absolute left-0 -bottom-3"
            }`}
          />
        </div>
      )}
      <p className="absolute  top-[-20px]">{name}</p>
      <p>{text}</p>
    </div>
  );
};

export default ChatMessages;
