import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import { Avatar, Stack } from '@mui/material';
import { useAuth } from '../contexts/AuthContext'
import FilterListIcon from '@mui/icons-material/FilterList';
import '../index.css'
import DragDrop from '../components/Columns/DragDrop'


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
          <img src='img/grp_icon.svg' />
          <Stack direction="row" spacing={2}>
            <Typography style={{ paddingTop: '8%' }}>Hii {currentUser.email}</Typography>
            <Avatar alt="Remy Sharp" src="/img/avatar.png" />
          </Stack>
        </Grid>
        <Grid
          sx={{
            mt: 6
          }}
        >
          <Grid
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography style={{ letterSpacing: '0.09em', color: '#212121', fontWeight: 'bold' }} variant='h5'>Projects</Typography>
            <Grid
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <FilterListIcon sx={{ mt: 0.5, mr: 2 }} />
              <Typography style={{ letterSpacing: '0.07em', color: '# 3A3A3A' }} variant='h6'>Filter</Typography>
            </Grid>
          </Grid>
          <DragDrop />
        </Grid>
      </Box>
    </div>
  )
}

export default Projects