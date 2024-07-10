import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ApiKey, searchVideos } from "../utils/ApiConsts";
import { SeearchVideoCard } from "./VideoCard";
import Filters from "./Filters";

const SearchVidContainer = () => {
  const [titleQuery] = useSearchParams();
  console.log(titleQuery.get("q"));

  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    fetchSearchData();
  }, []);

  const fetchSearchData = async () => {
    const response = await fetch(
      searchVideos + "q=" + titleQuery.get("q") + "&key=" + ApiKey
    );
    console.log(searchVideos , "q=" , titleQuery.get("q") , "&key=" , ApiKey);
    const responseJson = await response.json();

    setSearchData(responseJson);
    console.log("searchdata", searchData);
  };

  return searchData === null ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="w-full px-5">
      <Filters />
      <div className="my-5 flex flex-col justify-around">
        {searchData.items.map((video) => (
          <Link to={"/watch?v=" + video.id.videoId}><SeearchVideoCard video={video} key={video.id.videoId} /></Link>
        ))}
      </div>
    </div>
  );
};

export default SearchVidContainer;
