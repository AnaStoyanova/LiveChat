import React from 'react'
import './Login.css'

import {Button} from "@material-ui/core"
import { auth, provider } from './firebase'
import { actionTypes } from './Reducer';

import {useStateValue} from './StateProvider'


function Login() {
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className = "login">
            <div className ="login_container">
                <img alt = "" src = "https://img.pngio.com/comments-inbox-message-one-message-icon-png-message-512_512.png"/>
                <div className = "login_text">
                    <h1>Sign in to ChatRoom</h1>
                </div>
                <Button type = "submit" onClick={signIn}>
                        Sign in With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
