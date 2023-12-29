import React from 'react'
import './Login.css'

function Login() {
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }
  return (
    <>
        <h1>Login</h1>
        <p>
            Hi there! If you're in this page, you might have purchased one (or more!) lil bens! Please use the phone number which you have sent over to me as this will link to your lil ben account :-
        </p>
        <form method="post" onSubmit={handleLogin} >
            <input type={"text"} placeholder="Phone Number" name="phoneNumber"/>
        <br/>
        <button type="submit">login</button>
        </form>
    </>
  )
}

export default Login