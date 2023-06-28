import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import React from 'react';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content} >{props.children}</div>
    </div>
}


const PortalElement = document.getElementById('overlays');
const Modal = (props) => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, PortalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElement)}    
    </React.Fragment>
};

export default Modal;