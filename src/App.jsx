import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Contact from './Pages/Contact';
import Mobile from './Pages/WhoMobile';
import SingleProject from './Pages/SingleProject';
import Desktop from './Pages/WhoDesktop';


const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/project/:id' element={<SingleProject/>} />
          <Route path='/mobile/who-am-i' element={<Mobile/>} />
          <Route path='/desktop/who-am-i' element={<Desktop/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App