import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { getSuggestedRate } from "./constant";
import {useSelector} from "react-redux"


export const SuggestedRate = () =>{
    const Selbyweight = useSelector((state)=>state.transportReducer.byweight);
    const Selbycbm = useSelector((state)=>state.transportReducer.bycbm);

    const Suggested = getSuggestedRate(Selbyweight, Selbycbm);

    return(
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            <Card sx={{width:400, p:2, boxShadow:3, borderRadius:2}}>
                <CardContent>
                    <Typography variant="h4" sx={{textAlign:"center"}}>
                        {Suggested}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}