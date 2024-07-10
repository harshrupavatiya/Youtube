import React from "react";

const VideoCard = ({ video }) => {
  let duration = video.contentDetails.duration;
  duration = duration.slice(2);
  duration = duration.split("");

  for (var i = 0; i < duration.length; i++) {
    if (duration[i] === "H" || duration[i] === "M") {
      duration[i] = ":";
    }
  }
  duration.pop();
  duration = duration.join("");

  return (
    <div>
      <div className="relative w-[395px] h-[221px] rounded-2xl overflow-hidden flex justify-center items-center">
        <p className="absolute z-10 bottom-2 right-3 backdrop-blur-sm px-2 rounded-md text-white text-sm font-semibold bg-background-transprnt-black">
          {duration}
        </p>
        <img
          src={video.snippet.thumbnails.high.url}
          className="w-[395px] z-0"
          alt="Thubnail"
        />
      </div>
      <div className=" mt-2 mb-6 flex justify-between w-[410px]">
        <div className="p-6 h-12 rounded-full bg-black" />
        <div className="w-[355px] overflow-hidden">
          <h3 className="font-semibold text-lg">{video.snippet.title}</h3>
          <p>{video.snippet.channelTitle}</p>
          <p>{video.statistics.viewCount}</p>
        </div>
      </div>
    </div>
  );
};

export const SeearchVideoCard = ({ video }) => {
  return (
    <div className="flex w-full mb-4 rounded-2xl bg-slate-200">
      <div className="w-[500px] h-[281px] rounded-2xl overflow-hidden flex justify-center items-center">
        <img
          src={video.snippet.thumbnails.high.url}
          className="w-[500px] z-0"
          alt="Thubnail"
        />
      </div>
      <div className="w-[44rem] ml-4 flex flex-col">
        <h3 className="mt-4 font-semibold text-lg">{video.snippet.title}</h3>
        <div className="mt-2 flex items-center overflow-hidden">
          <div className="p-4 h-8 mr-2 rounded-full bg-black" />
          <p>{video.snippet.channelTitle}</p>
        </div>
          <p className=" text-sm mt-3">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
