import React, { FC } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import './Filter.scss';
import { useAppDispatch } from '../../hook';
import { searchInput } from '../../store/searchSlice';

const Filter: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className='filter'>
            <h3>Filter by keywords</h3>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { width: '600px' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    onChange={e => dispatch(searchInput(e.target.value))}
                    autoFocus={true}
                    id="outlined-search"
                    type="search"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                    }}
                >
                </TextField>
            </Box>
            <h3>Results: </h3>
        </div>
    )
}

export default Filter;
