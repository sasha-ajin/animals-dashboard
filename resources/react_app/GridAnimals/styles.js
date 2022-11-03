import styled from "styled-components";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

export const Container = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
`;

export const GridContainer = styled.div`
    width: 80%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const AnimalBox = styled.div`
    margin: 5px;
    flex: 1 1 30%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const StyledCheckedIcon = styled(CheckBoxOutlinedIcon)`
    margin: 5px;
    flex: 1 1 30%;
    width: 100% @media (max-width: 768px) {
        width: 100%;
    }
    path {
        width: 60px;
        height: 60px;
    }
`;

export const StyledAddCircleIcon = styled(AddCircleRoundedIcon)`
    margin: 5px;
    flex: 1 1 30%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
