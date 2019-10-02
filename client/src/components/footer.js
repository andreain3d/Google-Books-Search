import React from "react";
import { AppBar, Typography, withStyles } from "@material-ui/core";

const styles = {
  appBar: {
    top: "auto",
    bottom: 0
  }
};

function Footer(props) {
  return (
    <AppBar className={props.classes.appBar} position="fixed">
      <Typography variant="subtitle1">React Google Books Search</Typography>
    </AppBar>
  );
}

export default withStyles(styles)(Footer);
