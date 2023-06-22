import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./ChosenOptionLabel";
import { Typography } from "@mui/material";
import { useSelector } from 'react-redux';

const MainContainer = styled("div")({
    position: "absolute",
    right: "0",
    top: "0",
    height: "48px",
    borderBottom: " 1px solid black",
    backgroundColor: "#36393f",
    width: "calc(100% - 326px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px"
})

const AppBar = () => {
    const username = useSelector(state => state.auth.userDetails?.username);
    if (!username) {
        return <p>Loading...</p>;
    };
    return (
        <MainContainer>
            <Typography  variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            {username}
            </Typography>
            <ChosenOptionLabel />
            <DropdownMenu />
        </MainContainer>
    );
};

export default AppBar;