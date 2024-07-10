import React from 'react'
import Slidebar from './Slidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Body = () => {
  const slidebarSign = useSelector(AppStore => AppStore.app.showSlidebar);

  return (
    <div className="flex">
        {slidebarSign && <Slidebar />}
        <Outlet />
    </div>
  )
}

export default Body;