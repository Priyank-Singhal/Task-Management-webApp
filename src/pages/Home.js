import React from 'react'
import '../index.css'
import { Box, Container } from '@mui/system'
import { Typography, Button, TextField } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Login from '../components/Login'

const Home = () => {

    // const [alignment, setAlignment] = React.useState('web');

    // const handleChange = (event, newAlignment) => {
    //     setAlignment(newAlignment);
    // };
    // const 

    return (
        <div>
            <Container
                sx={{
                    height: '100vh',
                    // width: '200vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <img
                        src='img/Group.png'
                    />
                </Box>
                <Box
                    style={{
                        border: '2px solid rgba(26, 59, 88, 0.24)',
                        borderRadius: '65px',
                        width: '570px',
                        height: '644px',
                        // left: '758px',
                        // top: '128px'
                    }}
                >
                    <Box
                        style={{
                            marginTop: '4rem',
                            marginLeft: '4rem'
                        }}
                    >
                        <Button
                            style={{
                                color: '#1A3B58'
                            }}
                            size='large'
                        >Log In</Button>
                        <Button
                            style={{
                                color: '#1A3B58'
                            }}
                            size='large'
                        >Sign Up</Button>
                    </Box>
                    <Box
                    style={{
                        marginLeft: '6rem',
                        marginTop: '3rem'
                    }}
                    >
                        <Login />
                    </Box>
                    {/* <ToggleButtonGroup
                        // color="primary"
                        value={alignment}
                        // exclusive
                        onChange={handleChange}
                        style={{
                            marginTop: '4rem',
                            marginLeft: '4rem',
                        }}
                    >
                        <ToggleButton value="login">login</ToggleButton>
                        <ToggleButton value="signup">signup</ToggleButton>
                    </ToggleButtonGroup> */}
                    {/* <Typography>Log In</Typography>
                    <Typography>Sign up</Typography> */}
                </Box>
            </Container>
        </div>
    )
}

export default Home