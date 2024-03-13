import React, { useEffect } from 'react'
import './index.css';
import Img2 from './img2.jpg';
import Img from './img.png';
import Img3 from './kakaka.png'
import Logo from './LogoX.png';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';
import Project from '../Components/Project';

const projects = [
  
  {
    id : "7",
    title : "A Dynamic Platform for Seamless Interaction", 
    description : "The platform offers a seamless user experience, granting access to a plethora of functionalities. Users can effortlessly exchange messages or share URLs, while staying informed about who's online... ", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1709819133/jackjack_tcbzyi.png", 
    level : true,
    pro : true
  },
  {
    id : "1",
    title : "Maven: A Blog Platform Offering Compensation to Authors | Boasting 24,000 Lines of Code, an Impressive Feat.", 
    description : "This innovative blogging platform redefines the traditional blogging experience by integrating advanced features that empower both authors and users. With a robust monetization model, authors are fairly ...", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1700192428/Screenshot_2023-11-17_04.39.45_scemhk.png", 
    level : true, 
    pro : true
  },
  {
    id : "2",
    title : "CryptoChat | LIVE Chat and Live Crypto Tracking", 
    description : "CryptoChat is your all-in-one platform for staying updated on the latest cryptocurrency trends, managing your investment portfolio, and engaging in meaningful conversations with fellow crypto enthusiasts. ", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1697120096/chrome-capture-2023-9-12_gkby7h.png", 
    level : true
    ,pro : false

  },
  {
    id : "3",
    title : "www.webcraftagency.com", 
    description : "WebCraft specializes in crafting custom web pages for clients. We prioritize simplicity, functionality, and client satisfaction. ", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1692468260/chrome-capture-2023-7-19_4_vjy77b.png", 
    level : false
    ,pro : false

  }
  ,
  
  {
    id : "4",
    title : "Social Media App ", 
    description : "Linkopedia is your ultimate social media platform, designed to bring people together in a vibrant digital community. With a focus on user engagement and meaningful interactions...", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1692035586/social1_1_-min_my4djz.png", 
    level : true
    ,pro : true

  },
  {
    id : "5",
    title : "Marketplace | Make a gig now !", 
    description : "Gigster is your premier online marketplace connecting talented freelancers with exciting opportunities from around the globe.Whether you're a skilled professional seeking freelance gigs or a business in need of top-tier talent ...",
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1692036654/m8-min_rx93pn.png", 
    level : true
    ,pro : false

  },
  {
    id : "6",
    title : "Note Your Day with this unique App", 
    description : "Note Your Day is a powerful application designed to help you stay organized, productive, and mindful of your daily activities. Seamlessly blending task tracking with insightful note-taking capabilities, Note Your Day empowers you to make the most out of every moment.", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1697571236/screencapture-localhost-3000-2023-10-17-20_32_44_z924qe.png", 
    level : true
    ,pro : false

  },
 
  
];


const WhoDesktop = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    const x = ()=>{
      window.scrollTo({
          top: 0
      });
    }
    x();    
  },[]);

  return (
    <div className='mobileSearch desktopSearch' id='jsd'>
      
      <div className="caseOne">
        <img src={Logo} alt="" onClick={()=>{navigate('/');}} />
        <button onClick={()=>{navigate('/contact');}}>
          Contact
        </button>
      </div>

      <div className="caseTwo">
        <div className="case2p1">
          <span>
          Akram El Basri&nbsp;</span>
          <div className="others1">
            <div className="caseJK">
              <ClearIcon className='delete' />
            </div>
            <div className="caseKK">
              <SearchIcon className='loop'/>
            </div>
          </div>
        </div>
        <div className="case2p1 lkl">
          <div className="uni unix">
            All
          </div>
          <div className="uni">
            Images
          </div>
          <div className="uni">
            Actuality
          </div>
          <div className="uni">
            Videos
          </div>
          <div className="uni">
            Maps
          </div>
          <div className="uni">

          </div>
        </div>
      </div>
      <div className="caseTwo caseTwom1 izdhqk izdhqkizdhqk">
        <div className="zdjo">
          <div className="scdjk">
            Akram El Basri&nbsp;
            <svg width="16" height="16" viewBox="0 0 64 64" fill="none"><path d="M39.64 40.83L33.87 56.7a1.99 1.99 0 0 1-3.74 0l-5.77-15.87a2.02 2.02 0 0 0-1.2-1.2L7.3 33.88a1.99 1.99 0 0 1 0-3.74l15.87-5.77a2.02 2.02 0 0 0 1.2-1.2L30.12 7.3a1.99 1.99 0 0 1 3.74 0l5.77 15.87a2.02 2.02 0 0 0 1.2 1.2l15.86 5.76a1.99 1.99 0 0 1 0 3.74l-15.87 5.77a2.02 2.02 0 0 0-1.2 1.2z" fill="#FFC017"></path></svg>

          </div>
          <div className="zdjooo">
            Full Stack Developer & UI/UX Designer
          </div>
        </div>
        <div className="imagekk">
          <img src={Img} alt="" />
          <img src={Img2} alt="" />
          <img src={Img3} alt="" />
        </div>
        <div className="hr" />
        <div className="text">
        Step into Akram's enchanting world of digital mastery, where challenges become opportunities and innovation meets imagination. Join him in shaping the future of technology through his extraordinary talent in solving problems, designing and crafting digital masterpieces that inspire and delight.
        </div>
        <div className="text">
          <span className='klooo'>Age</span> : 22 years 
        </div>
        <div className="text">
          <span className='klooo'>Height</span> : 1.69 m ( 5.7 inches)
        </div>
        
        <div className="text">
          <span className='klooo'>Occupation</span> : Freelance
        </div>
        <div className="text textnn">
          <span className='klooo'>Expertises</span> : Software Developement, Designing
        </div>
        <div className="text">
          <span className='klooo'>Total project</span> : 30+
        </div>
      </div>

      <br/><br/>

      <div className="case3p2 jijijiji jijijijijijijiji">
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
      <br/><br/>
      
      {
        projects.map((data, index)=>{
          return(
            <Project data={data}/>
          )
        })
      }

      <div className="andMany jjjj">
          And dozens of other projects 
          <br />
          (Freelance projects are not displayed to maintain client confidentiality and privacy)
      </div>

      <div className="lkdll andMany zjhisc">
        Made with care&nbsp;&nbsp;<svg width="16" height="16" viewBox="0 0 64 64" fill="none"><path d="M39.64 40.83L33.87 56.7a1.99 1.99 0 0 1-3.74 0l-5.77-15.87a2.02 2.02 0 0 0-1.2-1.2L7.3 33.88a1.99 1.99 0 0 1 0-3.74l15.87-5.77a2.02 2.02 0 0 0 1.2-1.2L30.12 7.3a1.99 1.99 0 0 1 3.74 0l5.77 15.87a2.02 2.02 0 0 0 1.2 1.2l15.86 5.76a1.99 1.99 0 0 1 0 3.74l-15.87 5.77a2.02 2.02 0 0 0-1.2 1.2z" fill="#FFC017"></path></svg>&nbsp;&nbsp;2024
      </div>
      



    </div>
  )
}

export default WhoDesktop
