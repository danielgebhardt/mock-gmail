import React from 'react';

const Compose = (props) => {

    let sentStatus;
    const recipientRef = React.createRef();
    const subjectRef = React.createRef();
    const messageRef = React.createRef();


    const sendEmail = async () => {
        const email = {
            sender : "my_email@email.com",
            recipient : recipientRef.current.value,
            subject : subjectRef.current.value,
            message : messageRef.current.value,
            date : new Date()
        };

        const emailSendRequest = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        };

        const response = await fetch("http://localhost:3001/send", emailSendRequest);
        const data = await response.json();
        sentStatus = data.status;
    }



    return (
        <div>

            To: <input ref={recipientRef} type="text" placeholder = "Recipient Email" name="emailRecipient" /><br />
            Subject: <input ref={subjectRef} type="text" placeholder = "Email Subject" name="emailSubject" /><br />
            Message: <textarea ref={messageRef} className={"message"} name="emailMessage" />
            <button name="send" onClick={sendEmail}>Send</button>


        </div>
    );
}

export default Compose;