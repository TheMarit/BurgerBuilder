import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <React.Fragment>
    <Backdrop show={props.purchasing} cancel={props.cancel}/>
    <div 
        className={classes.Modal}
        style={{
            transform: props.purchasing ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.purchasing ? '1' : '0'
        }}
    >
        {props.children}
    </div>
    </React.Fragment>
)

export default modal;