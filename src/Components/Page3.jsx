import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'

export default function Page3() {
    return (
        <div>
            <div className="container ">
                <h2 className='Lime_text text-center my-lg-5 py-lg-5 mt-5  font_1  '>Create Your Collection</h2>
                <div className="row mt-lg-5">
                    <div className="col-lg-8">
                        <div className='d-flex justify-content-lg-start  justify-content-center'>
                            <div >
                                <div>
                                    <p className='text-white fs-custom-s' >COLLECTION NAME :</p>
                                    <input type="text" name='collection' className='border-112 py-2 px-5 w-100' placeholder='Enter Collection' />

                                </div>
                                <div className='mt-5'>
                                    <p className='text-white fs-custom-s' >DESCRIPTION :</p>
                                    <input type="text" name='collection' className='border-112 py-2 px-5 w-100' placeholder='Enter Collection' />

                                </div>
                                <div className='mt-5'>
                                    <p className='text-white fs-custom-s' >SYMBOL :</p>
                                    <input type="text" name='collection' className='border-112 py-2 px-5 w-100' placeholder='Enter Collection' />

                                </div>
                                <div className='mt-5'>
                                    <p className='text-white fs-custom-s' >MINT PRICE :</p>
                                    <input type="text" name='collection' className='border-112 py-2 px-5 w-100' placeholder='Enter Collection' />

                                </div>
                                <div className='mt-5'>
                                    <p className='text-white fs-custom-s' >ROYALTIES :</p>
                                    <input type="text" name='collection' className='border-112 py-2 px-5 w-100' placeholder='Enter Collection' />

                                </div>
                                <div>
                                    <h2 className="text-white mt-5 pt-5">Advanced</h2>
                                    <div className='d-flex gap-lg-5 align-items-center gap-3 my-3 my-lg-5'>
                                        <div>
                                            <p className='text-white fs-custom-s mb-0'  >SYMBOL :</p>

                                        </div>
                                        <div>
                                            <input type="text" name='collection' className='border-112 py-2 px-5 w-100' placeholder='Enter Collection' />

                                        </div>

                                    </div>
                                    <div className='d-flex gap-lg-4 align-items-center gap-3 my-3  my-lg-5'>
                                        <div>
                                            <p className='text-white fs-custom-s mb-0' >MINT PRICE :</p>

                                        </div>
                                        <div>
                                            <input type="text" name='collection' className=' ms-lg-2 border-112 py-2 px-5 w-100' placeholder='Enter Collection' />

                                        </div>

                                    </div>
                                    <div className='d-flex align-items-center gap-lg-5 gap-3 my-3  my-lg-5'>
                                        <div>
                                            <p className='text-white fs-custom-s mb-0' >Royalties :</p>

                                        </div>
                                        <div>
                                            <input type="text" name='collection' className='border-112 py-2 px-5 w-100' placeholder='Enter Collection' />

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='d-flex justify-content-lg-end justify-content-center'>
                            <div className="card bg-transparent border-111 border-radius p-3">
                                <img className='img-fluid' src="assets/images/p3_img_1.png" alt="" />
                                <div>
                                    <h3 className='text-white ps-4 pt-3'>NFT #1</h3>
                                    <p className='text-muted fs-custom-s ps-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Mollitia fuga neque assumenda.</p>
                                    <div className='d-flex gap-3 ps-4'>
                                        <img src="assets/images/nice1.png" alt="" />
                                        <span className='Lime_text'> 0.05</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex d-none d-lg-block justify-content-between align-items-center flex-wrap mt-5 pt-5'>
                    <div><h3 className='text-white '>Upload Assets</h3></div>
                    <div><h3 className='text-white text-end'>Generate</h3>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                    <div>
                        <h3 className='text-white d-block d-lg-none text-center mt-5'>Upload Assets</h3>
                        <div className='border-112 mt-5  d-flex justify-content-center align-items-center p-5'>
                            <div className='px-4 py-3'>
                                <div className="d-flex justify-content-center mb-4">
                                    <AiOutlineDownload className="text-center  mb-0 Lime_text" style={{ fontSize: "80px", fill: "#BBF247" }} />

                                </div>
                                <p className="text-muted fs-5 mb-1 text-center">Drag “n” Drop NFT Assets</p>
                                <p className="text-white fs-5 text-center">Folder here</p>

                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='text-white text-end'>
                            <h3 className='text-white d-block d-lg-none text-center mt-5 mb-5 text-end'>Generate</h3>

                        </div>
                        <div className='mt-xl-5 '>
                            <img className='img-fluid' src="assets/images/skeleton.png" alt="" />

                        </div>
                    </div>
                </div>
                <div className="text-center my-lg-5  py-5">
                    <a href="#" className='btn btn-warning2'>Connect</a>

                </div>
            </div>
        </div>
    )
}
