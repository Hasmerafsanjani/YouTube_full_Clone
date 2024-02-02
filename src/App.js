import React from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Header from "./components/Header"
import Feed from './components/Feed'
import LeftNav from "./components/LeftNav"
import LeftNavMenuItem from './components/LeftNavMenuItem'
import SearcaResult from "./components/SearchResult"
import VideoDetails from "./components/VideoDetails"



import { AppContext } from './context/contextApi';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
       <div className='flex flex-col h-full'>
        <Header/>
        <Routes>
          <Route path='/' exact  element={<Feed/>}/>
          <Route path='/searchResult/:searchQuery' element={<SearcaResult/>}/>
          <Route path='/video/:id' element={<VideoDetails/>}/>
        </Routes>

       </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
