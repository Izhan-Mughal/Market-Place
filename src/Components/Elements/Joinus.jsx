import React from 'react'
import {FaDiscord,FaTwitter}from 'react-icons/fa'

export default function Joinus() {
  return (
    <div>
        <div className="container mt-lg-5 py-xl-5">
       
                <div className='d-lg-flex  py-5 justify-content-around border-custom-m mx-xl-4 align-items-center d-block'>
                    <div className='d-flex align-items-center gap-lg-3 gap-1 justify-content-center '>
                        <FaDiscord className='icon_1 '/>
                        <div>
                            <p className='border_p  mb-0 text-white'>Discord</p>
                        </div>
                    </div>
                    <div className='text-center fs-3 font_1 Lime_text my-3 my-lg-0'> Join Us Now</div>
                    <div className='d-flex align-items-center justify-content-center gap-lg-3 gap-1 '>
                        <FaTwitter className='icon_1'/>
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
