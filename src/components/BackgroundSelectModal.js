import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BackgroundSelectModal (props) {
    const [show, setShow] = useState(false)

    const handleClose = e => {
        setShow(false)
    }

    const handleShow = e => {
        setShow(true)
    }
    
    return(
    <>
    <button onClick={handleShow} className="background-btn"> </button>
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <p>Choose your background.</p>
          <div className="background-container" onClick={(event)=>props.customizeBackground(event)}>
          <div className="rainbow-btn" id="rainbow" ><br/></div>
          <br/>
          <div className="blue-green-btn" id="blue-green"><br/></div>
          <br/> <br/>
          <div className="bgp-btn" id="bgp"><br/></div>
          <br/> <br/>
          </div>
          
        </Modal.Body>
      </Modal>
      </>
    )}

export default withRouter(BackgroundSelectModal)