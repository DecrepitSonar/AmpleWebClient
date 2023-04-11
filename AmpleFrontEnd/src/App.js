import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Wrapper from "./Pages/Wrapper"
import Stream from "./Pages/Stream"
import Live from "./Pages/Live"
import Watch from "./Pages/Watch"
import Listen from "./Pages/Listen"
import TrackDetail from './Pages/TrackDetail'
import Publish from "./Pages/Publish"
import Library from "./Pages/Library"
import Search from "./Pages/Search"
import Stats from "./Pages/Stats"
import History from "./Pages/History"
import WatchVideo from "./Pages/WatchVideo"


import Header from "./Pages/Components/Header"

function App() {

  const [modalOpen, OpenModal] = useState(false)

  return ( 

    <div className="App">
      <Login modalOpen={modalOpen} OpenModal={OpenModal}/>
      <Header OpenModal={OpenModal}/>
      <Routes>
        
        <Route path="/" element={<Wrapper OpenModal={OpenModal}/>}>
          <Route index element={<div>Home</div>}/>
          <Route path="/live" element={<Live/>}/>
          <Route path="/watch" element={<Watch/>}/>
          <Route path="/listen" element={<Listen/>}/>
          <Route path="/listen/:id" element={<TrackDetail/>}/>
          <Route path="/publish" element={<Publish/>}/>
          <Route path="/saved" element={<Library/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/stats" element={<Stats/>}/>
          <Route path="/search" element={<Search/>}/>
        </Route>
        <Route path="/stream/:id" element={<Stream toggleLogin={OpenModal}/>}/>
        <Route path="/watch/:id" element={<WatchVideo/>}/>
      </Routes>
    </div>
  );
}

export default App;
