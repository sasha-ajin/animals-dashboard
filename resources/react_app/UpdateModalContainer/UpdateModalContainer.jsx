import React, { useState } from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import {
    StyledTextField,
    StyledHalfButton,
    StyledGoButton,
    ButtonsContainer,
    ColorPicker,
} from "./styles";
import Typography from "@mui/material/Typography";
import { MuiColorInput } from "mui-color-input";

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

const UpdateModalContainer = ({ animal, updateAnimal, deleteAnimal }) => {
    const [animalBody, setAnimalBody] = useState(animal);
    const handleChangeColorPiker = (color) => {
        setAnimalBody({ ...animalBody, color: color });
    };
    return (
        <Box sx={style}>
            <Typography variant="h2">{animal.name}</Typography>
            <StyledTextField
                fullWidth
                label="name"
                id="fullWidth"
                defaultValue={animal.name}
                onChange={(e) =>
                    setAnimalBody({ ...animalBody, name: e.target.value })
                }
            />
            <StyledTextField
                fullWidth
                label="link"
                id="fullWidth"
                defaultValue={animal.link}
                onChange={(e) =>
                    setAnimalBody({ ...animalBody, link: e.target.value })
                }
            />
            <ColorPicker
                value={animalBody.color}
                onChange={handleChangeColorPiker}
            />
            <ButtonsContainer>
                <StyledHalfButton
                    variant="contained"
                    onClick={() => updateAnimal(animalBody)}
                    disabled={
                        animalBody.name.length !== 0 &&
                        animalBody.link.length !== 0 &&
                        animalBody.color.length !== 0
                            ? false
                            : true
                    }
                >
                    Update
                </StyledHalfButton>
                <StyledHalfButton
                    variant="outlined"
                    color="error"
                    onClick={() => deleteAnimal(animal.id)}
                >
                    Delete
                </StyledHalfButton>
                <StyledGoButton
                    variant="contained"
                    color="success"
                    size="large"
                    onClick={() => (window.location.href = animal.link)}
                >
                    Go
                </StyledGoButton>
                <button onClick={() => console.log(animalBody)}></button>
            </ButtonsContainer>
        </Box>
    );
};

UpdateModalContainer.propTypes = {
    deleteAnimal: PropTypes.func.isRequired,
    updateAnimal: PropTypes.func.isRequired,
    animal: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired,
    }),
};

export default UpdateModalContainer;
