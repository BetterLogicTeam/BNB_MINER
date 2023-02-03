import React, { useEffect, useState } from 'react';
import { Button, Card, } from 'react-bootstrap';
import {FaTelegram} from 'react-icons/fa';
import bscs from '../assets/bscscan.png';
import { bnbMinerContractAbi, bnbMinerContractAddress } from '../Contract/Contract';
import Web3 from "web3";


const Middle = ({address}) => {

  const [balance, setbalance] = useState(0);
  const [walletbalance, setwalletbalance] = useState(0);
  const [getValue, setgetValue] = useState();
  const [spinner, setspinner] = useState(false);

  const balance_Amount = async () => {
    try {
      const web3 = window.web3;
console.log("address",address);
      const webSupply = new Web3(
        "https://data-seed-prebsc-1-s1.binance.org:8545/"
      );

      let myBalance = new web3.eth.Contract(
        bnbMinerContractAbi,
        bnbMinerContractAddress
      );
      let myBalanceOf = await myBalance.methods
        .getBalance()
        .call();
        let walletBalance = await web3.eth.getBalance(address)
        walletBalance= web3.utils.fromWei(walletBalance);
        let walletBalanceof = walletBalance.slice(0, 7);
        setwalletbalance(walletBalanceof)
        // alert(walletBalance)
        myBalanceOf = web3.utils.fromWei(myBalanceOf);
      console.log("myBalanceOf", myBalanceOf);
      myBalanceOf = myBalanceOf.slice(0, 5);
      setbalance(myBalanceOf);
      // console.log("myBalanceOf",myBalanceOf);
    } catch (e) {
      console.log("Error While Calling Balance amount", e);
    }
  };
  console.log("address",address);



  const buy_Token = async () => {
    try {
      setspinner(true);
      const web3 = window.web3;

      let myToken = new web3.eth.Contract(bnbMinerContractAbi, bnbMinerContractAddress);
      let value = web3.utils.toWei(getValue);
      
      await myToken.methods.seedMarket().send({
        from: address,
        value:value
      });
      alert("value",value)

      setspinner(false);
    } catch (e) {
      console.log("Error While calling Buy token fuction",e);
    }
    setspinner(false);
  };

  useEffect (() => {
    balance_Amount();
  });

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-4">
        <div className="col-lg-6 col-md-6 p-4 col-sm-6 col-10 rounded" style={{background:"linear-gradient(90deg,#539600 0,#6bbf44 51%,#539600)"}}>
        <h2>You have</h2>
            <h2> - Miners</h2>
            <h2> {walletbalance} BNB</h2>
            <h2>Contract</h2>
            <h2>{balance} BNB</h2>
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
                <input className='rounded w-25 text-center' type="number" min={0}  placeholder="0 BNB" onChange={(e) => setgetValue(e.target.value)}/>
            </div>
            
              <div><Button className='mt-4 w-100 bttn_spinner border-0 bg-dark text-muted' onClick={() => buy_Token()}>
              {spinner == true ? (
              <p class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </p>
              ) : (
                <p class="">
                 <span class="">Compound</span>
               </p>
              )}
              </Button></div>
            
          
            
            
            <div><Button className='mt-4 w-100 border-0 bg-dark text-muted' ><span>Pocket Your BNB</span></Button></div>
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