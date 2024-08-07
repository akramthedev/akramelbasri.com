import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import React, {useState} from 'react'
import "./index.css";
import CV from './curriculum-vitæ.pdf';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {

    const handleClickGoogle = () => {
        window.open('https://www.google.com', '_blank');
    }
    const navigate=useNavigate();

    const handleDownload =  ()=>{
        const anchor = document.createElement('a');
        //replace it with the link of your curriculum vitae
        /*
        anchor.href = "https://res.cloudinary.com/dqprleeyt/image/upload/v1710092287/Akram_Elbasri_io2dx2.png";
        anchor.download = 'curriculum-vitæ.png';
        anchor.click();
        */
    }
    const userDownloadedResume = async ()=>{
        await axios.get('https://backend-portfolio-666.onrender.com/userDownloadedyourResume');
    }
    return (
    <div className='Navbar'>
        <button
            onClick={handleClickGoogle}
        >
            Google
        </button>
       
    
       
        <button className='grid'>
            <ViewCompactIcon className='jack'/>
        </button>
        <button className='kaka' onClick={()=>{navigate('/contact');}}>
            Contact
        </button>
    </div>
  )
}

export default Navbar
