import React,{useState} from "react";
import { Button, Grid, TextField, Card, CardContent, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export const CustomerRateCBM = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [cbm, setCbm] = useState(0);
  const [customerRate, setCustomerRate] = useState(0);
  const [ourRate, setOurRate] = useState(0)

  const handleNext =()=>{
    const actionCbm = {
      type : "CBM",
      payload : cbm
    }
    dispatch(actionCbm)

    const actionCusomerRate = {
      type : "CUSTOMER_RATE",
      payload : customerRate
    }
    dispatch(actionCusomerRate)

    const actionOurRate = {
      type : "OUR_RATE",
      payload : ourRate
    }
    dispatch(actionOurRate)
  }

  const handleCancel = () => {
    // Handle cancel action
    setCbm(0);
    setCustomerRate(0);
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
              <TextField value={cbm} onChange={(e)=>setCbm(e.target.value)} label="Enter CBM" variant="outlined" fullWidth />
            </Grid>

            <Grid size={12}>
              <TextField value={customerRate} onChange={(e)=>setCustomerRate(e.target.value)} label="Enter Customer Rate" variant="outlined" fullWidth />
            </Grid>

            <Grid size={12}>
              <TextField value={ourRate} onChange={(e)=>setOurRate(e.target.value)} label="Enter Our Rate" variant="outlined" fullWidth />
            </Grid>

            <Grid size={6}>
              <Button onClick={handleCancel} variant="outlined" fullWidth>Cancel</Button>
            </Grid>

            <Grid size={6}>
              <Button disabled={!(cbm && customerRate && ourRate)} onClick={handleNext} variant="contained" fullWidth>Next</Button>
            </Grid>
          </Grid>

        </CardContent>
      </Card>
    </Box>
  );
};
