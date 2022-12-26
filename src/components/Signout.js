import React from "react";
import{auth} from "../chatapp.js"


function Signout(){
    return(
        <div style={{
            display:'flex',justifyContent:'center',position:'fixed',width:'100',backgroundColor:'#FAFAFA',top:0,borderBottom:'solid 1px lightgray',zIndex:'10'
        }}>
            <button style = {{ padding:'20px',fontSize:'15px',borderRadius:'100',fontWeight:'600'}}onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
    
}

export default Signout;