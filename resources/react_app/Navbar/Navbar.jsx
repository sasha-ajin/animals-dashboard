import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar(props) {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h4" component="div">
                    Shkolo
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
