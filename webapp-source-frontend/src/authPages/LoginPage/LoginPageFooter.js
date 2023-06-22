import React from "react";
import CustomPrimaryButtom from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const  getFormNotValidMessage = () => {
    return "Enter correct e-mail address and password should contain 6 to 12 characters"
};

const getFormValidMessage = () => {
    return "Press to log in";
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
    
    const navigate = useNavigate();

    const handlePushToRegisterPage = () => {
        navigate("/register");
    };

    return (
        <> 
            <Tooltip
                title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
            >
            <div>
                    <CustomPrimaryButtom
                        label="Log in"
                        additionalStyles={{ marginTop: "30px"}}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                </div>
            </Tooltip>
            <RedirectInfo 
                redirectText="Create an account"
                additionalStyles={{ marginTop: "5px" }}
                RedirectHandler={handlePushToRegisterPage}
            />
        </>   
    );
}

export default LoginPageFooter;