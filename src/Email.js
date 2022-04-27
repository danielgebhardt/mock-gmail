import React, {useState} from 'react';
import './App.css';

const Email = (props) => {
    const updateCurrentEmail = () => {
        props.clearSearch();
        props.showCurrentEmail(props.emailData);
    };

    return (
        <div onClick={updateCurrentEmail} className={(props.oddEven) ? "email emailOdd" : "email emailEven"}>
            <div className="sender">{props.emailData.sender}</div>
            <div className="subject">{props.emailData.subject}</div>
            <div className="dateReceived">{new Date(props.emailData.date).toLocaleString()}</div>
        </div>
    );
}

export default Email;