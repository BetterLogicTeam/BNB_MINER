import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Footer = ({address}) => {

  const [refearal, setrefearal] = useState("");
  const [clipboard, setclipboard] = useState(false);
  const [value, setvalue] = useState({address});

  return (
    <Container className="mt-5 text-dark ftr">
    
     <Row className="">
        <Col lg={6} md={12}>
        <CopyToClipboard text={value}
          onCopy={() => setclipboard(true)}>
          <button>{address}</button>
        </CopyToClipboard>
        {clipboard ? <span style={{color: 'red'}}>Copied.</span> : null}
            <div className='rounded ftr-back'>
                <div className='ftr-para' style={{padding: '1rem', paddingBottom:'2.5rem'}}>
          <div className="card-title">Sustainability:</div>
          <div className="card-text ">
            <p>BNB MINER is sustained by continued community support, just 
          like every other crypto coin, token or project. The 
          difference is, BNB Miner also has an algorithm that doesn't 
          allow others to instantly dump their coins on the community.</p>
          <p>BNB Miner also allows you to stabilize and increase your 
            TVL by taking long-term advantage of its compound feature.</p>
          </div>
          </div>
          </div>
          

         <div className=' rounded mt-5 mb-4 ftr-back'>
            <div className='ftr-para' style={{padding: '1rem',paddingBottom:'1.5rem'}}>
          <div className="card-title">Verified Public Contract</div>
          <div className="card-text">
            <p>The BNB Miner contract is public, verified and can be viewed here on 
              <a href="https://bscscan.com/address/0xce93f9827813761665ce348e33768cb1875a9704" target="_blank" rel='norefferer'> BSCScan</a> </p>
          <p>You can also get verified proof of our "Longest Running 
            Miner" claim on BSCscan <a href="https://bscscan.com/tx/0x4ef9c46f2580f0ac36cc397f730c55518ae0bce51e018bb18ab77975d3ca5341" target="_blank" rel='norefferer'>
           here</a> </p>
          </div>
        </div>
        </div>
        </Col>

        <Col lg={6} md={12} >
          <div className=" rounded ftr-back" style={{padding: '1rem'}}>
            <div className="card-title">Miner Info</div>
            <div className="card-text">
                <p>
            BNB Miner is designed for individuals with a long-term 
            vision. It is not for those who want instant profits that 
            ultimately harm others. Miners can be viewed as internal 
            tokens whose value rises and falls based on the combined 
            actions of the community, just like any other coin or 
            token that you may hold. But, unlike your average coins and 
            tokens, BNB Miner allows you to stabilize and increase 
            your TVL by taking long-term advantage of its compound 
            feature.
          </p>
          <p>
            TVL is your current estimated "total value locked", an 
            estimated value of your total miners. Once miners are 
            hired, they work for you indefinitely, therefore your TVL 
            can not be withdrawn in one lump sum. When you hire miners
            , they fill your barrel with BNB throughout the day with 
            an estimated daily total of 3% of your TVL. You can pocket 
            or compound the BNB accumulated in your barrel at any 
            time. Pocketing too often will ensure a decrease in TVL, 
            which in turn will ensure a decrease in your daily payouts. 
            The value of miners continuously increases and decreases 
            throughout the day, therefore it is normal to see your 
            personal TVL fluctuating as your barrel continues to fill.
          </p>
            </div>
            </div>
        </Col>
     </Row>

     <Row className=" mt-3 mb-3 ">
        <Col className="">
          <div className=' rounded p-4 ftr-back'>
            <div className="card-title  ">Referrals</div>
            <div className="card-text">
          Share your BNB Miner referral link, our contract pays you a 10%
          referral fee when anyone uses your link to hire miners:
          </div>
          <div>
            Please connect your wallet to see your referral link.
          </div>
          </div>
        </Col>
     </Row>
     </Container>
    
  );
}

export default Footer;