import React, { useState } from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import {Link, useNavigate} from "react-router-dom";


export const SignIn = () => {
    const Navigate = useNavigate();

    const [email,  setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () =>{
        console.log("Sign in Data:" ,{email, password})
    }

    const handleCancel = () =>{
        setEmail("");
        setPassword("");
    }

    return(
        <React.Fragment>
           <Box 
           sx={{
            display : "flex",
            justifyContent:"center",
            alignItems:"center",
            height: "80vh"
           }}
           >
            <Paper sx={{p:4, width: 350}} >
                <Typography variant="h5" mb={2}> Sign In </Typography>

                <TextField onChange={(e)=>setEmail(e.target.value)} value={email} name="email" label="Email" margin="normal" fullWidth />
                <TextField onChange={(e)=>setPassword(e.target.value)} value={password} name="password" label="Password" type="password" margin="normal" fullWidth />
                <Button onClick={handleSubmit} sx={{mt:2}} variant="contained" fullWidth>Sign In</Button>
                <Button onClick={handleCancel} sx={{mt:2}} variant="outlined" fullWidth>Cancel</Button>

                <Typography sx={{mt:2}}>Don't have an account? {" "}
                    <Link onClick={()=> Navigate("/signup")} sx={{cursor:"pointer"}} >Sign Up</Link>
                </Typography>
            </Paper>
           </Box>
        </React.Fragment>
    )
}