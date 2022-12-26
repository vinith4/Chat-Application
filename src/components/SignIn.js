import React, { useContext } from "react";
import firebase from 'firebase/compat/app'
import { auth } from '../chatapp.js'

import { AuthContext } from "./Auth";
import { Redirect } from "react-router-dom"



function Signin() {

    function SignInWithGoogle() {
        const p = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(p);
        return <Redirect to="/chat" />;
    }

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/chat" />;
    }

    return (

        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <button style={{ padding: '30px', fountSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={SignInWithGoogle}>Sign In With Google</button>
        </div>

    );
}

export default Signin;