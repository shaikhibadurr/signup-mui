import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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
        sx={{ fontWeight: "bold", color: "grey" }}
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
        sx={{ fontWeight: "bold", color: "grey" }}
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
        sx={{ fontWeight: "bold", color: "grey" }}
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
      </Stack>
    </Box>
  );
};

export default AddProductForm;
