import React, {useState} from "react";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";



export const SignUp =()=>{
    const Navigate  = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");

    const handleSubmit = () =>{
        console.log("Sign Up Data: ", {name, email, password});
    }

    const handleCancel = () =>{
        setName("");
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
                height: "90vh"
            }}
            >
                <Paper sx={{p:4 , width: 350}}>
                    <Typography variant="h5"> Sign Up Page </Typography>
                    <TextField onChange={(e)=>setName(e.target.value)} value={name} label="Enter Name" fullWidth margin="normal" />
                    <TextField onChange={(e)=>setEmail(e.target.value)} value={email} label="Enter Email" fullWidth margin="normal" type="email" />
                    <TextField onChange={(e)=>setPassword(e.target.value)} value={password} label="Create Password" fullWidth margin="normal" type="password" />

                    <Button onClick={handleSubmit} variant="contained" fullWidth sx={{ mt: 2 }}>Submit</Button>
                    <Button onClick={handleCancel} variant="outlined" fullWidth sx={{mt:2}}>Cancel</Button>

                    <Typography sx={{ mt: 2 }}>Already have an account? {" "}
                        <Link onClick={()=>Navigate("/signin")} sx={{cursor:"pointer"}}>Sign In</Link>

                    </Typography>
                </Paper>
            </Box>
        </React.Fragment>
    )
}