import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SideBar from '../components/SideBar'


const Projects = () => {
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
        }}
      >
       <SideBar />
      </Box>
      <Box
        style={{
          width: '83%',
        }}
      >
      </Box>
    </div>
  )
}

export default Projects