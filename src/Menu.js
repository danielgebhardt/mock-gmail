import React from 'react';

const Menu = (props) => {

    const inboxClicked = () => {
        props.showCurrentEmail({});
        props.clearSearch();
        props.setCompose(false);
    }

    const composeButtonClicked = () => {
        props.setCompose(true);
    }

    return (
        <div className="menu">
            <button id="inboxButton" className="button" onClick={inboxClicked}>Inbox</button>
            <br/><br/>
            <button id="composeButton" className="button" onClick={composeButtonClicked}>Compose</button>
            <br/><br/>
        </div>
    );
}

export default Menu;