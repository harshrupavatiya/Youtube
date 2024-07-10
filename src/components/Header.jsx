import React, { useEffect, useState } from "react";
import {
  menuIcon,
  mainLogo,
  searchIcon,
  micIcon,
  notifyIcon,
} from "../utils/Constants";
import { searchSuggestions } from "../utils/ApiConsts";
import { useDispatch, useSelector } from "react-redux";
import {
  hideSuggestion,
  showSuggestion,
  toggleSlidebar,
} from "../utils/appSlice";

const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions(searchQuery);
      console.log(suggestions);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSuggestions = async (query) => {
    const searchresponse = await fetch(searchSuggestions + query);
    const searchdata = await searchresponse.json();

    setsuggestions(searchdata[1]);
  };

  const dispatch = useDispatch();

  const handleSlidebar = () => {
    dispatch(toggleSlidebar());
  };

  const suggest = useSelector((store) => store.app.suggestionBox);

  return (
    <div className="flex justify-between py-3 px-5 shadow-lg">
      <div className="flex items-center">
        <img
          className="h-7 mr-4"
          src={menuIcon}
          onClick={() => handleSlidebar()}
          alt="menu"
        />
        <a href="/"><img className="h-7" src={mainLogo} alt="Logo" /></a>
      </div>

      <div className="relative flex w-5/12">
        <input
          className="w-10/12 py-2 text-lg px-4 h-full rounded-l-full border-gray-300 border"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          onFocus={() => dispatch(showSuggestion())}
          onBlur={() => {
            const i = setTimeout(() => {
              dispatch(hideSuggestion());
            }, 200);

            return () => clearTimeout(i);
          }}
        />
        <a
          href={"search?q=" + searchQuery}

          className="flex justify-center items-center px-6 bg-gray-300 rounded-r-full"
        >
          <img className="w-6" src={searchIcon} alt="Search" />
        </a>
        <button className="flex justify-center items-center ml-4 w-12 h-11 rounded-full bg-gray-300">
          <img className="w-7" src={micIcon} alt="Mic" />
        </button>
        {suggest && (
          <div className="absolute top-11 z-20 w-[79%] bg-gray-100">
            {suggestions.map((s) => (
              <a href={"search?q=" + s}>
              <div
                className="p-2 flex items-center hover:bg-gray-300"
                onClick={() => {
                  setsearchQuery(s);
                  dispatch(hideSuggestion());
                }}
              >
                <img className="w-6 mr-3" src={searchIcon} alt="Search" />
                <p className=" text-lg">{s}</p>
              </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center">
        <img className="h-7" src={notifyIcon} alt="Notifications" />
        <div className="ml-6 w-11 h-11 rounded-full bg-black" />
      </div>
    </div>
  );
};

export default Header;
