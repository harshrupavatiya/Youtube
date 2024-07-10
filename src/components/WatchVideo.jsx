import React from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeSlidebar } from '../utils/appSlice';
import CommentContainer from './CommentContainer';
import { comments } from '../utils/comments';
import LiveChatBox from './LiveChatBox';
// import { comments } from '../utils/comments';

const WatchVideo = () => {
  const dispatch = useDispatch();
  dispatch(closeSlidebar());

  const [ videoId ] = useSearchParams();
  console.log(videoId.get("v"));
  
  return (
    <div className="w-full mt-4 flex">
      <div className="ml-28 mr-8">
        <iframe className="rounded-xl" width="940" height="529"  src={"https://www.youtube.com/embed/" + videoId.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <CommentContainer comments={comments}/>
      </div>
      
        <LiveChatBox />
      
    </div>
  )
}

export default WatchVideo;