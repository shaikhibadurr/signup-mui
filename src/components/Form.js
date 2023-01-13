import React,{useEffect,useRef} from 'react'
import emailjs from '@emailjs/browser';
import { redirect } from 'react-router-dom';
import {Controller, get, useForm} from 'react-hook-form'
import { Autocomplete,
    Button,
    Typography, Stack, Box, TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    //sending email
    const form = useRef();
    const navigate = useNavigate()
    const sendEmail = () => {
        
        emailjs.sendForm('service_ouznm2n', 'template_jhl2vk5', form.current, 'ri-P7KTUydtH192Cq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    const {register,handleSubmit, control, watch,formState:{errors}}=useForm();
    useEffect(()=>{
        // navigate('/auth')
    console.log('loading..');
    },[])
    const submitForm = (data) =>{
        sendEmail();
        var getData=JSON.parse(localStorage.getItem('userData')) || [];
        var newData=[...getData,data]
        localStorage.setItem('userData',JSON.stringify(newData));
        console.log(newData);
        
    }
  return (
    <>
        <Box ref={form} onSubmit={handleSubmit(submitForm)} p={'30px 50px'} sx={{width:{xs:'95%',sm:'75%',md:'55%',xl:'40%'},bgcolor:'white',borderRadius:'20px'}}  component='form'>
            <Stack>
                <Stack justifyContent={'center'} spacing={{xs:2,sm:3}} direction={{xs:'column', sm:'row'}} alignItems={'center'}>
                    <AccountCircleIcon fontSize='large' color='primary' />
                    <Typography variant='h4' sx={{fontWeight:'700'}}>SIGN UP</Typography>
                </Stack>
                <Stack mt={5}>
                    <Stack direction={{xs:'col',sm:'row'}} gap={4} >
                        <TextField 
                        error={Boolean(errors.firstName?.message)} 
                        helperText={errors.firstName?.message} 
                        {...register('firstName',
                        {minLength:{value:4,message:"First Name should be atleast 3 chars"},
                        required:{value:true,message:"First Name is Required"}}
                        )} 
                        id="outlined-basic" 
                        label="First Name*" 
                        variant="outlined" 
                        sx={{width:'100%'}} />
                        {/* {!errors.firstName && <TextField {...register('firstName',{minLength:{value:4,message:"First Name should be atleast 3 chars"},required:true})} id="outlined-basic" label="First Name" variant="outlined" sx={{width:'100%'}} />}
                        {errors.firstName && <TextField helperText={errors.firstName.message} error {...register('firstName',{minLength:{value:4,message:"First Name should be atleast 3 chars"}})} id="outlined-basic" label="Errored" required variant="outlined" sx={{width:'100%'}} />} */}
                        <TextField 
                        {...register('lastName')} 
                        id="outlined-basic" 
                        label="Last Name"  
                        variant="outlined" 
                        sx={{width:'100%'}} />
                    </Stack>
                    <Stack direction={{xs:'col',sm:'row'}} gap={4} mt={3}>
                        <TextField error={errors.email?.message}
                        helperText={errors.email?.message}
                        {...register('email',{required:{value:true,message:'Email is Required'},
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid Email address"
                          }})}
                        id="outlined-basic" label="Email*"  variant="outlined" sx={{width:'100%'}} />
                        <TextField
                        
                        error={errors.age?.message}
                        helperText={errors.age?.message}
                        {...register('age',{min:{value:18,message:"Age should be greater than 18"}})} id="outlined-basic" label="Age" type="number" variant="outlined" sx={{width:'100%'}} />
                    </Stack>

                    <Controller
                        control={control}
                        name="designation"
                        render={({field: {onChange, ref, ...field}}) => (
                            <Autocomplete
                            onChange={(_, data) => onChange(data)}
                            id="combo-box-demo"
                            options={['Designer','Developer','HR','Manager','CEO']}
                            sx={{ mt:2 }}
                            renderInput={(params) => <TextField {...field} inputRef={ref} {...params} label="Designation" />}
                        />
                        )}
                    />

                    <FormControl sx={{mt:2,display:'flex',flexDirection:{xs:'coloumn',sm:'row'},alignItems:{xs:'left',sm:'center'},justifyContent:'space-between'}} >
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            {...register('gender')}
                        >
                            <FormControlLabel {...register('gender')} value="female" control={<Radio />} label="Female" />
                            <FormControlLabel {...register('gender')} value="male" control={<Radio />} label="Male" />
                            <FormControlLabel {...register('gender')} value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <TextField 
                        {...register('userName',{required:{value:true,message:"User Name is Required"},
                        validate:(val)=>{
                            var fetchUserData=JSON.parse(localStorage.getItem('userData')) || [];
                            // console.log(fetchUserData);
                            // if(fetchUserData!==null){
                            //     fetchUserData.map((item)=>{
                            //         if(val==item.firstName){
                            //             console.log("worked");
                            //             return "Username already exists";
                            //         }
                            //     })
                            // }
                            var userNameArr=fetchUserData.map((item)=>item.userName);
                            if(userNameArr.includes(val)) return "Username already exists..";
                        }
                    })} 
                        error={Boolean(errors.userName?.message)}
                        helperText={errors.userName?.message}
                        id="outlined-basic" 
                        label="Username*"  
                        variant="outlined" 
                        sx={{width:'100%',mt:2}} />

                    <Stack direction={{xs:'col',sm:'row'}} gap={4} mt={3} >
                        <TextField
                        error={errors.password?.message}
                        helperText={errors.password?.message}
                        {...register('password',
                        {required:{value:true,message:'Password is required'},
                        pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
                        ,message:"Password Must be Minimum 8 characters 1 uppercase 1 lowercase 1 number & 1 special character"}}
                        )}
                        id="outlined-basic" label="Password*"  type='password' variant="outlined" sx={{width:'100%'}} />
                        <TextField 
                        error={errors.confirmPassword?.message}
                        helperText={errors.confirmPassword?.message}
                        {...register('confirmPassword',{
                            required:{value:true,message:"Confirm Password is Required..."},
                            validate:(val)=>{
                                if(watch('password')!==val) return "Confirm Password Should be Matched";
                            }
                        })}
                        id="outlined-basic" label="Confirm Password*"  type='password' variant="outlined" sx={{width:'100%'}} />
                    </Stack>
                    <Button type='submit' sx={{mt:3,paddingTop:'15px',paddingBottom:'15px'}} variant='contained'>Sign Up</Button>
                </Stack>
                
            </Stack>
        </Box>
        <div onClick={()=>{console.log("hello"); redirect('/')}}>
            redirect
        </div>
</>

  )
}

export default Form