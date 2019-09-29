import React from "react";
import Appbar from "@material-ui/core/Appbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  appBar: {
    top: "auto",
    bottom: 0
  }
};

function Footer(props) {
  return (
    <Appbar className={props.classes.appBar} position="fixed">
      <Typography variant="subtitle1">React Google Books Search</Typography>
    </Appbar>
  );
}

export default withStyles(styles)(Footer);
