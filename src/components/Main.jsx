import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import Message from "./Message";
import Arrow from "./Arrow";

const Main = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const lastMsgRef = useRef();
  const containerRef = useRef();
  // mesaj verilerini alıyor
  useEffect(() => {
    const collectionRef = collection(db, "messages");

    const q = query(collectionRef, where("room", "==", room), orderBy("createdAt", "asc"));

    const unsub = onSnapshot(q, (data) => {
      const temp = [];
      data.docs.forEach((doc) => {
        temp.push(doc.data());
      });
      setMessages(temp);
    });
    return () => unsub();
  }, []);

  // her yeni mesaj geldiğinde ekranı aşağıya kaydır
  useEffect(() => {
    if (messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      // eger oturumu açık kullanıcı mesaj attıysa  her koşulda en aşagıya kaydır
      if (lastMsg.author.id === auth.currentUser.uid) {
        scrollToBottom();
      } else if (isAtBottom) {
        // eger son mesajı farklı bir kullanıcı atıysa sadece isAtBottom true ise en aşağıya kaydır

        scrollToBottom();
      }
    }
  }, [messages]);

  /// en aşağıya kaydır
  const scrollToBottom = () => {
    lastMsgRef.current.scrollIntoView();
  };

  // scroll aşagıdamı yukarıda mı hesabı
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 200);
  };

  return (
    <main
      onScroll={handleScroll}
      ref={containerRef}
      className="flex-1 p-3 flex flex-col gap-3 w-full overflow-y-auto relative"
    >
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          Sohpete ilk mesajı gönderin.
        </div>
      ) : (
        messages.map((i, key) => <Message key={key} data={i} />)
      )}
      <div ref={lastMsgRef} />
      <Arrow isAtBottom={isAtBottom} handleScroll={scrollToBottom} />
      
    </main>
  );
};

export default Main;
