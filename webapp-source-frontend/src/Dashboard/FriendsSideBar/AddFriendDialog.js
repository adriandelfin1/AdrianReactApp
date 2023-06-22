import React, { useState, useEffect} from "react";
import { validateMail } from "../../shared/utils/validators"
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import InputWithLabel from "../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/friendsActions";

const AddFriendDialog = ({ 
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => {}
 }) => {
    const [mail, setMail] = useState("");
    const [isFormValid, setIsFormValid] = useState("");

    const handleSendInvitation = () => {
        sendFriendInvitation({
            targetMailAddress: mail,
        }, 
            handleCloseDialog
        );
    };

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail("");
    };
    
    useEffect(() => {
        setIsFormValid(validateMail(mail))
    }, [mail, setIsFormValid]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                        Invite a Friend
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter e-mail address of friend that you would like to invite
                    </DialogContentText>
                        <InputWithLabel 
                            label="Mail"
                            type="text"
                            value={mail}
                            setValue={setMail}
                            placeholder="Enter e-mail address"
                        />
                </DialogContent>
                <DialogActions> 
                    <CustomPrimaryButton 
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        label="Send"
                        additionalStyles={{
                            marginLeft: "15px",
                            marginRight: "15px",
                            marginBottom: "10px",
                        }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);