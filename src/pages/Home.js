import React, { useState } from 'react'
import { Box, Container } from '@mui/system'
import { Button } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Login from '../components/Login'
import Signup from '../components/Signup'

const Home = () => {

    const [isUser, setIsUser] = useState(true);

    return (
        <div>
            <Container
                sx={{
                    height: '100vh',
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
                    }}
                >
                    <Box
                        style={{
                            marginTop: '4rem',
                            marginLeft: '4rem',
                            // marginBottom: '0',
                        }}
                    >
                        <Button
                            style={{
                                color: !isUser ? 'rgba(26, 59, 88, 0.33)' : 'black',
                            }}
                            size='large'
                            onClick={() => setIsUser(true)}
                        >
                            Log In
                        </Button>
                        <Button
                            style={{
                                color: isUser ? 'rgba(26, 59, 88, 0.33)' : 'black',
                            }}
                            size='large'
                            onClick={() => setIsUser(false)}
                        >Sign Up</Button>
                    </Box>
                    <div
                        style={{
                            width: '2rem',
                            height: '0px',
                            marginLeft: isUser ? '6rem' : '11rem',
                            // top: 255px;
                            border: '1px solid #1A3B58'
                        }}
                    ></div>
                    <Box
                        style={{
                            marginLeft: '6rem',
                            marginTop: '2rem',
                            // backgroundColor: 'red'
                        }}
                    >
                        <hr
                            style={{
                                width: '80%',
                                marginBottom: '2rem',
                                marginLeft: '0',
                                marginTop: '0',
                                border: '2px solid rgba(64, 145, 223, 0.12)'
                            }}
                        />
                        <Signup />
                        {/* {isUser ? <Login /> : <Signup />} */}
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Home