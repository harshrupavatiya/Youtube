import React from 'react'
import { homeIcon, shortIcon, subscriptionIcon } from '../utils/Constants';

const Slidebar = () => {
  return (
    <div className=" w-72 p-3 bg-slate-400 shadow-lg text-lg font-medium">
      <div>
          <a href="/"><div className="flex">
            <img className="w-7" src={ homeIcon } />
            <p>Home</p>
          </div></a>
          <div className="flex">
            <img className="w-8" src={ shortIcon } />
            <p>Shorts</p>
          </div>
          <div className="flex">
            <img className="w-8" src={ subscriptionIcon } />
            <p>Subscription</p>
          </div>
      </div>
      <hr />
      <div>
        <h1>You</h1>
        <ul>
          <li>History</li>
          <li>Playlists</li>
          <li>Watch later</li>
          <li>Liked videos</li>
        </ul>
      </div>
      <hr />
      <div>
        <h1>Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Courses</li>
          <li>Fashion & Beauty</li>
          <li>Podcasts</li>
        </ul>
      </div>
    </div>
  )
}

export default Slidebar;