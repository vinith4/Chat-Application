import React,{useState,useEffect,useRef,useContext} from 'react'
import SendMessage from './SendMessage'
import {db,auth} from "../chatapp.js"
import { AuthContext } from "./Auth";
import {Redirect}from "react-router-dom"

function Chat() {
    const scroll = useRef()
    const [messages,setMessage]=useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(100).onSnapshot(snapshot =>{
          setMessage(snapshot.docs.map(doc => doc.data()))
        })
    },[])

    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/SignIn" />;
    }

    return (
        <div  className="marbot" >
          <button class="btn btn-danger btn-rounded position-absolute top-0 end-0 position-fixed" onClick={() => auth.signOut()}>Sign out</button><br /><br />
          <div className="msgs">
          {messages.map(({id,text,photoURL,uid}) =>(
              <div>
              <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}` }>
                  <img src ={ photoURL} alt=""/>
                  <p>{text}</p>
                </div>
            </div>
         ) )}
         </div>
         <SendMessage scroll={scroll}/>
         <div ref = {scroll}></div>
        </div>
    )
}

export default Chat