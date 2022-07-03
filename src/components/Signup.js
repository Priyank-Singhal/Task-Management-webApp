import { Button } from '@mui/material'
import {React, useState} from 'react'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, } from '@mui/system'

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <Box component="form" noValidate
            >
                <TextField
                    style={{
                        marginTop: '1rem',
                        width: '80%'
                    }}
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
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
                    Sign Up
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

export default Signup