import React from "react";
import CustomPrimaryButtom from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const  getFormNotValidMessage = () => {
    return "Username should contain 3 to 12 characters and password should contain 6 to 12 characters. Provide correct e-mail address"
};

const getFormValidMessage = () => {
    return "Press to register";
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
    
    const navigate = useNavigate();

    const handlePushToLoginPage = () => {
        navigate("/login");
    };

    return (
        <> 
            <Tooltip
                title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
            >
            <div>
                    <CustomPrimaryButtom
                        label="Register"
                        additionalStyles={{ marginTop: "30px"}}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />
                </div>
            </Tooltip>
            <RedirectInfo 
                redirectText="Already have an account"
                additionalStyles={{ marginTop: "5px" }}
                RedirectHandler={handlePushToLoginPage}
            />
        </>   
    );
}

export default RegisterPageFooter;