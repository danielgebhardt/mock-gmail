import React from 'react';
import Button from '@mui/material/Button';

const Menu = (props) => {

    const inboxClicked = () => {
        props.showCurrentEmail({});
        props.clearSearch();
        props.setCompose(false);
        props.updateInbox();
    }

    const composeButtonClicked = () => {
        props.setCompose(true);
        props.setComposeSent({messageSent: false, statusCode: ''});
    }

    return (
        <div className="menu">
            <Button variant="contained" id="inboxButton" className="button" onClick={inboxClicked}>Inbox</Button>
            <br/><br/>
            <Button variant="contained" id="composeButton" className="button" onClick={composeButtonClicked}>Compose</Button>
            <br/><br/>
        </div>
    );
}

export default Menu;