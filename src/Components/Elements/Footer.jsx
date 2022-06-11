import React from 'react'

export default function Footer() {
  return (
    <div>
  <div className="container">
  <div className="d-flex justify-content-around mt-lg-5 mt-5 pt-5 mx-2 mx-lg-0 flex-wrap">
        <div>
          <img src="assets/images/logo.png" className='w_25' alt="" />
          <p className='mt-lg-4 mt-3 text-white fs-custom-s'>
            Lorem ipsum dolor sit amet consectetur adipisicing <br className="d-lg-block d-none" /> elit magni

          </p>
        </div>
        <div >
          <span className="text-white fw-bold"> | &nbsp; <span className='text-white mb-0 fs-custom-s'> Lorem Ipsum</span> </span>
          <p className='mt-lg-4 mt-3 text-white fs-custom-s'>
            Lorem ipsum dolor sit amet consectetur adipisicing

          </p>
          <p className='mt-lg-3 mt-3 text-white fs-custom-s'>
            Call Us: 1234567890

          </p>
          <p className='mt-lg-3 mt-3 text-white fs-custom-s'>
            Lorem ipsum

          </p>

        </div>
        <div >
          <span className="text-white fw-bold fs-custom-s"> | &nbsp; </span> <span className='text-white fs-custom-s me-lg-5 '> SIGN UP FOR EMAIL UPDATES</span>
          <div className='position_1 d-flex align-items-start'>
            <div className='position_2'>
              <input className='bg-dark text-white border-0 py-2 border-radius' type="text" placeholder='Your Email-address' />
            </div>
            <div className='position_3'>
              <input type="button" className='btn btn-warning border-0 py-2 fs-custom-s text-dark' value={'Subscribe'} />
            </div>
            <p className='text-white fs-custom-s mt-5 pt-3'>Sign up with your email address to recieve news and updates</p>
          </div>
        </div>
     
      </div>
      <hr className='text-white my-4' />
      <p className='text-muted text-center text-lg-start fs-custom-s '>Copyright c 2022 Lorem. All Rights Reserved.</p>
  </div>
    </div>
  )
}
