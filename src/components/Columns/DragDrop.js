import React from 'react'
import Todo from './Todo'
import Progress from './Progress'
import { Grid } from '@mui/material'
import Completed from './Completed'

const DragDrop = () => {
    return (
        <div>
            <Grid sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '1.5rem'
            }}>
                <Todo />
                <Progress />
                <Completed />
            </Grid>
        </div>
    )
}

export default DragDrop