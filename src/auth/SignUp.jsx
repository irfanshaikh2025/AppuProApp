import React, {useState} from "react";
import { Box, Paper, TextField, Button, Typography, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const SignUp =()=>{
    const Navigate  = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");

    // Error state
    const [errors, setErrors] = useState({name: "", email: "", password: ""});

    const validate = () =>{
        let valid = true;
        let newErrors = {name: "", email: "", password: ""};

        // Name validaion
        if(!name.trim()){
            newErrors.name = " Name is required";
            valid = false;
        } else if(name.length < 3){
            newErrors.name = "Name must be at leasr 3 charactors";
            valid = false
        }
        // Email validation
        if(!email.trim()){
            newErrors.email = "Email is required";
            valid = false;
        }else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)){
                newErrors.email = "Enter a valid email";
                valid = false;
            }
        }
        

        // Password validation
        if(!password.trim()){
            newErrors.password = "Password is required";
            valid = false;
        }else if(password.length < 6){
            newErrors.password = "Password must be at least 6 characters";
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    }

    const handleSubmit = () =>{
        if(!validate()) return;
        console.log("Sign Up Data: ", {name, email, password});
    }

    const handleCancel = () =>{
        setName("");
        setEmail("");
        setPassword("");
    }

    return(
        <React.Fragment>
            <Box sx={{ display : "flex", justifyContent:"center", alignItems:"center", height: "90vh" }} >
                <Paper sx={{p:2 , width: 350}}>
                    
                    <Typography variant="h5">Sign Up Page</Typography>
                    <TextField onChange={(e)=>setName(e.target.value)} error={Boolean(errors.name)} helperText={errors.name} value={name} label="Enter Name" fullWidth margin="dense" />
                    <TextField onChange={(e)=>setEmail(e.target.value)} error={Boolean(errors.email)} helperText={errors.email} value={email} label="Enter Email" fullWidth margin="dense" type="email" />
                    <TextField onChange={(e)=>setPassword(e.target.value)} error={Boolean(errors.password)} helperText={errors.password} value={password} label="Create Password" fullWidth margin="dense" type="password" />
                        
                    <Grid container spacing={2} sx={{mt:1}}>
                      <Grid size={6}>
                        <Button onClick={handleCancel} variant="outlined" fullWidth sx={{mt:2}}>Cancel</Button>
                      </Grid>
                         <Grid size={6}>
                         <Button onClick={handleSubmit} variant="contained" fullWidth sx={{ mt: 2 }}>Submit</Button>
                         </Grid>
                    </Grid>

                    <Typography sx={{ mt: 2 }}>Already have an account? {" "}
                        <Link onClick={()=>Navigate("/signin")} sx={{cursor:"pointer"}}>Sign In</Link>
                        {/* <Button onClick={()=>Navigate(-1)} variant="contained" size="small" sx={{float:"right", height:"30px"}}>Back</Button> */}
                    </Typography>

                </Paper>
            </Box>
        </React.Fragment>
    )
}