import React, { useEffect, useState } from 'react'
import Filters from './Filters';
import VideoCard from './VideoCard';
import { ApiKey, mostPopular } from '../utils/ApiConsts';
import { Link } from 'react-router-dom';

const MainContainer = () => {
  const [feed, setfeed] = useState(null);

  useEffect (() => {
    fetchPopular();
  } , [])

  const fetchPopular = async() => {
    const data = await fetch(mostPopular + ApiKey);
    const result = await data.json();

    setfeed(result);
  }

  return feed === null ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="w-full px-3">
        <Filters />
        <div className="my-5 flex flex-wrap justify-around">
          {feed.items.map((video) => (
            <Link className="reset" to={"/watch?v=" + video.id}><VideoCard video={ video }/></Link>
          ))}
        </div>
    </div>
  )
}

export default MainContainer;