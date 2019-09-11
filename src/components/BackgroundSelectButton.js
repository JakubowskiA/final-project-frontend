import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import BackgroundSelectModal from './BackgroundSelectModal'

function BackgroundSelectButton (props) {
    const [modalShow, setModalShow] = useState(false)
    
    return(
        <BackgroundSelectModal show={modalShow} onHide={() => setModalShow(false)} customizeBackground={props.customizeBackground}/>
    )}

export default withRouter(BackgroundSelectButton)