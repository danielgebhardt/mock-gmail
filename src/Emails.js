import Email from './Email';
import Compose from "./Compose";

const Emails = (props) => {
    let alternator = true;

    const oddOrEven = () => {
        alternator = !alternator;
        return alternator;
    }

    const singleEmail = (
        <div className="singleEmail">
            <strong>{props.currentEmail.subject}</strong><br/>
            From: {props.currentEmail.sender}<br/>
            Date:{new Date(props.currentEmail.date).toLocaleString()}<br/><br/><br/>
            {props.currentEmail.message}
        </div>
    );

    const searchResults = (
        <div>
            <div className="email">
                <div className="sender"><strong>Sender</strong></div>
                <div className="subject"><strong>Subject</strong></div>
                <div className="dateReceived"><strong>Date</strong></div>
            </div>
            {(props.searchResults[0] === "No messages matched your search.") ?
                <div>No messages matched your search.</div> : props.searchResults.map((email) => <Email
                    clearSearch={props.clearSearch} showCurrentEmail={props.showCurrentEmail} oddEven={oddOrEven()}
                    emailData={email} key={email.id}/>)}
        </div>
    );

    const emailList = (
        <div>
            <div className="email">
                <div className="sender"><strong>Sender</strong></div>
                <div className="subject"><strong>Subject</strong></div>
                <div className="dateReceived"><strong>Date</strong></div>
            </div>
            {/*{props.emailList.map(({id, sender, subject, date}) => <Email oddEven={oddOrEven()} key={id} sender={sender} subject={subject} dateReceived={date} />)}*/}
            {props.emailList.map((email) => <Email clearSearch={props.clearSearch}
                                                   showCurrentEmail={props.showCurrentEmail} oddEven={oddOrEven()}
                                                   emailData={email} key={email.id}/>)}
        </div>
    );

    if (props.compose) {
        return <Compose composeSent={props.composeSent} setComposeSent={props.setComposeSent}/>
    } else {
        return (props.searchResults.length > 0) ? searchResults : (props.currentEmail?.id) ? singleEmail : emailList;
    }
}

export default Emails;