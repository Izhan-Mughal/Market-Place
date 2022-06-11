import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'




export default function Page2() {
  const now = 30;

const progressInstance = <ProgressBar className='height_custom rounded-0'  now={now} />;
  return (
    <div>
      <div className="container">
        <div className="row align-items-center my-5 mx-0">
          <div className="col-lg-6">
            <div className="d-flex justify-content-center">
              <img src="assets/images/p_img_1.png" alt="" className="img-fluid h-75" />
            </div>

          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div>
              <h2 className='Lime_text font_1'>Shapes Vol2</h2>
              <p className='fs-custom-s text-white mt-3'> Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Laudantium <br className="d-none d-lg-block" /> enim totam officiis. </p>
              <div className="d-flex justify-content-around mt-5">
                <div>
                  <button className="btn btn_lime">Price: 0.05</button>
                </div>
                <div>
                  <button className="btn btn_lime">Items: 242</button>

                </div>
                <div>
                  <button className="btn btn_lime">Royalties: 8%</button>

                </div>
              </div>
              <div className='mt-3'>
                <input type="button" value="Mint" className='w-100 btn btn-outline-light border-radius2 mt-5' />
              </div>
              {/* <ProgressBar variant="warning" now={60} /> */}

              <div className='my-5'>
                {progressInstance}
                <p className='text-white text-center pt-3'>{`${now}%`}  Claimed</p>
              </div>
              <div>
                <p className='text-center border-111 mb-0'>Details</p>
                <div className='border-111 px-3 py-3'>
                  <div className='row'>
                    <div className='col-6'>
                      <p className="text-white">Owner:</p>
                    </div>
                    <div className='col-6'>
                      <p className="text-white text-start">Lorem Ipsum Dolor</p>

                    </div>

                  </div>
                  <div className='row'>
                    <div className='col-6'>
                      <p className="text-white ">Presale:</p>
                    </div>
                    <div className='col-6'>
                      <p className="text-white text-start">Yes</p>

                    </div>

                  </div>
                  <div className='row'>
                    <div className='col-6'>
                      <p className="text-white"># of Creators:</p>
                    </div>
                    <div className='col-6'>
                      <p className="text-white text-start">1</p>

                    </div>

                  </div>
                  <div className='row'>
                    <div className='col-6'>
                      <p className="text-white">Go Live Date:</p>
                    </div>
                    <div className='col-6'>
                      <p className="text-white text-start">7.02.2022</p>

                    </div>

                  </div>
                  <div className='row'>
                    <div className='col-6'>
                      <p className="text-white">Captcha Enabled:</p>
                    </div>
                    <div className='col-6'>
                      <p className="text-white text-start">No</p>

                    </div>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
