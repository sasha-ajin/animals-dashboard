import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MuiColorInput } from "mui-color-input";

export const StyledTextField = styled(TextField)`
    margin-top: 15px !important;
`;

export const StyledCreateButton = styled(Button)`
    width: 100%;
    margin-top: 10px !important;
    height: 70px;
`;

export const ButtonContainer = styled.div`
    margin-top: 20px;
`;

export const ColorPicker = styled(MuiColorInput)`
    width: 100%;
    margin-top: 5px !important;
`;
