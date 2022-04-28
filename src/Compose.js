import React, {useRef} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Compose = (props) => {
    const recipientRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    const sendEmail = async () => {
        const email = {
            sender: "my_email@email.com",
            recipient: recipientRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value,
            date: new Date()
        };

        const emailSendRequest = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        };

        const response = await fetch("http://localhost:3001/send", emailSendRequest);
        const data = await response.json();
        props.setComposeSent({messageSent: true, statusCode: data.status});
    }

    if (props.composeSent.messageSent) {
        return (
            <div className={"composeForm"}>
                Status: {(props.composeSent.statusCode === "success") ? "Message Sent Successfully" : "Unable to send message. Please try again."}
            </div>
        );
    } else {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="compose email">
                    <TableBody>
                            <TableRow>
                                <TableCell align="right">To: </TableCell>
                                <TableCell align="right"><TextField fullWidth inputRef={recipientRef} type="text" placeholder="Recipient Email" name="emailRecipient"/></TableCell>
                            </TableRow>
                        <TableRow>
                            <TableCell align="right">Subject: </TableCell>
                            <TableCell align="right"><TextField fullWidth inputRef={subjectRef} type="text" placeholder="Email Subject" name="emailSubject"/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Message: </TableCell>
                            <TableCell align="right"><TextField fullWidth multiline rows={4} inputRef={messageRef} className={"message"} name="emailMessage"/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">&nbsp;</TableCell>
                            <TableCell align="right"><Button variant="contained" id="inboxButton" className="button" name="send" onClick={sendEmail}>Send</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            // <div className="composeForm">
            //
            //
            //     To: <TextField inputRef={recipientRef} type="text" placeholder="Recipient Email" name="emailRecipient"/><br/><br/>
            //     Subject: <TextField inputRef={subjectRef} type="text" placeholder="Email Subject" name="emailSubject"/><br/><br/>
            //     Message: <TextField multiline rows={4} inputRef={messageRef} className={"message"} name="emailMessage"/><br/><br/>
            //     <Button variant="contained" id="inboxButton" className="button" name="send" onClick={sendEmail}>Send</Button>
            // </div>
        );
    }
}

export default Compose;