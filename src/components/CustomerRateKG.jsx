import React, { useState } from "react";
import { Button, Grid, TextField, Card, CardContent, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CustomerRateKG = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [kg, setKg] = useState(0)
    const [customerRate, setCustomeRate]= useState(0);
    const [ourRate, setOurRate] = useState(0)
    

    const handleNext = () =>{
        if(kg && customerRate && ourRate){
        const actionKg ={
            type : "KG",
            payload : kg
        }
        dispatch(actionKg)
   
        const actionCustomerRate = {
            type : "CUSTOMER_RATE",
            payload : customerRate
        }
        dispatch(actionCustomerRate)
   
        const actionOurRate = {
            type : "OUR_RATE",
            payload : ourRate
        }
        dispatch(actionOurRate);

        navigate("/customerratecbm")
    }
}
const handleCancel = () => {
    // Handle cancel action
    setKg(0);
    setCustomeRate(0);
    setOurRate(0);
}



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full screen height
        bgcolor: "#f5f5f5", // Light background
      }}
    >
      <Card sx={{ width: 400, p: 2, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>

          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField value={kg} onChange={(e)=>setKg(e.target.value)}  type="number" label="Enter KG" variant="outlined" fullWidth />
            </Grid>

            <Grid size={12}>
              <TextField value={customerRate} onChange={(e)=>setCustomeRate(e.target.value)} type="number" label="Enter Customer Rate" variant="outlined" fullWidth />
            </Grid>

            <Grid size={12}>
              <TextField value={ourRate} onChange={(e)=>setOurRate(e.target.value)} type="number" label="Enter Our Rate" variant="outlined" fullWidth />
            </Grid>

            <Grid size={6}>
              <Button onClick={handleCancel} variant="outlined" fullWidth>Cancel</Button>
            </Grid>

            <Grid size={6}>
              <Button disabled={!(kg && customerRate > ourRate && ourRate)} onClick={handleNext} variant="contained" fullWidth>Next</Button>
            </Grid>
          </Grid>

        </CardContent>
      </Card>
    </Box>
  );
};
