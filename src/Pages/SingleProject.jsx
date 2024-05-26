import A1 from './a1.png';
import Write from './Writte.png';
import Tags from './Tags.png';
import Notifications from './notification.png';
import Profile from './Profile.png';
import Profile2 from './profile1.png';
import A2 from './a2.png';
import React, {useEffect, useState} from 'react'
import Dashboard from './Dashboard.png';
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import Logo from './LogoX.png';
import ArrowBack from "@mui/icons-material/ArrowBackIos"
import ArrowForward from "@mui/icons-material/ArrowForwardIos"


const projects = [
  {},
  {
    title : "Maven: A Blog Platform Offering Compensation to Authors | Boasting 24,000 Lines of Code, an Impressive Feat.", 
    shortDesc : "Maven is an innovative blogging platform that revolutionizes the traditional blogging experience.", 
    longDesc : " It integrates advanced features that empower both authors and users alike. With a robust monetization model, authors receive fair compensation for their content. Maven offers a dynamic environment where creativity thrives, fostering meaningful interactions and engagement between creators and their audience.", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1700192428/Screenshot_2023-11-17_04.39.45_scemhk.png", 
    img2 : "", 
    img3 : "", 
    level : "pro"
  }, 
  {
    title : "CryptoChat | LIVE Chat and Live Crypto Tracking", 
    shortDesc : "CryptoChat is your comprehensive platform tailored for all things cryptocurrency. Seamlessly integrating cutting-edge features, it serves as your go-to hub for staying informed about the latest cryptocurrency trends, managing your investment portfolio with precision, and engaging in insightful conversations with fellow crypto enthusiasts.", 
    longDesc : "Stay ahead of the curve with real-time updates on market trends, price fluctuations, and emerging cryptocurrencies. Whether you're a seasoned trader or a newcomer to the world of digital assets, CryptoChat equips you with the tools and resources needed to navigate the dynamic cryptocurrency landscape with confidence.", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1697120096/chrome-capture-2023-9-12_gkby7h.png", 
    img2 : "", 
    img3 : "", 
    level : "advanced"
  }, 
  {
    title : "www.webcraftagency.com", 
    shortDesc : "At WebCraft, specialization lies in the art of crafting custom web pages tailored to the unique needs and visions of clients. Prioritizing simplicity, functionality, and above all, client satisfaction, simplicity and functionality are at the forefront of every project undertaken. ", 
    longDesc : "The dedicated team of designers and developers tirelessly work to bring digital visions to life, ensuring that websites not only look stunning but also perform seamlessly across all devices. At WebCraft, belief resonates that a well-crafted website is the cornerstone of online presence, and commitment lies in helping clients make a lasting impression in the digital world. ", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1692468260/chrome-capture-2023-7-19_4_vjy77b.png", 
    img2 : "", 
    img3 : "", 
    level : "advanced"
  }, 
  {
    title : "𝗦𝗼𝗰𝗶𝗮𝗹 𝗠𝗲𝗱𝗶𝗮 App with 𝗖𝗼𝗺𝗽𝗹𝗲𝘅 𝗔𝗱𝘀 𝗦𝘆𝘀𝘁𝗲𝗺 and 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝘁𝘆 𝗥𝗲𝗰𝗼𝗴𝗻𝗶𝘇𝗲𝗿 based on interactions with the site content, and other complex algorithms using 𝗚𝗿𝗮𝗽𝗵𝘀.", 
    shortDesc : "", 
    longDesc : "At the core of Xplorium's ethos lies a dedication to privacy, security, and digital well-being. With robust privacy controls, stringent security measures, and comprehensive moderation policies, Xplorium ensures that users can engage with confidence, knowing that their personal information and online interactions are safeguarded. As a beacon of inclusivity and respect.", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453645/Screenshot_Capture_-_2024-04-18_-_00-59-33_mjhz71.png", 
    images : [
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453679/Screenshot_Capture_-_2024-04-18_-_01-03-41_t3xc66.png", 
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453656/Screenshot_Capture_-_2024-04-18_-_01-06-22_rbe5bl.png",
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453646/Screenshot_Capture_-_2024-04-18_-_01-05-37_aacdbz.png", 
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453660/Screenshot_Capture_-_2024-04-18_-_01-05-24_orx7aq.png", 
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453670/Screenshot_Capture_-_2024-04-18_-_01-13-31_oymkea.png", 
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453674/Screenshot_Capture_-_2024-04-18_-_01-13-45_sicwlj.png", 
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453678/Screenshot_Capture_-_2024-04-18_-_01-13-17_wab9l7.png", 
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453677/Screenshot_Capture_-_2024-04-18_-_01-12-45_mvpbyj.png", 
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453657/Screenshot_Capture_-_2024-04-18_-_01-12-32_jjsucf.png", 
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453665/Screenshot_Capture_-_2024-04-18_-_01-12-54_kbk8ua.png",
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453656/Screenshot_Capture_-_2024-04-18_-_01-11-39_bvev8v.png", 
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453655/Screenshot_Capture_-_2024-04-18_-_01-10-17_rymjp1.png", 
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453641/Screenshot_Capture_-_2024-04-18_-_00-59-45_lfn12x.png", 
          "https://res.cloudinary.com/dqprleeyt/image/upload/v1713453674/Screenshot_Capture_-_2024-04-18_-_01-15-00_ixw7uw.png", 
    ],
    level : "advanced"
  }, 
  {
    title : "MarketPlace App |  Make a gig now !", 
    shortDesc : "Gigster stands as the premier online marketplace, facilitating connections between talented freelancers and exciting opportunities spanning the globe. Whether you're a seasoned professional in search of freelance gigs or a business seeking top-tier talent to propel your projects forward, Gigster serves as your gateway to success in the dynamic world of freelancing and entrepreneurship. ", 
    longDesc : "With a user-friendly interface and robust features, Gigster streamlines the process of finding and securing projects, empowering freelancers to showcase their skills and businesses to access a pool of curated talent seamlessly. As a testament to its commitment to excellence, Gigster prides itself on fostering mutually beneficial partnerships, where freelancers thrive in diverse projects and businesses achieve their goals with the support of skilled professionals. Join Gigster today and unlock a world of opportunities where talent knows no bounds and potential knows no limits.", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1692036654/m8-min_rx93pn.png", 
    img2 : "", 
    img3 : "", 
    level : "advanced"
  }, 
  { 
    title : "An Awesome App that note your day by how many task you did and how many hours did you work!", 
    shortDesc : " Note Your Day isn't just another app; it's your personal productivity companion designed to help you monitor your daily tasks and work hours effortlessly. With its user-friendly interface and robust features, Note Your Day simplifies the process of logging your tasks and tracking your work hours.", 
    longDesc : "From jotting down your to-do list to recording the hours you devote to each task, Note Your Day provides valuable insights into your daily productivity and time management habits. Whether you're a freelancer, student, or professional, Note Your Day adapts to your lifestyle, offering actionable data to help you optimize your workflow and achieve your goals. Say hello to enhanced productivity and goodbye to time wasted with Note Your Day - the ultimate app for mastering your daily routine.", 
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1697571236/screencapture-localhost-3000-2023-10-17-20_32_44_z924qe.png", 
    img2 : "", 
    img3 : "", 
    level : "advanced"
  }, 
  {
    title : "A Dynamic Platform for Seamless Interaction", 
    longDesc : "The platform offers a seamless user experience, granting access to a plethora of functionalities. Users can effortlessly exchange messages or share URLs, while staying informed about who's online or offline through the connected status indicator. A comprehensive list showcases all registered users, alongside real-time updates on those currently active. With the ability to navigate profiles and modify personal information, the platform fosters interaction and customization, ensuring a dynamic and engaging environment for its users.    ", 
    shortDesc : "Effortlessly connecting users through a myriad of features, from messaging to real-time status updates and profile customization, fostering a dynamic and engaging platform experience.",
    image : "https://res.cloudinary.com/dqprleeyt/image/upload/v1709819133/jackjack_tcbzyi.png", 
    img2 : "https://res.cloudinary.com/dqprleeyt/image/upload/v1709818847/chat1_sdugsq.png", 
    img3 : "https://res.cloudinary.com/dqprleeyt/image/upload/v1709818860/chat2_oghkff.png", 
    img4 : "https://res.cloudinary.com/dqprleeyt/image/upload/v1709818868/chat3_cv0z56.png", 
    img5 : "https://res.cloudinary.com/dqprleeyt/image/upload/v1709819093/jackMeldown_qn3ui7.png", 
    img6 : "https://res.cloudinary.com/dqprleeyt/image/upload/v1709818967/chat5_cf3suv.png",
    level : "pro"
  }, 
]


