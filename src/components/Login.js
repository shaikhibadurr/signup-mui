import React,{useEffect,useRef} from 'react'
import {useTheme} from '@mui/material';
import {useForm} from 'react-hook-form';
import { Toaster,toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Autocomplete,
    Button,
    Link,
    Typography, Stack, Box, TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio} from '@mui/material'
import {Link as RouterLink}  from 'react-router-dom';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import LoginIcon from '@mui/icons-material/Login';
import { palette } from '@mui/system';

const Login = () => {
  
  const theme=useTheme();
  const {register,handleSubmit,formState:{errors}}=useForm();

  const submitForm = (data) =>{
    var fetchData=JSON.parse(localStorage.getItem('userData'));
    const getCredentials=fetchData.filter((item)=>{return (item.userName===data.userName && item.password===data.password)});
    if(getCredentials.length===1){
        toast.success("You are Logged in..");
    }else{
        toast.error("Invalid Credentials");
    }
  }
  return (
        <Box  onSubmit={handleSubmit(submitForm)} p={'30px 50px'}  sx={{position:'absolute',top:'50%',transform:'translateY(-50%)',width:{xs:'95%',sm:'75%',md:'55%',xl:'40%'},bgcolor:'white',borderRadius:'20px'}}  component='form'>
            <Toaster/>
            <input type="hidden" name="to_email" value="shaikhibadurr@gmail.com"/>
            <Stack>
                <Stack justifyContent={'center'} spacing={{xs:2,sm:3}} direction={{xs:'column', sm:'row'}} alignItems={'center'}>
                    <LockOpenTwoToneIcon fontSize='large' color='primary' />
                    <Typography variant='h4' sx={{fontWeight:'700'}}>LOG IN</Typography>
                </Stack>
                <Stack mt={5}>
                    <TextField 
                    {...register('userName',{required:{value:true,message:"Username is Required"},
                    validate: (val)=>{
                        var fetchData=JSON.parse(localStorage.getItem('userData'));
                        const usernames=fetchData.map((item)=>item.userName);
                        if(!usernames.includes(val)){
                            return "Username doesn't exist";
                        }
                    }
                    })}
                    error={Boolean(errors.username?.message)}
                    helperText={errors.username?.message}
                    id="outlined-basic" label="Username*" variant="outlined" />
                    <TextField 
                    {...register('password',{required:{value:true,message:"Password is required"}})}
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    sx={{mt:2}}
                    type="password"
                    id="outlined-basic" label="password*" variant="outlined" />
                    <Stack direction='row' justifyContent={'space-between'}>
                    <RouterLink style={{color:theme.palette.primary.main}} to='/signup'>Sign Up</RouterLink>
                    <RouterLink style={{color:theme.palette.primary.main}} to='/forgot-password'>Forgot Password</RouterLink>
                    </Stack>
                    <Button type='submit' sx={{mt:3,paddingTop:'15px',paddingBottom:'15px'}} variant='contained'>
                        Log In &nbsp; &nbsp;
                        <LoginIcon/>
                    </Button>
                </Stack>
                
            </Stack>
        </Box>
  )
}

export default Login