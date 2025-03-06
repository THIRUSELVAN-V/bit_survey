import React, { useEffect } from 'react'
import { useLoginStore } from '../../store/login'
import { useLogin } from '../../util/login';

function Login() {

    const { login, logout, requestState } = useLogin();

    const onLogin = async () => {
        const success = await login();
        if (success) {
            // Handle successful login (e.g., redirect)
            console.log('Logged in successfully');
        }
    };
    useEffect(()=>{
        onLogin()
    },[])
  return (
    <input type='email' value={"raj@gmail.com"}></input>
  )
}

export default Login