const SingleProject = () => {


  const handleCLickOnTheWeBCraf = ()=>{
    window.open('https://www.webcraftagency.com/', '_blank');
  }

  const handleCLickOnYoutube = () => {
     window.open('https://youtu.be/0Qm5_dqb4F0/', '_blank');
  }
  
  useEffect(()=>{
    const x = ()=>{
      window.scrollTo({
          top: 0
      });
    }
    x();    
  },[]);
  
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const id = params.id;
    const [ID, setID] = useState(null); 

    useEffect(()=>{
      const x = ()=>{
        if(id === "1"){
          setID(1);
        }
        else if(id === "2"){
          setID(2);
        }
        else if(id === "3"){
          setID(3);
        }
        else if(id === "4"){
          setID(4);
        }
        else if(id === "5"){
          setID(5);
        }
        else if(id === "6"){
          setID(6);
        }
        else if(id === "7"){
          setID(7);
        }

          console.log(location);
        
      }
      x();
    }, []);


    const handleClick = ()=>{
      if(window.innerWidth > 900){
        //desktop
        navigate('/desktop/who-am-i')
      }
      else{
        //mobile
        navigate('/mobile/who-am-i');
      }
    }

  return (
    <div className='zocdojdqo'>
    {
      (ID !== null && ID !== undefined) && 
      <div className='ProjectSinglePage '>
        <div className="caseOne caseTTT">
          <img src={Logo} alt="" onClick={()=>{navigate('/');}} />
          <button onClick={()=>{navigate('/contact');}}>
            Contact
          </button>
        </div>

        <div className="row1 rowHHH">

        <div className="izbfheqds">
          {
            projects[ID].title
          }
          </div>

          
          <div className="zueduid">

            
          {
            projects[ID].level === "advanced" ? 
            <span className="span3 uffud spanLimeGrenn">Advanced</span>
            :
             projects[ID].level === "pro" ? 
             <span className="span3 ">Professional</span>
             :
             <span className="span3 uzuiosfuisf">Simple</span>
          }
            <span className="span3 spankkk">Impenetrable</span>
          </div>
         
          
        </div>

        <br />

         {

            ID && ( ID !== 7 && ID !== 4 ) && 
          <div className="rowzuididf">
              <img src={projects[ID].image} alt="" />  
          </div>
          }

        {
          ID && ID === 7  && 
          <>


            <br />
            
            <div className="rowzuididf">
              <img src={projects[ID].image} alt="" />
              <span>
                You can send messages or pictures URL and the system will automaticaly detect whether it is a picture or just a plain text.
              </span>
            </div>
             <br /><br />
            <div className='hr hrhrhr'/>
             <br /><br />
            <div className="rowzuididf">
              <img src={projects[ID].img2} alt="" />
             <span> You can see user's list and who is connected on the plateform, meaning that if the browser is closed, a disconnected status will be attributed to the user.</span>
            </div>
             <br /><br />
            <div className='hr hrhrhr'/>
            <br /><br />
            <div className="rowzuididf">
              <img src={projects[ID].img3} alt="" />
             <span>You can see all users registered in the plateform as well as the connected one.</span>
            </div>
             <br /><br />
            <div className='hr hrhrhr'/>
            <br /><br />
            <div className="rowzuididf">
              <img src={projects[ID].img4} alt="" />
             <span>You can create conversations with any user registered into the plateform.</span>
            </div>
            <br /><br />
            <div className='hr hrhrhr'/>
            <br /><br />
            <div className="rowzuididf">
              <img src={projects[ID].img5} alt="" />
             <span>You can visit any user's profile..</span>
            </div>
            <br /><br />
            <div className='hr hrhrhr'/>
            <br /><br />
            <div className="rowzuididf">
              <img src={projects[ID].img6} alt="" />
             <span>You can modify your profile..</span>
            </div>
          </>
        }

        
        {
          ID && ID === 4  && 
          <>
            <>
              <a style={{color : "whitesmoke"}}  href="https://drive.google.com/drive/folders/1Y1dWf9SI32ptnSy-cCvyD3zOl99cn1Xx" target="_blank" >Code Source Drive </a>
              <br/>
              <a style={{color : "whitesmoke"}}  href="https://drive.google.com/drive/folders/1pJWKAmm4IENeN1RGUGR7hYRlqQhIJ0yA" target="_blank" >SRS & Presentation</a>
              <br/>
              <a style={{color : "whitesmoke"}}  href="https://github.com/akramthedev/APPFE" target="_blank" >Code source GitHub</a>
            </>
            <br/>
            <div className="rowzuididf">
              <img src={projects[4].image} alt="" />
            </div>
          {
             projects && projects[4].images.map((img, index)=>{
              return(
                <div key={index} className="rowzuididf">
                  <img src={img} alt="" />
                </div>
              )
            })
          }
          </>
        }
          
        {
          (ID && ID === 1 )&& 
          <>
          <div className='hr hrhrhr'/>
          <div className="rowzuididf">
            <img src={Dashboard} alt="" />
           <span> Dashboard to track users donations and articles monetization</span>
          </div>
           <br /><br />
          <div className='hr hrhrhr'/>
<br /><br />

          <div className="rowzuididf">
            <img src={A1} alt="" />
            <span>
              Home Page, contains free and private content, the private one is for PREMIUM-Members only
            </span>
          </div>
           <br /><br />
          <div className='hr hrhrhr'/>
<br /><br />
          <div className="rowzuididf">
            <img src={Notifications} alt="" />
            <span>Notification page where users gets notifications if someone followed them or donated or other things...</span>
          </div>

           <br /><br />
          <div className='hr hrhrhr'/>
<br /><br />

          <div className="rowzuididf">
            <img src={Profile} alt="" />
            <span>A profile page, users can donate or follow, and the profile display numbers of articles, followers, followees, and also they can block the user ! </span>
          </div>


            <br /><br />
          <div className='hr hrhrhr'/>
<br /><br />
        
          <div className="rowzuididf">
            <img src={Profile2} alt="" />
            <span>Another profile page, for the user profile it shows their favorites articles and many other option</span>
          </div>
           <br /><br />
          <div className='hr hrhrhr'/>
<br /><br />
          <div className="rowzuididf">
            <img src={Tags} alt="" />
            <span>Tags page</span>
          </div>
            <br /><br />
          <div className='hr hrhrhr'/>
<br /><br />
          <div className="rowzuididf">
            <img src={Write} alt="" />
            <span>Page where authors write their articles, well managed so that they can use styles, and they can make their articles for premium members or not...</span>
          </div>
          <br /><br /> <br/><br />
          </>
        }
        
        

        {
          window.innerWidth > 600 ?
          <div className="rowHH mmmmmm">
          <div className="rowHHHH">
          Web Socket
          </div>
          <div className="rowHHHH rowHHHH1">
          React.js
          </div>
          <div className="rowHHHH rowHHHH2">
          Node.js
          </div>
          <div className="rowHHHH rowHHHH3">
          Express.js
          </div>
          <div className="rowHHHH rowHHHH4">
          MongoDb
          </div>

        </div>
        :
         <>
         <div className="rowHH JAJJAJAJ zuoqeqdqs ">
          <div className="rowHHHH">
          Web Socket
          </div>
          <div className="rowHHHH rowHHHH1">
          React.js
          </div>

        </div>
        <div className="rowHH JAJJAJAJ  ">
        <div className="rowHHHH rowHHHH2">
          Node.js
          </div>
          <div className="rowHHHH rowHHHH3">
          Express.js
          </div>
          <div className="rowHHHH rowHHHH4">
          MongoDb
          </div>
        </div>
         
         </>
        }



        <div className="rowHH textAliognCnet">
          {
            projects[ID].shortDesc
          }
        </div>


        

        <div className="rowHH textAliognCnet">
      {
            projects[ID].longDesc
          }
        </div>

        {
            ID === 3 ?
          <>
         <div className="zkxc">
            <div onClick={handleCLickOnTheWeBCraf} className="zueduid" >
              <a  className="djjd" href="https://webcraftagency.com/" target="_blank" rel="noreferrer" >Visit webcraft website</a>
              &nbsp;<ArrowForward className='arrowBack' />
            </div>
         </div>
          </>  
          :
          <>
         <div className="zkxc">
            <div onClick={handleCLickOnYoutube} className="zueduid" >
              <a  className="djjd" href="https://youtu.be/0Qm5_dqb4F0/" target="_blank" rel="noreferrer" >Watch Demo on Youtube</a>
              &nbsp;<ArrowForward className='arrowBack' />
            </div>
         </div>
          </> 
          }



        <div className="PreviousPage zkxc" onClick={()=>{handleClick();}}>
          <div className="zueduid ">
            <ArrowBack className='arrowBack' />&nbsp;Back to previous page
          </div>  
        </div>
    </div>
    }
    </div>
  )
}

export default SingleProject
