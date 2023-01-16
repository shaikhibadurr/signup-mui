import React from 'react'
import { Stack,Box, Container,Link } from '@mui/material'
import MyAppBar from './MyAppBar'

const Dashboard = () => {
  return (
    <Box mt={0} sx={{height:'100vh',width:'100vw',background:'#f3f5f7'}} >
      <MyAppBar/>
       
    </Box>
  )
}

export default Dashboard