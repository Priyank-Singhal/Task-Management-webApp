import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import { Avatar, Stack } from '@mui/material';
// import DragDrop from '../components/DragDrop'
import { useAuth } from '../contexts/AuthContext'
import Todo from '../components/Columns/Todo'
import Progress from '../components/Columns/Progress'
import Completed from '../components/Columns/Completed'

const Projects = () => {
  const { currentUser } = useAuth();

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh'
      }}
    >
      <Box
        style={{
          width: '17%',
          // backgroundColor: '#E5E5E5'
          borderRight: '1px solid rgba(26, 59, 88, 0.24)',
        }}
      >
        <SideBar />
      </Box>
      <Box
        style={{
          width: '83%',
          paddingTop: '3rem',
          paddingLeft: '4rem',
          paddingRight: '7rem'
        }}
      >
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <SearchBar />
          <Stack direction="row" spacing={2}>
            <Typography style={{ paddingTop: '8%' }}>Hii {currentUser.email}</Typography>
            <Avatar alt="Remy Sharp" src="/img/avatar.png" />
          </Stack>
        </Grid>
        <Grid
          sx={{
            mt: 8
          }}
        >
          <Typography style={{ letterSpacing: '0.09em', color: '#212121', fontWeight: 'bold' }} variant='h5'>Projects</Typography>
          <Grid sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1.5rem'
          }}>
            <Todo />
            <Todo />
            <Todo />
            {/* <Progress />
            <Completed /> */}
          </Grid>
        </Grid>
        {/* <DragDrop /> */}
      </Box>
    </div>
  )
}

export default Projects