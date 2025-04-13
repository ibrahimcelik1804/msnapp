import React, { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import ChatPage from "./pages/ChatPage";
import Loader from "./components/Loader";

const App = () => {
  const [user, setUser] = useState(undefined);
  const [room, setRoom] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // kullanıcı sayfadan ayrılınca oturumu izlemeyi durdur.
    return () => unsub();
  }, []);
  // kullanıcı verisi henüz yüklenmediyse
  if (user === undefined) {
    return <Loader />;
  }

  // kullanıcı oturum açmadıysa
  if (user === null) return <LoginPage />;

  // kullanıcı oturum açtıysa ve oda seçildiyse
  if (room) return <ChatPage room={room} setRoom={setRoom} />;

  //kullanıcı oturum açtıysa oda seçilmediyse
  return <RoomPage setRoom={setRoom} />;
};

export default App;
