import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
    return (
        <>
            <Typography variant="h5" sx={{ color: "white" }}>
                Welcome back!
            </Typography>
            <Typography sx={{ color: "#b9bbbe" }}>
                Please sign in with your credentials.
            </Typography>
        </>
    );
};

export default LoginPageHeader;