import React from "react";
import { auth } from "../firebase";
import getUserColor from "../utils/getUserColor";

const Message = ({ data }) => {
  console.log("mesajı gönderen kullanıcı", data.author.id);
  console.log("oturumu açık olan kullanıcı", auth.currentUser.uid);

  // eger mesajı su an oturumu açık olan kulklanıcı gönderdiyse
  if (data.author.id === auth.currentUser.uid) {
    return (
      <p className="message max-w-[90%] p-[2px_8px] bg-black self-end text-white rounded-[8px_8px_0_8px]">
        {" "}
        {data.text}
      </p>
    );
  }
  console.log(data);
  return (
    <div className="flex items-start gap-1">
      <img className="size-[40px] rounded-full " src={data.author.photo} />
      <div className="flex flex-col gap-1 w-full">
        <span
          style={{ color: getUserColor(data.author) }}
          className="font-bold whitespace-nowrap text-zinc-700 "
        >
          {data.author.name}
        </span>
        <p className="message text-zinc-800 bg-zinc-200 rounded-[0_7px_7px_7px] ">{data.text}</p>
      </div>
    </div>
  );
};

export default Message;
