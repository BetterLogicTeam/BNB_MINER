import React, { useEffect, useState } from 'react';
import { Navbar, Button, Container, Nav, Offcanvas, } from 'react-bootstrap';
import head from '../assets/bnbminer.png';
import { FaLink } from 'react-icons/fa';
// import {BsMoon,BsSun} from 'react-icons/bs';
import { MdLegendToggle } from 'react-icons/md';
import Connect_wallet from './Connect_wallet';
import { loadWeb3 } from '../apis/api';


const Header = ({address,setaddress}) => {

  let [btnTxt, setBtTxt] = useState("Connect");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img className='head-img' src={head} alt="bnbminer" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
            <Button className='head-btn d-lg-block d-none outline-none' onClick={() => setModalShow(true)}><FaLink /> {btnTxt}</Button></Nav.Link>
            <Nav.Link>
            <Connect_wallet
        show={modalShow}
        btnTxt={btnTxt} setBtTxt={setBtTxt} setaddress={setaddress} address={address}
        onHide={() => setModalShow(false)}
      />
            
            
            <Button variant="none" className="d-md-none" onClick={handleShow}>
              <MdLegendToggle className='offcanvas-btn' />
            </Button>
            </Nav.Link>
            <Offcanvas className="offcanvas w-100" show={show} onHide={handleClose} responsive="lg">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='off-title'><span className='border-bottom border-dark'></span></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <h6 className='text-center' onClick={() => setModalShow(true)}>
                  <a className='text-decoration-none text-dark d-block d-md-none' href="#"></a>
                </h6>
                <br />
                <div>
                  <h6 className='text-center'>
                    <a className='text-decoration-none d-md-none d-block text-dark' href="#">Dark Theme</a>
                  </h6>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
            
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Header;




