import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchVideo from './components/WatchVideo'
import { Provider } from 'react-redux'
import AppStore from './utils/AppStore'
import SearchVidContainer from './components/SearchVidContainer'

const App = () => {
  return (
    <Provider store={AppStore}>
      <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  )
}

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchVideo />
    },
    {
      path: "search",
      element: <SearchVidContainer />
    },
  ]
}])

export default App;