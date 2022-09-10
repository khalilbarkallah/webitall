import React from 'react';
import './st.css';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
function Login() {
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history('/');
    }
  }, []);

  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const history = useNavigate();

  async function login() {
    let item = { email, password };
    console.log(item);
    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(async (response) => {
        if (response.ok) {
          localStorage.setItem('user-info', JSON.stringify(await response.json()));
          history('/');
          return;
        }
        console.log(await response.json());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto', backgroundColor: '#E6C730' };
  const avatarStyle = { backgroundColor: '#1bbredd7e' };
  const btnstyle = { margin: '8px 0' };
  const color1 = '#343336';
  const color2 = '#B408A4';
  return (
    <div className="hi" style={{ height: '100vh' }}>
      <div>
        <h1 style={{ color: 'black', fontFamily: 'Comic Sans MS', fontSize: 50, paddingRight: 1000, paddingTop: 20 }}>
          {' '}
          LOGIN
        </h1>
      </div>
      <Grid style={{ paddingTop: 20 }}>
        <Paper elevation={10} style={paperStyle}>
          <div>
            <Grid alignContent="center">
              <h2 style={{ paddingRight: 200 }}>LOGIN YOUR ACCOUNT</h2>
            </Grid>
            <TextField
              label="Username"
              placeholder="Enter Email"
              fullWidth
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20 }}
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              style={{ marginTop: 20 }}
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              style={{ backgroundColor: 'black', color: 'white', marginTop: 10 }}
              variant="contained"
              fullWidth
              onClick={login}
            >
              Login
            </Button>
            <Typography style={{ marginTop: 40 }}>
              <Link style={{ color: 'black', fontSize: 20 }} href="#">
                Forgot password ?
              </Link>
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              {' '}
              Dont have an acount ?
              <Link style={{ color: 'black', fontSize: 20 }} href="/Signup">
                Sign Up
              </Link>
            </Typography>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
