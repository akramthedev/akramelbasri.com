import React from 'react'
import { useNavigate } from 'react-router-dom'

const Project = ({data}) => {
    const navigate=useNavigate();

  return (
    <>
    {
        data && 
        <div className={data ? "zidusck caseTwom6 caseTwom6zfieduq addColorBackGroundKK" : "zidusck caseTwom6 caseTwom6zfieduq "} onClick={()=>{navigate(`/project/${data.id}`);}}>
            <div className="row1">
            {
                (data.id === "1" || data.id === "4") && 
                <>
                <svg width="16" height="16" viewBox="0 0 64 64" fill="none"><path d="M39.64 40.83L33.87 56.7a1.99 1.99 0 0 1-3.74 0l-5.77-15.87a2.02 2.02 0 0 0-1.2-1.2L7.3 33.88a1.99 1.99 0 0 1 0-3.74l15.87-5.77a2.02 2.02 0 0 0 1.2-1.2L30.12 7.3a1.99 1.99 0 0 1 3.74 0l5.77 15.87a2.02 2.02 0 0 0 1.2 1.2l15.86 5.76a1.99 1.99 0 0 1 0 3.74l-15.87 5.77a2.02 2.02 0 0 0-1.2 1.2z" fill="#FFC017"></path></svg>
                &nbsp;
                </>
            }
            {
                data.title
            }  
            </div>
            <div className="row2">
                <div className="column1">
                
                {
                    data.pro ? 
                    <>
                    <span className='span2 span3'>Professional</span>&nbsp;
                    <span className='span2 span3 span5666'>Best</span>
                    </>
                    :
                    <>
                    {
                        data.level ? <span className='span2'>Advanced</span>
                        :
                        <span className='span1'>Medium</span>
                    }
                    </>
                }

                &nbsp;&nbsp;&nbsp;
                {
                    data.description
                }
                </div>
                <div className="column2">
                    <img src={data.image} className='zdqxzdqx' alt="" />
                </div>
            </div>
        </div>
    }
    
    </>
  )
}

export default Project
