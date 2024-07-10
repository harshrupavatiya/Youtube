import React from "react";

const CommentList = ({ comment }) => {
  const { name, texty } = comment;
  return (
    <div className="">
      <div className="flex p-2 bg-slate-200 items-center rounded-xl">
        <div className="w-10 h-10 bg-indigo-500 rounded-full mr-2" />
        <div>
          <h1 className=" text-sm font-semibold text-zinc-800">{name}</h1>
          <p className=" font-semibold">{texty}</p>
        </div>
      </div>
      <div className="ml-6 pl-12 mt-2 border-l-2 border-gray-500">
        {comment.reply.map((r) => (
          <CommentList comment={r} />
        ))}
      </div>
    </div>
  );
};

const CommentContainer = ({ comments }) => {
  // console.log(something);
  return (
    <div className="mt-8 bg-gray-300 rounded-xl overflow-hidden">
      <button className="w-full text-left text-2xl font-bold p-2 pl-5 bg-gray-400">Comments :</button>
      <div className="p-3">
        {comments.map((c) => (
          <CommentList comment={c} />
        ))}
      </div>
    </div>
  );
};

export default CommentContainer;
