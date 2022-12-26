import React, { useState } from "react";
import { db, auth } from '../chatapp'
import firebase from 'firebase/compat/app'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')
    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div >
            <form onSubmit={sendMessage}>
                <div className="sendMsg ">
                    <input class="form-control form-rounded" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message..." type="text" required />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="btn btn-success btn-rounded" type="submit">send</button>

                </div>
            </form>
        </div>
    )
}

export default SendMessage;