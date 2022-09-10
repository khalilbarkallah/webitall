import React from 'react'
import './st.css'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

function SignUp() {
    useEffect(() => {


        if (localStorage.getItem('user-info')) {
            history("/")
        }

    }, [])


    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate();



    async function Sign() {
        let item = { name, email, password }
        console.log(item)
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-type": 'application/json',
                "Accept": 'application/json'

            }

        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history("/")
    }

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto", backgroundColor: "#E6C730" }
    const avatarStyle = { backgroundColor: '#1bbredd7e' }
    const btnstyle = { margin: '8px 0' }
   
    return (
        <div className="hi" style={{ height: '100vh' }}>
            <div>
                <h1 style={{ color: "black", fontFamily: 'Comic Sans MS', fontSize: 50, paddingRight: 1000, paddingTop: 20 }}> SignUp</h1>
            </div>
            <Grid style={{ paddingTop: 20 }}>
                <Paper elevation={10} style={paperStyle}>
                    <div>
                        <Grid alignContent='center'>

                            <h2 style={{ paddingRight: 200 }}>CREATE ACCOUNT</h2>
                        </Grid>
                        <TextField label='Full Name' placeholder='Full Name' fullWidth required onChange={(e) => setName(e.target.value)} />
                        <TextField style={{ marginTop: 20 }} label='Enter Email' placeholder='Enter Email' fullWidth required onChange={(e) => setEmail(e.target.value)} />
                        <TextField style={{ marginTop: 20 }} label='Password' placeholder='Enter password' type='password' fullWidth required onChange={(e) => setPassword(e.target.value)} />

                        <Button type='submit' style={{ backgroundColor: 'black', color: 'white', marginTop: 40 }} variant="contained" fullWidth onClick={Sign}>signUp</Button>

                        <Typography style={{ marginTop: 20 }}> Already have an acount ?
                            <Link style={{ color: "black", fontSize: 20 }} href="/login" >
                                login
                            </Link>
                        </Typography>
                    </div>
                </Paper>
            </Grid>
        </div>

    )
}


export default SignUp