import React from 'react'
import { Nav, Navbar, Container, } from 'react-bootstrap'
import { useHistory ,Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'



export default function Header() {
    const history = useHistory();
    return (
        <>
            <Navbar bg="transparent" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand ><img className='header-logo' src={process.env.PUBLIC_URL + "assets/images/logo.png"} alt="" onClick={()=>history.push('/')} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="col d-flex justify-content-between align-items-lg-center ">
                            <div className='d-flex col justify-content-center flex-lg-row flex-column algn-items-lg-center '>
                   <div className="d-flex input_custom2">
                   <div >
                                <AiOutlineSearch className="fs-5"/>
                             </div>
                            <input type="text" className='input_custom ' placeholder='SEARCH HERE'/>
                            </div>
                   </div>
                            <button className='btn text-white fs-custom-s'> CREATE NEW </button>
                            <button className='btn btn-outline-light  px-6 border-radius ms-xl-5 fs-custom-s'>CONNECT</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <img src={process.env.PUBLIC_URL + "assets/images/bg.png"} class='bg-image' alt="" /> */}
        </>
    )
}
