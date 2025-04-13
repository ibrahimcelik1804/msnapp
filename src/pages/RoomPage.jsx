import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const RoomPage = ({ setRoom }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // inputtaki girdiyi al
    const room = e.target[0].value.toLowerCase();
    //  console.log(room);
    // oda state güncelle
    setRoom(room);
  };

  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div className="wrapper">
      <form
        onSubmit={handleSubmit}
        className=" box rounded-[10px] flex flex-col gap-10 text-center"
      >
        <h1 className="text-4xl font-caveat"> RoomPage</h1>
        <p className="text-gray-400">Hangi odaya gireceksiniz?</p>
        <input
          className="border border-gray-300  rounded-md p-2 px-4 shadow-lg"
          type="text"
          placeholder="Ör:hs"
          required
        />
        <button
          type="submit"
          className="bg-black transition cursor-pointer rounded-md shadow-lg p-2 px-4 text-white  hover:bg-green-500"
        >
          Odaya gir
        </button>
        <button
          onClick={handleLogOut}
          type="button"
          className="bg-rose-400 transition cursor-pointer rounded-md shadow-lg p-2 px-4 text-white  hover:bg-rose-500"
        >
          Çıkış Yap
        </button>
      </form>
    </div>
  );
};

export default RoomPage;
