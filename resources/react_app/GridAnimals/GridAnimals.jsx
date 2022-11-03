import React from "react";
import {
    Container,
    GridContainer,
    AnimalBox,
    Grid,
    StyledCheckedIcon,
    StyledAddCircleIcon
} from "./styles";
import PropTypes from "prop-types";

const GridAnimals = ({ animals }) => {
    return (
        <Container>
            <GridContainer>
                <Grid>
                    {[...Array(9)].map((e, i) => (
                        <StyledCheckedIcon
                            color="primary"
                            sx={{ fontSize: 160 }}
                        />
                    ))}
                </Grid>
            </GridContainer>
        </Container>
    );
};

GridAnimals.propTypes = {
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
