import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { getThemeProps } from "@material-ui/styles";

const styles = {
  banner: { margin: 20, padding: 20 }
};

function Banner(props) {
  return (
    <Grid>
      <Grid item xs={12}>
        <Paper className={props.classes.banner}>
          <Typography variant="h2" align="center">
            Google Books Search
          </Typography>
          <Typography variant="h5" align="center">
            Search for and Save Books of Interest
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Banner);
