import React, { useState } from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import {
    StyledTextField,
    StyledCreateButton,
    ButtonContainer,
    ColorPicker,
} from "./styles";
import Typography from "@mui/material/Typography";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
};

const CreateModalContainer = ({ number, createAnimal }) => {
    const [animalBody, setAnimalBody] = useState({
        name: "",
        color: "rgb(26, 118, 210)",
        link: "",
        number: number,
    });
    const handleChangeColorPiker = (color) => {
        setAnimalBody({ ...animalBody, color: color });
    };
    return (
        <Box sx={style}>
            <Typography variant="h3">Create the Animal</Typography>
            <StyledTextField
                fullWidth
                label="name"
                id="fullWidth"
                onChange={(e) =>
                    setAnimalBody({ ...animalBody, name: e.target.value })
                }
            />
            <StyledTextField
                fullWidth
                label="link"
                id="fullWidth"
                onChange={(e) =>
                    setAnimalBody({ ...animalBody, link: e.target.value })
                }
            />
            <ColorPicker
                value={animalBody.color}
                onChange={handleChangeColorPiker}
            />
            <ButtonContainer>
                <StyledCreateButton
                    variant="contained"
                    size="large"
                    onClick={() => createAnimal(animalBody)}
                    disabled={
                        animalBody.name.length !== 0 &&
                        animalBody.link.length !== 0 &&
                        animalBody.color.length !== 0
                            ? false
                            : true
                    }
                >
                    Create
                </StyledCreateButton>
            </ButtonContainer>
        </Box>
    );
};
CreateModalContainer.propTypes = {
    number: PropTypes.number.isRequired,
    createAnimal: PropTypes.func.isRequired,
};

export default CreateModalContainer;
