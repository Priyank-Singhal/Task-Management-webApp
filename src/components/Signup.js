import { Typography, Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Container } from '@mui/system'

const Signup = () => {
    return (
        <div>
            <Box component="form" noValidate
                // onSubmit={handleSubmit} 
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
                // onChange={(e) => setPassword(e.target.value)}
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
                    // backgroundColor: '#329C89',
                }}
            >
                <FormControlLabel control={<Checkbox />} label="Remember Me" />
            </FormGroup>
        </div>
    )
}

export default Signup