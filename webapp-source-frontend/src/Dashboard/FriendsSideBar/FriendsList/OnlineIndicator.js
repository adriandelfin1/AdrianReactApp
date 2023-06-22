import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const OnlineIndicator = () => {
    return (
        <Box 
            sx={{
                color: "#52C13E",
                display: "flex",
                alignItems: "center",
                position: "absolute",
                right: "5px",
            }}
        >
            <Typography 
                variant="caption" 
                display="block" 
            >
                On
            </Typography>
        </Box>
    );
};

export default OnlineIndicator;