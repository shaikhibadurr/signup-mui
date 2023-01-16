import React from 'react'
import { Stack,Box, Container,Link } from '@mui/material'
import MyAppBar from './MyAppBar'
import ProductTabs from './ProductTabs'


const Dashboard = () => {
  return (
    <Box mt={0} sx={{height:'100vh',width:'100vw',background:'#f3f5f7'}} >
      <MyAppBar/>
      <Container>
        <Stack direction={"row"} gap="30px" sx={{mt:'30px',height:'calc(100vh - 100px)'}} >
            <Stack sx={{width:'75%',overflow:'auto',background:'white',borderRadius:'5px',boxShadow:'0 0.75rem 1.5rem rgb(18 38 63 / 3%)'}}>
              <ProductTabs/>
            </Stack>
            <Stack sx={{width:'25%',background:'white',borderRadius:'5px',boxShadow:'0 0.75rem 1.5rem rgb(18 38 63 / 3%)'}} >

            </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Dashboard