import React from "react";
import {
    Container,
    GridContainer,
    Grid,
    StyledCheckedIcon,
    StyledAddCircleIcon,
} from "./styles";
import PropTypes from "prop-types";

const GridAnimals = ({ animals, openUpdateModal, openCreateModal }) => {
    const getAnimalByNumber = (number) => {
        const animal = animals.find((animal) => animal.number == number);
        return animal;
    };
    let animalsBoxes = [];
    let circleKey = "0";
    for (let i = 1; i < 10; ++i) {
        const animal = getAnimalByNumber(i);
        if (animal !== undefined) {
            animalsBoxes.push(
                <StyledCheckedIcon
                    color="primary"
                    sx={{
                        height: 160,
                        color: animal.color,
                    }}
                    key={animal.id}
                    onClick={() => openUpdateModal(animal)}
                />
            );
        } else {
            animalsBoxes.push(
                <StyledAddCircleIcon
                    color="primary"
                    key={circleKey}
                    sx={{ height: 160 }}
                    onClick={() => openCreateModal(i)}
                />
            );
            circleKey += " ";
        }
    }
    return (
        <Container>
            <GridContainer>
                <Grid>{animalsBoxes}</Grid>
            </GridContainer>
        </Container>
    );
};

GridAnimals.propTypes = {
    openCreateModal: PropTypes.func,
    openUpdateModal: PropTypes.func,
    animals: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
            created_at: PropTypes.string.isRequired,
            updated_at: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default GridAnimals;
