import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import InputBase from '@mui/material/InputBase';

const Search = () => {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    color: '#9A9A9A',
                    
                }}>
                <div
                    style={{
                        marginLeft: ''
                    }}>
                    <SearchIcon sx={{  fontSize: '1.8rem' }} />
                </div>
                <InputBase placeholder='Search'
                    sx={{ 
                        marginLeft: '1rem',
                        // marginTop: '0.5rem',
                        letterSpacing: '0.12em',
                        fontSize: '1.2rem'
                     }}
                // onKeyDown={handleKeyPress}
                />
            </div>
        </div>
    )
}

export default Search