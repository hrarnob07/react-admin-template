import React from "react";
import PropTypes from "prop-types";

import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { availableThemes } from "../theme";

const style = () => ({
  BackdropRoot: {
    backgroundColor: "transparent"
  },
  selectThemeBtn: {
    backgroundColor: "rgb(250, 250, 250)",
    color: "rgba(0, 0, 0, 0.87)",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    height: "40px",
    margin: "16px 0",
    cursor: "pointer",
    "&.hover": {
      boxShadow: "inset 0 0 0 20px rgba(0,0,0,.24)"
    }
  }
});

const RightDrawer = ({ rightDrawerOpen, handleChangeRightDrawer, handleChangeTheme, classes }) => (
  <Drawer
    variant="temporary"
    anchor={"right"}
    open={rightDrawerOpen}
    onClose={handleChangeRightDrawer}
    // use transparent background
  >
  </Drawer>
);

RightDrawer.propTypes = {
  rightDrawerOpen: PropTypes.bool,
  handleChangeRightDrawer: PropTypes.func,
  handleChangeTheme: PropTypes.func,
  classes: PropTypes.object
};

export default withStyles(style)(RightDrawer);
