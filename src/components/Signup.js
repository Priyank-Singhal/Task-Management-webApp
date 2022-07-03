import { Button } from '@mui/material'
import { React, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, } from '@mui/system'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice'

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inavlid, setInvalid] = useState(false)

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name,
            email,
            password,
            loggedIn: true
        }))
    }
    const handleChange = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(email)) {
            // this is a valid email address
            // call setState({email: email}) to update the email
            // or update the data in redux store.
            setInvalid(false);
        }
        else {
            // invalid email, maybe show an error to the user.
            setInvalid(true);
        }

    }

    // useEffect(() => {
    // }, [email])


    return (
        <div>
            <Box component="form" noValidate
                onSubmit={e => handleSubmit(e)}
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
                        width: '80%',
                    }}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    helperText={inavlid && "Please Enter a valid Email"}
                    value={email}
                    // onChange={e => (setEmail(e.target.value))}
                    color={inavlid ? 'warning' : null}
                    onChange={e => handleChange(e)}
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