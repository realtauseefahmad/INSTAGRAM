import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'
import {useAuth } from "../hooks/useAuth"
import { useNavigate } from 'react-router'
import axios from 'axios'


const Register = () => {
    const { loading , handleRgister} = useAuth()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await handleRgister(username, email, password)

        navigate('/')

    }

    if (loading) {
        return (<main>
            <h1>Loading.....</h1>
        </main>)
    }


    return (
        <>
            <main>
                <div className="header-left">
                    <h1>See everyday moments from your <br /> <span>close friends.</span></h1>
                    <img src="https://static.cdninstagram.com/rsrc.php/v4/yt/r/pAv7hjq-51n.png" alt="" />
                </div>
                <div className="form-container">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            onInput={(e) => { setUsername(e.target.value) }}
                            type="text"
                            name='username'
                            placeholder='Enter Username' />
                        <input
                            onInput={(e) => { setEmail(e.target.value) }}
                            type="email" name='email'
                            placeholder='Enter email' />
                        <input
                            onInput={(e) => { setPassword(e.target.value) }}
                            type="password"
                            name='password'
                            placeholder='Enter password' />
                        <button>Register</button>
                    </form>

                    <p> Already have an account? <Link className='toggleAuthForm' to='/login'>Login</Link> </p>

                </div>
            </main>
        </>
    )
}

export default Register
