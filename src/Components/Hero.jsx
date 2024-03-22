import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import './index.css';
import HeroImg from './hero.png';
import {useNavigate} from 'react-router-dom';

const Hero = () => {

    const navigate = useNavigate();

    const handleClickSearchAkram = ()=>{
        if(window.innerWidth > 900){
            //desktop
            navigate("/desktop/who-am-i");
            
        }
        else{
            //mobile
            navigate("/mobile/who-am-i");
            
        }
    }

    const handleDownload =  ()=>{
        const anchor = document.createElement('a');
        //replace it with the link of your curriculum vitae
        anchor.href = "https://res.cloudinary.com/dqprleeyt/image/upload/v1710092287/Akram_Elbasri_io2dx2.png";
        anchor.download = 'curriculum-vitæ.png';
        anchor.click();
    }

  return (
    <div className='Hero'>
        <div className="case1" onClick={handleClickSearchAkram}>
            <img src={HeroImg} alt="" />
            <div className="case4">
                A DEV with a dash of spice and a pinch of expertise ^^
            </div>
        </div>
       
        <div className="case2" onClick={handleClickSearchAkram}>
            <SearchIcon className='zd'/>
            <input type="text" placeholder='Click a button below...' />
            <ClearIcon className='dd'/>
            <svg className="goxjub" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
            <svg className="Gdd5U" focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#34a853" cx="144.07" cy="144" r="16"></circle><circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle><path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"></path><path fill="#fbbc05" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"></path><path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"></path></g></svg>
        </div>
        <div className="case3">
            
            
            
            <div className="case3p1"> 
                <button className='b' onClick={()=>{handleDownload();}}>
                    CV
                </button>
                <button className='a'
                    onClick={handleClickSearchAkram}
                >
                    Projects
                </button>
            </div>

            <div className="case3p2 case3p2" onClick={handleClickSearchAkram} >
              <div class="advertisement">
                <button class="btnLogoh">
                  <img src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://www.ideematic.com/wp-content/uploads/2018/05/react-native-developpement-mobile.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/OracleLogo.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://assets-global.website-files.com/60ec34540d013784844d2ee2/61d42d538aec6733243470a7_Python-logo.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="" />
                </button>
              </div>

              <div class="advertisement">
                <button class="btnLogoh">
                  <img src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://www.ideematic.com/wp-content/uploads/2018/05/react-native-developpement-mobile.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/OracleLogo.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://assets-global.website-files.com/60ec34540d013784844d2ee2/61d42d538aec6733243470a7_Python-logo.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="" />
                </button>
              </div>
              
              <div class="advertisement">
                <button class="btnLogoh">
                  <img src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://www.ideematic.com/wp-content/uploads/2018/05/react-native-developpement-mobile.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/OracleLogo.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://assets-global.website-files.com/60ec34540d013784844d2ee2/61d42d538aec6733243470a7_Python-logo.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="" />
                </button>
                <button class="btnLogoh">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="" />
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
