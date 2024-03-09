import React, {useEffect, useState} from 'react'
import './index.css';
import Logo from '../Components/hero.png';
import {useNavigate} from 'react-router-dom'

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBack from '@mui/icons-material/ArrowBack'
const Contact = () => {

    const navigate=useNavigate();
useEffect(()=>{
        const x = ()=>{
          window.scrollTo({
              top: 0
          });
        }
        x();    
      },[]);
  return (
    <div className='contact'>
        <div className="caseOne caseOnemodified">
            <button onClick={()=>{navigate('/');}}  className='djjkdfqjkqdjk'>
                <ArrowBack/>
            </button>
            <img src={Logo} alt="" onClick={()=>{navigate('/');}} />
        </div>
        <div className="caskkk">
        <div className="rowidk">
                        <div className="efosf">
                            <a href="mailto:akramelbasridev@gmail.com">
                                <EmailIcon className='email'  />
                            </a>
                        </div>
                        <div className="izo">
                            <a href="mailto:akramelbasridev@gmail.com">
                                akramelbasridev@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="rowidk">
                        <div className="efosf">
                            <a href="tel:06.16.50.65.86">
                                <PhoneIcon className='phone'  />
                            </a>
                        </div>
                        <div className="izo">
                            <a href="tel:06.16.50.65.86">
                                06.45.97.52.13
                            </a>
                        </div>
                    </div>

            <div className="rowidk">
                <div className="efosf">
                    <LinkedInIcon className='linkedin' />
                </div>
                <div className="izo">
                    <a href="https://www.linkedin.com/in/akram-elbasri" target='_blank' rel="noreferrer" >Akram El Basri</a>
                </div>
            </div>
        </div>
        <div className="Footer">
        <div className="ll">
        Made with care • 2024
        </div>
        </div>
    </div>
  )
}

export default Contact
