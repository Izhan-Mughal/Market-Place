import React from 'react'
import {FaDiscord,FaTwitter}from 'react-icons/fa'

export default function Joinus() {
  return (
    <div>
        <div className="container mt-lg-5 py-xl-5">
       
                <div className='d-flex  py-5 justify-content-around border-custom-m mx-xl-4 align-items-center'>
                    <div className='d-flex align-items-center gap-lg-3 gap-1 '>
                        <FaDiscord style={{fontSize:"70px"}}/>
                        <div>
                            <p className='border_p  mb-0 text-white'>Discord</p>
                        </div>
                    </div>
                    <div className='text-center fs-3 font_1 Lime_text'> Join Us Now</div>
                    <div className='d-flex align-items-center gap-lg-3 gap-1'>
                        <FaTwitter style={{fontSize:"70px"}}/>
                        <div>
                            <p className='border_p text-white mb-0'>Twitter</p>
                        </div>
                    </div>

                </div>
        </div>
        <hr className='text-white mt-lg-5 mt-5' />
    </div>
  )
}
