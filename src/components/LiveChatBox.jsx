import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/LiveSlice";
import { getName, getText } from "../utils/Helper";

const LiveChatBox = () => {
  const [liveInput, setliveInput] = useState("");

  const dispatch = useDispatch();

  const messageData = useSelector((store) => store.live.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("hy");
      dispatch(
        addMessage({
          name: getName(),
          message: getText(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[39rem] mr-4 rounded-xl flex flex-col">
      <div className="p-2 px-5 text-2xl font-bold rounded-t-xl bg-gray-400">Live Chat :</div>
      <div className="h-full p-2 flex flex-col justify-end overflow-hidden bg-gray-300">
        {/* massage box */}
        {messageData.map((d) => (
          <div className="flex mt-2 p-2 bg-slate-200 justify-around items-center rounded-xl">
            <div className="p-5 bg-indigo-400 rounded-full mr-2" />
            <div className="w-[88%]">
              <h1 className="w-auto text-sm font-semibold text-zinc-800">{d.name}</h1>
              <p className=" font-semibold">{d.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-between border-t-2 border-gray-500 rounded-b-xl overflow-hidden">
        <input type="text" className="w-full p-4" value={liveInput} onChange={(e) => {
          setliveInput(e.target.value)
        }} placeholder="Write your message here" />
        <button className="px-6 bg-slate-300" onClick={() => {
          dispatch(addMessage({
            "name": "Harsh",
            "message": liveInput,
          }))
          setliveInput("");
        }}>Send</button>
      </div>
    </div>
  );
};

export default LiveChatBox;
