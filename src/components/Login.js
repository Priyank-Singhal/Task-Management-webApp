import { Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, } from '@mui/system'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useAuth();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!password) {
            alert("Wrong Password")
            return;
        }
        try{
            setLoading(true)
            await login(email, password)
            navigate('/Projects')
        } catch {
            console.log("Failed to Login")
            setError(true)
        }
        setLoading(false)
    }


    return (
        <div>
            <Typography variant='h5'>
                To Continue
            </Typography>
            <Typography variant='body2'>
                We need your name and Email
            </Typography>
            <Box component="form" noValidate
            onSubmit={e => handleSubmit(e)} 
            >
                <TextField
                    style={{
                        marginTop: '2rem',
                        width: '80%'
                    }}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={error}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    style={{
                        marginTop: '2rem',
                        width: '80%'
                    }}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={error}
                    helperText={ error &&  "Invalid Email or Password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    style={{
                        marginTop: '2rem',
                        width: '80%',
                        backgroundColor: '#329C89',
                    }}
                    sx={{
                        py: 1.5
                    }}
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    Log In
                </Button>
            </Box>
            <FormGroup
                style={{
                    marginTop: '2rem',
                    width: '80%',
                }}
            >
                <FormControlLabel control={<Checkbox />} label="Remember Me" />
            </FormGroup>
        </div>
    )
}

export default Login