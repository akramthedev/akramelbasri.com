import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero.jsx';
import './index.css';
import axios from 'axios';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

const Home = () => {

  const [views, setViews] = useState(null);

  const addView = async ()=>{
    try{
      await axios.get('https://backend-portfolio-666.onrender.com/addView');
      console.log("Adding View");
    }
    catch(e){
      console.log("Error Adding View");
    }
  }

  const getAllViews = async ()=>{
    try{
      const resp = await axios.get('https://backend-portfolio-666.onrender.com/getViews');
      if(resp.status === 200){
        setViews(resp.data.views);
      }
    }
    catch(e){
      console.log(e.message);
    }
  }

  useEffect(()=>{
    addView();
    getAllViews();
  }, []);

  
  return (
    <div
        className='Home'
    >
      {
        views !== null && views !== undefined && views !== 0 && 
        <span className='viewsNumber'>
          {views}&nbsp;<i className='fa-solid fa-eye'></i>&nbsp;
        </span>
      }
      <Navbar />   
      <Hero />
      <Footer />
    </div>
  )
}

export default Home