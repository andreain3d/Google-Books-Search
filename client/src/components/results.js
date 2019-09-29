import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { getThemeProps } from "@material-ui/styles";

const styles = {
  results: { margin: 20, padding: 20 }
};

class Results extends Component {
  render(props) {
    return (
      <Grid>
        <Grid item xs={12}>
          <Paper className={this.props.classes.results}>
            <Typography variant="h6">Results</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Results);
