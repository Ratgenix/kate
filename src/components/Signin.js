import React,{useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {AuthProvider, useAuth} from './AuthProvider'
import './comp.css'
function Signin() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const {signin1, currentUser, logout}=useAuth();
    const [error,setError]=useState("")
    const [loading, setLoading]=useState(false)

    async function handleLogout(e){
        setError("")
        try{
           await logout()
        }
        catch{
            setError("Failed to logout... what duh...")
        }
    }

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError("")
            setLoading(true)
            await signin1(emailRef.current.value, passwordRef.current.value)
        }
        catch{
            setError("Failed to create account")
        }

        setLoading(false)

        
    }

    return (
        <>
        <div className="Signin-container">
            <Card>
                <Card.Body>
                    <h2>Login</h2>
                    {currentUser&& <div><p>signed in.</p>
                        <p><a href='/'>Go back</a></p></div>}
                    {error&&<Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>   

                        <br/>

                        <Button 
                        disabled={loading}
                        type="submit">Login!</Button>

                        
                    </Form>

                   <Button 
                        disabled={loading}
                        type="submit"
                        onClick={handleLogout}>logout!</Button>
                </Card.Body>
            </Card>

            
        </div>
        </>
    )
}

export default Signin
