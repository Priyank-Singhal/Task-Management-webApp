import React from 'react'
import '../index.css'
import { Box, Container } from '@mui/system'
import { Typography, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/result');
    }

    return (
        <div>
            <Container
                sx={{
                    height: '100vh',
                    width: '200vw',
                    // backgroundColor: 'grey',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // alignContent: 'flex-end'
                }}
            >
                <Box>
                    {/* <image src='img/Group.png'></image> */}
                    <img
                        src='img/Group.png'
                    />
                </Box>
                <Box>
                <img
                        src='img/1.png'
                    />
                </Box>
            </Container>
        </div>
    )
}

export default Home