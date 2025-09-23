import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";



 export const Home = () =>{
    return(
        <React.Fragment>
            <Card>
                <CardContent>
                        <Grid size={12}>
                            <Typography variant="h2" sx={{textAlign: "center", fontFamily:"sans-serif", fontWeight: "bold"}}>Appu Remittance App</Typography>
                        </Grid>
                </CardContent>
            </Card>
            
        </React.Fragment>
    )
}