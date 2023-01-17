import { Box, Typography, Stack, ButtonGroup } from "@mui/material";  
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";
import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FilePondUpload from "./FilePondUpload";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import AddIcon from '@mui/icons-material/Add';


const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRight:'none',
      borderRadius:'4px 0 0 4px'
    },
  },
});




const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: '0 5px 5px 0',
    position: 'relative',
    backgroundColor: grey[200],
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '15.5px 26px 15.5px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));



const AddProductForm = () => {
  return (
    <Box component="form">
      <TextField
        fullWidth
        id="outlined-basic"
        label="Product Name"
        variant="outlined"
      />
      <Typography
        sx={{ fontWeight: "bold", color: grey[500] }}
        pt="20px"
        variant="body1"
        mt={2}
      >
        Price
      </Typography>
      <Stack direction="row" justifyContent={"space-between"} gap="10px" mt={1}>
        <FormControl sx={{ flex: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">MRP</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <CurrencyRupeeIcon fontSize={"sm"} />
              </InputAdornment>
            }
            label="MRP"
          />
        </FormControl>
        <FormControl sx={{ flex: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Listing Price
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <CurrencyRupeeIcon fontSize={"sm"} />
              </InputAdornment>
            }
            label="Listing Price"
          />
        </FormControl>
        <FormControl sx={{ flex: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Cost Price
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <CurrencyRupeeIcon fontSize={"sm"} />
              </InputAdornment>
            }
            label="Cost Price"
          />
        </FormControl>
      </Stack>

      <Typography
        sx={{ fontWeight: "bold", color: grey[500] }}
        pt="20px"
        variant="body1"
        mt={2}
      >
        Tax Details
      </Typography>
      <Stack direction="row" justifyContent={"space-between"} gap="10px" mt={1}>
        <FormControl sx={{ flex: 1 }}>
          <InputLabel id="demo-simple-select-label">Tax Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Tax Type"
          >
            <MenuItem value={10}>CGST</MenuItem>
            <MenuItem value={20}>SGST</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ flex: 1 }}>
          <InputLabel id="demo-simple-select-label">Tax Percentage</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Tax Percentage"
          >
            <MenuItem value={0}>0%</MenuItem>
            <MenuItem value={5}>5%</MenuItem>
            <MenuItem value={12}>12%</MenuItem>
            <MenuItem value={18}>18%</MenuItem>
            <MenuItem value={28}>28%</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Typography
        sx={{ fontWeight: "bold", color: grey[500] }}
        pt="20px"
        variant="body1"
        mt={2}
      >
        Other Details
      </Typography>
      <Stack >
        <Stack direction="row" justifyContent={"space-between"} gap="10px" mt={1} >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Minimum - Order Limit"
            defaultValue="1"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Maximum - Order Limit"
            defaultValue="10"
            variant="outlined"
          />
        </Stack>
        <Stack direction="row" justifyContent={"space-between"} gap="10px" mt={2} >
          <TextField sx={{ flex: 1 }}
            id="outlined-basic"
            label="Available Stock - Quantity"
            defaultValue="1000"
            variant="outlined"
          />
          <FormControl sx={{ flex: 1 }}>
            <InputLabel id="demo-simple-select-label">Stock Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Stock Status"
            >
              <MenuItem value={0}>Available</MenuItem>
              <MenuItem value={5}>Sold Out</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="row" justifyContent={"space-between"} gap="10px" mt={2} >
          <TextField sx={{ flex: 1 }}
            id="outlined-basic"
            label="SKU"
            variant="outlined"
          />
          <ButtonGroup variant="outlined" sx={{ flex: 1 }} >

            <CssTextField sx={{ flex: 2 }} label="Unit" id="custom-css-outlined-input" />
            <FormControl sx={{ flex: 1 }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={0}
                sx={{background:'#f1f3f5'}}
                input={<BootstrapInput/>}
              >
                <MenuItem value={0}>kg</MenuItem>
                <MenuItem value={5}>gm</MenuItem>
                <MenuItem value={10}>ml</MenuItem>
                <MenuItem value={15}>ltr</MenuItem>
                <MenuItem value={20}>cm</MenuItem>
                <MenuItem value={25}>inch</MenuItem>
              </Select>
            </FormControl>
          </ButtonGroup>
        </Stack>
      </Stack>

      <Typography
        sx={{ fontWeight: "bold", color: grey[500] }}
        pt="20px"
        variant="body1"
        mt={2}
        title="Only png jpg allowed"
      >
        Images
        <InfoOutlinedIcon fontSize="sm" />
      </Typography>
      <Stack direction="row" gap="10px">
        <Stack sx={{flex:1}}>
          <Typography variant="body2" sx={{color:grey[500], textAlign:'center'}}>Featured Image</Typography>
          <FilePondUpload allowMultiple={false} labelIdle='Drag & Drop Image or <span class="filepond--label-action">Browse</span>' />
        </Stack>
        <Stack sx={{flex:1}}>
          <Typography variant="body2" sx={{color:grey[500], textAlign:'center'}}>Other Images</Typography>
          <FilePondUpload allowMultiple={true} labelIdle='Drag & Drop Image or <span class="filepond--label-action">Browse</span>' />
        </Stack>
      </Stack>
      <Typography
        sx={{ fontWeight: "bold", color: grey[500] }}
        pt="20px"
        variant="body1"
        mt={2}
        title="Add Youtube Video Id"
      >
        Videos
        <InfoOutlinedIcon  fontSize="sm" />
        <Button size="small" sx={{ml:2}} variant="outlined" startIcon={<AddIcon />}  >Add More</Button>
      </Typography>
      <Stack direction="row" gap="10px" mt={2} flexWrap="wrap" >
          <FormControl sx={{minWidth:'calc(50% - 5px)' }}>
            <InputLabel htmlFor="outlined-adornment-amount">Featured Video Id</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <LinkOutlinedIcon/>
                </InputAdornment>
              }
              label="Featured Video Id"
            />
          </FormControl>
          <FormControl sx={{minWidth:'calc(50% - 5px)' }}>
            <InputLabel htmlFor="outlined-adornment-amount">Other Video Id</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <LinkOutlinedIcon/>
                </InputAdornment>
              }
              label="Other Video Id"
            />
          </FormControl>
          <FormControl sx={{ minWidth:'calc(50% - 5px)' }}>
            <InputLabel htmlFor="outlined-adornment-amount">Other Video Id</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <LinkOutlinedIcon/>
                </InputAdornment>
              }
              label="Other Video Id"
            />
          </FormControl>
      </Stack>
    </Box>
  );
};

export default AddProductForm;
