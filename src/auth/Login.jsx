import React from "react";
import { Button, Box, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const Navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
       }}
    >
      <Typography variant="h4" mb={3}>
        Welcome In AppuProImports
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => Navigate("/signin")}>
          Sign In
        </Button>
        <Button variant="outlined" onClick={() => Navigate("/signup")}>
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
};








// import React, { useState } from "react";
// import { Box, TextField, Button, Typography, Paper, Grid,
// } from "@mui/material";

// export const Login = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const [signInData, setSignInData] = useState({
//     email: "",
//     password: "",
//   });

//   const [signUpData, setSignUpData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSignInChange = (e) => {
//     setSignInData({ ...signInData, [e.target.name]: e.target.value });
//   };

//   const handleSignUpChange = (e) => {
//     setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
//   };

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     console.log("Sign In Data:", signInData);
//     alert("Sign In Successful!");
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     console.log("Sign Up Data:", signUpData);
//     alert("Account Created!");
//   };

//   return (
//     <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh", backgroundColor: "#f0f2f5" }} >
//       <Paper elevation={4} sx={{ padding: 4, width: 400, borderRadius: 3, textAlign: "center" }} >

//         <Typography variant="h5" mb={2}> {isSignUp ? "Sign Up" : "Sign In"} </Typography>

//         {!isSignUp ? (
//           <Box component="form" onSubmit={handleSignIn}>
//             <TextField label="Email" name="email" type="email" fullWidth required margin="normal" value={signInData.email}
//               onChange={handleSignInChange} />

//             <TextField label="Password" name="password" type="password" fullWidth required margin="normal"
//               value={signInData.password} onChange={handleSignInChange} />

//             <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}> Sign In </Button>
//           </Box>
//                 ) : (
//           <Box component="form" onSubmit={handleSignUp}>
//             <TextField label="Full Name" name="name" fullWidth required  value={signUpData.name}
//               onChange={handleSignUpChange} />

//             <TextField label="Email" name="email" type="email" fullWidth required margin="normal" value={signUpData.email}
//               onChange={handleSignUpChange}
//             />

//             <TextField label="Password" name="password" type="password" fullWidth required margin="normal"
//               value={signUpData.password} onChange={handleSignUpChange} />

//             <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//               Sign Up
//             </Button>
//           </Box>
//         )}

//         <Typography mt={2}> {isSignUp ? "Already have an account?" : "Don't have an account?"} {" "} 
           
//             <Typography component="span" sx={{ color: "primary.main", cursor: "pointer", fontWeight: "bold" }}
//             onClick={() => setIsSignUp(!isSignUp)} >
//                 {isSignUp ? "Sign In" : "Sign Up"} </Typography>

//         </Typography>
//       </Paper>
//     </Grid>
//   );
// };