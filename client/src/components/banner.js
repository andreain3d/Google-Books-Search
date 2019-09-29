import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  banner: {
    minHeight: "30vh",
    textShadow: "1px 1px #000000",
    color: "#ffffff"
  },
  paper: {
    margin: 20,
    padding: 20,
    background: "url('./images/books-bg.jpg')"
  }
};

function Banner(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={props.classes.paper}>
          <Grid
            container
            className={props.classes.banner}
            alignItems="flex-end"
          >
            <Grid item xs={12}>
              <Typography variant="h2" align="center">
                Google Books Search
              </Typography>
              <Typography variant="h5" align="center">
                Search for and Save Books of Interest
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Banner);
