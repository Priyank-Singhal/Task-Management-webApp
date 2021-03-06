import React from 'react'
import { Box, Container } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Button } from '@mui/material'
import { Link } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const icons = [<HomeOutlinedIcon />, <LeaderboardRoundedIcon />, <FolderCopyOutlinedIcon />, <ChatOutlinedIcon />, <CalendarMonthOutlinedIcon />]
    const pages = ['Overview', 'Stats', 'Projects', 'Chat', 'Calender']
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await logout();
            navigate('/');
        } catch {
            console.log("failed to logout")
        }
    }

    return (
        <div>
            <Container
                sx={{
                    mt: 6,
                    ml: 3,

                }}
            >
                <Typography
                    style={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        lineHeight: '101.1%',
                        letterSpacing: '0.03em',
                        color: '#161616',
                    }}
                >
                    .taskez
                </Typography>
                <Box
                    sx={{
                        mt: 13,
                    }}
                >
                    <Box>
                        {pages.map((page, ind) => {
                            return <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Grid style={{ display: 'flex', color: window.location.pathname === `/${page}` ? 'black' : '#9A9A9A', }} key={ind}>
                                    <span style={{ padding: '1rem', }}>{icons[ind]}</span>
                                    <Link
                                        color="inherit"
                                        href={`/${page}`}
                                        style={{ padding: '1.05rem', letterSpacing: '0.15em', textDecoration: 'none' }}
                                        disableRipple
                                    >
                                        {page}
                                    </Link>
                                </Grid>
                                {
                                    window.location.pathname === `/${page}`
                                        ? <div
                                            style={{
                                                height: '2rem',
                                                // width: '2px',
                                                marginTop: '0.5rem',
                                                border: '2px solid #329C89',
                                                borderRadius: '8px',
                                                // backgroundColor: '#1A3B58',
                                                justifySelf: 'self-end'
                                            }}
                                        ></div>
                                        : null
                                }
                            </Box>
                        })}
                    </Box>
                    <Box sx={{ mt: 38 }}>
                        <Grid style={{ display: 'flex', color: '#9A9A9A', }}>
                            <SettingsOutlinedIcon style={{ padding: '1rem' }} />
                            <Typography style={{ padding: '1rem', letterSpacing: '0.15em' }}>Setting</Typography>
                        </Grid>
                        <Grid style={{ display: 'flex', color: '#9A9A9A', }}>
                            <LogoutOutlinedIcon style={{ padding: '1rem' }} />
                            <Button onClick={handleLogout} style={{ padding: '1rem', letterSpacing: '0.15em' }} color='inherit'>Log Out</Button>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div >
    )
}

export default SideBar