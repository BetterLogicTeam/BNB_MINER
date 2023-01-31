import React from 'react';
import { Button, Card, } from 'react-bootstrap';
import {FaTelegram} from 'react-icons/fa';
import bscs from '../assets/bscscan.png';

const Middle = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-4">
        <div className="col-lg-6 col-md-6 p-4 col-sm-6 col-10 rounded" style={{background:"linear-gradient(90deg,#539600 0,#6bbf44 51%,#539600)"}}>
        <h2>You have</h2>
            <h2> - Miners</h2>
            <h2> - BNB</h2>
            <h2>Contract</h2>
            <h2>1,539.260 BNB</h2>
        </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-lg-6 col-md-6 col-sm-6 col-10 rounded p-0">
          <h4 className='text-white mb-2 bnb'>BNB In Barrel:</h4>
          <input className='bg-white py-1 rounded  text-center w-100' type="text" placeholder='0(? till full)' disabled />
          </div>
        </div>
      </div>

     <div className="container ">
        <div className="row justify-content-center mt-4">
          <div className=" col-lg-6 col-md-6 col-sm-6 col-10 rounded bg-light pt-4 pb-4">
          <div className='text-center mb-3' >Your TVL = - BNB</div>
            <div className='d-flex justify-content-between'>
                <Button className='disabled border-0 bg-dark text-muted' ><span>HIRE MINERS</span></Button>
                <span className='' >with</span>
                <input className='rounded w-25 text-center' type="number" min={0}  placeholder="0 BNB" />
            </div>
            <div><Button className='mt-4 w-100 disabled border-0 bg-dark text-muted' ><span>Compound</span></Button></div>
            <div><Button className='mt-4 w-100 disabled border-0 bg-dark text-muted' ><span>Pocket Your BNB</span></Button></div>
          </div>
        </div>
      </div> 

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-6 col-10">
        <div><Button className='mt-4 mx-auto d-block w-100 border-0' style={{background:"linear-gradient(90deg,#539600 0,#6bbf44 51%,#539600)"}} ><span>GET STARTED!</span></Button></div>
      <div><Button className='mt-4 mx-auto d-block w-100 border-0' style={{background:"linear-gradient(90deg,#539600 0,#6bbf44 51%,#539600)"}} ><span>MEMBER'S VIDEO</span></Button></div>

        </div>
      </div>
            </div>

      <div className="container mt-4 mb-4  ">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-6 col-10 bg-light p-2 rounded">
            <h4 className='liso'>Links & Social Media</h4>
            <div className='text-center'>
            <a href="https://t.me/bnbminer" target="_blank" style={{textDecoration:'none'}}> <FaTelegram /><span>Telegram</span></a>
            <a href="https://t.me/bnbminer" target="_blank" className='mx-2' style={{textDecoration:'none',}}> <img className='liso-img' src={bscs} alt="" /> <span>BSCScan</span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Middle;