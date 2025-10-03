import React, { useState } from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import {Link, useNavigate} from "react-router-dom";

export const SignIn = () => {
    const Navigate = useNavigate();

    const [email,  setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Error State
    const [errors, setErrors] = useState({email: "", password:""});

    const validate = () =>{
        let valid = true;
        let newErrors = {email: "", password: ""};
    

    //Email validation
    if(!email.trim()){
        newErrors.email = "Email is required";
        valid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            newErrors.email = "Enter a valid email";
            valid = false;
        }
    }

    // password validation
    if(!password.trim()){
        newErrors.password = "Password is required";
        valid = false;
    } else if( password.length < 8 ) {
        newErrors.password = "Password must be at least 6 charactors";
        valid = false;
    }
    setErrors(newErrors);
    return valid;
    }

    const handleSubmit = () =>{
        if(!validate()) return;
        console.log("Sign in Data:" ,{email, password})
    }

    const handleCancel = () =>{
        setEmail("");
        setPassword("");
        setErrors({email: "", password:""});
    }

    return(
        <React.Fragment>
           <Box 
           sx={{
            display : "flex",
            justifyContent:"center",
            alignItems:"center",
            height: "80vh"
             }} >
            <Paper sx={{p:4, width: 350}} >
                <Typography variant="h5" mb={2}> Sign In </Typography>

                <TextField onChange={(e)=>setEmail(e.target.value)} error={Boolean(errors.email)} helperText={errors.email} value={email} name="email" label="Email" margin="normal" fullWidth />
                <TextField onChange={(e)=>setPassword(e.target.value)} error={Boolean(errors.password)} helperText={errors.password} value={password} name="password" label="Password" type="password" margin="normal" fullWidth />
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