import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from 'react-redux';

const Wrapper = styled("div")({
    flexGrow: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const WelcomeMessage = () => {
    const username = useSelector(state => state.auth.userDetails?.username);
    if (!username) {
        return <p>Loading...</p>;
    };
    return (
        <Wrapper>
            <Typography variant="h6" sx={{ color: "white" }}>
            Welcome, {username}! Choose one of your friends to have a conversation with
            </Typography>
        </Wrapper>
    );
};

export default WelcomeMessage;