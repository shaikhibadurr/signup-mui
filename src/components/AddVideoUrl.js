import React from 'react'
import  FormControl  from '@mui/material/FormControl'
import { InputLabel } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined'
import ClearIcon from '@mui/icons-material/Clear';
import {Stack} from '@mui/material'

const AddVideoUrl = (props) => {
  return (
          <FormControl id='form-control' sx={{minWidth:'calc(50% - 5px)', '& .icon1:hover':{display:'block',color:'red', bgcolor:'blue'}}}>
            <InputLabel htmlFor="outlined-adornment-amount">Other Video Id</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <Stack sx={{cursor:'pointer','&:hover .link-icon':{display:'none'},'&:hover .cross-icon':{display:'block'}}}>
                    <LinkOutlinedIcon className='link-icon' />
                    <ClearIcon fontSize='small' className='cross-icon' sx={{display:'none',color:'red'}} />
                  </Stack>
                </InputAdornment>
              }
              label="Other Video Id"
            />
          </FormControl>
  )
}

export default AddVideoUrl