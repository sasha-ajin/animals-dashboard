import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MuiColorInput } from "mui-color-input";

export const Container = styled.div`
    width: 90%;
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledTextField = styled(TextField)`
    margin-bottom: 15px !important;
`;

export const StyledHalfButton = styled(Button)`
    width: 50%;
`;

export const StyledGoButton = styled(Button)`
    width: 100%;
    margin-top: 10px !important;
    height: 70px;
`;

export const ButtonsContainer = styled.div`
    margin-top: 20px;
`;

export const ColorPicker = styled(MuiColorInput)`
  width: 100%;
  margin-top: 5px !important;
`;