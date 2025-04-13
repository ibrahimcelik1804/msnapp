import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

const Form = ({ room }) => {
  const [text, setText] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    const collectionRef = collection(db, "messages");
    await addDoc(collectionRef, {
      text,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    setText("");
    setIsOpen(false)
  };

  return (
    <form onSubmit={handleSubmit} className=" p-5 border shadow-lg border-gray-300 flex gap-2 ">
      <input
        className="flex-1 border border-gray-200 shadow-sm p-2 px-4 rounded-md   "
        placeholder="Mesajınızı giriniz..."
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className=" relative flex  ">
        <div className="absolute top-[-475px] right-[-50px] ">
          <EmojiPicker open={isOpen} onEmojiClick={(e) => setText(text + e.emoji)} />
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="btn ">
          😁
        </button>
      </div>

      <button type="submit" className="btn text-sm ">
        Gönder
      </button>
    </form>
  );
};

export default Form;
