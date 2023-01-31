import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import bnb from "../assets/bnb.svg"
import wallet from "../assets/wallet.svg"

function Connect_wallet(props) {
  return (
    <div>
        <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal_name'
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
        <div className='py-3'>
        <div className='d-flex justify-content-center'>
        <img src={wallet} className='wallate_img' alt="" />
        


        </div>
        <h3 className='wallet_conent_modal text-center'>Wallet Connect</h3>
        <p className='wallet_subtext text-center'>Scan with WalletConnect to connect</p>

        </div>
        <hr />
        <div className='py-3'>
        <div className='d-flex justify-content-center'>
        <img src={bnb} alt="" />
        


        </div>
        <h3 className='wallet_conent_modal text-center'>Binance Chain Wallet</h3>
        <p className='wallet_subtext text-center'>Connect to your Binance Chain Wallet</p>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>

    </div>
  )
}

export default Connect_wallet
