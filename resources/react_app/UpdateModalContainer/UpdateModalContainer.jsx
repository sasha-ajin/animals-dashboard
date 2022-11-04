import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

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

const UpdateModalContainer = ({ id }) => {
    return (
        <Box sx={style}>
            <div>update {id}</div>{" "}
        </Box>
    );
};

UpdateModalContainer.propTypes = {
    id: PropTypes.number.isRequired,
};

export default UpdateModalContainer;
